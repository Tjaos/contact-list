import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import CadastroScreen from "./screens/Register";
import NumberRegistScreen from "./screens/NumberRegist";
import NumberEditScreen from "./screens/NumberEdit";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login de Usuário" }}
        />
        <Stack.Screen
          name="Register"
          component={CadastroScreen}
          options={{ title: "Cadastre-se" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NumRegist"
          component={NumberRegistScreen}
          options={{ headerShown: true, title: "Adicionar Contato" }}
        />
        <Stack.Screen
          name="NumEdit"
          component={NumberEditScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
