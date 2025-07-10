import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp, TextProps } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/helpers/theme';

type HeadingProps = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

export const Heading = ({ children, style, ...props }: HeadingProps) => (
  <Text style={[styles.heading, style]} {...props}>
    {children}
  </Text>
);
export const Subheading = ({ children, style, ...props }: HeadingProps) => (
  <Text style={[styles.subheading, style]} {...props}>
    {children}
  </Text>
);
export const BodyText = ({ children, style, ...props }: HeadingProps) => (
  <Text style={[styles.body, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter_400Regular',
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  subheading: {
    fontFamily: 'Inter_900Black',
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  body: {
    fontFamily: 'Inter_900Black',
    fontSize: FONT_SIZES.md,
    color: COLORS.textLight,
  },
});
