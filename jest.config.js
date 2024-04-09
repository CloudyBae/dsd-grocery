module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
      moduleNameMapper: {
        '^expo-font$': './__mocks__/expo-font.js',
      },
  };
  