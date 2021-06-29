import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import LaunchScreen from "../launchScreen/containers/LaunchScreen";
import NewsList from "../news/containers/NewsList";

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = (): ReactElement => {
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
    </Stack.Navigator>
  )
};

export default RootStackNavigator;