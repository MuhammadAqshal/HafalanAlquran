import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, fonts } from '../../../utils';

const ButtonRN = ({
  text,
  bgColor = colors.primary,
  textColor = colors.white,
  onPress,
  loading,
}) => {
  if (loading) {
    return (
      <TouchableOpacity>
        <View style={styles.disabled(colors.border)}>
          <ActivityIndicator size="small" color="#FFFFFF" />
          <Text style={styles.text(textColor)}>Loading...</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(bgColor)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonRN;

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    padding: 12,
    borderRadius: 8,
  }),
  disabled: bgColor => ({
    backgroundColor: bgColor,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: fonts.primary.semiBold,
    color: textColor,
    textAlign: 'center',
    paddingHorizontal: 5,
  }),
});
