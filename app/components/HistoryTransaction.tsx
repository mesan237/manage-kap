import { View, Text } from 'react-native';
import React from 'react';

interface HistoryTransactionProps {
  title: string;
  date: string;
  entry: number;
  type: 'income' | 'expense';
}

export const HistoryTransaction = ({ title, date, entry, type }: HistoryTransactionProps) => {
  return (
    <View className="flex flex-row justify-between items-center mb-3">
      <View className="flex">
        <Text className=" text-base font-bold">{title} </Text>
        <Text className="text-base text-gray-400 font-semibold">{date}</Text>
      </View>
      <Text className={`font-bold ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
        {type === 'income' ? '+' : '-'} FCFA {entry}
      </Text>
    </View>
  );
};

export default HistoryTransaction;
