import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const Button = ({ onPress, ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.6}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
