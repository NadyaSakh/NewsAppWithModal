import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./RootStackNavigator";
import configureStore from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const { store, persistor } = configureStore();

const AppNavigator = (): React.ReactElement => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  </PersistGate>
);

export default AppNavigator;
