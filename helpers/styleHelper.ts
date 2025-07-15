import { Platform, StyleSheet } from 'react-native';

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

export const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'Inter-Var-Bold',
  },
  textRegular: {
    fontFamily: 'Inter-Var-Regular',
  },
  textMedium: {
    fontFamily: 'Inter-Var-Medium',
  },
  textSemibold: {
    fontFamily: 'Inter-Var-Semibold',
  },
});
