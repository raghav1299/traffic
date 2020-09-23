import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
     
} from 'react-native';

export default function homeScreen(props) {
     
    return(

<View style={{  flex:1,alignItems: 'center',
    justifyContent: 'center',margin:10}}>
                
<TouchableOpacity
             style={styles.button}
            onPress={()=> props.navigation.navigate('Screen1')} 
            >
        <Text style={styles.buttonLable}>Screen 1</Text>

</TouchableOpacity>

<TouchableOpacity 
          style={styles.button}
         onPress={()=> props.navigation.navigate('Screen2')}
         >
    
    <Text style={styles.buttonLable}>Screen 2</Text>
</TouchableOpacity>

</View>
             );           
 }

 const styles = StyleSheet.create({
   
    button:{
      borderWidth:1, 
      height:45,
      width:"35%" ,
      alignContent:"center",
      alignItems: "center",
      borderRadius: 15,
      marginBottom:10, 
      
      
      
      
  },
  buttonLable:{
      fontSize: 24,
      color:"black"
  }
  });
  
  

