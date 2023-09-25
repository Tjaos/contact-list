import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-web";

export default function CadastroScreen({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.containerLogin}>
        <Text style={styles.texto}>Nome</Text>
        <Input style={styles.input} />
        <Text style={styles.texto}>CPF</Text>
        <Input style={styles.input} />
        <Text style={styles.texto}>E-mail</Text>
        <Input style={styles.input} />
        <Text style={styles.texto}>Senha</Text>
        <Input secureTextEntry={true} style={styles.input} />
        <TouchableOpacity
        style={styles.botaoCadastro}
          onPress={() => navigation.navigate("Login")}
        >
           <Text style={styles.botaoCadastroText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  containerLogin: {
    top: "1%",
    alignItems: "center",
    width: "90%",
  },
  input: {
    paddingLeft: 16,
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: "50%",
    backgroundColor: "#ffffff",
    top: "2%",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 20,
  },
  texto: {
    fontSize: 25,
    marginTop: 5,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCadastro: {
    width:100,
    padding: 10,
    backgroundColor: "#035BFF",
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoCadastroText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
});