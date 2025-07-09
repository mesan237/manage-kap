import { Icons } from '@/constants/icons';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView>
      <View className="mx-5 flex flex-row justify-between items-center p-5 bg-primary rounded-md">
        <Text className="text-white text-sm line-clamp-1">
          Good Moning,
          <Text className="text-sm font-bold text-white">Abed</Text>
        </Text>

        <View className="">
          <Icons.Notification color="#ccd" height={20} width={20} />
        </View>
      </View>

      <View className="mx-5 mt-10 bg-primary p-5 rounded-lg shadow-custom-2">
        <Text className="text-white text-lg font-bold">Your Balance</Text>
        <Text className="text-white text-2xl font-bold mt-2">$ 1,000.00</Text>
        {/* income */}
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-col">
            <Text className="text-white text-base">Income</Text>
            <Text className="text-white text-sm font-bold">FCFA 500,000</Text>
          </View>
          <View className="flex flex-col">
            <Text className="text-white text-base">Expenses</Text>
            <Text className="text-white text-sm font-bold">FCFA 200,000</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
