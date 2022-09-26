import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      
      <SafeAreaView style = {styles.containers}>
        <View style = {styles.container}>
          <Text style = {styles.headingText}>Weather App</Text>
          
          <TouchableOpacity 
          onPress = {() => {
            this.props.navigation.navigate("WeatherScreen")
          }} 
          style = {styles.weather_btn}>
          <Image source={require('../assets/weatherDroplet.png')} style = {styles.whitedropimage}/>

          </TouchableOpacity>



          <TouchableOpacity onPress = {() => {
            this.props.navigation.navigate("AboutScreen")
          }} style = {styles.about_btn}><Text style = {styles.about_btn_Text}>About</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    height:10000,
    width:Dimensions.get('window').width,
    backgroundColor:'yellow'
  },
  headingText:{
    fontSize:35,
    fontWeight:'bold',
    fontFamily:"monospace",
    marginTop:20,
    color:'black'
  },
  weather_btn:{
    marginTop:70,
    height:200,
    width:600,
    backgroundColor:'',
    justifyContent:'center',
    textAlign:'center',
    
    
    
  },
  whitedropimage:{
    width:600,
    height:300,
    zindex:-100
  },

  about_btn:{
    marginTop:70,
    backgroundColor:'',
    justifyContent:'center',
    textAlign:'center',
    
    
  },
  about_btn_Text:{
    fontSize:30,
    color:'black',
    fontFamily:'monospace',
    hover:{
      color:'blue'
    }
  }
}); 