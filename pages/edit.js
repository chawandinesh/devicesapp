import React, {Component} from 'react';
import {
Image,
ImageBackground,
StyleSheet,
Text,
View,
TouchableOpacity,
SafeAreaView,
Styles,
Style,
ScrollView,
Input
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import { Button } from 'native-base';
//import { } from 'react-native-safe-area-context';
export default class edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voiceOff: false,
      disabled:true,
      vari : null,
      index_num:null,
      pressStatus: false
      
    }
  }
static navigationOptions = {
title: '  Details',
//Sets Header text of Status Bar

headerStyle: {
  backgroundColor: '#64E88F',
//Sets Header color
},
headerTintColor: 'black',
//Sets Header text color
headerTitleStyle: {
fontWeight: 'bold',
marginLeft: '28%',

//Sets Header text style
},
};

render(item) {
  
  const { navigation } = this.state; 
  
 

     const vari = this.props.navigation.getParam('data','item'); 
  
  const index_num = this.props.navigation.getParam('index','0'); 
  //console.log(default_Data)
  const array = this.props.navigation.getParam('arr');
  const {photo, Name, id,place} = this.props.navigation.state.params;
 
return (
  <SafeAreaView style = {{backgroundColor:'#091D4F'}}>
            
 

  <View style = {styles.container}>
  <View style = {styles.imageView}>
  <TouchableOpacity style ={{height:'100%',    shadowOffset :{width:2, height:3},
shadowColor:'black',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row',
shadowOpacity: 0.6,width:'100%',resizeMode:'contain'}}
  >
    
<View style ={{height:'100%',    shadowOffset :{width:2, height:3},
shadowColor:'black',borderRadius:5,
shadowOpacity: 0.6,width:'50%',resizeMode:'contain'}}

           >
             <ImageBackground     style ={{height:'95%',    shadowOffset :{width:2, height:3},
shadowColor:'black',
shadowOpacity: 0.6,width:'90%',resizeMode:'contain',borderRadius:50}}
source ={require('../Assets/Def.png')}>



<Image
 source ={this.props.navigation.state.params.data.photo}

// defaultSource={{uri:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'}}
style ={{height:'100%',    shadowOffset :{width:2, height:3},
shadowColor:'black',
shadowOpacity: 0.6,width:'90%',resizeMode:'cover',borderRadius:50}}
//defaultSource ={require('../Assets/d.png')}

/>


</ImageBackground>
</View>

  </TouchableOpacity>
  </View>
  
  <View style = {styles.Container}>
              
          
                 
            
                
              <View style = {styles.container1}>
              <TouchableOpacity style = {styles.col1}
            >
                         <Image
           style={
       styles.Image
           }
           source ={require('../Assets/category.png')}
          ></Image>
              <Text style ={styles.headingtext}
              >
                  Type
                </Text>
                <Text>{this.props.navigation.state.params.data.type}</Text>
              </TouchableOpacity>
              <View style = {styles.col2}>
              <Image
           style={
       styles.Image
           }
           source ={require('../Assets/name.png')}
          ></Image>
              <Text style ={styles.headingtext}>
                 Device Name
                </Text>
                <Text>{this.props.navigation.state.params.data.date}</Text>
              </View>
              </View>
              <View style = {styles.container1}>
              <TouchableOpacity style = {styles.col1}
             >
                         <Image
           style={
       styles.Image
           }
           source ={require('../Assets/count.png')}
          ></Image>
              <Text style ={styles.headingtext}
              >
                  Quantity
                </Text>
                <Text>{this.props.navigation.state.params.data.buy}</Text>
              </TouchableOpacity>
              <View style = {styles.col2}>
              <Image
           style={
       styles.Image
           }
           source ={require('../Assets/cash.png')}
          ></Image>
              <Text style ={styles.headingtext}>
                  Device Price
                </Text>
                <Text>{this.props.navigation.state.params.data.quant}</Text>
              </View>
              </View>
              <View style = {styles.container1}>
              <TouchableOpacity style = {styles.col1}
            >
                         <Image
           style={
       styles.Image
           }
           source ={require('../Assets/details.png')}
          ></Image>
              <Text style ={styles.headingtext}
              >
                  Details
                </Text>
                <Text>{this.props.navigation.state.params.data.details}</Text>
              </TouchableOpacity>
            
              </View>
           
             </View>



    
 <TouchableOpacity style={{width:'100%',height:'10%',alignItems:'center',alignItems:'center',justifyContent:'center',shadowOffset: {width: 3, height:3},
shadowOpacity: 0.7,display:"flex",flexDirection:'row', marginLeft:'80%'}}
  onPress = {()=> {this.props.navigation.navigate('edit1',{vari,index_num})}}>
   <Image
              style={{
                height: '100%',
                width: '100%',
                marginBottom: '-15%',
                resizeMode: 'contain',
                //tintColor:'red',
                
                shadowOpacity: 0.7,
                shadowOffset: {width: 3, height:3},
                
              }}
              source ={require('../Assets/edit.png')}
             ></Image>
  
  </TouchableOpacity>
</View>







 



</SafeAreaView>
)
}
}

const styles = StyleSheet.create(
  
{
container:{
width:'95%',
height:'90%',
backgroundColor:'lightgray',
//justifyContent:'center',
alignItems:'center',
marginTop:'10%',
marginLeft:'2.5%',
shadowOffset:{width:2, height:2},
shadowColor:'black',
shadowOpacity:0.7,
//borderRadius:25,
// borderWidth:3,
borderColor:'yellow'

},
headingtext:{
  fontSize:20,
  fontWeight:'bold',
  shadowOffset:{width:1, height:1},
  shadowColor:'white',
  shadowOpacity:0.7,
  fontFamily:'Cochin',
  justifyContent:'center' ,
  textAlign:'center'
},
Container :{
  width:'100%',
  height:'60%',
  //marginTop:'20%',
  // justifyContent:'center',
  alignItems:'center',
  //backgroundColor:'white'
},
container1 :{
width:'99%',
height:'37%',
//marginTop:'20%',
 justifyContent:'center',
alignItems:'center',
//backgroundColor:'white',
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
borderBottomEndRadius:55,
borderTopStartRadius:55,
//borderBottomWidth:25,
//borderBottomColor:'#EB3B9C',
shadowOffset:{height:2,width:2},
shadowColor:'black',
shadowOpacity:0.7,

},
col1 :{
shadowOffset:{height:2,width:2},
shadowColor:'black',
shadowOpacity:0.7,
width:'45%',
height:'90%',
//marginTop:'20%',
justifyContent:'center',
alignItems:'center',
backgroundColor:'gray',
display:'flex',

borderBottomWidth:2,
borderBottomColor:'red'

//flexDirection:'row'
},
col2 :{

borderBottomWidth:5,
borderBottomColor:'red',

width:'45%',
height:'90%',
//marginTop:'20%',
justifyContent:'center',
alignItems:'center',
backgroundColor:'gray',
display:'flex',
shadowOffset:{height:2,width:2},
shadowColor:'black',
shadowOpacity:0.7,
//flexDirection:'row'
},

imageView:{
width:'100%',
height:'25%',
//borderBottomEndRadius:55,
   borderColor:'red',
   borderWidth:5,
      //borderBottomWidth:25,
      //borderBottomColor:'#EB3B9C',
      shadowOffset:{height:2,width:2},
      shadowColor:'black',
      shadowOpacity:1,
backgroundColor:'gray',
justifyContent:'center',
alignItems:'center',

// borderBottomRadius:55,
//marginTop:'-12%',
//marginLeft:'2.5%',
// shadowOffset:{width:2, height:2},
//shadowColor:'black',
//shadowOpacity:0.7,
//borderRadius:25,
// borderWidth:3,
//borderColor:'yellow'

},

txtStyle:{
fontSize:22,
color:'white',
fontWeight:'bold',
textTransform:'uppercase'
},
txtStyle1:{
fontSize:25,
color:'white',
fontWeight:'bold',
textTransform:'uppercase',
textAlign:'center',
fontFamily: "Times New Roman",
fontWeight:'bold'

},
headrStyle:{
backgroundColor:'#3700b3'
},
inputContainer:{
backgroundColor:'#fffdd0',
width:'90%',
height:'35%',
borderRadius:20,
borderWidth:5,
borderColor:'#bb86fc',
//borderWidth:2
shadowOffset:{width:2, height:2},
shadowColor:'black',
shadowOpacity:0.7,

},
addBtn:{
backgroundColor:'#9842f5',
width:'100%',
height:'13%',
borderBottomLeftRadius:20,
borderBottomRightRadius:20,
justifyContent:'center'
},

heading:{
fontSize:20,
////marginLeft:'0%',
marginBottom:'2%',
marginTop:'2%',
fontWeight:'bold',
color:'white',
textTransform:'uppercase',
shadowOffset:{width:5, height:5},

shadowOpacity:0.7
},
heading1:{
fontSize:20,
//marginLeft:'0%',
marginBottom:'2%',
marginTop:'2%',
fontWeight:'bold',
color:'#022d',
textTransform:'uppercase',
shadowOffset:{width:0.5, height:0.5},
shadowColor:'#de12a4',
shadowOpacity:0.7
},
heading:{
fontSize:20,
marginLeft:'5%',
marginBottom:'2%',
marginTop:'2%'
},

headerBtnTxt:{
fontSize:20,
textAlign:'center',
fontWeight:'bold',

shadowOffset:{width:0.5, height:0.5},
shadowColor:'gray',
shadowOpacity:0.7,
},
borderText:{
  fontSize:20,
  textAlign:'center',
         fontWeight:'bold',
         color:'white',
        
         shadowOffset:{width:0.5, height:0.5},
           shadowColor:'gray',
           shadowOpacity:0.7,
           fontFamily:'Cochin'
},
Image:{
  height: '30%',
  width: '100%',
  marginBottom: '10%',
  resizeMode: 'contain',
  //tintColor:'red',
  
  shadowOpacity: 0.7,
  shadowOffset: {width: 1, height:1},
  //tintColor:'red'
  
}

}

)//