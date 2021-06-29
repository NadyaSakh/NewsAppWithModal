import React, { ReactElement } from 'react';

import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import colors from "../res/colors";

const Spinner = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={colors.dark} />
    </SafeAreaView>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
