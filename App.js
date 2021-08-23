import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  //state de numeros y sumas
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [suma, setSuma] = useState(0);
  const [resta, setResta] = useState(0);
  const [multi, setMulti] = useState(0);
  const [divi, setDivi] = useState(0);

  const Sumar = (numero1, numero2) => {
    const sumatoria = numero1 + numero2;
    setSuma(sumatoria);
  };

  const Restar = (numero1, numero2) => {
    const residuo = numero1 - numero2;
    setResta(residuo);
  };

  const Multiplicar = (numero1, numero2) => {
    const multip = numero1 * numero2;
    setMulti(multip);
  };

  const Dividir = (numero1, numero2) => {
    if (numero2 == 0) {
      alert("Numero 2 no puede ser 0");
      return;
    }
    const divi = numero1 / numero2;
    setDivi(divi);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          padding: 15,
          fontSize: 24,
          backgroundColor: "orange",
          color: "white",
          textAlign: "center",
        }}
      >
        Suma de dos numeros
      </Text>
      <TextInput
        style={{
          padding: 5,
          height: 40,
          borderColor: "blue",
          borderWidth: 2,
          marginTop: 10,
        }}
        placeholder="Valor 1"
        keyboardType="numeric"
        onChangeText={(numero1) => setNumero1(parseFloat(numero1))}
      />
      <TextInput
        style={{
          padding: 5,
          height: 40,
          borderColor: "blue",
          borderWidth: 2,
          marginTop: 10,
        }}
        placeholder="Valor 2"
        keyboardType="numeric"
        onChangeText={(numero2) => setNumero2(parseFloat(numero2))}
      />
      <TouchableOpacity
        style={{ height: 60, backgroundColor: "blue", marginTop: 10 }}
        onPress={() => {
          Sumar(numero1, numero2);
        }}
      >
        <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
          SUMAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ height: 60, backgroundColor: "#f78da7", marginTop: 10 }}
        onPress={() => {
          Restar(numero1, numero2);
        }}
      >
        <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
          Restar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ height: 60, backgroundColor: "#00bcd4", marginTop: 10 }}
        onPress={() => {
          Multiplicar(numero1, numero2);
        }}
      >
        <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
          Multiplicar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ height: 60, backgroundColor: "#00d084", marginTop: 10 }}
        onPress={() => {
          Dividir(numero1, numero2);
        }}
      >
        <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
          Dividir
        </Text>
      </TouchableOpacity>
      <Text
        style={{ fontSize: 32 }}
      >{`La Sumatoria de ${numero1} + ${numero2} = ${suma}`}</Text>
 
      <Text
        style={{ fontSize: 32 }}
      >{`La Resta de ${numero1} - ${numero2} = ${resta}`}</Text>
    
      <Text
        style={{ fontSize: 32 }}
      >{`La Multiplicacion de ${numero1} x ${numero2} = ${multi}`}</Text>
  
      <Text
        style={{ fontSize: 32 }}
      >{`La Division de ${numero1} / ${numero2} = ${divi}`}</Text>
   
      <Text style={styles.textoCentrado}>Ejercicio clase 4 DPS</Text>
      <Text style={styles.textoCentrado}>Universidad Don Bosco</Text>
      <Text style={styles.textoCentrado}>
        Daniel Wilfredo Granados Hernández
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textoCentrado: {
    textAlign: "center",
  },
});
