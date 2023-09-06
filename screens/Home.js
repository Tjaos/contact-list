import * as React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Button, Header, ListItem, Avatar, Icon } from "react-native-elements";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header backgroundColor="gray"
        centerComponent={{ text: "Lista de Contatos", style: { color: "#fff", width:400, alignItems:'center', justifyContent:'center', fontSize:30 } }}
        rightComponent={<Button title="+" onPress={() => navigation.navigate("NumRegist")}/>}
        leftComponent={<Button title="<" onPress={() => navigation.navigate("Login")}/>}
      />
      <ScrollView>
        <ListItem>
          <ListItem.Content>
            <View style={styles.views}
            >
              <Avatar
                size={45}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/38.jpg",
                  
                }}
                onPress={()=> navigation.navigate("NumEdit")}
              />
              <ListItem.Title>Clarioswaldo Ferreira</ListItem.Title>
              <ListItem.Subtitle>(81)99999-9999</ListItem.Subtitle>
            </View>
            <View style={styles.views}>
              <Avatar
                size={45}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/37.jpg",
                }}
                onPress={()=> navigation.navigate("NumEdit")}
              />
              <ListItem.Title>Edicleidson Matuzalém da SIlva</ListItem.Title>
              <ListItem.Subtitle>(81)99999-9999</ListItem.Subtitle>
            </View>
          </ListItem.Content>
        </ListItem>
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
