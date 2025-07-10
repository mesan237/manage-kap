import { Icons } from '@/constants/icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HistoryTransaction } from '../components/HistoryTransaction';
import { createShadow } from '@/helpers/styleHelper';
import { BodyText, Heading, Subheading } from '../components/StyleText';
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
const Index = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-white">
      <View
        className="mx-5 flex flex-row justify-between items-center p-5 bg-primary rounded-md"
        style={styles.errorShadow}
      >
        <Text className="text-white text-sm shadow">
          Good Morning,
          <Text className="text-sm font-bold text-white"> Abed</Text>
        </Text>

        <View className="">
          <Icons.Notification color="#ccd" height={20} width={20} />
        </View>
      </View>

      {/* <View className='"mx-5 mt-10 bg-primary p-5 rounded-[1.5rem] shadow-2xl shadow-blue-900 h-48 absolute' /> */}
      <View
        style={[
          {
            backgroundColor: '#1e2b',
            borderRadius: 8,
            padding: 16,
            ...createShadow(10),
            // backgroundColor: '#1e293b', // Tailwind's bg-primary
          },
          ,
        ]}
        className="mx-5 mt-10  p-5 rounded-[1rem]  "
      >
        <Text className="text-white text-lg font-bold">Your Balance</Text>
        <Heading style={{}}>Your Balance</Heading>

        <BodyText>FCFA 1,000.000</BodyText>
        {/* income */}
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-col">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-white text-base">Income</Text>
              <View className="bg-white/25 rounded-full p-1">
                <Icons.MoveDown height={8} width={8} color="#1e2b" strokeWidth={4} />
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
        <Subheading>Recent Transactions</Subheading>

        <View className="mt-5">
          <HistoryTransaction
            title="Salary"
            date="2, jan 2025"
            entry={600000}
            type="income"
            category="salary"
          />
          <HistoryTransaction
            title="ingredients for cooking"
            date="2, jan 2025"
            entry={50000}
            type="expense"
            category="Groceries"
          />
          <HistoryTransaction
            title="Utilities"
            date="2, jan 2025"
            entry={20000}
            type="expense"
            category="Tools"
          />
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
