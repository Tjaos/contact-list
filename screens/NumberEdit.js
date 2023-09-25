import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
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
    if (!getNome || !getTelefone || !getEmail){
      showMessage({
        message: "Preencha todos os campos antes de salvar!",
        type: "danger",});
        return;
    }
    await axios
      .put(`http://localhost:3000/contatos/${getId}`, {
        nome: getNome,
        email: getEmail,
        telefone: getTelefone,
      })
      .then(() =>{
        showMessage({
          message: "Alteração salva!",
          type: "success",
        });
        navigation.navigate("Home")
      })
      .catch((error) => console.log(error));
  }

  async function dataDelete() {
    await axios
      .delete(`http://localhost:3000/contatos/${getId}`)
      .then(
        setNome(null),
        setTelefone(null),
        setCpf(null),
        setId(null),
        showMessage({
          message: "registro excluído com sucesso!",
          type: "danger",
        }),
        navigation.navigate("Home")
      )
      .catch((error) => console.log(error));
  }

  return (
    <View
    >
      <FlashMessage position="top" />
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.navigate("Home"),
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{
          text: "Editar Contato",
          style: {
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 25,
          },
        }}
      />
      <View style={styles.containerBox}>
        <Text style={styles.titleText}> Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        ></TextInput>

        <Text style={styles.titleText}> Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelefone(text)}
          value={getTelefone}
        ></TextInput>

        <Text style={styles.titleText}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
        ></TextInput>

        <TouchableOpacity style={styles.botaoLog} onPress={() => dataUpdate()}>
          <Text style={styles.botaoLogin}>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoExcluir}
          onPress={() => dataDelete()}
        >
          <Text style={styles.botaoDelete}>Excluir Registro</Text>
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
  containerBox: {
    top: "10%",
    alignItems: "center",
    width: "100%",
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
  titleText: {
    fontSize: 20,
    marginTop: 5,
    width: "85%",
    padding: 10
  },
  botaoLog: {
    width: 100,
    padding: 10,
    backgroundColor: "#035BFF",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  botaoLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  botaoExcluir: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  botaoDelete: {
    fontSize: 20,
    paddingTop: 50,
    fontWeight: "bold",
    color: "red",
  },
});
