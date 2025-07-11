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

export const HistoryTransaction = ({ title, entry, type, category }: HistoryTransactionProps) => {
  return (
    <View className="flex flex-row justify-between items-start mb-3 border-b border-gray-200 pb-0.5">
      <View className="flex flex-row gap-2 items-center">
        <View
          style={{ backgroundColor: generateRandomColor() }}
          className="rounded-2xl shadow-xl w-12 h-12 flex items-center justify-center mb-1 "
        >
          <Icons.Account height={18} width={18} color="#fff" strokeWidth={2.5} className="" />
        </View>
        <View className="flex justify-between gap-0.5">
          <BodyText className="  capitalize">{title} </BodyText>
          <InfoText className=" ">{category} </InfoText>
        </View>
      </View>
      <View className="flex justify-between gap-0.5">
        <BodyText
          className={` self-start ${type === 'income' ? 'text-green-500' : 'text-red-500'}  shadow-dark-200 shadow`}
        >
          {type === 'income' ? '+' : '-'} <Text className="text-xs">FCFA</Text> {entry}
        </BodyText>
        <InfoText className=" self-end">{'cash'} </InfoText>
      </View>
    </View>
  );
};

export default HistoryTransaction;
