import React, {Component, Fragment} from 'react';
import { View , Text ,TouchableOpacity, StyleSheet,Keyboard, Image,ScrollView,Button, AsyncStorage,ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Header, Left, Right, Icon, Input, } from 'native-base';
import { SafeAreaView } from 'react-navigation';
//import SearchableDropdown from 'react-native-searchable-dropdown';
//import ImagePicker from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-picker';
import { ImagePicker } from 'react-native-image-picker'
//import Animation from '../Animation';


//import ImagePicker from 'react-native-image-picker';
//import DatePicker from 'react-native-datepicker'











export default class Home extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          value:'',
          url:null,
          arr : [],
          type:'',
          photo:null,
          date:'',
          photo1:'',
          quant:'',
          details:'',
          buy:'',

          selectedItems: [
            {
              
            },
            
          ]
     
        };
        
      }
      static navigationOptions = {
        title: 'Add Detail',
       
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

      
      storeData = async () => {
        const obj = {
        type:this.state.type, 
        //photo1:this.state.photo1,
        'photo':this.state.photo,
        'date':this.state.date,
        quant:this.state.quant,
        details:this.state.details,
        buy:this.state.buy,
      };  
      
        var lists = this.state.arr;
        lists.push(obj);
          this.setState({
          arr: lists
          });
        
          alert('added successfully in your Selected Category')
         
        
    
    
        try {
          await AsyncStorage.setItem('mylist',JSON.stringify(this.state.arr));
        } catch (error) {
        }
        
      };
//type
      setName2 = () => {
       
        const {value} = this.props.navigation.state.params;
        this.setState({ type: value });
      
        
      }
      //Nameof product
      setName3 = (value) => {
     
        this.setState({date: value});
      };
      //Quant of Product
      setName5 = (value) => {
     
        this.setState({quant: value});
      };
      //Details
      setName6 = (value) => {
     
        this.setState({details: value});
      };
      //where to buy
      setName4 = (value) => {
     
        this.setState({buy: value});
      };
      
    
      retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('mylist');
          if (value !== null) {
            // We have data!!
            
            this.setState({ arr : JSON.parse(value) })
    
          }else{
            
    
          }
        } catch (error) {
          // Error retrieving data
          console.warn('ERROOORRR +++++  DATA LOADING')
        }
      };
    
    
    async componentDidMount () {
      this.focusListener = this.props.navigation.addListener('didFocus', () => {
    this.retrieveData();
    this.type()
   // this.handleChoosePhoto()
    
      })
    }
    type =() =>{
      const {value} = this.props.navigation.state.params;
      this.setState({
        type:value
      })
    }
  submit=() =>{
    Keyboard.dismiss()
  }
     ///---------------------Import Images -----------------//
  handleChoosePhoto = () => {
  
  
 
    var ImagePicker = require('react-native-image-picker');

    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

    

      
      

      

    render(){
      
      const{navigation} =this.props
      const vari = this.state;
      const num = navigation.getParam('index_num',);
      var { photo,obj} = this.state;
      const prevData = navigation.getParam('vari');
      const {value} = this.props.navigation.state.params;
     // const {value} = this.props.route.params
        //const Category = 'Shayari'

        //const {value} = this.props.navigation.state.params;
        
        return(
          
           <SafeAreaView style = {{backgroundColor:'#091D4F'}}>
            
              
            

       
               <View style = {styles.container}>
               
       
     
 
               <View style={{width: '100%',marginTop:'2%' }}>
           

                
               <View style = {styles.TitleBox}>
             
             <Input style = {styles.textBoxStyle} 
            
             multiline='true'
             editable='false'
             placeholder =""
             onSubmitEditing={this.submit}
             onChangeText = {this.setName2}></Input>
              
             
             </View>
    
      <View style = {styles.TitleBox}>
             
              <Input style = {styles.textBoxStyle} 
              multiline='true'
              placeholder ='Name'
              onSubmitEditing={this.submit}
              onChangeText = {this.setName3}></Input>
               
              
              </View>
              <View style = {styles.TitleBox}>
             
             <Input style = {styles.textBoxStyle} 
             multiline='true'
             placeholder ='Job Type'
            // keyboardType='number-pad'
             onSubmitEditing={this.submit}
             onChangeText = {this.setName4}></Input>
             
             
             </View>
             <View style = {styles.TitleBox}>
             
             <Input style = {styles.textBoxStyle} 
             multiline='true'
             placeholder ='Job designation'
             onSubmitEditing={this.submit}
             onChangeText = {this.setName5}></Input>
             
             </View>
              
              <View style = {styles.TitleBox}>
             
              <Input style = {styles.textBoxStyle} 
              
              multiline='true'
              placeholder ='Salary Details'
              onSubmitEditing={this.submit}
              onChangeText = {this.setName6}></Input>
             
              
              </View>
              
    
      </View>
      <TouchableOpacity style ={{height:'25%',marginTop:'-20%' , backgroundColor:'transparent',
shadowColor:'black',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row',
shadowOpacity: 0.6,width:'100%',resizeMode:'contain',}}
onPress={this.handleChoosePhoto}
          >
              <Image
      
       style ={{height:'50%',    shadowOffset :{width:2, height:3},
shadowColor:'black',
shadowOpacity: 0.6,width:'20%',resizeMode:'contain',borderRadius:50}}
source ={require('../Assets/camera.png')}

      
     />
      <View style ={{height:'100%',    shadowOffset :{width:2, height:3},
        shadowColor:'black',
        shadowOpacity: 0.6,width:'50%',}}
       
                   >
                     <ImageBackground     style ={{height:'100%',    shadowOffset :{width:2, height:3},
shadowColor:'black',
shadowOpacity: 0.6,width:'100%',resizeMode:'contain',}}
source ={require('../Assets/Def.png')}>
       
   {photo && (
       
     <Image
       source={{ uri: photo.uri }}
       defaultSource={require('../Assets/d.png')}
      // defaultSource={{uri:'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'}}
       style ={{height:'100%',    shadowOffset :{width:2, height:3},
shadowColor:'black',
shadowOpacity: 0.6,width:'100%',resizeMode:'cover'}}
//defaultSource ={require('../Assets/d.png')}
      
     />
  
   )}
   </ImageBackground>
   </View>

          </TouchableOpacity>


        






      
      
          <TouchableOpacity style={{width:'90%',    shadowOffset:{width:2, height:2},
       shadowColor:'black',marginTop:'2%',
       shadowOpacity:0.7,backgroundColor:'red',height:'10%',justifyContent:'center',alignItems:'center',}}    onPress = {() => {this.storeData(),this.props.navigation.navigate('Category')}}>
                           <Text style = {styles.headerBtnTxt}>Done</Text>
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
            opacity:0.9,
            //justifyContent:'center',
            alignItems:'center',
            borderWidth:4,
            borderColor:'red',
            marginTop:'10%',
            marginLeft:'2.5%',
            shadowOffset:{width:2, height:2},
            shadowColor:'black',
            shadowOpacity:0.7,
            //borderRadius:25,
           // borderWidth:3,
            //borderColor:'gold',
            //borderWidth:5
           
        },
        imageView:{
          width:'100%',
          height:'5%',
          backgroundColor:'#FA43C6',
          justifyContent:'center',
          alignItems:'center',
          borderBottomStartRadius:100,
          borderBottomEndRadius:100,
          borderBottomRightRadius:95,
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
        textBoxStyle:{
            //borderWidth:2,
            //borderStyle:'dashed',
            //borderColor:'#0d1617',
            borderTopWidth:5,
            borderTopColor:'black',
            width:'40%',
            justifyContent:'center',
            alignItems:'center',
            height:'100%',
            marginRight : 10,
            marginLeft : 10,
           borderBottomEndRadius:10,
            borderTopStartRadius:5,
            borderBottomWidth:5,
            borderBottomColor:'red',
            shadowOffset:{height:2,width:2},
            shadowColor:'black',
            shadowOpacity:0.7,
            backgroundColor:'white',
           // borderBottomWidth:9,
           // borderBottomColor:'red'
         
          
          
            //textAlign:''
            //marginLeft:'5%'
        },
        borderLine:{
          width:'40%',
          height:'60%',
          marginTop:'9%',
          backgroundColor:'#004953',
          borderTopStartRadius:9,
          borderBottomEndRadius:9,
          borderBottomWidth:8,
          borderBottomColor:'red',
          opacity:0.7,
          alignItems:'center',
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
    TitleBox:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'14%',
        shadowOffset:{width:0.5, height:0.5},
        shadowColor:'gray',
        shadowOpacity:0.7,
        marginTop:'2%',
        display:'flex',
        flexDirection:'row'
    },
      
      headerBtnTxt:{
          fontSize:20,
   textAlign:'center',
          fontWeight:'bold',
          color:'white',
          //fontFamily:'Cotlin',
         
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
      }
        
    }

)//