//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
//import Splash from './pages/Splash';
import Splash from './pages/Splash';
import FirstScreen from './pages/FirstScreen';
import MainScreen from './pages/MainScreen';

import edit from './pages/edit';
import edit1 from './pages/edit1';

import All from './pages/All';
import Beavegers  from './pages/Beavegers';
import Cleaners  from './pages/Cleaners';
import JerryG  from './pages/JerryG';
import Plife  from './pages/Plife';
import bread  from './pages/bread';
import others  from './pages/others';
import Meet from './pages/Meet';
import Dairy from './pages/Dairy';


//import Keyboard from './Keyboard'
//import Animation from './Animation'

//import SecondPage from './pages/SecondPage';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    //AddData: { screen: FirstScreen }, 
    Home: { screen: Splash}, 
    Category: { screen: MainScreen }, 
    AddData: { screen: FirstScreen }, 
    Beavegers: { screen:  Beavegers }, 
    Cleaners: { screen:  Cleaners }, 
    JerryG: { screen:  JerryG }, 
    Plife: { screen:  Plife }, 
    bread: { screen:  bread }, 
    others: { screen:  others }, 
    Meet:{screen:Meet},
    Dairy :{
      screen:Dairy
    },
    //clothes
 
    edit: { screen: edit }, 
    edit1: { screen: edit1 },
  
    All:{screen:All},
    
  //personal care
    //First entry by default be our first screen if we do not define initialRouteName
   // SecondPage: { screen: SecondPage }, 
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);