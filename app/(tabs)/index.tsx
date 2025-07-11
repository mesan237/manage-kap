import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import { Icons } from '@/constants/icons';
import { HistoryTransaction } from '../components/HistoryTransaction';
import { createShadow } from '@/helpers/styleHelper';
import { BodyText, Heading, InfoText, Subheading } from '../components/StyleText';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-[#f9f9f9]">
      <View className="flex flex-row justify-between items-center m-5 mb-0 rounded-md">
        <View className="flex justify-center gap-0.5">
          <InfoText className="  capitalize">Welcome Back, </InfoText>
          <BodyText className=" ">Abed </BodyText>
        </View>
        <View className="">
          <Icons.Notification color="#333333" height={20} width={20} />
        </View>
      </View>

      {/* <View className='"mx-5 mt-10 bg-primary p-5 rounded-[1.5rem] shadow-2xl shadow-blue-900 h-48 absolute' /> */}

      <View
        style={[
          {
            borderRadius: 12,
            padding: 16,
            // ...createShadow(2),
            // backgroundColor: '#1e293b',
          },
          ,
        ]}
        className="mx-5 mt-5 overflow-hidden bg-blue-400"
      >
        <View className="px-4 py-5 ">
          <Heading style={{}}>Your Balance</Heading>

          <View className="flex flex-row justify-between items-center ">
            <View className="flex flex-col">
              <View className="flex flex-row items-center gap-2">
                <InfoText className="text-white ">Income</InfoText>
                <View className="bg-green-400/25 rounded-full p-1">
                  <Icons.MoveDown height={8} width={8} color="#1e2b" strokeWidth={4} />
                </View>
              </View>
              <BodyText className="text-white text-sm font-inter-bold ">
                <Text className="text-xs ">FCFA</Text> 600,000
              </BodyText>
            </View>
            <View className="flex flex-col">
              <View className="flex flex-row items-center gap-2">
                <InfoText className="text-white">Expenses</InfoText>
                <View className="bg-red-400/25 rounded-full p-1">
                  <Icons.MoveUp height={8} width={8} color="#d00" strokeWidth={4} />
                </View>
              </View>
              <BodyText className="text-white text-sm font-inter-bold">
                <Text className="text-xs">FCFA</Text> 200,000
              </BodyText>
            </View>
          </View>
        </View>
      </View>

      <View className="flex flex-row justify-between items-center mx-5 mt-5">
        <SelectDropdown
          data={[{ title: 'Daily' }, { title: 'Weekly' }, { title: 'Monthly' }]}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || 'Monthly'}
                </Text>
                <Icon
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  style={styles.dropdownButtonArrowStyle}
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: '#D2D9DF' }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
        <View>
          <TouchableOpacity
            onPress={showDatePicker}
            className="flex flex-row items-center gap-2 border border-[#E9EDEF] rounded-md px-3 py-2 bg-[#E9ECEF]"
          >
            <BodyText>{transactionDate.toLocaleDateString()}</BodyText>
            <Icons.Calendar height={14} width={14} color="#131313" strokeWidth={2} />
          </TouchableOpacity>

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
          <Subheading>Recent Transactions</Subheading>

          <View className="mt-2">
            {/* date */}
            <View className="flex flex-row justify-between items-center mb-3">
              <BodyText className="text-gray-500 text-xs font-inter-bold">2, Jan 2025</BodyText>
            </View>
            <HistoryTransaction title="Salary" entry={600000} type="income" category="salary" />
            <HistoryTransaction
              title="ingredients for cooking"
              entry={50000}
              type="expense"
              category="Groceries"
            />
            <View className="flex flex-row justify-between items-center mb-3">
              <BodyText className="text-gray-500 text-xs">2, Jan 2025</BodyText>
            </View>
            <HistoryTransaction title="Utilities" entry={20000} type="expense" category="Tools" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 100,
    height: 40,
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E9EDEF',
    ...createShadow(4),
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter-Var-Medium',
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
  },
  dropdownButtonIconStyle: {
    fontSize: 24,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter-Var',
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 24,
    marginRight: 8,
  },
});

export default Index;
