import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,

} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export default function addScreen() {

    

    const [name,setName]=useState("");
    const [dlno,setDL]=useState("");
    const [vlno,setVL]=useState("");
    const [reason,setReason]=useState("");
    const [amount,setAmount]=useState("");

    const usersCollection = firestore().collection('fine');

    
 
    const upload= () => {
        console.log(name,dlno,vlno,reason,amount)
        usersCollection.add({
            name:name,
            dlno:dlno,
            vlno:vlno,
            reason:reason,
            amount:amount
        })
  .then(() => {
    console.log('User added!');
  }).catch((err)=>console.log(err));


        // firestore(). collection ("finewithdlno").doc(dlno).set({
        //   name:name,
        //   dlno:dlno,
        //   vlno:vlno,
        //   reason:reason,
        //   amount:amount
          

            // })
            

    }

    

    return (

        <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#f1f0f2', }}>


            <View style={{
                backgroundColor: '#ffff', marginLeft: 20,
                marginRight: 20, marginTop: 60, borderRadius: 15
            }}>
                <TextInput
                    style={{ fontSize: 20, margin: 10 }}
                    placeholder="Name"
                    underlineColorAndroid="red"
                
                    onChangeText={(name) => setName(name)} 
                   
                />
                <TextInput
                    style={{ fontSize: 20, margin: 10 }}
                    placeholder="Driving Licence No."
                    underlineColorAndroid="red"

                    onChangeText={(dlno) => {setDL(dlno)} }
                    
                />
                <TextInput
                    style={{ fontSize: 20, margin: 10 }}
                    placeholder="Vehicle Number"
                    underlineColorAndroid="red"

                    onChangeText={(vlno) => setVL(vlno)} 
                    

                />
                <TextInput
                    style={{ fontSize: 20, margin: 10 }}
                    placeholder="Reason"
                    underlineColorAndroid="red"

                    onChangeText={(reason) => setReason(reason)} 
                    

                />
                <TextInput
                    style={{ fontSize: 20, margin: 10 }}
                    placeholder="Amount"
                    keyboardType="number-pad"
                    underlineColorAndroid="red"

                    onChangeText={(amount) => setAmount(amount)} 
                    
                />
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={upload}
                >
                    <Text style={styles.buttonLable}>ADD FINE</Text>
                
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

    button: {
        borderWidth: 1,
        height: 45,
        width: "65%",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 60,
        backgroundColor: 'coral',
        justifyContent: "center",
    },
    buttonLable: {
        fontSize: 24,
        color: "#ffff"
    }
});

