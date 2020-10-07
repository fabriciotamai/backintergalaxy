import 'react-native-gesture-handler';


import React from 'react';


import { View, StatusBar} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

const App : React.FC = () => (

  <NavigationContainer>


    <StatusBar barStyle="light-content" backgroundColor="#131413"/>
    <View style={{ flex:1, backgroundColor:'#131413'}}>
    <Routes/>
    </View>
  </NavigationContainer>
)

export default App;