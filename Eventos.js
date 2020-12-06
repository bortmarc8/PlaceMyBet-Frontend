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
    <Input inputContainerStyle={{borderBottomWidth:0}} style={{ height: 20, color: 'white' ,backgroundColor: '#2289dc', borderRadius: 3, margin: 20, marginBottom: 5}} rightIcon={<Icon name='search' size={32} color='#2289dc'/>}/>
      <ScrollView style={Styles.mainContainer}>
      <View style={Styles.historyCard}>
        <View style={Styles.dataCard}>
          <View style={Styles.tipoApuesta}><View style={{ width: '38%', margin: 2}}><Button title="OVER"/></View><View style={{ width: '38%', margin: 2}}><Button title="UNDER"/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '25%', margin: 2}}><Button title="1.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="2.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="3.5"/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '82%', margin: 2, marginBottom: -25}}><Input keyboardType = 'numeric' inputContainerStyle={{ borderBottomWidth:0 }} style={{ justifyContent: 'flex-end', height: 10, marginLeft: -10, color: 'white', backgroundColor: '#2289dc', borderRadius: 3, margin: 2}}/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '78%', margin: 2}}><Button title="APOSTAR"/></View></View>
        </View>
        <View style={Styles.imgBackground}>
          <Image style={{width: '100%', height: '45%',resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/>
          <Image style={{width: '100%', height: '45%',resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/>
        </View>
      </View>
      <View style={Styles.historyCard}>
        <View style={Styles.dataCard}>
          <View style={Styles.tipoApuesta}><View style={{ width: '38%', margin: 2}}><Button title="OVER"/></View><View style={{ width: '38%', margin: 2}}><Button title="UNDER"/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '25%', margin: 2}}><Button title="1.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="2.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="3.5"/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '82%', margin: 2, marginBottom: -25}}><Input keyboardType = 'numeric' inputContainerStyle={{borderBottomWidth:0}} style={{ height: 10, marginLeft: -10, color: 'white', backgroundColor: '#2289dc', borderRadius: 3, margin: 2}}/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '78%', margin: 2}}><Button title="APOSTAR"/></View></View>
        </View>
        <View style={Styles.imgBackground}>
          <Image style={{width: '100%', height: '45%',resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/>
          <Image style={{width: '100%', height: '45%',resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/>
        </View>
      </View>
      <View style={Styles.historyCard}>
        <View style={Styles.dataCard}>
          <View style={Styles.tipoApuesta}><View style={{ width: '38%', margin: 2}}><Button title="OVER"/></View><View style={{ width: '38%', margin: 2}}><Button title="UNDER"/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '25%', margin: 2}}><Button title="1.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="2.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="3.5"/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '82%', margin: 2, marginBottom: -25}}><Input keyboardType = 'numeric' inputContainerStyle={{borderBottomWidth:0}} style={{ height: 10, marginLeft: -10, color: 'white', backgroundColor: '#2289dc', borderRadius: 3, margin: 2}}/></View></View>
          <View style={Styles.tipoApuesta}><View style={{ width: '78%', margin: 2}}><Button title="APOSTAR"/></View></View>
        </View>
        <View style={Styles.imgBackground}>
          <Image style={{width: '100%', height: '45%',resizeMode : 'stretch', marginBottom: 10}} source={require('./Resources/equipo2.png')}/>
          <Image style={{width: '100%', height: '45%',resizeMode : 'stretch' }} source={require('./Resources/equipo1.png')}/>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
