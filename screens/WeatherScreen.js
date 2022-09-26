import React,{Component} from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, Diemensions} from "react-native"

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weather:''
        }
    }
    fetchWeather=()=>{
        var api = 'https://fcc-weather-api.glitch.me/api/current?lat=21&lon=78';

        return Fetch(api)
        .then(Response =>Response.json())
        .then(ResponseJson =>{
            this.setState({
                weather:ResponseJson,
            });
        })
        .catch(error =>{
            console.log(error);
        });
    };

    componentDidMount =()=>{
        this.fetchWeather();
    }

    render(){
        if(this.state.weather =='') {
            return(
                <Text style={styles.loading}>Loading.....    </Text>
            );
        }else{
            var temp=Math.floor(this.state.weather.main.temp)
            var shouldITakeUmbrella =temp<27? 'you should take your umbrella':'no need to carry an umbrella';
            var image =shouldITakeUmbrella =='you should take your umbrella'? 
            <Image source={require("../assets/umbrella.png")}
            
            style={styles.umbrellaImage}/> :
            <Image source={require("../assets/noUmbrella.png")}
             style={styles.umbrellaImage}/>

             return(
                <SafeAreaView style={styles.containers}>

                    <View style={styles.container}>
                        <Text style={styles.weatherTitleText}>  weather  </Text>

                        <Text style={styles.weatherDisplay}>   {temp} &deg;C  </Text>
                        <Text style={styles.situation}>  {shouldITakeUmbrella}   </Text>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate("homescreen")
                        }}

                        style={styles.backbutton}>
                            <Text style={styles.backbutton}>   back  </Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
             )

        }
    }
}