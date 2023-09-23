import * as React from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import { ListItem, Avatar, Header } from "react-native-elements";
import { useState, useEffect } from "react";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function NumberEditScreen({ navigation }) {
  const [getId, setId] = useState();
  const [getNome, setNome] = useState();
  const [getCpf, setCpf] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const route = useRoute();
  useEffect(() => {
    if (route.params) {
      const { id, nome, email, cpf, telefone } = route.params;

      setNome(nome);
      setEmail(email);
      setCpf(cpf);
      setTelefone(telefone);
      setId(id);
    }
  }, []);

  async function dataUpdate() {
    await axios
      .put(`http://localhost:3000/contatos/${getId}`, {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
      })
      .then(() =>
        showMessage({
          message: "Alteração salva!",
          type: "success",
        })
      )
      .catch((error) => console.log(error));

  }
  function messageDelete() {
    showMessage({
      message: "registro excluído com sucesso!",
      type: "danger",
      
      
    });
    dataDelete();
  }

  async function dataDelete() {
    await axios
      .delete(`http://localhost:3000/contatos/${getId}`)
      .then(
        setNome(null),
        setTelefone(null),
        setCpf(null),
        setId(null),
        navigation.navigate("Home")
      )
      .catch((error) => console.log(error));
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
        <Text style={styles.loginText}>Digite seu Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        ></TextInput>

        <Text style={styles.loginText}>Digite seu Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelefone(text)}
          value={getTelefone}
        ></TextInput>

        <Text style={styles.loginText}>Digite seu Cpf</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCpf(text)}
          value={getCpf}
        ></TextInput>

        <TouchableOpacity
          style={styles.botaoLog}
          onPress={() => dataUpdate()}
        >
          <Text style={styles.botaoLogin}>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoExcluir}
          onPress={() => messageDelete()}
          
        >
          <Text style={styles.botaoLogin}>Excluir</Text>
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
    top: "10%",
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
  botaoExcluir: {
    width: "85%",
    height: 70,
    backgroundColor: "red",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});