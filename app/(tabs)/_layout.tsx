import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Icons } from '@/constants/icons';

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
        tabBarStyle: {
          marginTop: 12,
        },

        headerShown: false,
        animation: 'shift',
        tabBarItemStyle: {
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
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
          title: 'Analytics',
          tabBarIcon: ({ color }) => <Icons.Analytics color={color} />,
        }}
        name="analysis"
      />

      <Tabs.Screen
        name="addtransaction"
        options={{
          title: 'Record',
          tabBarIcon: ({ color, focused }) => (
            <View
              className=" p-2 rounded-md"
              style={{ backgroundColor: focused ? color : '#64748b' }}
            >
              <Icons.Add color="#fff" width={15} height={15} strokeWidth={3.5} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Categories',
          tabBarIcon: ({ color }) => <Icons.Account color={color} />,
        }}
        name="account"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Budjet',
          tabBarIcon: ({ color }) => <Icons.Plan color={color} />,
        }}
        name="plan"
      />
    </Tabs>
  );
};

export default TabLayout;
