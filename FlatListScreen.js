import React, {Component} from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { ListaFlatList } from './components/ListaFlatList';
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export class FlatListScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            eventsArray:[
                {local: 'Kraken', visitor: 'G2'}, 
                {local: 'Razer', visitor: 'Blade'}, 
                {local: 'Valencia', visitor: 'Madrid'}, 
                {local: 'Arsenal', visitor: 'Barcelona FC'}]
        }
    }


    render() {
        return(
            <View style={styles.mainContainer}>
                <FlatList
                data={this.state.eventsArray}
                keyExtractor={(item, index)=>index.toString()}
                renderItem={(item) => (<ListaFlatList eventsArray={item} />)}
                />
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