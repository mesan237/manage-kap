import { StatusBar } from 'react-native';
import { Slot, Stack } from 'expo-router';
import './globals.css';

export default function RootLayoutNav() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="transactions"
          options={{ headerShown: false, title: 'All transactions' }}
        />
      </Stack>
    </>
  );
}
