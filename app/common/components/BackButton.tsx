import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../navigation/types';
import { ArrowLeft } from '../../res';

const BackButton = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPressBack = (): void => {
    navigation.pop();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPressBack}>
      <ArrowLeft />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    marginLeft: Platform.select({ android: 15, ios: 30 }),
    width: 30,
    height: 30,
    backgroundColor: 'transparent'
  },
  outerContainer: {
    height: 76
  }
});
