import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calculator from '@/components/Calculator';
import CustomSelectDropdown from '@/components/CustomSelectDropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { BodyText, InfoText } from '@/components/StyleText';
import { styles } from '@/helpers/styleHelper';
import DynamicIcon from '@/components/ui/DynamicIcon';

export default function Budget() {
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
    <SafeAreaView className="flex-1 mt-5" edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="none" className="mx-3">
          <View className="flex flex-row items-center justify-between  p-2">
            <View className="flex  items-center gap-1">
              <InfoText className="self-start">Transaction type</InfoText>
              <CustomSelectDropdown
                dropdownStyle={{ width: 100 }}
                datas={['income', 'expense']}
                onSelect={(item, index) => console.log(item, index)}
              />
            </View>

            <View className="flex items-center gap-0.5">
              <InfoText className="self-start">Account type</InfoText>
              <CustomSelectDropdown
                dropdownStyle={{ minWidth: 150 }}
                datas={['Cash', 'Mobile Money', 'Bank']}
                onSelect={(item, index) => console.log(item, index)}
              />
            </View>
          </View>

          <View className="flex flex-row items-center justify-between p-2">
            <View className="flex items-center gap-0.5">
              <InfoText className="self-start">Subcategory</InfoText>
              <CustomSelectDropdown
                // dropdownStyle={{ minWidth: 150 }}
                datas={['Food', 'Drink', 'Transport', 'Health', 'Other']}
                onSelect={(item, index) => console.log(item, index)}
              />
            </View>

            <View className="flex items-center gap-0.5">
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
                  <DynamicIcon
                    height={14}
                    width={14}
                    color="#131313"
                    strokeWidth={2}
                    name="Calendar"
                  />
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
            <Text className="text-md" style={styles.textBold}>
              Description
            </Text>
            <TextInput
              numberOfLines={4}
              textAlignVertical="top"
              className="w-full p-4 border rounded-md mt-2 bg-gray-200 border-slate-300 h-32 text-md text-gray-700 leading-6 "
              value={descriptionInput}
              style={styles.textMedium}
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

          <View className="">
            <TouchableOpacity
              className="flex  items-center justify-center bg-blue-500 rounded-md p-2  m-4 mx-4 place-self-end"
              onPress={() => console.log('Save transaction')}
            >
              <Text className="text-white text-lg" style={styles.textBold}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
