import { View, Text, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmojiPicker, { EmojiType } from 'rn-emoji-keyboard';
import { Alert } from 'react-native';

import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs for mock data

// Mock Supabase client for demonstration purposes
// In a real app, you would import and initialize your actual Supabase client
const mockSupabase = {
  from: (tableName) => ({
    insert: async (data) => {
      console.log(`Mock Supabase: Inserting into ${tableName}`, data);
      return new Promise((resolve) => {
        setTimeout(() => {
          if (Math.random() > 0.1) {
            // Simulate success 90% of the time
            resolve({ data: { id: uuidv4(), ...data }, error: null });
          } else {
            resolve({ data: null, error: { message: 'Mock DB insert failed' } });
          }
        }, 1000); // Simulate network delay
      });
    },
  }),
};

// Predefined color palette for category background
const colorPalette = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Light Blue
  '#F7DC6F', // Yellow
  '#A2D9CE', // Mint Green
  '#BB8FCE', // Purple
  '#F5B041', // Orange
  '#5DADE2', // Sky Blue
  '#2ECC71', // Emerald Green
  '#AF7AC5', // Lavender
];

// Get screen width for responsive sizing
const { width } = Dimensions.get('window');
const colorItemSize = (width - 64) / 5; // 5 columns, with 16px padding on each side (32 total), and 8px margin between items (4 * 8 = 32)

const Account = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryType, setCategoryType] = useState<'Expense' | 'Income'>('Expense');
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiType | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmojiSelect = (emoji: EmojiType) => {
    setSelectedEmoji(emoji);
    setIsEmojiPickerOpen(false);
  };

  const handleSaveCategory = async () => {
    if (!categoryName.trim()) {
      Alert.alert('Validation Error', 'Category name cannot be empty.');
      return;
    }
    if (!selectedEmoji) {
      Alert.alert('Validation Error', 'Please choose an emoji for the category.');
      return;
    }
    if (!selectedColor) {
      Alert.alert('Validation Error', 'Please choose a background color for the category.');
      return;
    }

    setIsLoading(true);
    try {
      // In a real app, you'd get the user_id from Supabase auth
      const userId = 'mock-user-uuid-123'; // Replace with actual user ID

      const newCategory = {
        user_id: userId,
        name: categoryName.trim(),
        type: categoryType,
        icon: selectedEmoji.emoji, // Store the emoji character
        bg_color: selectedColor,
      };

      const { data, error } = await mockSupabase.from('categories').insert(newCategory);

      if (error) {
        Alert.alert('Error', `Failed to add category: ${error.message}`);
      } else {
        Alert.alert('Success', `${categoryName} category added successfully!`);
        // Reset form or navigate back
        setCategoryName('');
        setCategoryType('Expense');
        setSelectedEmoji(null);
        setSelectedColor(null);
      }
    } catch (err) {
      console.error('Save error:', err);
      Alert.alert('Error', 'An unexpected error occurred while saving.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
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
            onPress={() => setIsEmojiPickerOpen(true)}
          >
            {selectedEmoji ? (
              <Text className="text-4xl">{selectedEmoji.emoji}</Text>
            ) : (
              <Text className="text-base text-gray-500">Tap to choose emoji</Text>
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
            <Text className="text-center  w-fit ">{selectedEmoji?.emoji ?? ''}</Text>
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
    </SafeAreaView>
  );
};

export default Account;
