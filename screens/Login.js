import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { Icon } from "react-native-elements";

export default function LoginScreen({ navigation }) {
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
