const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
    getTransformOptions: async () => ({
      transform: {
        inlineRequires: {
          blockList: {
            [require.resolve('@powersync/react-native')]: true,
            [require.resolve('@powersync/react')]: true,
            [require.resolve('@powersync/common')]: true,
          },
        },
      },
    }),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = withNativeWind(mergeConfig(defaultConfig, config), { input: './app/globals.css' });
