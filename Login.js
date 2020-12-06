import * as React from 'react';
import { Image, Text, StatusBar, View, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from './styles' ;

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <View style={Styles.mainContainer}>
      <ImageBackground source={require('./Resources/bgPlaceMyBet.jpg')} style={Styles.BgImg}>
        <ScrollView>
        <Text style={Styles.header1}>PlaceMyBet</Text>
          <View style={Styles.MainView}>
            <Text style={Styles.header2}>Login</Text>
            <Input placeholder='Usuario' rightIcon={<Icon name='user' size={24} color='darkblue'/>} errorStyle={{ color: 'red' }} errorMessage='Nombre de usuario incorrecto'/>
            <Input secureTextEntry={true} placeholder='password' rightIcon={<Icon name='lock' size={24} color='darkblue'/>} errorStyle={{ color: 'red' }} errorMessage='Contraseña incorrecta'/>
            <View style={{ width: '100%', paddingTop: 15}}><Button containerViewStyle={{width: '100', marginLeft: 0}} title="Iniciar Sesión"/></View>
            <View style={{ width: '100%', paddingTop: 15}}><Button title="Acceder como invitado"/></View>
            <View style={{ width: '100%', paddingTop: 15}}><Button containerViewStyle={{width: '100', marginLeft: 0}} title="Crear una cuenta nueva" type="clear"/></View>
          </View>
          </ScrollView>
        </ImageBackground>
    </View>
  );
}
