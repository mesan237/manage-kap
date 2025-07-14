import { View, Text, Dimensions, PixelRatio, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useWindowDimensions } from 'react-native';

const Calculator = () => {
  const { width } = useWindowDimensions();
  const totalHorizontalPadding = 24 + 24 + 24; // Assuming 24px padding on both sides
  const usableWidth = width - totalHorizontalPadding;
  const buttonWidth = usableWidth / 4; // Assuming 4 buttons per row

  const calculatorButton = [
    { value: 7, type: 'number' },
    { value: 8, type: 'number' },
    { value: 9, type: 'number' },
    { value: '/', type: 'divide' },
    { value: 4, type: 'number' },
    { value: 5, type: 'number' },
    { value: 6, type: 'number' },
    { value: 'X', type: 'multiply' },
    { value: 1, type: 'number' },
    { value: 2, type: 'number' },
    { value: 3, type: 'number' },
    { value: '+', type: 'add' },
    { value: 0, type: 'number' },
    { value: 'C', type: 'cancel' },
    { value: '-', type: 'subtract' },
    { value: '=', type: 'equal' },
  ];

  const [computedValue, setComputedValue] = React.useState<string | number>(0);
  const [inputValue, setInputValue] = React.useState<string | number>('0');

  const multiplyBy = (value: number) => {
    return (num: number) => {
      return num * value;
    };
  };

  const add = (value: number) => {
    return (num: number) => {
      return num + value;
    };
  };
  const subtract = (value: number) => {
    return (num: number) => {
      return num - value;
    };
  };
  // value should be different from 0
  const divideBy = (value: number) => {
    return (num: number) => {
      if (value === 0) throw new Error('Cannot divide by zero');
      return num / value;
    };
  };

  const handleComputation = (value: number, type: string) => {
    let cache = value;
    if (type === 'number') {
      setInputValue((prev) => (prev === '0' ? value.toString() : prev + value.toString()));
      console.log(value);
      setComputedValue(value);
    } else if (type === 'cancel') {
      setComputedValue(0);
    } else if (type === 'equal') {
      // Implement equal logic here
      // For now, just reset to 0
      setComputedValue(0);
    } else {
      // Handle other operations like add, subtract, multiply, divide
      // This is a placeholder for actual computation logic
      if (type === 'multiply') {
        cache = multiplyBy(inputValue as number)(computedValue as number);
      }
      console.log(cache);
      console.log(`Operation: ${type}, Value: ${value}`);
    }
  };

  return (
    <View className="flex-1 items-center justify-center p-4 bg-gray-200 rounded-lg ">
      <Text>Calculator Component</Text>
      {/* Add your calculator UI here */}
      <View className="p-2 bg-gray-100 rounded-lg shadow-md  w-full">
        <View className="bg-white px-4 py-2 rounded-lg shadow-md mb-4">
          <TextInput
            className="text-xxl font-bold text-right"
            value={inputValue.toString()}
            onChangeText={setInputValue}
          />
          {/* <Text className=""></Text> */}
        </View>

        <View className="p-0 bg-gray-100 rounded-lg flex flex-row gap-2 flex-wrap justify-between">
          {calculatorButton.map((itemButton, index) => (
            <TouchableOpacity
              key={index}
              onPress={(value) => {
                handleComputation(itemButton.value as number, itemButton.type);
              }}
              style={{ flexBasis: buttonWidth }}
              className="bg-white py-2 px-4 rounded-lg shadow-md flex-1 items-center justify-center"
            >
              <Text className="text-xl font-bold">{itemButton.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Calculator;
