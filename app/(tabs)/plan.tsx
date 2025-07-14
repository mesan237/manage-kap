import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calculator from '../components/Calculator';

export default function Planning() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', paddingTop: 20 }}
    >
      <Calculator />
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
