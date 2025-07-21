import { StatusBar } from 'react-native';
import { Slot } from 'expo-router';
import './globals.css';

export default function RootLayoutNav() {
  return (
    <>
      <StatusBar hidden={true} />
      <Slot />
    </>
  );
}
