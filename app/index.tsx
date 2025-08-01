import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Session } from '@supabase/supabase-js';
import { useSystem } from '@/powersync/system';
import Auth from '@/components/Auth';
import { router } from 'expo-router';

export default function App() {
  const { supabaseConnector } = useSystem();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseConnector.client.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseConnector.client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <View>
      <Auth />
      {session && <Text>session</Text>}
    </View>
  );
}
