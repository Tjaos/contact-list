import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";

export default function CadastroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.texts}>Nome</Text>
      <Input style={styles.inputs} />
      <Text style={styles.texts}>CPF</Text>
      <Input style={styles.inputs} />
      <Text style={styles.texts}>E-mail</Text>
      <Input style={styles.inputs} />
      <Text style={styles.texts}>Senha</Text>
      <Input secureTextEntry={true} style={styles.inputs} />
      <Button
        title={"Cadastrar"}
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    backgroundColor: "#d3d3d3",
    height: 30,
    width: 100,
    maxWidth: 1000,
    fontSize: 20,
  },
  texts: {
    paddingBottom: 10,
    fontSize: 20,
  },
});
