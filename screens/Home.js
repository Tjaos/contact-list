import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Header, ListItem, Avatar } from "react-native-elements";
import axios from "axios";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function sair(){



  const firebaseConfig = {
    apiKey: "AIzaSyAA0L1c02K1VqnfSk0utkIztJEc4UKf_9o",
    authDomain: "login-app-8ee67.firebaseapp.com",
    projectId: "login-app-8ee67",
    storageBucket: "login-app-8ee67.appspot.com",
    messagingSenderId: "9224183843",
    appId: "1:9224183843:web:6d75434ac2203cfaa4d196",
    measurementId: "G-066TM4F122"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  signOut(auth).then(() => {
  // Sign-out successful.
  navigation.navigate("Login");
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  // An error happened.
  });
}

export default function HomeScreen({ navigation }) {
  const [list, setlist] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    function consultarDados() {
      axios
        .get(`http://localhost:3000/contatos`)

        .then(function (response) {
          const sortedList = response.data.sort((a,b)=>
          a.nome.localeCompare(b.nome)
          );
          setlist(sortedList);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    consultarDados();
  }, [isFocused]);

  return (
    <View>
      <Header
      style={{alignItems: "center", justifyContent:"center",}}

        leftComponent={{
          text:"Sair", style: {color: "#fff"},
          onPress: () => sair(),
          iconStyle: { color: "#fff" },
        }}
        centerComponent={{ text: "Listagem", style: { color: "#fff" } }}
        rightComponent={
          <Button title="+" onPress={() => navigation.navigate("NumRegist")} />
        }
      />
      <ScrollView>
        {list.map((linha, indice) => (
          <ListItem key={indice} bottomDivider>
            <Avatar
              source={{
                uri: "https://www.gravatar.com/avatar/000000000000000000000000000?d=wavatar&f=y",
              }}
              onPress={() =>
                navigation.navigate("NumEdit", {
                  nome: linha.nome,
                  telefone: linha.telefone,
                  email: linha.email,
                  id: linha.id,
                })
              }
            />
            <ListItem.Content>
              <ListItem.Title>{linha.nome}</ListItem.Title>
              <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}