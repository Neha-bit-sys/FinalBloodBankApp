/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
SafeAreaView,
StyleSheet,
ScrollView,
View,
Text,
StatusBar,
Image,
TextInput,
TouchableOpacity,
Button
} from 'react-native';

import {
Header,
LearnMoreLinks,
Colors,
DebugInstructions,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Login = (props) => {
return (

<View style={styles.container}>

<View style={styles.main1}>


<Image style= {{width:70,height: 70, resizeMode: 'contain'}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqEbYyaaOQbo5vxPbGtFQ0ycii9A7aO-57A&usqp=CAU"}}>
  </Image>

  <Text style = {{fontSize: 15, color: 'red',marginTop:5 }}>
        Developed By Neha Kausar (WM-9077)
  </Text>

  <Text style = {{fontSize: 30, color: 'red' , fontWeight: 'bold'}}>
        Welcome to Blood Bank 
  </Text>
  
  <Text style = {{fontSize: 25, color: 'red',marginBottom: 50 }}>
        User Login
  </Text>
  
  
  
  
  
</View>
<View style={styles.main2}>
  <TextInput onChangeText= {(text)=>console.log(text)} style= {{fontSize: 16,height:40, borderColor:'gray',borderWidth:1, width:"80%", marginBottom:20, paddingHorizontal: 15, borderRadius: 10}} placeholder = "Enter Username"></TextInput>

<TextInput onChangeText= {(text)=>console.log(text)} secureTextEntry= {true} style= {{fontSize: 16,height:40, borderColor:'gray',borderWidth:1, width:"80%",  marginBottom: 20, paddingHorizontal: 15, borderRadius: 10}} placeholder="Enter Password"></TextInput>

{/* loginbtn */}
<TouchableOpacity onPress={()=> alert("Loading...")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>LOGIN</Text></TouchableOpacity>
<StatusBar style="auto" />
{/* nextpge btn */}
<TouchableOpacity onPress={()=> props.navigation.navigate("Donor")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}> Register</Text></TouchableOpacity>
<StatusBar style="auto" />

{/* <Button  onPress={()=>props.navigation.navigate("Donor")} title = "Go to Registration"/> */}




</View>
</View>



);
};

const styles = StyleSheet.create({
container: {
flex: 1,
// backgroundColor: 'lightyellow',
alignItems: 'center',
justifyContent: 'center',

},
main1: {
backgroundColor: "white",
width: "100%",
flex:1,
justifyContent: 'center',
alignItems: 'center'
},

body: {
backgroundColor: Colors.white,
},

// sectionContainer: {
// marginTop: 32,
// paddingHorizontal: 24,
// },

// sectionTitle: {
// fontSize: 24,
// fontWeight: '600',
// color: Colors.black,
// },
// sectionDescription: {
// marginTop: 8,
// fontSize: 18,
// fontWeight: '400',
// color: Colors.dark,
// },

// highlight: {
// fontWeight: '700',
// },
// footer: {
// color: Colors.dark,
// fontSize: 12,
// fontWeight: '600',
// padding: 4,
// paddingRight: 12,
// textAlign: 'right',
// },
main2: {
backgroundColor: "white",
width: "100%",
flex:1,
justifyContent: 'center',
alignItems: 'center'
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

export default Login;
