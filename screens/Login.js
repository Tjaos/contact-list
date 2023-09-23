import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Icon, Header } from "react-native-elements";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function login() {
    await axios
      .post("http://localhost:3000", {
        email: getEmail,
        senha: getSenha,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
        />

        <Text style={styles.senhaText}> senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
          value={getSenha}
        />
        <TouchableOpacity style={styles.botaoLog} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.botaoLogin}>Login</Text>
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
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
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
    width:100,
    padding: 10,
    backgroundColor: "#035BFF",
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  botaoLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  botaoCad: {
    width: "70%",
    height: 30,
    borderRadius:10,
    marginTop:250,
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







/*
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 90,
          borderColor: "rgb(103, 113, 167)",
          height: "150px",
          width: "150px",
          marginBottom: 100,
        }}
      >
        <Icon name="person" size={140} color={"rgb(103, 113, 167)"} />
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          paddingBottom: "30px",
          paddingTop: "40px",
        }}
      >
        <Text style={styles.texts}>E-mail</Text>
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
        <Text style={styles.texts}>Senha</Text>
        <Input style={styles.inputs} secureTextEntry={true}/>
      </View>
      <View
        style={{
          marginTop: "30px",
          width: "150px",
          height: "50px",
          marginBottom: 50,
        }}
      >
        <Button
          title={"Entrar"}
          type="solid"
          size="Large"
          onPress={() => navigation.navigate("Home")}
        ></Button>
        <View style={{ marginTop: 30 }}>
          <Button
            title={"Cadastre-se"}
            type="outline "
            size="Large"
            onPress={() => navigation.navigate("Register")}
          ></Button>
        </View>
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