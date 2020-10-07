import React from 'react';

import { createStackNavigator} from '@react-navigation/stack';

import Logon from '../pages/Logon';
import Logout from '../pages/Logout';
import Home from '../pages/Home';


const Auth = createStackNavigator();

const AuthRoutes  : React.FC = () =>(
    <Auth.Navigator screenOptions={{
        cardStyle:{
            backgroundColor:'#312e38'
        },

        headerShown:false,
    }}
  
    
    
    >   

       <Auth.Screen name="Home" component={Home}/>   
       
        <Auth.Screen name="Logon" component={Logon}/>
        <Auth.Screen name="Logout" component={Logout}/>


    </Auth.Navigator>





    );


    export default AuthRoutes;

  






