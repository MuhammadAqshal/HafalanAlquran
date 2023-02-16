import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconSantri,
  IconSantriActive,
  IconIzin,
  IconIzinActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = ({label, focus}) => {
    switch (label) {
      case 'Home':
        return isFocused ? <IconHomeActive /> : <IconHome />;
      case 'Santri':
        return isFocused ? <IconSantriActive /> : <IconSantri />;
      case 'Izin':
        return isFocused ? <IconIzinActive /> : <IconIzin />;
      default:
        return <IconHomeActive />;
    }
  };
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon label={label} focus={isFocused} />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  text: isFocused => ({
    color: isFocused ? colors.primary : colors.secondary,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.regular,
  }),
  container: {flex: 1, alignItems: 'center'},
});
