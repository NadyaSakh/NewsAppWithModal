import { Dimensions, Platform, StyleSheet } from "react-native";
import colors from "../../common/res/colors";

const { width } = Dimensions.get('window');

export const headerStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0
  },
  headerTitleStyle: {
    width: width - 60,
    fontSize: 24,
    letterSpacing: -0.48,
    fontWeight: 'bold',
    color: colors.dark,
    backgroundColor: 'transparent'
  },
  headerTitleBackStyle: {
    width: width - 90,
    fontSize: 24,
    letterSpacing: -0.48,
    fontWeight: 'bold',
    color: colors.dark,
    backgroundColor: 'transparent',
    marginLeft: Platform.select({ ios: 54, android: 0 })
  }
});