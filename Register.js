import * as React from 'react';
import { Image, Text, StatusBar, View, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <View style={styles.mainContainer}>
    <ImageBackground source={require('./Resources/bgPlaceMyBet.jpg')} style={styles.BgImg}>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.header1}>PlaceMyBet</Text>
          <View style={styles.MainView}>
            <Text style={styles.header2}>Register</Text>
            <Input placeholder='Nombre' errorStyle={{ color: 'red' }} errorMessage='Apellidos incorrectos' rightIcon={<Icon name='user' size={24} color='darkblue'/>}/>
            <Input placeholder='Apellidos' errorStyle={{ color: 'red' }} errorMessage='Apellidos incorrectos' rightIcon={<Icon name='user' size={24} color='darkblue'/>}/>
            <Input placeholder='00/00/0000' errorStyle={{ color: 'red' }} errorMessage='Fecha incorrecta' rightIcon={<Icon name='calendar' size={24} color='darkblue'/>}/>
            <Input placeholder='Email' errorStyle={{ color: 'red' }} errorMessage='Email incorrecto' rightIcon={<Icon name='user' size={24} color='darkblue'/>}/>
            <Input secureTextEntry={true} placeholder='Contraseña' rightIcon={<Icon name='lock' size={24} color='darkblue'/>} errorStyle={{ color: 'red' }} errorMessage='Contraseña incorrecta'/>
            <Input secureTextEntry={true} placeholder='Repetir contraseña' rightIcon={<Icon name='lock' size={24} color='darkblue'/>} errorStyle={{ color: 'red' }} errorMessage='Contraseña incorrecta'/>
            <View style={{ width: '100%', paddingTop: 15}}><Button containerViewStyle={{width: '100', marginLeft: 0}} title="Crear cuenta"/></View>
            <View style={{ width: '100%', paddingTop: 15}}><Button containerViewStyle={{width: '100', marginLeft: 0}} title="Ya tengo mi cuenta" type="clear"/></View>
          </View>
          </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  BgImg: {
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    minHeight: "100%",
    height: "100%",
    width: "100%",
  },
  MainView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: (ScreenHeight/10),
    marginBottom: (ScreenHeight/5),
    padding: 15,
    marginLeft: 50,
    marginRight: 50,
    flex: 150,
    backgroundColor: '#FFFFFF',
  },
  header1: {
    marginTop: (ScreenHeight/20),
    color: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 32,
    alignSelf: 'center',
  },
  header2: {
    flex: 1,
    color: '#00183B',
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
