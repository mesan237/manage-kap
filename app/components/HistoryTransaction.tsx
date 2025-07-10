import { View, Text } from 'react-native';
import React from 'react';
import { BodyText, InfoText } from './StyleText';
import { Icons } from '@/constants/icons';

interface HistoryTransactionProps {
  title: string;
  category: string;
  entry: number;
  type: 'income' | 'expense';
}

// generate a random color
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// generate random color a bit darker
const generateRandomDarkColor = () => {};

export const HistoryTransaction = ({ title, entry, type, category }: HistoryTransactionProps) => {
  return (
    <View className="flex flex-row justify-between items-center mb-3 shadow">
      <View className="flex flex-row gap-2">
        <View
          style={{ backgroundColor: generateRandomColor() }}
          className="rounded-2xl shadow-xl w-12 h-12 flex items-center justify-center mb-1"
        >
          {/* <Text className="text-white font-bold text-lg">{category.charAt(0).toUpperCase()}</Text> */}
          <Icons.Account height={18} width={18} color="#fff" strokeWidth={2.5} className="" />
        </View>
        <View className="flex justify-center gap-1">
          <BodyText
            style={{ shadowOpacity: 0.25 }}
            className=" text-sm font-bold capitalize shadow-dark-200 shadow"
          >
            {title}{' '}
          </BodyText>
          <InfoText className=" ">{category} </InfoText>
        </View>
      </View>
      <View className="flex justify-center gap-1">
        <BodyText
          style={{ color: type === 'income' ? '#16a34a' : '#dc2626', shadowOpacity: 0.25 }}
          className={`font-bold self-start text-sm`}
        >
          {type === 'income' ? '+' : '-'} <Text className="text-sm">FCFA</Text> {entry}
        </BodyText>
        <InfoText className=" self-end">{'cash'} </InfoText>
      </View>
    </View>
  );
};

export default HistoryTransaction;
