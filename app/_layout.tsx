import '@azure/core-asynciterator-polyfill';
import { StatusBar } from 'react-native';
import { Slot } from 'expo-router';
import './globals.css';
import { PowerSyncProvider } from '@/powersync/PowersyncProvider';
import { useEffect } from 'react';
// import { useSystem } from '@/powersync/system';
import { SystemProvider } from '@/powersync/SystemProvider';

export default function RootLayoutNav() {
  // const system = useSystem();

  // useEffect(() => {
  //   system.init(); // Initialize system when component mounts
  // }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <Slot />
    </>
  );
}
