import '@azure/core-asynciterator-polyfill';
import { StatusBar } from 'react-native';
import { Slot } from 'expo-router';
import './globals.css';
import { PowerSyncProvider } from '@/powersync/PowersyncProvider';

export default function RootLayoutNav() {
  return (
    <PowerSyncProvider>
      <StatusBar hidden={true} />
      <Slot />
    </PowerSyncProvider>
  );
}
