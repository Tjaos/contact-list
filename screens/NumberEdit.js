import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";

export default function NumberEditScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: 30,
        }}
      >
        <Text style={styles.texts}>Nome</Text>
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
        <Text style={styles.texts}>Email</Text>
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
        <Text style={styles.texts}>Telefone</Text>
        <Input style={styles.inputs} />
      </View>
      <View style={{ marginTop: 30 }}>
        <Button
          style={{ width: 150 }}
          title={"Alterar"}
          type="solid"
          size="Large"
          color="red"
          onPress={() => navigation.navigate("Home")}
        ></Button>
      </View>
      <View style={{ marginTop: 30 }}>
        <Button
          style={{ width: 150, color:"red" }}
          title={"Excluir"}
          type="clear"
          size="Large"
          onPress={() => navigation.navigate("Home")}
        ></Button>
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
  views: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#d3d3d3",
    width: 450,
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
