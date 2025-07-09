import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Icons } from '@/constants/icons';
import { SpecialTabButton } from '../components/SpecialTabButton';

const styles = {
  button: {
    position: 'absolute',
    top: -10,
    left: '50%',
    transform: [{ translateX: -20 }],
    backgroundColor: '#3498DB',
    borderRadius: 50,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
  },
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3498DB',
        tabBarInactiveTintColor: '#95A5A6',
        // tabBarStyle: {
        //   // backgroundColor: '#FFFFFF',
        //   borderTopWidth: 1,
        //   elevation: 0,
        //   shadowOpacity: 0,
        // },
        headerShown: false,
        animation: 'shift',
      }}
    >
      <Tabs.Screen
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Icons.Home color={color} />,
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Analysis',
          tabBarIcon: ({ color }) => <Icons.Analytics color={color} />,
        }}
        name="analysis"
      />

      <Tabs.Screen
        name="custom"
        options={{
          title: 'Custom',
          tabBarLabel: 'Custom',
          tabBarButton: ({}) => (
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.85}
              onPress={() => {
                console.log('Custom tab pressed');
              }}
            >
              <Icons.Add color="#fff" width={15} height={15} strokeWidth={3.5} />
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log('tabPress');
          },
        }}
      />

      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Account',
          tabBarIcon: ({ color }) => <Icons.Account color={color} />,
        }}
        name="account"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Plan',
          tabBarIcon: ({ color }) => <Icons.Plan color={color} />,
        }}
        name="plan"
      />
    </Tabs>
  );
};

export default TabLayout;
