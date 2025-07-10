import { Platform } from 'react-native';

export function createShadow(
  elevation = 2,
  shadowColor = '#000',
  shadowOpacity = 0.2,
  shadowRadius = elevation * 0.5,
  shadowOffset = { height: elevation * 0.5, width: 0 }
) {
  return Platform.select({
    ios: {
      shadowColor,
      shadowOpacity,
      shadowRadius,
      shadowOffset,
    },
    android: {
      elevation,
    },
  });
}
