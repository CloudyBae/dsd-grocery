import { makeRedirectUri } from 'expo-auth-session';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { supabase } from '../lib/supabase';
import ThirdPartySignIn from '../components/ThirdPartySignIn';

WebBrowser.maybeCompleteAuthSession();
const redirectTo = makeRedirectUri();
console.log({ redirectTo });

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
  console.log('session', data.session);
  return data.session;
};

const performOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? '',
    redirectTo
  );

  if (res.type === 'success') {
    const { url } = res;
    const session = await createSessionFromUrl(url);
    try {
      const response = await fetch('http://192.168.254.14:8081/auth/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: 'test',
        }),
      });

      // Log the response directly
      console.log('Response status:', response.status);
      const responseBody = await response.text();
      console.log('Response body:', responseBody);

      const responseData = JSON.parse(responseBody);
      console.log('Parsed response data:', responseData);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  }
};

const Auth = () => {
  const url = Linking.useURL();
  console.log({ url });
  if (url) createSessionFromUrl(url);

  return (
    <>
      <ThirdPartySignIn
        title='Google'
        textColor='gray'
        icon='google'
        iconColor='#121212'
        backgroundColor='#fff'
        onPress={performOAuth}
      />
    </>
  );
};

export default Auth;
