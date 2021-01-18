import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Input } from 'react-native';
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export class ListaFlatList extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return(
            <View style={styles.historyCard}>
                <View style={styles.dataCard}>
                <View style={styles.tipoApuesta}><View style={{ width: '38%', margin: 2}}><Button title="OVER"/></View><View style={{ width: '38%', margin: 2}}><Button title="UNDER"/></View></View>
                <View style={styles.tipoApuesta}><View style={{ width: '25%', margin: 2}}><Button title="1.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="2.5"/></View><View style={{ width: '25%', margin: 2}}><Button title="3.5"/></View></View>
                <View style={styles.tipoApuesta}><View style={{ width: '82%', margin: 2, marginBottom: -25}}><Input keyboardType = 'numeric' inputContainerStyle={{borderBottomWidth:0}} style={{ height: 10, marginLeft: -10, color: 'white', backgroundColor: '#2289dc', borderRadius: 3, margin: 2}}/></View></View>
                <View style={styles.tipoApuesta}><View style={{ width: '78%', margin: 2}}><Button title="APOSTAR"/></View></View>
                </View>
                <View style={styles.imgBackground}>
                    <Text>{this.props.eventsArray.item.local}</Text>
                    <Text>{this.props.eventsArray.item.visitor}</Text>
                </View>
            </View>
        );
    }
}

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