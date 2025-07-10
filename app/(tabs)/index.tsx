import { Icons } from '@/constants/icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HistoryTransaction } from '../components/HistoryTransaction';
import { createShadow } from '@/helpers/styleHelper';
import { BodyText, Heading, InfoText, Subheading } from '../components/StyleText';
import { useFonts } from 'expo-font';

const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
];

const Index = () => {
  let [fontsLoaded] = useFonts({
    'Inter-Var': require('../../assets/fonts/InterVar-Regular.ttf'),
    'Inter-Var-Bold': require('../../assets/fonts/InterVar-Bold.ttf'),
    'Inter-Var-Medium': require('../../assets/fonts/InterVar-Medium.ttf'),
    'Inter-Var-SemiBold': require('../../assets/fonts/InterVar-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-[#f9f9f9]">
      <View
        className="flex flex-row justify-between items-center m-5 rounded-md"
        style={styles.errorShadow}
      >
        <View className="flex justify-center gap-0.5">
          <BodyText className=" text-sm font-bold capitalize">Good Morning,</BodyText>
          <InfoText className=" ">Abed </InfoText>
        </View>
        <View className="">
          <Icons.Notification color="#ccd" height={20} width={20} />
        </View>
      </View>

      {/* <View className='"mx-5 mt-10 bg-primary p-5 rounded-[1.5rem] shadow-2xl shadow-blue-900 h-48 absolute' /> */}

      <View
        style={[
          {
            borderRadius: 12,
            padding: 16,
            ...createShadow(6),
            // backgroundColor: '#1e293b', // Tailwind's bg-primary
          },
          ,
        ]}
        className="mx-5 mt-5 overflow-hidden bg-primary"
      >
        <View className="px-4 py-5 ">
          <Heading style={{}}>Your Balance</Heading>

          <View className="flex flex-row justify-between items-center ">
            <View className="flex flex-col">
              <View className="flex flex-row items-center gap-2">
                <InfoText className="text-white text-base">Income</InfoText>
                <View className="bg-green-400/25 rounded-full p-1">
                  <Icons.MoveDown height={8} width={8} color="#1e2b" strokeWidth={4} />
                </View>
              </View>
              <BodyText className="text-white text-sm font-bold">
                <Text className="text-sm">FCFA</Text> 600,000
              </BodyText>
            </View>
            <View className="flex flex-col">
              <View className="flex flex-row items-center gap-2">
                <InfoText className="text-white text-base">Expenses</InfoText>
                <View className="bg-red-400/25 rounded-full p-1">
                  <Icons.MoveUp height={8} width={8} color="#d00" strokeWidth={4} />
                </View>
              </View>
              <BodyText className="text-white text-sm font-bold">
                <Text className="text-sm">FCFA</Text> 200,000
              </BodyText>
            </View>
          </View>
        </View>
      </View>

      <View className="mx-5 mt-10 shadow-[0_5px_10px_rgba(154,160,185,0.05),0_15px_40px_rgba(166,173,201,0.2)] rounded-[2rem]">
        <Subheading className="font-bold">Recent Transactions</Subheading>

        <View className="mt-5">
          {/* date */}
          <View className="flex flex-row justify-between items-center mb-3">
            <BodyText className="text-gray-500 text-sm">2, Jan 2025</BodyText>
          </View>
          <HistoryTransaction title="Salary" entry={600000} type="income" category="salary" />
          <HistoryTransaction
            title="ingredients for cooking"
            entry={50000}
            type="expense"
            category="Groceries"
          />
          <View className="flex flex-row justify-between items-center mb-3">
            <BodyText className="text-gray-500 text-sm">2, Jan 2025</BodyText>
          </View>
          <HistoryTransaction title="Utilities" entry={20000} type="expense" category="Tools" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  defaultShadow: {
    boxShadow: '0px 0px 2px 0px rgba(111,182,134,0,3)',
  },
  errorShadow: {
    boxShadow: '0px 0px 0px 2px rgba(248,180,180,0,6)',
  },
});
export default Index;
