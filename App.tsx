import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Amplify, { DataStore, Hub, Auth } from "aws-amplify";
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

import {
  Text,
  StyleSheet,
  Image,
  View,
  FlatList
} from 'react-native';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  Auth.currentAuthenticatedUser().then(console.log);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}


export default withAuthenticator(App)