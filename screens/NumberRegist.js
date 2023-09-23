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
    /* axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";*/
    await axios
      .post(`http://localhost:3000/contatos`, {
        nome: getNome,
        telefone: getTelefone,
        email: getEmail,
      })
      .then(() => navigation.navigate("Home"))

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
      <View style={styles.containerLogin}>
        <Text style={styles.loginText}>Digite o Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        ></TextInput>

        <Text style={styles.loginText}>Digite o Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelefone(text)}
          value={getTelefone}
        ></TextInput>

        <Text style={styles.loginText}>Digite o email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
        ></TextInput>

        <TouchableOpacity style={styles.botaoLog} onPress={() => mensagem()}>
          <Text style={styles.botaoLogin}>Salvar</Text>
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
  },
  containerLogin: {
    top: "20%",
    alignItems: "center",
    width: "100%",
  },
  input: {
    alignItems: "center",
    height: 55,
    width: "85%",
    backgroundColor: "#ffffff",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  loginText: {
    fontSize: 25,
  },
  botaoLog: {
    width: "85%",
    height: 70,
    backgroundColor: "#035BFF",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoLogin: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
  },
});


/*
export default function NumberRegistScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: 30,
        }}
      >
        <Text style={styles.texts}>Nome</Text>
        <Input style={styles.inputs} />
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: 30,
        }}
      >
        <Text style={styles.texts}>Email</Text>
        <Input style={styles.inputs} />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: 30,
        }}
      >
        <Text style={styles.texts}>Telefone</Text>
        <Input style={styles.inputs} />
      </View>
      <View style={{ marginTop: 30 }}>
          <Button style={{width:150}}
            title={"Salvar"}
            type="solid"
            size="Large"
            onPress={() => navigation.navigate("Home")}
          ></Button>
        </View>
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
  views: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#d3d3d3",
    width: 450,
  },
  inputs: {
    backgroundColor: "#d3d3d3",
    height: 30,
    width: 100,
    maxWidth: 1000,
    fontSize: 20,
  },
  texts: {
    paddingBottom: 20,
    fontSize: 20,
  },
});
*/