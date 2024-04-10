module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        "\\.pnp\\.[^\\\/]+$",
        "\\.png$",
        "\\.jpg$",
        "\\.ttf$"
      ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
      
  };
  