import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  BgImg: {
    height: "100%",
    width: "100%",
  },
  mainContainer: {
    backgroundColor: '#00183B',
    minHeight: "100%",
    height: "100%",
    width: "100%",
  },
  MainView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: '15%',
    marginBottom: '20%',
    padding: 15,
    marginLeft: 50,
    marginRight: 50,
    flex: 150,
    backgroundColor: '#FFFFFF',
  },
  header1: {
    marginTop: '10%',
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
    marginLeft: 0,
    padding: 20,
    minWidth: 100,
    marginLeft: -35,
    height: '100%',
  },
  dataCard:{
    minWidth: '75%',
    maxWidth: '75%',
  },
  tipoApuesta: {
    flexDirection: 'row',
  },
});

export {Styles};
