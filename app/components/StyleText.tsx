import React from 'react';
import { Text, TextStyle, StyleProp, TextProps } from 'react-native';

type HeadingProps = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

export const Heading = ({ children, style = {}, className = '', ...props }: HeadingProps) => (
  <Text style={style} className={`text-lg text-white font-inter-bold ${className}`} {...props}>
    {children}
  </Text>
);
export const Subheading = ({ children, style = {}, className = '', ...props }: HeadingProps) => (
  <Text
    style={style}
    className={`text-md mb-sm font-inter-semibold tracking-tight ${className}`}
    {...props}
  >
    {children}
  </Text>
);
export const BodyText = ({ children, style = {}, className = '', ...props }: HeadingProps) => (
  <Text
    style={style}
    className={`text-sm text font-inter-semibold tracking-tight ${className}`}
    {...props}
  >
    {children}
  </Text>
);

export const InfoText = ({ children, style = {}, className = '', ...props }: HeadingProps) => (
  <Text
    style={style}
    className={`text-xs text-[#6b7280] font-inter-semibold ${className}`}
    {...props}
  >
    {children}
  </Text>
);
