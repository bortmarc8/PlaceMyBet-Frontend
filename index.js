import { registerRootComponent } from 'expo';
import HistorialApuestas from './HistorialApuestas';
import Login from './Login';
import Register from './Register';
import Eventos from './Eventos';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Eventos);
