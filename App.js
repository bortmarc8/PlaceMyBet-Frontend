import * as React from 'react';
import { Image, Text, StatusBar, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { ceil } from 'react-native-reanimated';
import Donut from './Donut'

let ScreenHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
      <StatusBar style="ghjkedsh" />
      <Text style={styles.header1}>Ratio de acierto</Text>
      <Donut style={styles.donutStyle}/>
      <Text style={styles.header2}>Historial de apuestas</Text>
      <View style={styles.historyCard}>
        <View>
          <Text style={styles.text}>FC Barcelona:Bayern Munich</Text>
          <Text style={styles.text}>Tipo de apuesta: OVER</Text>
          <Text style={styles.text}>Mercado: 1.5</Text>
          <Text style={styles.text}>Cantidad apostada: 15€</Text>
          <Text style={styles.text}>Resultado: GANADO</Text>
        </View>
        <View style={styles.imgBackground}>
          <Image style={{width: '100%', height: 40,resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/> 
          <Image style={{width: '100%', height: 40,resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/> 
        </View>
      </View>

      <View style={styles.historyCard}>
  <View>
    <Text style={styles.text}>FC Barcelona:Bayern Munich</Text>
    <Text style={styles.text}>Tipo de apuesta: OVER</Text>
    <Text style={styles.text}>Mercado: 1.5</Text>
    <Text style={styles.text}>Cantidad apostada: 15€</Text>
    <Text style={styles.text}>Resultado: GANADO</Text>
  </View>
  <View style={styles.imgBackground}>
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/> 
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/> 
  </View>
</View>

<View style={styles.historyCard}>
  <View>
    <Text style={styles.text}>FC Barcelona:Bayern Munich</Text>
    <Text style={styles.text}>Tipo de apuesta: OVER</Text>
    <Text style={styles.text}>Mercado: 1.5</Text>
    <Text style={styles.text}>Cantidad apostada: 15€</Text>
    <Text style={styles.text}>Resultado: GANADO</Text>
  </View>
  <View style={styles.imgBackground}>
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/> 
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/> 
  </View>
</View>

<View style={styles.historyCard}>
  <View>
    <Text style={styles.text}>FC Barcelona:Bayern Munich</Text>
    <Text style={styles.text}>Tipo de apuesta: OVER</Text>
    <Text style={styles.text}>Mercado: 1.5</Text>
    <Text style={styles.text}>Cantidad apostada: 15€</Text>
    <Text style={styles.text}>Resultado: GANADO</Text>
  </View>
  <View style={styles.imgBackground}>
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/> 
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/> 
  </View>
</View>

<View style={styles.historyCard}>
  <View>
    <Text style={styles.text}>FC Barcelona:Bayern Munich</Text>
    <Text style={styles.text}>Tipo de apuesta: OVER</Text>
    <Text style={styles.text}>Mercado: 1.5</Text>
    <Text style={styles.text}>Cantidad apostada: 15€</Text>
    <Text style={styles.text}>Resultado: GANADO</Text>
  </View>
  <View style={styles.imgBackground}>
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/> 
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/> 
  </View>
</View>

<View style={styles.historyCard}>
  <View>
    <Text style={styles.text}>FC Barcelona:Bayern Munich</Text>
    <Text style={styles.text}>Tipo de apuesta: OVER</Text>
    <Text style={styles.text}>Mercado: 1.5</Text>
    <Text style={styles.text}>Cantidad apostada: 15€</Text>
    <Text style={styles.text}>Resultado: GANADO</Text>
  </View>
  <View style={styles.imgBackground}>
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/> 
    <Image style={{width: '100%', height: 40,resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/> 
  </View>
</View>
      <View style={{height: 50}}/>
      </ScrollView>
    </View>
  );
}

const Field = () => (
<View style={styles.historyCard}>
  <View>
    <Text style={styles.text}>FC Barcelona:Bayern Munich</Text>
    <Text style={styles.text}>Tipo de apuesta: OVER</Text>
    <Text style={styles.text}>Mercado: 1.5</Text>
    <Text style={styles.text}>Cantidad apostada: 15€</Text>
    <Text style={styles.text}>Resultado: GANADO</Text>
  </View>
  <View style={styles.imgBackground}>
    <Image style={{width: '100%', height: 40, width: 40, resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/> 
    <Image style={{width: '100%', height: 40, width: 40, resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/> 
  </View>
</View>
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#00183B',
  },
  container: {
    height: ScreenHeight,
  },
  header1: {
    flex: 1,
    color: '#55ADD1',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 32,
    alignSelf: 'center',
  },
  header2: {
    flex: 1,
    color: '#55ADD1',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 25,
    alignSelf: 'center',
  },
  historyCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#87B5F9',
    color: '#00183B',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 32,
    marginRight: 32,
  },
  text: {
    flex: 1,
    color: '#00183B',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 16,
  },
  imgBackground: {
    flex: 1,
    backgroundColor: '#55729D',
    borderRadius: 5,
    marginLeft: 20,
    padding: 20,
  },
});
