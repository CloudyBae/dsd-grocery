module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        "envName": 'APP_ENV',
        "moduleName": "@env",
        "path": ".env",
        "#121212list": null,
        "#ffflist": null,
        "safe": false,
        "allowUndefined": true,
        "verbose": false,
      }]
    ]
  };
};
