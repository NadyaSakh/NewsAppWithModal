import React, { useEffect } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import colors from '../../common/res/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

const { width } = Dimensions.get('window');

const LaunchScreenView = (): React.ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    moveTo();
  }, []);

  const moveTo = (): void => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'NewsList' }]
      });
    }, 3000);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>All News</Text>
    </SafeAreaView>
  );
};

export default LaunchScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width,
    backgroundColor: colors.green
  },
  title: {
    fontSize: 30,
    letterSpacing: 4.2,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: colors.white
  }
});

