import { Icons } from '@/constants/icons';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HistoryTransaction } from '../components/HistoryTransaction';

const Index = () => {
  return (
    <SafeAreaView>
      <View className="mx-5 flex flex-row justify-between items-center p-5 bg-primary rounded-md shadow-custom-1 shadow-[0_4px_6px_-1px_rgba(0,0,255,0.1)]">
        <Text className="text-white text-sm ">
          Good Morning,
          <Text className="text-sm font-bold text-white"> Abed</Text>
        </Text>

        <View className="">
          <Icons.Notification color="#ccd" height={20} width={20} />
        </View>
      </View>

      <View
        className="mx-5 mt-10 bg-primary p-5 rounded-[2rem] shadow-custom-2"
        style={{
          boxShadow: '0 5px 100px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
          elevation: 5,
          borderRadius: 10,
          backgroundColor: '#1e293b', // Tailwind's bg-primary
        }}
      >
        <Text className="text-white text-lg font-bold">Your Balance</Text>
        <Text className="text-white text-2xl font-bold mt-2">FCFA 1,000.000</Text>
        {/* income */}
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-col">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-white text-base">Income</Text>
              <View className="bg-white/25 rounded-full p-1">
                <Icons.MoveDown height={8} width={8} color="#0d0" strokeWidth={4} />
              </View>
            </View>
            <Text className="text-white text-sm font-bold">FCFA 600,000</Text>
          </View>
          <View className="flex flex-col">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-white text-base">Expenses</Text>
              <View className="bg-white/25 rounded-full p-1">
                <Icons.MoveUp height={8} width={8} color="#d00" strokeWidth={4} />
              </View>
            </View>
            <Text className="text-white text-sm font-bold">FCFA 200,000</Text>
          </View>
        </View>
      </View>

      <View className="mx-5 mt-10 shadow-[0_5px_10px_rgba(154,160,185,0.05),0_15px_40px_rgba(166,173,201,0.2)] rounded-[2rem]">
        <Text className=" text-lg font-bold">Recent Transactions</Text>

        <View className="mt-5">
          <HistoryTransaction title="Salary" date="2, jan 2025" entry={600000} type="income" />
          <HistoryTransaction title="Groceries" date="2, jan 2025" entry={50000} type="expense" />
          <HistoryTransaction title="Utilities" date="2, jan 2025" entry={20000} type="expense" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
