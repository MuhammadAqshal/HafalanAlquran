import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useTogglePasswordVisibility } from '../../../utils';

const InputPasswordRN = ({ label, placeholder, ...restProps }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          enablesReturnKeyAutomatically
          {...restProps}
        />
      </View>
    </View>
  );
};

export default InputPasswordRN;

const styles = StyleSheet.create({
  label: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202' },
  inputContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  iconInput: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 18,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    color: '#000',
    borderRadius: 8,
    padding: 10,
    paddingRight: 40,
  },
});
