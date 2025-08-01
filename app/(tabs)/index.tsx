import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import { createShadow } from '@/helpers/styleHelper';
import { BodyText, Heading, InfoText, Subheading } from '@/components/StyleText';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomSelectDropdown from '@/components/CustomSelectDropdown';
import DynamicIcon from '@/components/ui/DynamicIcon';
import { router } from 'expo-router';
import HistoryTransaction from '@/components/HistoryTransaction';

const Index = () => {
  // let [fontsLoaded] = useFonts({
  //   'Inter-Var': require('../../assets/fonts/InterVar-Regular.ttf'),
  //   'Inter-Var-Bold': require('../../assets/fonts/InterVar-Bold.ttf'),
  //   'Inter-Var-Medium': require('../../assets/fonts/InterVar-Medium.ttf'),
  //   'Inter-Var-SemiBold': require('../../assets/fonts/InterVar-SemiBold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView className="bg-[#f9f9f9]" edges={['top', 'left', 'right']}>
      <View className="flex flex-row justify-between items-center m-5 mb-0 rounded-md">
        <View className="flex justify-center gap-0.5">
          <InfoText className="  capitalize">Welcome Back, </InfoText>
          <BodyText className=" ">Abed </BodyText>
        </View>
        <View className="">
          <DynamicIcon
            color="#333333"
            width={15}
            height={15}
            strokeWidth={2.5}
            name="Notification"
          />
        </View>
      </View>

      <View
        style={[
          {
            borderRadius: 12,
            padding: 16,
            // ...createShadow(2),
            // backgroundColor: '#1e293b',
          },
        ]}
        className="mx-5 mt-5 overflow-hidden bg-blue-400"
      >
        <View className="px-1 py-2 ">
          <Subheading className="text-left text-white">Balance</Subheading>
          <BodyText className="text-white text-xl font-inter-bold tracking-wide text-left">
            400 000<Text className="text-[10px]"> FCFA</Text>
          </BodyText>
          <View className="flex flex-row justify-between items-center ">
            <View className="flex flex-col">
              <View className="flex flex-row items-center gap-2 mb-1">
                <InfoText className="text-green-300 text-md">Income</InfoText>
                <View className="bg-green-400/25 rounded-full p-1">
                  <DynamicIcon
                    color="#86efac"
                    height={8}
                    width={8}
                    strokeWidth={4}
                    name="MoveDown"
                  />
                </View>
              </View>
              <BodyText className="text-white text-sm font-inter-bold tracking-wide">
                600 000<Text className="text-[10px] "> FCFA</Text>
              </BodyText>
            </View>
            <View className="flex flex-col">
              <View className="flex flex-row items-center gap-2 mb-1">
                <InfoText className="text-red-300">Expenses</InfoText>
                <View className="bg-red-400/25 rounded-full p-1">
                  <DynamicIcon height={8} width={8} color="#fca5a5" strokeWidth={4} name="MoveUp" />
                </View>
              </View>
              <BodyText className="text-white text-sm font-inter-bold tracking-wide">
                200 000<Text className="text-[10px]"> FCFA</Text>
              </BodyText>
            </View>
          </View>
        </View>
      </View>

      <ScrollView>
        <View className="mx-5 mt-5 rounded-[2rem]">
          <View className="flex flex-row justify-between items-center">
            <Subheading>Recent Transactions</Subheading>
            <TouchableOpacity
              onPress={() => {
                router.push('/transactions');
              }}
            >
              <InfoText>view all</InfoText>
            </TouchableOpacity>
          </View>

          <View className="mt-2">
            {/* date */}
            <View className="flex flex-row justify-between items-center mb-3">
              <BodyText className="text-gray-500 text-xs font-inter-bold">2, Jan 2025</BodyText>
            </View>
            <HistoryTransaction title="Salary" entry={600000} type="income" category="salary">
              <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Account" />
            </HistoryTransaction>
            <HistoryTransaction
              title="ingredients for cooking"
              entry={50000}
              type="expense"
              category="Groceries"
            >
              <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Profile" />
            </HistoryTransaction>
            <View className="flex flex-row justify-between items-center mb-3">
              <BodyText className="text-gray-500 text-xs">2, Jan 2025</BodyText>
            </View>
            <HistoryTransaction title="Utilities" entry={20000} type="expense" category="Tools">
              <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Calendar" />
            </HistoryTransaction>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
