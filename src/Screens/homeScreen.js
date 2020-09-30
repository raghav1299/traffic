import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Image, Alert

} from 'react-native';

import messaging from '@react-native-firebase/messaging';




export default function homeScreen(props) {

    useEffect(() => {
        requestUserPermission()
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        return unsubscribe;
    }, [])
    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f1f0f2', justifyContent: 'center' }}>

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Image style={{ marginBottom: 15, }}
                    source={require('../Assets/police.png')}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('SearchScreen')}
                >
                    <Text style={styles.buttonLable}>SEARCH</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate('addScreen')}
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
        width: "85%",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: 'coral',
        justifyContent: "center"
    },
    buttonLable: {
        fontSize: 24,
        color: "#ffff",
        alignSelf: "center"
    }
});



