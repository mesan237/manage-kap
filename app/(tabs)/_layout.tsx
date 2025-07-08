import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from './../../constants/icons';

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <Image source={{ uri: icons.home }} className="size-6" />,
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Analysis',
        }}
        name="analysis"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Account',
        }}
        name="account"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Goals',
        }}
        name="goals"
      />
    </Tabs>
  );
};

export default TabLayout;
