import { View, Text, Dimensions, PixelRatio, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useWindowDimensions } from 'react-native';

const Calculator = () => {
  const { width } = useWindowDimensions();
  const totalHorizontalPadding = 24 + 24 + 24; // Assuming 24px padding on both sides
  const usableWidth = width - totalHorizontalPadding;
  const buttonWidth = usableWidth / 5; // Assuming 4 buttons per row

  const calculatorButton = [
    { value: '/', type: 'divide' },
    { value: 'X', type: 'multiply' },
    { value: '+', type: 'add' },
    { value: '-', type: 'subtract' },
    { value: '=', type: 'equal' },
  ];

  const [computedValue, setComputedValue] = React.useState<string | number>(0);
  const [inputValue, setInputValue] = React.useState<string | number>('');

  const handleComputation = (type: string) => {
    setInputValue((prev) => {
      if (type === 'cancel') {
        return '0';
      } else if (type === 'equal') {
        try {
          // eslint-disable-next-line no-eval
          const p = prev.toString().replace(/\s+/g, '');
          if (p === '0') return '0';
          const result = eval(p.replace('X', '*').replace('/', '/'));
          return result.toString();
        } catch (error) {
          console.error('Error in computation:', error);
          return prev;
        }
      } else if (
        type === 'add' ||
        type === 'subtract' ||
        type === 'multiply' ||
        type === 'divide'
      ) {
        return prev + `${calculatorButton.find((btn) => btn.type === type)?.value}`;
      }
      return prev;
    });
  };

  const cursor = React.useRef<TextInput>(null);
  React.useEffect(() => {
    if (cursor.current) {
      cursor.current.focus();
    }
  }, []);

  return (
    <View className="flex-1 items-center justify-center p-4  ">
      <Text style={{ fontFamily: 'Inter-Var-Bold' }} className="text-lg self-start">
        Amount (FCFA)
      </Text>
      {/* Add your calculator UI here */}
      <View className="p-2 bg-gray-100 rounded-lg shadow-md  w-full">
        <View className="bg-white px-4 py-2 rounded-lg shadow-md mb-4">
          <TextInput
            ref={cursor}
            keyboardType="numeric"
            autoFocus
            placeholder="0"
            placeholderTextColor="#999"
            selectTextOnFocus={false}
            autoCorrect={false}
            autoCapitalize="none"
            // keyboard for computation
            multiline={false}
            scrollEnabled={false}
            maxLength={20}
            blurOnSubmit={false}
            returnKeyType="done"
            returnKeyLabel="Done"
            onSubmitEditing={() => {
              if (cursor.current) {
                cursor.current.blur();
              }
            }}
            className="text-xxl text-right overflow-hidden"
            value={inputValue.toString()}
            onChange={(e) => {
              setInputValue(e.nativeEvent.text);
              console.log(e.nativeEvent.text);
            }}
            style={{ fontFamily: 'Inter-Var-Bold' }}
          />
          {/* <Text className=""></Text> */}
        </View>

        <View className="p-0 bg-gray-100 rounded-lg flex flex-row gap-2 flex-wrap justify-between">
          {calculatorButton.map((itemButton, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleComputation(itemButton.type);
              }}
              style={{ flexBasis: buttonWidth }}
              className="bg-white py-2 px-4 rounded-lg shadow-md flex-1 items-center justify-center "
            >
              <Text className="text-xl" style={{ fontFamily: 'Inter-Var-Bold' }}>
                {itemButton.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Calculator;
