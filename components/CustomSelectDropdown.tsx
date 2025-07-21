import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';

interface CustomSelectDropdownProps {
  datas: string[];
  defaultValue?: string;
  onSelect: (selectedItem: string, index: number) => void;
  dropdownStyle?: {};
}
const CustomSelectDropdown = ({
  datas,
  onSelect,
  defaultValue,
  dropdownStyle = {},
}: CustomSelectDropdownProps) => {
  return (
    <View>
      <SelectDropdown
        data={datas}
        onSelect={(selectedItem, index) => onSelect(selectedItem, index)}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={[styles.dropdownButtonStyle, { ...dropdownStyle }]}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem) || defaultValue || datas[0]}
              </Text>
              <Icon
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                // ...(isSelected && { backgroundColor: '#D2D9DF' }),
                ...(isSelected && { backgroundColor: '#e5e7eb' }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title ?? item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};

export default CustomSelectDropdown;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    minWidth: 120,
    height: 40,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: '#E9EDEF',
    // ...createShadow(4),
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter-Var-Medium',
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
  },
  dropdownButtonIconStyle: {
    fontSize: 24,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter-Var',
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 24,
    marginRight: 8,
  },
});
