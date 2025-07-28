import '@azure/core-asynciterator-polyfill';
import { StatusBar } from 'react-native';
import { Slot, useRouter, useSegments } from 'expo-router';
import './globals.css';
import { PowerSyncProvider } from '@/powersync/PowersyncProvider';
import { SystemProvider } from '@/powersync/SystemProvider';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { useSystem } from '@/powersync/system';

export default function RootLayoutNav() {
  // const [session, setSession] = useState<Session | null>(null);

  // const [initialized, setInitialized] = useState<boolean>(false);

  // const segments = useSegments();
  // const router = useRouter();

  // const { supabaseConnector } = useSystem();
  // const system = useSystem();
  // useEffect(() => {
  //   const { data } = supabaseConnector.client.auth.onAuthStateChange(async (event, session) => {
  //     console.log('supabase.auth.onauthChange', event, session);
  //     setSession(session);
  //     setInitialized(false);
  //   });
  //   return data.subscription.unsubscribe();
  // }, []);

  // useEffect(() => {
  //   if (!initialized) return;

  //   // check if the path/url is in the (tabs)group
  //   const inTabsGroup = segments[0] === '(tabs)';

  //   if (session && !inTabsGroup) {
  //     // redirect authenticated users to the list page
  //     router.replace('/(tabs)');
  //   } else if (!session) {
  //     // redirect auth users to login page
  //     router.replace('/');
  //   }
  // }, [session, initialized]);
  return (
    <SystemProvider>
      <PowerSyncProvider>
        <StatusBar hidden={true} />
        <Slot />
      </PowerSyncProvider>
    </SystemProvider>
  );
}
