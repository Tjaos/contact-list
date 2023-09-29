import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useState, useEffect } from "react";
import { Header } from "react-native-elements";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CadastroScreen({ navigation }) {
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  //***********************FIREBASE*********************************
  // Configuração do Firebase
  function cadastrar() {


    const firebaseConfig = {
      apiKey: "AIzaSyAA0L1c02K1VqnfSk0utkIztJEc4UKf_9o",
      authDomain: "login-app-8ee67.firebaseapp.com",
      projectId: "login-app-8ee67",
      storageBucket: "login-app-8ee67.appspot.com",
      messagingSenderId: "9224183843",
      appId: "1:9224183843:web:6d75434ac2203cfaa4d196",
      measurementId: "G-066TM4F122",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, getEmail, getSenha)
      .then((userCredential) => {
        // Cadastro bem-sucedido
        const user = userCredential.user;
        navigation.navigate("Login");
        //navigation.navigate("Login");
        // ...
      })
      .catch((error) => {
        // Erro de autenticação
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: "Erro durante o Cadastro",
          type: "danger",
        });
      });
  }
  //***********************FIREBASE*********************************
  /*
  async function cadastrarAxios() {
    if (!getEmail || !getSenha) {
      showMessage({
        message: "Preencha todos os campos",
        type: "danger",
      });
      return;
    } else {
      await axios
        .post("", {
          email: getEmail,
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
 */
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
          text: "Cadastro de Usuário",
          style: {
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 25,
          },
        }}
      />
      <View style={styles.containerBox}>
        {/*
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
      */}
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
