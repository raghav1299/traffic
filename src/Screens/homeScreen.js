import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, Image
     
} from 'react-native';

export default function homeScreen(props) {
     
    return(
<View style={{flex:1,backgroundColor:'#f1f0f2',}}>
    
<View
 style={{   alignItems: 'center',
    justifyContent: 'center'}}>
        <Image style={{marginBottom:15, }}
source={require('../Assets/police.png')}
/>
        
<TouchableOpacity
             style={styles.button}
            onPress={()=> props.navigation.navigate('Screen1')} 
            >
        <Text style={styles.buttonLable}>SEARCH</Text>

</TouchableOpacity>

<TouchableOpacity 
          style={styles.button}
         onPress={()=> props.navigation.navigate('Screen2')}
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
      width:"85%" ,
      alignContent:"center",
      alignItems: "center",
      borderRadius: 10,
      marginBottom:15, 
      backgroundColor:'coral',
      
      
      
      
  },
  buttonLable:{
      fontSize: 24,
      color:"#ffff"
  }
  });
  
  

