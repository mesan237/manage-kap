import '@azure/core-asynciterator-polyfill';
import { StatusBar } from 'react-native';
import { Slot } from 'expo-router';
import './globals.css';
import { PowerSyncProvider } from '@/powersync/PowersyncProvider';
import { SystemProvider } from '@/powersync/SystemProvider';

export default function RootLayoutNav() {
  return (
    <SystemProvider>
      <PowerSyncProvider>
        <StatusBar hidden={true} />
        <Slot />
      </PowerSyncProvider>
    </SystemProvider>
  );
}
