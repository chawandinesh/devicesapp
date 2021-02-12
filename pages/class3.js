
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
    title: 'Friends',
   
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: 'black',
      //Sets Header color
    },
    headerTintColor: 'white',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: '28%',
      fontFamily:'Cochin'

      //Sets Header text style
    },
  };


  constructor(props) {
    super(props);
  
    
    this.state = {
    
      text:'Friends',
    
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
      
       alert('Nothing Added yet. Please tap on "+" button to add Gift')
       
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
  

 
    if (item.type == 'Friends'){
      return (
     
       
            
        <View style={Styles.container}
          
        >
          
          <View style ={Styles.btnContainer}>
            <View style={Styles.btnStyles2}>
              <Image
                source={item.photo}
                defaultSource={require('../Assets/d.png')}
              
                style={Styles.dishImg
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
                    fontSize: 18,
                    
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
                  uri: 'https://img.over-blog-kiwi.com/1/22/82/35/20141023/ob_bca3cb_a0912d48-8ba5-4769-bc80-5571c5673ab5.png',
                }}></Image>
            </TouchableOpacity>
         
          </View>
          <View style ={{height:'8%',width:'100%',backgroundColor:'',marginTop:'-1%',marginLeft:'-5%'}}></View>
      </View>
  
  );
          }
          else if(this.state.arr.length=0){
            return (
              <View style ={{height:'40%',width:'50%',backgroundColor:'red'}}>
                <Text>ram</Text>
              </View>
            )
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
      source={require('../Assets/bg1.jpg')}>
      <View style={Styles.MainContainer}>
      <View style={Styles.Container}>
     
     
          <FlatList
               style={Styles.container1}
          bounces={false}
          alwaysBounceHorizontal={false}
        
            data={this.state.arr}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
          />
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
  margin: 10,
flex:1,
  alignItems:'center',
  
},

btnStyles7: {
  width: '70%',
  height:'80%',
  margin: '1%',
  justifyContent: 'center',
  //alignItems: 'center',
  backgroundColor:'black',

  opacity: 50,
  shadowOffset: {width: 2, height: 3},
  
   shadowOpacity: 0.9,

  
  
  
  

},

Container: {
flex:1,
  width: '100%',
  alignItems: 'center',

  margin: 10,


  borderRadius: 20,
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
  backgroundColor:'black'
},
btnStyles1: {
  width: '53%',
height:'80%',

  margin: '1%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'red',

  opacity: 50,
  shadowOffset: {width: 0.5, height: 0.5},
  
   shadowOpacity: 0.8,
  
  
  

},
btnStyles4: {
  width: '18%',
  height:'50%',
  margin: '1%',
  justifyContent: 'center',
  alignItems: 'center',
  


  opacity: 50,

  shadowOffset: {width: 2, height: 3},
  
   shadowOpacity: 0.9,
  
  
  
  

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
  height:'80%',
  margin: '1%',
  justifyContent: 'center',
  //alignItems: 'center',
  

  opacity: 50,
  borderRadius:40,
  
  
  shadowOffset: {width: 2, height: 3},
  
   shadowOpacity: 0.9,
  
  
  
  

},

btnText: {
  fontSize: 18,
  textDecorationLine: 'underline',
  fontWeight: 'bold',
  fontFamily: 'cochin',
  color: 'white',
  shadowOffset: {width: 3, height: 3},
 // shadowColor: 'white',
  shadowOpacity: 1,
  marginRight: '-10%',
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





});