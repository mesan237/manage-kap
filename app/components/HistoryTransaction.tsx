import { View, Text } from 'react-native';
import React from 'react';

interface HistoryTransactionProps {
  title: string;
  category: string;
  date: string;
  entry: number;
  type: 'income' | 'expense';
}

export const HistoryTransaction = ({
  title,
  date,
  entry,
  type,
  category,
}: HistoryTransactionProps) => {
  return (
    <View className="flex flex-row justify-between items-center mb-3 shadow">
      <View className="flex">
        <Text
          style={{ shadowOpacity: 0.25 }}
          className=" text-sm font-bold capitalize shadow-dark-200 shadow"
          // style={{ '--shadow-opacity': '0.25' }}
        >
          {title}{' '}
        </Text>
        <Text className=" text-sm font-bold text-gray-400">{category} </Text>
      </View>
      <View className="flex">
        <Text className={`font-bold ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
          {type === 'income' ? '+' : '-'} FCFA {entry}
        </Text>
        <Text className="text-sm text-gray-500 font-semibold self-end ">{date}</Text>
      </View>
    </View>
  );
};

export default HistoryTransaction;
