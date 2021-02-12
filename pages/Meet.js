
import React, {Component} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,

  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  AsyncStorage
 
  
} from 'react-native';
import {Container, Content, Button} from 'native-base';




import {StackNavigator} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
const extractKey = ({date}) => date;
export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Full Time',
   
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#64E88F',
      //Sets Header color
    },
    headerTintColor: 'black',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: '20%',
      fontFamily:'Cochin'

      //Sets Header text style
    },
  };


  constructor(props) {
    super(props);
  
    
    this.state = {
    
    text:'Home',
    
arr:[],
      
    };
    
  }    



  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('mylist');
      if (value !== null) {
        // We have data!!
    
        this.setState({ arr: JSON.parse(value) })
        
      }else{
      
       alert('Nothing Added yet. Please tap on "+" button to add Item')
       
      }
    } catch (error) {
      // Error retrieving data
    
    }
  };
  
 async componentDidMount () {
    this.retrieveData();
    
    this.focusListener = this.props.navigation.addListener('didFocus', () => {


    })
  }
  removePeople = async (index) => {
    var array = [...this.state.arr]; 
    if (index > -1) {
      array.splice(index,1);
      this.setState({arr: array});}
    
    
    try {
      await AsyncStorage.setItem('mylist',JSON.stringify(this.state.arr));
    } catch (error) {
     
    }
  }
 
  loadQuiz = (index) => {
    const {arr} = this.state
    Data = arr[index]
    console.log('data====',Data)
}

  renderItem = ({item, index}) => {
  

 
    if (item.type == 'Home'){
      return (
     
       
            
        <View style={Styles.container}
          
        >
          
          <View style ={Styles.btnContainer}>
            <View style={Styles.btnStyles2}>
              <Image
                source={item.photo}
                defaultSource={require('../Assets/d.png')}
              
                style={Styles.dishImg1
                }></Image>
            </View>
            
              <TouchableOpacity style = {Styles.btnStyles1}
           onPress = {()=> {this.loadQuiz(index),this.props.navigation.navigate('edit',{data:item,index })} }    
              >
                <Text
                  style={Styles.btnText}
                 >
                  {item.date}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold',  
  
                  }}>
                  {item.type}
                </Text>
              </TouchableOpacity>
            
  
        
            <TouchableOpacity
              style={Styles.btnStyles4}
              onPress={() => this.removePeople([index])}
          >
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                 // marginBottom: '10%',
                  resizeMode: 'contain',
                  tintColor:'red'
                  
          
                  
                }}
                source={{
                  uri: 'https://www.iconfinder.com/icons/34217/close_delete_remove_icon',
                }}></Image>
            </TouchableOpacity>
         
          </View>
          <View style ={{height:'8%',width:'100%',backgroundColor:'red',marginTop:'-1%',marginLeft:'-5%'}}></View>
      </View>
  
  );
          }
};

render() {
  const inxx = this.props.navigation.getParam('num');
  const{value}=this.state

  
   
  
  

  return (  <SafeAreaView
    style={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    <ImageBackground
      style={{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
      }}
      source={require('../Assets/bg.jpeg')}>
      <View style={Styles.MainContainer}>
      <View style={Styles.Container}>
      <TouchableOpacity
                style={Styles.btnContainer7}
                onPress={() => this.props.navigation.navigate('AddData',{value:this.state.text})}>
               
              
                <View style={Styles.btnStyles7}
               
                >
                  <Text style={Styles.btnText}>Click on '+' icon to Add a new Detail</Text>
            </View>
                <TouchableOpacity style={Styles.btnStyles8} onPress={() => this.props.navigation.navigate('AddData',{value:this.state.text})}>
                <Image
                    source={require('../Assets/plus.png')
                   }
                    style={Styles.dishImg}></Image>
  
                </TouchableOpacity>
           </TouchableOpacity>
     
          <FlatList
               style={Styles.container1}
          bounces={false}
          alwaysBounceHorizontal={false}
        
            data={this.state.arr}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
          />
          
       
        </View>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );

}
}

const Styles = StyleSheet.create({
MainContainer: {
  alignItems: 'center',
  width:'100%',
  //margin: 10,
flex:1,
  alignItems:'center',
  //backgroundColor:'white'
  
},

btnStyles7: {
  width: '68%',
  height:'80%',
  margin: '1%',
  justifyContent: 'center',
  borderBottomEndRadius:5,
  borderTopStartRadius:5,
  borderBottomColor:'blue',
  shadowOffset:{height:2,width:2},
  shadowColor:'black',
  shadowOpacity:0.7,
  backgroundColor:'blue',
  opacity: 50,
  marginLeft:'5%',
  shadowOffset: {width: 2, height: 3},
   shadowOpacity: 0.9,
},

Container: {
flex:1,
  width: '100%',
  alignItems: 'center',

  margin: 10,


  // borderRadius: 20,
  alignItems:'center',

},
btnStyles8: {
  width: '30%',
  height:'80%',
  margin: '1%',
  justifyContent: 'center',
  alignItems: 'center',
  //backgroundColor:'white',

  opacity: 50,

  shadowOffset: {width: 2, height: 3},
  
   shadowOpacity: 0.9,
},
btnContainer7: {
  width: '100%',
  
  //backgroundColor:'green',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  margin: '3%',
  height:'15%',
  marginRight:'8%',
//borderWidth:2,
//borderColor:'#004953',
 // borderBottomEndRadius:15,
 

  
  //borderRadius: 25,
  //borderBottomStartRadius:25,
  //borderTopStartRadius:25,
  shadowOffset: {width: 2, height: 3},
  justifyContent:'space-between',
 
  shadowOpacity: 0.9,
  backgroundColor:'transparent'
},

container: {
  width: '100%',
flex:1,
//marginTop:'100%',


  alignItems: 'center',
  marginTop: '3%',

  flexDirection:'column'

  // backgroundColor:'yellow',
},

btnContainer: {
  width: '95%',
height:'90%',
//marginTop:'40%',


  
  //backgroundColor:'green',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  margin: '3%',
  //marginRight:'10%',
  marginLeft:'-2%',

  
  borderColor:'black',
  borderWidth:3,
  //borderBottomEndRadius:55,
  //borderBottomStartRadius:55,

  
 // borderRadius: 5,
  shadowOffset: {width: 2, height: 3},
 
  shadowOpacity: 0.9,
  backgroundColor:'blue',
  // borderBottomEndRadius:55,
  // borderTopStartRadius:55,
  //borderBottomWidth:25,
  //borderBottomColor:'#EB3B9C',
  shadowOffset:{height:2,width:2},
  shadowColor:'black',
  shadowOpacity:0.7,
},
btnStyles1: {
  width: '53%',
height:'80%',

  margin: '1%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'gray',

  opacity: 50,
  shadowOffset: {width: 0.5, height: 0.5},
  
   shadowOpacity: 0.8,
  
  
  

},
btnStyles4: {
  width: '22%',
  height:'100%',
  margin: '1%',
  justifyContent: 'center',
  alignItems: 'center',
  


  opacity: 50,

  shadowOffset: {width: 2, height: 3},
  
   shadowOpacity: 0.9,
   borderWidth:4,
   borderColor:'red',
  
   backgroundColor:'white',
  
   //borderBottomWidth:25,
   borderBottomColor:'#EB3B9C',
   shadowOffset:{height:2,width:2},
   shadowColor:'black',
   shadowOpacity:0.7,
  
  
  
  

},

btnStyles3: {
  width: '18%',
  height:'50%',
  margin: '1%',
  justifyContent: 'center',
  alignItems: 'center',
  
  marginLeft:'5%',
  marginTop:'10%',

  opacity: 50,

  shadowOffset: {width: 2, height: 3},
  
   shadowOpacity: 0.9,
  
  
  
  

},
btnStyles2: {
  width: '25%',
  height:'110%',
  //margin: '1%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'white',
  

  opacity: 50,
  //borderRadius:40,
  borderColor:'red',
  borderWidth:4,
  
  
  shadowOffset: {width: 2, height: 3},
  
   shadowOpacity: 0.9,
  marginLeft:'-2%',
  
  //borderBottomWidth:25,
  //borderBottomColor:'#EB3B9C',
  shadowOffset:{height:2,width:2},
  shadowColor:'black',
  shadowOpacity:0.7,
  
  
  

},

btnText: {
  fontSize: 25,
  textDecorationLine: 'underline',
  fontWeight: 'bold',
  fontFamily: 'cochin',
  color: 'white',
  textAlign:'justify',
  shadowOffset: {width: 3, height: 3},
 // shadowColor: 'white',
  shadowOpacity: 0.4,
  //marginRight: '-10%',
},

bckImg: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  //marginTop:'-10%',
  justifyContent: 'center',
  alignItems: 'center',
},
dishImg: {
  width: '100%',
  height: '100%',
  marginTop:'-15%',
  marginLeft:'-12%',


  resizeMode: 'contain',
  alignItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  //tintColor:'#004953',
  
  borderRadius: 50,
},
dishImg1: {
  width: '80%',
  height: '60%',
  shadowOffset: {width: 2, height: 3},
 
  shadowOpacity: 0.4,
  //marginTop:'-15%',
  marginLeft:'2%',


  resizeMode: 'contain',
  alignItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  //tintColor:'#004953',
  
  //borderRadius: 50,
},




});