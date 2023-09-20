import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Header, ListItem, Avatar } from "react-native-elements";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomeScreen({  navigation }) {
  const [list, setlist] = useState([]);

  useEffect(() => {
    function consultarDados() {
      axios
        .get(`http://localhost:3000/contatos`)

        .then(function (response) {
          setlist(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    consultarDados();
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        backgroundColor="gray"
        centerComponent={{
          text: "Lista de Contatos",
          style: {
            color: "#fff",
            width: 400,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
          },
        }}
        rightComponent={
          <Button title="+" onPress={() => navigation.navigate("NumRegist")} />
        }
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("Login")} />
        }
      />
      <ScrollView style={{width:"100%"}}>
        {list.map((linha, indice) => (
          <ListItem key={indice} style={{width:"100%"}} bottomDivider>
            <Avatar
              size={45}
              rounded
              source={{
                uri: "https://www.gravatar.com/avatar/000000000000000000000000000?d=wavatar&f=y",
              }}
              onPress={() =>
                navigation.navigate("NumEdit", {
                  nome: linha.nome,
                  email: linha.email,
                  telefone: linha.telefone,
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

const styles = StyleSheet.create({
  views: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#d3d3d3",
    width: 450,
  },
});
