import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  /*
  async function login() {
    if (!getSenha || !getEmail) {
      showMessage({
        message: "Preencha todos os campos!",
        type: "danger",
      });
      return;
    }
    await axios
      .get(`http://localhost:3000/usuario?email=${getEmail}&senha=${getSenha}`)
      .then((response) => {
        if (response.data.length != 0) {
          navigation.navigate("Home");
        } else {
          showMessage({
            message: "Senha ou Email incorretos!",
            type: "danger",
          });
        }
      })
      .catch((error) => {
        console.log(error), [getEmail, getSenha];
      });
  }*/
  // Configuração do Firebase

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
  function loginFirebase() {
    signInWithEmailAndPassword(auth, getEmail, getSenha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: "Email ou senha inválidos!",
          type: "danger",
        });
      });
  }
  const provider = new GoogleAuthProvider();
  function logarComGmail() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <FlashMessage position="top" />
      <View style={styles.containerLogin}>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 90,
            borderColor: "rgb(103, 113, 167)",
            height: 100,
            width: 100,
            marginBottom: 70,
            marginTop: 30,
          }}
        >
          <Icon name="person" size={90} color={"rgb(103, 113, 167)"} />
        </View>
        <Text style={styles.loginText}> login</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={getEmail}
          placeholder="Email"
        />

        <Text style={styles.senhaText}> senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
          value={getSenha}
          placeholder="Senha"
        />

        <TouchableOpacity
          style={styles.botaoLog}
          onPress={() => loginFirebase()}
        >
          <Text style={styles.botaoLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoLog}
          onPress={() => logarComGmail()}
        >
          <Text style={styles.botaoLogin}>Login com Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.botaoCad}
        >
          <Text style={styles.botaoCadastro}>Cadastre-se</Text>
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
  containerLogin: {
    top: "1%",
    alignItems: "center",
    width: "90%",
  },
  containerCadastro: {
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
    borderWidth: 1,
    borderRadius: 20,
  },
  loginText: {
    fontSize: 25,
    marginTop: 5,
    width: "85%",
  },
  senhaText: {
    fontSize: 25,
    marginTop: 30,
    width: "85%",
  },
  botaoLog: {
    width: 100,
    padding: 10,
    backgroundColor: "#035BFF",
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  botaoLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  botaoCad: {
    width: "70%",
    height: 30,
    borderRadius: 10,
    marginTop: 250,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoCadastro: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
