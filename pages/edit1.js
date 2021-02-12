import React, {Component, Fragment} from 'react';
import { View , Text, TouchableOpacity, StyleSheet,Keyboard, Image,ScrollView,Button, AsyncStorage,ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Header, Left, Right, Icon, Input, } from 'native-base';
import { SafeAreaView } from 'react-navigation';
//import SearchableDropdown from 'react-native-searchable-dropdown';
import ImagePicker from 'react-native-image-picker';
export default class Home extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          value:'',
          url:null,
          arr : [],
          type:'',
          photo:null,
          photo1:'',
          date:'',
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
        title: 'Edit Details',
       
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

      
      storeData = async (num) => {
        const obj = {
        type:this.state.type, 
        //photo1:this.state.photo1,
        'photo':this.state.photo,
        quant:this.state.quant,
        details:this.state.details,
        buy:this.state.buy,
        'date':this.state.date};  
      
        var lists = this.state.arr;
        lists[num]=obj
          this.setState({
          arr: lists
          });
      
        
      
      
      
      
        
        
        alert('Successfully updated ,in Your selected Category')
    
    
        try {
          await AsyncStorage.setItem('mylist',JSON.stringify(this.state.arr));
        } catch (error) {
        }
        
      };

      setName2 = (value) => {
       
      
        this.setState({ type: value });
      
        
      }
      setName3 = (value) => {
     
        this.setState({date: value});
      };
      setName4 = (value) => {
     
        this.setState({buy: value});
      };
      setName5 = (value) => {
     
        this.setState({quant: value});
      };
      //Details
      setName6 = (value) => {
     
        this.setState({details: value});
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
  
    
    async componentDidMount () {
      this.focusListener = this.props.navigation.addListener('didFocus', () => {
    this.retrieveData();
    this.type();
    this.name();
    this.details()
    this.photo();
    this.quant();
    this.buy();
    
      })
    }

    
    type =()=>{
      const{navigation} =this.props
      const vari = this.state;
      const num = navigation.getParam('index_num',);
      var { photo,obj} = this.state;
      const prevData = navigation.getParam('vari');
      this.setState({
        type:prevData.type
      })
    }
    quant =()=>{
      const{navigation} =this.props
      const vari = this.state;
      const num = navigation.getParam('index_num',);
      var { photo,obj} = this.state;
      const prevData = navigation.getParam('vari');
      this.setState({
        quant:prevData.quant
      })
    }
    buy =()=>{
      const{navigation} =this.props
      const vari = this.state;
      const num = navigation.getParam('index_num',);
      var { photo,obj} = this.state;
      const prevData = navigation.getParam('vari');
      this.setState({
        buy:prevData.buy
      })
    }
    name =()=>{
      const{navigation} =this.props
      const vari = this.state;
      const num = navigation.getParam('index_num',);
      var { photo,obj} = this.state;
      const prevData = navigation.getParam('vari');
      this.setState({
        date:prevData.date
      })
    }
    details =()=>{
      const{navigation} =this.props
      const vari = this.state;
      const num = navigation.getParam('index_num',);
      var { photo,obj} = this.state;
      const prevData = navigation.getParam('vari');
      this.setState({
        details:prevData.details
      })
    }
    photo =()=>{
      const{navigation} =this.props
      const vari = this.state;
      const num = navigation.getParam('index_num',);
      var { photo,obj} = this.state;
      const prevData = navigation.getParam('vari');
      this.setState({
        photo:prevData.photo
      })
    }
    submit=() =>{
      Keyboard.dismiss()
    }
      

      

    render(){
        const {  type} = this.state;
        const{navigation} =this.props
        const vari = this.state;
        const num = navigation.getParam('index_num',);
        var { photo,obj} = this.state;
        const prevData = navigation.getParam('vari');
        //const Category = 'Shayari'


        
        return(
          <SafeAreaView style = {{backgroundColor:'#091D4F'}}>
            
        
           
            
 

               
               
       
            <View style = {styles.container}>
            
    
  

            <View style={{width: '100%',marginTop:'2%' }}>
        
              
             
            <View style = {styles.TitleBox}>
          
          <Input style = {styles.textBoxStyle} 
          multiline='true'
          //placeholder ='Enter The Name'
          defaultValue={prevData.type}
          onSubmitEditing={this.submit}
          onChangeText = {this.setName2}></Input>
           
          
          </View>

 
   <View style = {styles.TitleBox}>
          
           <Input style = {styles.textBoxStyle} 
           multiline='true'
           defaultValue={prevData.date}
           onSubmitEditing={this.submit}
           onChangeText = {this.setName3}></Input>
            
           
           </View>
           <View style = {styles.TitleBox}>
          
          <Input style = {styles.textBoxStyle} 
          multiline='true'
          defaultValue={prevData.buy}
         // keyboardType='number-pad'
          onSubmitEditing={this.submit}
          onChangeText = {this.setName4}></Input>
          
          
          </View>
          <View style = {styles.TitleBox}>
          
          <Input style = {styles.textBoxStyle} 
          multiline='true'
          defaultValue={prevData.quant}
          onSubmitEditing={this.submit}
          onChangeText = {this.setName5}></Input>
          
          </View>
           
           <View style = {styles.TitleBox}>
          
           <Input style = {styles.textBoxStyle} 
           
           multiline='true'
           defaultValue={prevData.details}
           onSubmitEditing={this.submit}
           onChangeText = {this.setName6}></Input>
          
           
           </View>
           
 
   </View>
   <TouchableOpacity style ={{height:'25%',marginTop:'-20%' , backgroundColor:'#091D4F',borderBottomColor:'white',borderBottomWidth:5,
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
                     <ImageBackground     style ={{height:'80%',    shadowOffset :{width:2, height:3},
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
       shadowOpacity:0.7,backgroundColor:'red',height:'10%',justifyContent:'center',alignItems:'center',}}    onPress = {() => {this.storeData(num),this.props.navigation.navigate('Category')}}>
                           <Text style = {styles.headerBtnTxt}>Update</Text>
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
        backgroundColor:'#091D4F',
        opacity:0.9,
        //justifyContent:'center',
        alignItems:'center',
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
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        //borderBottomEndRadius:55,
        //borderTopStartRadius:5,
        borderBottomWidth:25,
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
      borderBottomWidth:2,
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