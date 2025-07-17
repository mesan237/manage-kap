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
import { LinearGradient } from 'expo-linear-gradient';

import { HistoryTransaction } from '../components/HistoryTransaction';
import { createShadow } from '@/helpers/styleHelper';
import { BodyText, Heading, InfoText, Subheading } from '../components/StyleText';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomSelectDropdown from '../components/CustomSelectDropdown';
import DynamicIcon from '../components/ui/DynamicIcon';

const Index = () => {
  let [fontsLoaded] = useFonts({
    'Inter-Var': require('../../assets/fonts/InterVar-Regular.ttf'),
    'Inter-Var-Bold': require('../../assets/fonts/InterVar-Bold.ttf'),
    'Inter-Var-Medium': require('../../assets/fonts/InterVar-Medium.ttf'),
    'Inter-Var-SemiBold': require('../../assets/fonts/InterVar-SemiBold.ttf'),
  });

  // date picker state
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [transactionDate, setTransactionDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setTransactionDate(date);
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const handleDateChangeOn = (currentDateParam: Date) => {
    const newDate = new Date(currentDateParam);
    // Mutate the NEW Date object
    newDate.setMonth(newDate.getMonth() + 1);
    setTransactionDate(newDate);
  };

  const handleDateChangeOff = (currentDateParam: Date) => {
    const newDate = new Date(currentDateParam);

    newDate.setMonth(newDate.getMonth() - 1);
    setTransactionDate(newDate);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-[#f9f9f9]" edges={['top', 'left', 'right']}>
      {/* <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={['cyan', 'lightgreen']}
        start={{ x: 1, y: 0.25 }} 
        end={{ x: 0, y: 1 }} 
      /> */}

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
          <Subheading className="text-center text-white">Balance</Subheading>
          <BodyText className="text-white text-xl font-inter-bold tracking-wide text-center">
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

      <View className="flex flex-row justify-between items-center mx-5 mt-5 gap-0.5">
        <CustomSelectDropdown
          datas={['Daily', 'Weekly', 'Monthly']}
          defaultValue="Monthly"
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
        />

        <View>
          <View className="flex flex-row gap-0">
            <TouchableOpacity
              onPress={() => {
                handleDateChangeOff(transactionDate);
              }}
              className=" bg-[#e5e7eb] rounded-l-md flex items-center justify-center p-3.5"
            >
              <DynamicIcon
                width={14}
                height={14}
                color="#131313"
                strokeWidth={3}
                name="ChevronLeft"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showDatePicker}
              className="flex flex-row items-center gap-2 justify-between w-40 border-r border-l border-[#D2D9DF] px-3 py-2 bg-[#E9ECEF]"
            >
              <BodyText className="tracking-widest">
                {transactionDate.toLocaleDateString()}
              </BodyText>
              <DynamicIcon height={14} width={14} color="#131313" strokeWidth={2} name="Calendar" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                const newDate = new Date(transactionDate);
                handleDateChangeOn(newDate);
              }}
              className="px-3 py-2 bg-[#E9ECEF] rounded-r-md flex items-center justify-center"
            >
              <DynamicIcon
                width={14}
                height={14}
                color="#131313"
                strokeWidth={3}
                name="ChevronRight"
              />
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={transactionDate}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>

      <ScrollView>
        <View className="mx-5 mt-5 rounded-[2rem]">
          <View className="flex flex-row justify-between items-center">
            <Subheading>Recent Transactions</Subheading>
            <TouchableOpacity onPress={() => {}}>
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
