import '@azure/core-asynciterator-polyfill';
import { StatusBar, Text, View } from 'react-native';
import { Slot, useRouter, useSegments } from 'expo-router';
import './globals.css';
import { PowerSyncProvider } from '@/powersync/PowersyncProvider';
import { SystemProvider } from '@/powersync/SystemProvider';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { useSystem } from '@/powersync/system';
import { useFonts } from 'expo-font';

const InitialLayout = () => {
  const [session, setSession] = useState<Session | null>(null);

  const [initialized, setInitialized] = useState<boolean>(false);

  const segments = useSegments();
  const router = useRouter();

  const { supabaseConnector } = useSystem();

  useEffect(() => {
    const { data } = supabaseConnector.client.auth.onAuthStateChange(async (event, session) => {
      // console.log('supabase.auth.onauthChange', event, session);
      setSession(session);
      setInitialized(true);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!initialized) return;
    // check if the path/url is in the (tabs)group
    const inTabsGroup = segments[0] === '(tabs)';
    console.log('initialized');

    if (session && !inTabsGroup) {
      // redirect authenticated users to the list page
      router.replace('/(tabs)');
    } else if (!session) {
      // redirect auth users to login page
      router.replace('/');
    }
  }, [session, initialized]);
  return (
    <PowerSyncProvider>
      <StatusBar hidden={true} />
      <Slot />
    </PowerSyncProvider>
  );
};

export default function RootLayoutNav() {
  let [fontsLoaded] = useFonts({
    'Inter-Var': require('../assets/fonts/InterVar-Regular.ttf'),
    'Inter-Var-Bold': require('../assets/fonts/InterVar-Bold.ttf'),
    'Inter-Var-Medium': require('../assets/fonts/InterVar-Medium.ttf'),
    'Inter-Var-SemiBold': require('../assets/fonts/InterVar-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SystemProvider>
      <InitialLayout />
    </SystemProvider>
  );
}
