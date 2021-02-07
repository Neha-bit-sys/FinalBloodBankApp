import React, {useState} from 'react';
import {Text,View,StyleSheet,TextInput, Button,TouchableOpacity,StatusBar} from 'react-native';
import database from '@react-native-firebase/database'

function donor() {
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const [contact,setContact]= useState("");
    const [age,setAge]= useState("");
    const [location,setLocation]= useState("");


    const save_data = () => {
            let user = {
                name,
                password,
                contact,
                age,
                location

            }
           database().ref('/').child('users').push(user)
    }
    return(
        <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                
    <Text style = {{fontSize: 30, color: 'red' , fontWeight: 'bold' , marginBottom: 10}}>
       REGISTER YOUR SELF!
  </Text>

{/* name */}
                <TextInput
        placeholder="Enter your Full Name"
        type="text"
        style={styles.inputs}
        value={name}
        onChangeText={(text) => setName(text)}
      />

{/* password */}
<TextInput
        secureTextEntry= {true}
        placeholder="Enter your Password"
        type="text"
        style={styles.inputs}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
{/* Contact */}
<TextInput
        placeholder="Enter your Contact"
        type="text"
        style={styles.inputs}
        value={contact}
        onChangeText={(text) => setContact(text)}
      />
{/* Age */}
<TextInput
        placeholder="Enter your Age"
        type="text"
        style={styles.inputs}
        value={age}
        onChangeText={(text) => setAge(text)}
      />
{/* location */}
<TextInput
        placeholder="Enter your Location"
        type="text"
        style={styles.inputs}
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
<TouchableOpacity onPress={()=> alert("You have been Registered Now")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}> Register</Text></TouchableOpacity>
<StatusBar style="auto" />

<TouchableOpacity onPress={save_data} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>Save Data</Text></TouchableOpacity>
<StatusBar style="auto" />

{/* <Button onPress={save_data} title= "Save Data"/> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 0.3,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    inputs: {
        
        fontSize: 16,
        height:40,
        borderColor:'gray',
        borderWidth:1, 
        width:"80%", marginBottom:20,
         paddingHorizontal: 15,
          borderRadius: 10
      },
      button: {
        backgroundColor: "red",
        width: "40%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        },
      btnText: {
        color: "white",
        fontSize: 18,
        },
    });

export default donor;

