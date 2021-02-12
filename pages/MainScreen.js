import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity}  from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import moment from "moment"
export default class Splash extends Component{

    
 
static navigationOptions = {
    title: 'Category',
    //headerTransparent: true,
    //headerShown: false,
   
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#64E88F',
      //headerTransparent: true,
      //Sets Header color
    },
    headerTintColor: 'black',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: '18%',
      fontFamily:'Cochin',
      fontSize:25,

      //Sets Header text style
    },
  };

    render(){
        console.disableYellowBox =true;
       /// const { days, hours, mins, secs } = this.state
        return(
          
                <ImageBackground source = {require('../Assets/bg5.jpg')} style = {Styles.bckImg}>
                <View style = {Styles.container}>
                 <TouchableOpacity style = {Styles.col1}
                 onPress = {() => this.props.navigation.navigate('Meet')}>
                            <Image
              style={
          Styles.Image
              }
              source ={require('../Assets/jb.png')}
             ></Image>
                 <Text style ={Styles.headingtext}
                 >
                     Full Time
                   </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style = {Styles.col2}
                       onPress = {() => this.props.navigation.navigate('Dairy')}>
                 
                 <Image
              style={
          Styles.Image
              }
              source ={require('../Assets/jb.png')}
             ></Image>
                 <Text style ={Styles.headingtext}>
                     Part Time
                   </Text>
                 </TouchableOpacity>
                
               
                 <TouchableOpacity style = {Styles.col1}
                 onPress = {() => this.props.navigation.navigate('Beavegers')}>
                            <Image
              style={
          Styles.Image
              }
              source ={require('../Assets/jb.png')}
             ></Image>
                 <Text style ={Styles.headingtext}
                 >
                     Casual
                   </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style = {Styles.col2}
                  onPress = {() => this.props.navigation.navigate('bread')}>
                 <Image
              style={
          Styles.Image
              }
              source ={require('../Assets/jb.png')}
             ></Image>
                 <Text style ={Styles.headingtext}>
                     Fixed Terms
                   </Text>
                 </TouchableOpacity>
                 
              
                 <TouchableOpacity style = {Styles.col1}
                 onPress = {() => this.props.navigation.navigate('JerryG')}>
                            <Image
              style={
          Styles.Image
              }
              source ={require('../Assets/jb.png')}
             ></Image>
                 <Text style ={Styles.headingtext}
                 >
                     Shift Worker
                   </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style = {Styles.col2}
                  onPress = {() => this.props.navigation.navigate('Plife')}
                 >
                 <Image
              style={
          Styles.Image
              }
              source ={require('../Assets/jb.png')}
             ></Image>
                 <Text style ={Styles.headingtext}>
                     Daily Hire
                   </Text>
                 </TouchableOpacity>
           
                
              </View>
          
                </ImageBackground>
       

               )
    }
}
const Styles = StyleSheet.create({
    container :{
        width:'100%',
        height:'100%',
        //marginTop:'20%',
        justifyContent:'center',
        alignItems:'center',
      //   backgroundColor:'white'
    },
 
  col1 :{
    shadowOffset:{height:2,width:2},
    shadowColor:'black',
    shadowOpacity:0.7,
    width:'90%',
    height:'15%',
    //marginTop:'20%',
     justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#993366',
   borderWidth: 5,
   borderBottomColor: 'red',
    display:'flex',
    flexDirection:'row',
    borderBottomEndRadius:15,
    borderTopStartRadius:55,
    // borderBottomWidth:5,
    // borderBottomColor:'black',

    marginTop:'2%'

    //flexDirection:'row'
},
col2 :{
  shadowOffset:{height:2,width:2},
  marginTop:'2%',
  justifyContent:'center',
  shadowColor:'black',
  flexDirection:'row',
  borderBottomWidth: 5,
  borderBottomColor: 'blue',
  shadowOpacity:0.7,
  width:'90%',
  height:'15%',
  //marginTop:'20%',
   justifyContent:'center',
  alignItems:'center',
  backgroundColor:'orange',
  display:'flex',
  
  //borderBottomEndRadius:55,
  //borderTopStartRadius:55,
  borderBottomWidth:5,
  borderBottomColor:'black'

  //flexDirection:'row'
},

    appName:{
        width:'95%',
        height:'10%',
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    TopView:{
        width:'90%',
        height:'30%',
       // marginTop:'20%',
        backgroundColor:'#64E88F',
        justifyContent:'center',
        alignItems:'center',
        shadowOffset:{height:2,width:2},
        shadowColor:'black',
        shadowOpacity:0.7,
        borderBottomEndRadius:55,
        borderTopStartRadius:55,
        borderBottomWidth:25,
        borderBottomColor:'#EB3B9C',
        justifyContent:'space-around'

    },
    headingtext:{
      fontSize:40,
      fontWeight:'bold',
      shadowOffset:{width:1, height:1},
      shadowColor:'white',
      shadowOpacity:0.7,
      fontFamily:'Cochin',
      justifyContent:'center' ,
      textAlign:'center',
      backgroundColor:'white',
      width : 200,
     // marginBottom:'10%',
    },
    HeadingView:{
      width:'90%',
      height:'30%',
     // marginTop:'20%',
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      shadowOffset:{height:2,width:2},
      shadowColor:'black',
      shadowOpacity:0.7
    },
    btnStyles1 :{
        width:'70%',
        height:'100%',
        backgroundColor:'black',
        margin:'5%',
        justifyContent:'center',
        alignItems:'center',
       // marginRight:'30%',
        shadowOffset:{height:2,width:3},
        shadowOpacity:0.9,
        borderWidth:5,
        borderColor:'red',
        borderBottomColor:'white',
        borderBottomWidth : 5,
      
        

    },
  

    
    appText:{
        color:'white',
        fontSize:50,
        fontWeight:'bold',
        shadowOffset:{width:1, height:1},
        shadowColor:'white',
        shadowOpacity:0.7,
        fontFamily:'Cochin',
        justifyContent:'center' ,
        textAlign:'center'
    },
    btnText:{
        fontSize:35,
        fontWeight:'bold',
        fontFamily:'cochin',
         color:'white',
        shadowOffset:{width:1, height:1},
        shadowColor:'black',
        shadowOpacity:1,
    },
    bckImg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
    },
    btnbck:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    appText:{
        color:'white',
        fontSize:50,
        fontWeight:'bold',
        shadowOffset:{width:3, height:3},
        shadowColor:'white',
        shadowOpacity:0.7,
        fontFamily:'Cochin',
        marginBottom : -20
    },
    Image:{
      height: '80%',
      //position:'absolute',
      width: '20%',
      marginRight:'30%',
      //marginBottom: '10%',
      resizeMode: 'contain',
     // marginTop:'15%',
      //tintColor:'red',
      
      shadowOpacity: 0.7,
      shadowOffset: {width: 1, height:1},
      tintColor:'white'
      
    }
})