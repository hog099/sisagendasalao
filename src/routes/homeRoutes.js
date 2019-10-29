import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';


import Home from '../home/index';



const StackNavigator = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);


const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarIcon: <Icon name="home" size={25} color="#fff" />,
      },
    },
    Perfil: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarIcon: <Icon name="user" size={25} color="#fff" />,
      },
    },
    Agendamentos: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarIcon: <Icon name="list" size={25} color="#fff" />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#bdd7e5',
      activeBackgroundColor: '#a369bb',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#9B59B6',
      },
    },
  },
);

const Routes = createAppContainer(MainNavigator);
export default Routes;
