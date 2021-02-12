import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity}  from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import moment from "moment"
export default class Splash extends Component{

    
 
static navigationOptions = {
    title: 'Home',
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
                 <View style = {Styles.TopView}>
                 {/* <Image
              style={
          Styles.Image
              }
              source ={require('../Assets/device.png')}
             ></Image> */}
                

                <TouchableOpacity style = {Styles.col3}
                    onPress = {() => this.props.navigation.navigate('All')}
                 >
                 <Text style ={Styles.headingtext}>
                   The Money Saver
                   </Text>
                 </TouchableOpacity>






                 </View>
            
                
                 <View style = {Styles.container1}>
                 <TouchableOpacity style = {Styles.col1}
                 onPress = {() => this.props.navigation.navigate('Category')}>
                 <Text style ={Styles.headingtext}
                 >
                     Category
                   </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style = {Styles.col2}
                    onPress = {() => this.props.navigation.navigate('All')}
                 >
                 <Text style ={Styles.headingtext}>
                    All Details
                   </Text>
                 </TouchableOpacity>
                 </View>
              
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
        //backgroundColor:'white'
    }, 
    container1 :{
      width:'90%',
      height:'40%',
      marginTop:'20%',
       justifyContent:'center',
      alignItems:'center',
      display:'flex',
      borderRightWidth:5,
      borderLeftWidth:5,
      borderLeftColor:'black',
      borderTopWidth:25,
      borderRadius:50,
      opacity:0.9,
      backgroundColor:'#AECE9A',
      flexDirection:'row',
      justifyContent:'space-around',
      borderBottomWidth:25,
      shadowOffset:{height:2,width:2},
      shadowColor:'black',
      shadowOpacity:0.7,
  },
  col1 :{
    shadowOffset:{height:2,width:2},
    shadowColor:'black',
   // shadowOpacity:0.7,
   color :'white',
    width:'45%',
    height:'60%',
    //marginTop:'20%',
     justifyContent:'center',
    alignItems:'center',
   backgroundColor:'white',
   
    display:'flex',
    borderLeftWidth:15,
    borderLeftColor:'red',
    //borderBottomEndRadius:55,
    //borderTopStartRadius:55,
    borderBottomWidth:15,
    borderBottomColor:'red'
//color:'white',
    //flexDirection:'row'
},
col2 :{
  //borderBottomEndRadius:55,
  //borderTopStartRadius:55,
  borderBottomWidth:15,
  borderBottomColor:'red',
  borderRightWidth:15,
  borderRightColor:'red',
//  backgroundColor:'#5F8945',

  width:'45%',
  height:'80%',
  //marginTop:'20%',
   justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  display:'flex',
  shadowOffset:{height:2,width:2},
  shadowColor:'black',
  shadowOpacity:0.7,
  //flexDirection:'row'
},
col3 :{
  //borderBottomEndRadius:55,
  //borderTopStartRadius:55,
  borderBottomWidth:15,
  borderBottomColor:'red',
  borderRightWidth:15,
  borderRightColor:'red',
  borderLeftColor:'red',
  borderLeftWidth:15,
//  backgroundColor:'#5F8945',

  width:'75%',
  height:'80%',
  //marginTop:'20%',
   justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  display:'flex',
  shadowOffset:{height:2,width:2},
  shadowColor:'black',
  shadowOpacity:0.7,
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
        borderLeftColor:'black',
        borderLeftWidth:15,
        height:'35%',
       marginTop:'20%',
     backgroundColor:'#9BE1DB',
borderTopColor:'red',
  //     backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center',
        shadowOffset:{height:2,width:2},
        shadowColor:'black',
        shadowOpacity:0.7,
        borderBottomEndRadius:55,
        borderTopStartRadius:55,
        borderBottomWidth:25,
        borderBottomColor:'red',
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
      textAlign:'center'
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
        backgroundColor:'white',
        margin:'5%',
        justifyContent:'center',
        alignItems:'center',
       // color:'white',
        tintColor:'white',
       // marginRight:'30%',
        shadowOffset:{height:2,width:3},
        shadowOpacity:0.9,
        borderWidth:5,
        borderColor:'red',
  
      
        

    },
  

    
    appText:{
        color:'white',
        fontSize:60,
        fontWeight:'bold',
        shadowOffset:{width:1, height:1},
        shadowColor:'white',
        shadowOpacity:0.7,
        fontFamily:'Cochin',
        justifyContent:'center' ,
        textAlign:'center'
    },
    btnText:{
        fontSize:55,
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
       // shadowColor:'white',
        shadowOpacity:0.7,
        fontFamily:'Cochin',
        marginBottom : -40
    },
    Image:{
      height: '100%',
      width: '100%',
      //marginBottom: '10%',
      resizeMode: 'contain',
      //tintColor:'red',
      marginTop:-100,
      backgroundColor:'#D9FAF1',
      borderLeftWidth:15,
      borderRightWidth:15,
      borderRightColor:'#B0B0B0',
      borderTopLeftRadius:50,
      borderBottomRightRadius:50,
      borderBottomColor:'black',
     // borderBottomColor:'red black',
     
      borderLeftColor:'#B0B0B0',
      
      shadowOpacity: 0.7,
      shadowOffset: {width: 1, height:1},
      
    }
})