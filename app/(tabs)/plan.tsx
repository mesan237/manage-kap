import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calculator from '../components/Calculator';
import CustomSelectDropdown from '../components/CustomSelectDropdown';
import { Icons } from '@/constants/icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { BodyText, InfoText } from '../components/StyleText';

export default function Planning() {
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
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [transactionDate, setTransactionDate] = React.useState(new Date());
  const [descriptionInput, setDescriptionInput] = React.useState<string>('');
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', paddingTop: 20 }}
    >
      <View className="flex flex-row items-center justify-between  p-2">
        <View className="flex  items-center gap-1">
          <InfoText>Transaction type</InfoText>
          <CustomSelectDropdown
            dropdownStyle={{ width: 100 }}
            datas={['income', 'expense']}
            onSelect={(item, index) => console.log(item, index)}
          />
        </View>

        <View className="flex items-center gap-1">
          <InfoText className="self-start">Account type</InfoText>
          <CustomSelectDropdown
            dropdownStyle={{ minWidth: 150 }}
            datas={['Cash', 'Mobile Money', 'Bank']}
            onSelect={(item, index) => console.log(item, index)}
          />
        </View>
      </View>

      <View className="flex flex-row items-center justify-between p-2">
        <View className="flex items-center gap-1">
          <InfoText className="self-start">Subcategory</InfoText>
          <CustomSelectDropdown
            // dropdownStyle={{ minWidth: 150 }}
            datas={['Food', 'Drink', 'Transport', 'Health', 'Other']}
            onSelect={(item, index) => console.log(item, index)}
          />
        </View>
        <View className="flex items-center gap-1">
          <InfoText className="self-start">Time and Date</InfoText>
          <View className="flex flex-row gap-0">
            <TouchableOpacity
              onPress={showDatePicker}
              className="flex flex-row items-center gap-2 justify-between w-40 rounded-md p-2.5 bg-[#e5e7eb]"
              style={{ minWidth: 120 }}
            >
              <BodyText className="tracking-widest">
                {transactionDate.toLocaleDateString()}
              </BodyText>
              <Icons.Calendar height={14} width={14} color="#131313" strokeWidth={2} />
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            timePickerModeAndroid="spinner"
            mode="datetime"
            date={transactionDate}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
      <View className="flex items-start p-4">
        <Text className="text-lg" style={{ fontFamily: 'Inter-Var-Bold' }}>
          Description
        </Text>
        <TextInput
          className="w-full px-4 py-2 border rounded-md mt-2 bg-gray-200 border-slate-300 h-40 text-lg text-gray-700  "
          value={descriptionInput}
          style={{ fontFamily: 'Inter-Var-Medium' }}
          onSubmitEditing={() => {
            // () => clear();
          }}
          onChangeText={setDescriptionInput}
          multiline={true}
          scrollEnabled={true}
          placeholder="Enter description"
        />
      </View>
      <Calculator />
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
