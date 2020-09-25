import React, { useState } from 'react';
import {Text, View,StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default SearchScreen =(props)=>{
    const [search,setSearch]=useState();
    const [details,setDetails]=useState();
    return(
        <View style={styles.view}>
            <View style={{marginTop:200,margin:20,backgroundColor:"#ffffff",borderRadius:20}}>
                <TextInput
                placeholder='Search By'
                style={styles.textinput1}
                onChangeText={(res)=>{
                    setSearch(res)
                }}
                />
                <TextInput
                placeholder='Enter details of selected category'
                style={styles.textinput2}
                onChangeText={(res)=>{
                    setDetails(res)
                }}
                />
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                props.navigation.navigate("displayScreen")
            }}
            >
                <Text style={{fontSize:30,textAlign:"center",color:'#f1f0f2'}}>
                    Search
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    textinput1:{
        marginTop:30,
        borderBottomWidth:1,
        margin:10,
        borderColor:'lightgrey'
    },
    view:{
        backgroundColor:'#f1f0f2'
    },
    textinput2:{
        marginBottom:30,
        borderBottomWidth:1,
        margin:10,
        borderColor:'lightgrey'
    },
    button:{
        backgroundColor:'coral',
        marginLeft:100,
        marginRight:100,
        borderRadius:10,
        marginTop:30
    }
})