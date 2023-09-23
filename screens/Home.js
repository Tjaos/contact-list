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





/*
return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width:"100%" }}>
    <Header
    style={{width:"100%"}}
      leftComponent={{
        icon: "arrow-back",
        color: "#fff",
        onPress: () => navigation.navigate("Login"),
        iconStyle: { color: "#fff" },
      }}
      backgroundColor="gray"
      centerComponent={{
        text: "Lista de Contatos",
        style: {
          color: "#fff",
          minWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
        },
      }}
      rightComponent={
        <Button title="+" onPress={() => navigation.navigate("NumRegist")} />
      }
    />
    <ScrollView style={{ width: "100%" }}>
      {list.map((linha, indice) => (
        <ListItem key={indice} style={{ width: "100%" }} bottomDivider>
          <Avatar
            size={45}
            rounded
            source={{
              uri: "https://www.gravatar.com/avatar/000000000000000000000000000?d=wavatar&f=y",
            }}
            onPress={() =>
              navigation.navigate("NumEdit", {
                id: linha.id,
                nome: linha.nome,
                email: linha.email,
                cpf: linha.cpf,
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
  width: "100%",
},
});
*/
