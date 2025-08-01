import '@azure/core-asynciterator-polyfill';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmojiPicker, { EmojiType } from 'rn-emoji-keyboard';
import { Alert } from 'react-native';

import Modal from 'react-native-modal';
import DynamicIcon from '@/components/ui/DynamicIcon';

import { Picker } from '@react-native-picker/picker';
import { SystemContext, useSystem } from '@/powersync/system';

import { CategoryRecord } from '@/powersync/AppSchema';
import uuid from 'react-native-uuid';
import { ne } from '@faker-js/faker';
// Predefined color palette for category background
const colorPalette = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#F7DC6F',
  '#A2D9CE',
  '#BB8FCE',
  '#F5B041',
  '#5DADE2',
  '#2ECC71',
  '#AF7AC5',
];

const icons = [
  'Home',
  'Account',
  'Profile',
  'Analytics',
  'Plan',
  'Add',
  'MoveDown',
  'MoveUp',
  'Notification',
  'Calendar',
  'ChevronRight',
  'ChevronLeft',
  'Entertainment',
];

interface Category {
  name: string;
  icon: string;
  type: string;
  bg_color: string;
}

const { height: deviceHeight } = Dimensions.get('window');

// Get screen width for responsive sizing
const { width } = Dimensions.get('window');
const colorItemSize = (width - 64) / 5; // 5 columns, with 16px padding on each side (32 total), and 8px margin between items (4 * 8 = 32)

const Categories = () => {
  const system = useContext(SystemContext);
  useEffect(() => {
    system?.init();
  }, []);
  const { db, supabaseConnector } = useSystem();

  const [isModalVisible, setModalVisible] = useState(false);
  const [categoryIconName, setCategoryIconName] = useState(icons[12]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [categoryName, setCategoryName] = useState('');
  const [categoryType, setCategoryType] = useState<'Expense' | 'Income'>('Expense');
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiType | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleEmojiSelect = (emoji: EmojiType) => {
    setSelectedEmoji(emoji);
    setIsEmojiPickerOpen(false);
  };

  const handleSaveCategory = async () => {
    if (!categoryName.trim()) {
      Alert.alert('Validation Error', 'Category name cannot be empty.');
      return;
    }
    // if (!selectedEmoji) {
    //   Alert.alert('Validation Error', 'Please choose an emoji for the category.');
    //   return;
    // }
    if (!selectedColor) {
      Alert.alert('Validation Error', 'Please choose a background color for the category.');
      return;
    }

    try {
    } catch (ex) {
      // Alert.alert('Error', ex.message);
    }

    setIsLoading(true);
    try {
      // In a real app, you'd get the user_id from Supabase auth
      const userId = uuid.v4(); // Replace with actual user ID

      const newCategory = {
        id: userId,
        name: categoryName,
        type: categoryType,
        icon: categoryIconName,
        bg_color: selectedColor,
      };

      await db.insertInto('categories').values(newCategory).execute();
      const res = await db.selectFrom('categories').selectAll().execute();

      console.log(res);
    } catch (err) {
      console.error('Save error:', err);
      Alert.alert('Error', 'An unexpected error occurred while saving.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 mt-5" edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <Text className="text-3xl font-bold text-gray-800 mb-8 text-center">Add New Category</Text>

        {/* Category Name Input */}
        <View className="mb-6">
          <Text className="text-base font-semibold text-gray-600 mb-2">Category Name</Text>
          <TextInput
            className="bg-white border border-gray-300 rounded-lg p-4 text-base text-gray-800 shadow-sm"
            placeholder="e.g., Groceries, Salary"
            value={categoryName}
            onChangeText={setCategoryName}
            maxLength={50}
          />
        </View>

        {/* Category Type Selection */}
        <View className="mb-6">
          <Text className="text-base font-semibold text-gray-600 mb-2">Category Type</Text>
          <View className="flex flex-row bg-gray-200 rounded-lg overflow-hidden">
            <TouchableOpacity
              className={`flex-1 py-3 items-center justify-center ${
                categoryType === 'Expense' ? 'bg-blue-600 rounded-lg' : ''
              }`}
              onPress={() => setCategoryType('Expense')}
            >
              <Text
                className={`text-base font-medium ${
                  categoryType === 'Expense' ? 'text-white' : 'text-gray-700'
                }`}
              >
                Expense
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 items-center justify-center ${
                categoryType === 'Income' ? 'bg-blue-600 rounded-lg' : ''
              }`}
              onPress={() => setCategoryType('Income')}
            >
              <Text
                className={`text-base font-medium ${
                  categoryType === 'Income' ? 'text-white' : 'text-gray-700'
                }`}
              >
                Income
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Emoji Icon Selection */}
        <View className="mb-6">
          <Text className="text-base font-semibold text-gray-600 mb-2">Choose Icon</Text>
          <TouchableOpacity
            className="bg-white border border-gray-300 rounded-lg p-4 items-center justify-center min-h-[60px] shadow-sm"
            onPress={toggleModal}
          >
            {selectedEmoji ? (
              // <Text className="text-4xl">{selectedEmoji.emoji}</Text>
              <DynamicIcon color="#adc" height={15} width={15} name={categoryIconName} />
            ) : (
              <Text className="text-base text-gray-500">Tap to choose the icon</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Background Color Selection */}
        <View className="mb-6">
          <Text className="text-base font-semibold text-gray-600 mb-2">
            Choose Background Color
          </Text>
          <View className="flex flex-row flex-wrap justify-between">
            {colorPalette.map((color) => (
              <TouchableOpacity
                key={color}
                style={{ backgroundColor: color, width: colorItemSize, height: colorItemSize }}
                className={`rounded-lg my-2 border-2 border-transparent items-center justify-center shadow-sm ${
                  selectedColor === color ? 'border-blue-600' : ''
                }`}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
          <View className="rounded-full w-10 p-2" style={{ backgroundColor: selectedColor ?? '' }}>
            <Text className="text-center  w-fit">{selectedEmoji?.emoji ?? ''}</Text>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          className={`py-4 rounded-lg items-center justify-center mt-8 shadow-md ${
            isLoading ? 'bg-green-300' : 'bg-green-600'
          }`}
          onPress={handleSaveCategory}
          disabled={isLoading}
        >
          <Text className="text-white text-lg font-bold">
            {isLoading ? 'Saving...' : 'Save Category'}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Emoji Picker Modal */}

      <Modal
        isVisible={isModalVisible}
        propagateSwipe
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        style={[styles.modal]}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        coverScreen={false}
        // swipeThreshold={15}
        backdropOpacity={0.3}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={{ backgroundColor: '#E9ECEF', padding: 12 }}>
          <View style={styles.modalContent}>
            <View style={styles.swipeBar} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>

          <View className="flex flex-row gap-2 flex-wrap justify-center">
            {icons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: '#1313ab',
                  width: colorItemSize,
                  height: colorItemSize,
                }}
                className={`rounded-full my-1 border border-transparent items-center justify-center shadow-sm`}
                onPress={() => {
                  setCategoryIconName(icon);
                  setModalVisible(false);
                }}
              >
                <DynamicIcon color="#fcc" height={24} width={24} name={icon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <EmojiPicker
        onEmojiSelected={handleEmojiSelect}
        open={isEmojiPickerOpen}
        onClose={() => setIsEmojiPickerOpen(false)}
        // Optional: Customize picker appearance
        // theme={{
        //   backdrop: '#16161688',
        //   container: '#fff',
        //   header: '#fff',
        //   skinTonesContainer: '#fff',
        //   search: '#4d4d4d',
        //   activeCategory: '#007bff',
        //   inactiveCategory: '#888',
        //   // ... more theme options
        // }}
      />

      {/* picker */}
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    // position: 'absolute',
    backgroundColor: 'white',
    padding: 36,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderRadius: 10,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,

    height: deviceHeight * 0.7, // 70% of screen height
  },
  swipeBar: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    // marginBottom: 18,
  },
});

export default Categories;
