import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';


export default function App() {

  const [numeros, setNumeros] = useState([0,0,0,0,0,0]);
  const [controle, setControle] = useState([]);

  const geraNumeros = () => {
      setNumeros(
        numeros.map( numero => geraNumero()).sort((a, b) => a > b)
      );
      setControle([]);   
    }
  
  const geraNumero = () => {  
    var num = (Math.floor(Math.random() * 59) + 1);
    if(controle.includes(num)) return geraNumero();
    controle.push(num);
    console.log(controle);
    return num;
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.FlatList} 
        data={numeros}
        renderItem = {
          numero => (
            <View key={numero.index} style={styles.itemNaLista}>
              <View>
              <Text style={styles.textoDezena}>Dezena {numero.index +1 }</Text></View>
              <Text style={styles.numeroDezena}>{numero.item}</Text>
            </View>
          )
        }>
      </FlatList>
      <View style={styles.buttons}>
        <Button
          title="Gerar Numeros"
          onPress={geraNumeros}
          color= '#428e92'
          />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f4444',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  FlatList:{
    fontSize: 16, 
    textAlign: 'center',
    marginBottom:20,
    width: '80%',
  },
  itemNaLista:{
    padding: 12,
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:3,
    marginBottom: 3,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center',
  },
  textoDezena:{
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  numeroDezena:{
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  buttons:{
    width: '60%',
    alignSelf:'center'
  },
});
