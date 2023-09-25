import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Header } from "react-native-elements";
import axios from "axios";
import FlashMessage, {showMessage} from "react-native-flash-message";



export default function NumberRegistScreen({ navigation }) {
  const [getNome, setNome] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getEmail, setEmail] = useState();

  function mensagem() {
    showMessage({
      message: "registro adicionado com sucesso!",
      type: "success",
    });
    inserirDados();
  }
  async function inserirDados() {
    if (!getNome || !getTelefone || !getEmail){
      showMessage({
        message: "Preencha todos os campos antes de salvar!",
        type: "danger",});
        return;
    }

      await axios
      .post(`http://localhost:3000/contatos`, {
        nome: getNome,
        telefone: getTelefone,
        email: getEmail,
      })
      .then(() => {
        showMessage({
          message: "Registro adicionado com sucesso!",
          type: "success",
        });
        navigation.navigate("Home")
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View>
      <FlashMessage position="top" />
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.navigate("Home"),
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{
          text: "Inserir Contato",
          style: {
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 25,
          },
        }}
      />
      <View style={styles.containerText}>
        <Text style={styles.inputText}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        ></TextInput>

        <Text style={styles.inputText}>Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelefone(text)}
          value={getTelefone}
        ></TextInput>

        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
        ></TextInput>

        <TouchableOpacity style={styles.botao} onPress={() => mensagem()}>
          <Text style={styles.botaoText}>Salvar</Text>
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
    height: "100%",
  },
  containerText: {
    top: "1%",
    alignItems: "center",
    width: "90%",
    marginTop: 90
  },
  input: {
    paddingLeft: 16,
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: "85%",
    backgroundColor: "#ffffff",
    top: "2%",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 20,
  },
  inputText: {
    fontSize: 25,
    marginTop: 5,
    width: "85%",
    padding: 10
  },
  botao: {
    width:100,
    padding: 10,
    backgroundColor: "#035BFF",
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
});
