import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image, Linking} from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weather:''
    }
  }
  

  render(){
      
      
      return(

      <SafeAreaView style = {styles.containers}>
        <View style = {styles.container}>
          <Text style = {styles.aboutTitleText}>
            About
          </Text>
          <Text style = {styles.name}>DAK12</Text>
          <Image source = {require("../assets/Dak12logo.jpg")} style = {styles.image}/>
          <TouchableOpacity onPress={() => {
            Linking.openURL("https://www.youtube.com/channel/UCcloXyWedThhc7fqpD97ZEQ")
          }} style = {styles.youtubebutton}>
          <Text style = {styles.youtubetext}>Check out my YouTube channel</Text>
          </TouchableOpacity>
          <Text style = {styles.aboutMe}>DAK12 is a 13 year old boy who really like to code. His favourite sport is football and boxing.</Text>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("HomeScreen")
          }}
          style = {styles.backButton}><Text style = {styles.backText}>Back</Text></TouchableOpacity>

        </View>
      </SafeAreaView>
    );
    }
    
  }

  const styles =  StyleSheet.create({
    container:{
      alignItems:"center"
    },
    aboutTitleText:{
      fontFamily:"monospace",
      fontSize:40,
      marginTop:15,
      fontWeight:"bold"
    },
    name:{
      fontSize:30,
      color:"green",
      marginTop:20,
      fontFamily:"monospace"
    },
    image:{
      width:300,
      height:300
    },
    youtubebutton:{
      backgroundColor:"green",
      borderRadius:100,
      width:250,
      height:25,
      alignItems:"center"
    },
    youtubetext:{
      fontFamily:"monospace",
      fontSize:10,
      color:"white",
      marginTop:4
    },
    aboutMe:{
      textAlign:"center",
      marginTop:10,
      fontFamily:"monospace",
      fontSize:15
    },
    backButton:{
      backgroundColor:"#00AEFF",
      alignItems:"center",
      borderRadius:50,
      width:50,
      height:25,
      marginTop:10,
    },
    backText:{
      color:"black",
      fontFamily:"monospace",
      fontSize:10
    }
  })