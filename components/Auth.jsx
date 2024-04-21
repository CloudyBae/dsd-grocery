import { Button } from 'react-native';
import { makeRedirectUri } from 'expo-auth-session';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { supabase } from '../lib/supabase';


WebBrowser.maybeCompleteAuthSession(); // required for web only
const redirectTo = makeRedirectUri();
console.log({ redirectTo })

const createSessionFromUrl = async (url) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  console.log('session', data.session)
  return data.session;
};

const performOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });
  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? '', 
    redirectTo
  );

  if (res.type === 'success') {
    const { url } = res;
    await createSessionFromUrl(url);
    // navigation.navigate('Home');
  }
};

const sendMagicLink = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: 'example@email.com',
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  if (error) throw error;
  // Email sent.
};

export default function Auth() {
  // Handle linking into app from email app.
  const url = Linking.useURL();
  console.log({ url })
  if (url) createSessionFromUrl(url);

  return (
    <>
      <Button onPress={performOAuth} title="Sign in with Google" />
      <Button onPress={sendMagicLink} title="Send Magic Link" />
    </>
  );
}
