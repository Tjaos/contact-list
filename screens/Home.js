import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Header, ListItem, Avatar } from "react-native-elements";
import axios from "axios";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

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
          onPress: () => navigation.navigate("Login"),
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