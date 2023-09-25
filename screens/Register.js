import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useState, useEffect } from "react";
import { Header } from "react-native-elements";

export default function CadastroScreen({ navigation }) {
  const [getNome, setNome] = useState();
  const [getCpf, setCpf] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getSenha, setSenha] = useState();

  async function cadastrar() {
    if (!getNome || !getCpf || !getEmail || !getSenha) {
      showMessage({
        message: "Preencha todos os campos",
        type: "danger",
      });
      return;
    }else{
      await axios
        .post("http://localhost:3000/usuario", {
          nome: getNome,
          cpf: getCpf,
          email: getEmail,
          telefone: getTelefone,
          senha: getSenha,
        })
        .then(() => {
          showMessage({
            message: "Cadastro feito!",
            type: "success",
          });
          navigation.navigate("Login");
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    }

  return (
    <View>
      <FlashMessage position="top" />
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: "#fff",
          onPress: () => navigation.navigate("Login"),
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
      <View style={styles.containerBox}>
        <Text style={styles.texto}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={getNome}
        />

        <Text style={styles.texto}>CPF</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCpf(text)}
          value={getCpf}
        />

        <Text style={styles.texto}>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
        />

        <Text style={styles.texto}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={getSenha}
        />

        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => cadastrar()}
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
  containerBox: {
    marginTop: 100,
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
    borderWidth: 1,
    borderRadius: 20,
  },
  texto: {
    fontSize: 25,
    marginTop: 5,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  botaoCadastro: {
    width: 100,
    padding: 10,
    backgroundColor: "#035BFF",
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  botaoCadastroText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
});
