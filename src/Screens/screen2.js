import React,{useState} from 'react';
import {
    View, 
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
     
} from 'react-native';

export default function screen2() {
     
    return(

<View style={{flex:1 , flexDirection: "column",backgroundColor:'#f1f0f2',}}>
        
   
        <View style={ { backgroundColor:'#ffff', marginLeft:20,
      marginRight:20,marginTop:60, borderRadius:15 }}>
        <TextInput
               style={{fontSize:20,margin:10}}
               placeholder="Name"
               underlineColorAndroid="red"
               
               />
               <TextInput
               style={{fontSize:20,margin:10}}
               placeholder="Driving Licence No."
               underlineColorAndroid="red"
               
               />
               <TextInput
               style={{fontSize:20,margin:10}}
               placeholder="Vehicle Number"
               underlineColorAndroid="red"
               
               />
               <TextInput
               style={{fontSize:20,margin:10}}
               placeholder="Reason"
               underlineColorAndroid="red"
               
               />
               <TextInput
               style={{fontSize:20,margin:10}}
               placeholder="Amount"
               keyboardType="number-pad"
               underlineColorAndroid="red"
               
               />
        </View>
        
        <View style={ { alignItems: 'center',
    justifyContent: 'center' }}>
        <TouchableOpacity 
          style={styles.button}
         
         >
    
    <Text style={styles.buttonLable}>ADD FINE</Text>
</TouchableOpacity>
</View>
</View>

            
        );
                   
 }

 const styles = StyleSheet.create({
   
    button:{
      borderWidth:1, 
      height:45,
      width:"65%" ,
      alignContent:"center",
      alignItems: "center",
      borderRadius: 10,
      marginTop:60,
      backgroundColor:'coral',
      justifyContent: "center",
      
      
      
      
  },
  buttonLable:{
      fontSize: 24,
      color:"#ffff"
  }
  });

