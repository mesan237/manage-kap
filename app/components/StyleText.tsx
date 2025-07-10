import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp, TextProps } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/helpers/theme';

type HeadingProps = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

export const Heading = ({ children, style, className, ...props }: HeadingProps) => (
  <Text style={[styles.heading, style]} className={className} {...props}>
    {children}
  </Text>
);
export const Subheading = ({ children, style, className, ...props }: HeadingProps) => (
  <Text style={[styles.subheading, style]} className={className} {...props}>
    {children}
  </Text>
);
export const BodyText = ({ children, style, className, ...props }: HeadingProps) => (
  <Text style={[styles.body, style]} className={className} {...props}>
    {children}
  </Text>
);

export const InfoText = ({ children, style, className, ...props }: HeadingProps) => (
  <Text style={[styles.info, style]} className={className} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter-Var-Bold',
    fontSize: FONT_SIZES.lg,
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  subheading: {
    fontFamily: 'Inter-Var-SemiBold',
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  body: {
    fontFamily: 'Inter-Var-SemiBold',
    fontWeight: FONT_WEIGHTS.semiBold,
    fontSize: FONT_SIZES.sm,
    color: COLORS.text,
  },

  info: {
    fontFamily: 'Inter-Var-Medium',
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
  },
});
