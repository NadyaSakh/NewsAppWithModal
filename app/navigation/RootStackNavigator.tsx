import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import LaunchScreen from "../launchScreen/containers/LaunchScreen";
import NewsList from "../news/containers/NewsList";
import CurrentNews from "../currentNews/containers/CurrentNews";
import { headerStyles } from "./styles";
import BackButton from "../common/components/BackButton";

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = (): ReactElement => {
  const currentNewsOptions = {
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleBackStyle,
    title: '',
    headerBackImage: BackButton,
    headerBackTitleVisible: false
  };

  return (
    <Stack.Navigator initialRouteName="LaunchScreen">
      <Stack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CurrentNews"
        component={CurrentNews}
        options={currentNewsOptions}
      />
    </Stack.Navigator>
  )
};

export default RootStackNavigator;