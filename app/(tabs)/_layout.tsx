import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import DynamicIcon from '../components/ui/DynamicIcon';

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
          tabBarIcon: ({ color }) => (
            <DynamicIcon color={color} width={20} height={20} strokeWidth={2.5} name="Home" />
          ),
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Analytics',
          tabBarIcon: ({ color }) => (
            <DynamicIcon color={color} width={20} height={20} strokeWidth={2.5} name="Analytics" />
          ),
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
              <DynamicIcon color="#fff" width={17} height={17} strokeWidth={3} name="Add" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Categories',
          tabBarIcon: ({ color }) => (
            <DynamicIcon color={color} width={20} height={20} strokeWidth={2.5} name="Account" />
          ),
        }}
        name="categories"
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Budjet',
          tabBarIcon: ({ color }) => (
            <DynamicIcon color={color} width={20} height={20} strokeWidth={2.5} name="Plan" />
          ),
        }}
        name="plan"
      />
    </Tabs>
  );
};

export default TabLayout;
