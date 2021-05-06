import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId: '',
            password: ''
        }
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
            return Alert.alert("User Successfully Logged In")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then((response)=>{
            return Alert.alert("User Successfully Signed Up")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                    <Text style = {styles.title}>BarterSystem</Text>
                </View>

                <Image
                    source={require("../assets/barter.jpeg")}
                    style={styles.reminderImage}
                />

                <View style = {styles.buttonContainer}>
                    <TextInput
                        style = {styles.loginBox}
                        placeholder = "example@gmail.com"
                        placeholderTextColor = "#FFFF"
                        keyboardType = "email-address"
                        onChangeText = {(text)=>{
                            this.setState({
                                emailId:text
                            })
                        }}
                    />

                    <TextInput
                        style = {styles.loginBox}
                        secureTextEntry = {true}
                        placeholder = "password"
                        placeholderTextColor = "#FFFF"
                        onChangeText = {(text)=>{
                            this.setState({
                                password:text
                            })
                        }}
                    />

                    <TouchableOpacity 
                        style = {[styles.button,{marginBottom:20,marginTop:20}]}
                        onPress = {()=>{
                            this.userLogin(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {()=>{
                            this.userSignUp(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2e2300'
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#db9501'
    },
    loginBox:{
        width: "80",
        height: 40,
        borderWidth: 1.5,
        borderColor : '#c05805',
        fontSize: 20,
        margin:10,
        paddingLeft:10
      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#6e6702",
        shadowColor: "#000",
        bottom:20,
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    },
    reminderImage: {
        width: "40%",
        height: "40%",
        left: 110,
        bottom:10
      }
  })