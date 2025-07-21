import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomSelectDropdown from '../components/CustomSelectDropdown';
import DynamicIcon from '../components/ui/DynamicIcon';
import { BodyText, Subheading } from '../components/StyleText';
import HistoryTransaction from '../components/HistoryTransaction';

const Transactions = () => {
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

  return (
    <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
      {/* search bar */}
      <View className="flex-row items-center bg-gray-200 rounded-lg p-3  mx-5 mt-5">
        <DynamicIcon
          className="size-4"
          height={18}
          width={18}
          color="#131313"
          strokeWidth={2.5}
          name="Profile"
        />
        <TextInput
          onPress={() => {}}
          placeholder="search any transaction"
          value=""
          onChangeText={() => {}}
          // placeholderTextColor="#a8b5db"
          className="flex-1 ml-2 text font-inter"
        />
      </View>

      {/* filters */}
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

      {/* transactions */}

      <View className="mx-5 mt-5">
        <Subheading>All Transactions</Subheading>

        <View className="flex justify-between">
          <HistoryTransaction
            title="ingredients for cooking"
            entry={50000}
            type="expense"
            category="Groceries"
          >
            <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Profile" />
          </HistoryTransaction>
        </View>
        <View className="flex justify-between">
          <HistoryTransaction
            title="ingredients for cooking"
            entry={50000}
            type="income"
            category="Groceries"
          >
            <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Profile" />
          </HistoryTransaction>
          <HistoryTransaction
            title="ingredients for cooking"
            entry={50000}
            type="income"
            category="Groceries"
          >
            <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Profile" />
          </HistoryTransaction>
          <HistoryTransaction
            title="ingredients for cooking"
            entry={50000}
            type="income"
            category="Groceries"
          >
            <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Profile" />
          </HistoryTransaction>
          <HistoryTransaction
            title="ingredients for cooking"
            entry={50000}
            type="income"
            category="Groceries"
          >
            <DynamicIcon height={18} width={18} color="#fff" strokeWidth={2.5} name="Profile" />
          </HistoryTransaction>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
