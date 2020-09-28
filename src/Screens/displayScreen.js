import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Store from './Store'
import { FlatList } from 'react-native-gesture-handler';

export default displayScreen = () => {
  const [det,setDet]=useState();
    if(Store.filtertype=='name'){
    useEffect(() => {
      var temp=[]
      firestore().collection('fine').where(Store.filtertype, '==', Store.filterinfo).get().then((snap) => {
        snap.docs.forEach(doc => {
          temp.push(doc.data())
          setDet(temp)
        })
      })
    }, [])
  }
    else if(Store.filtertype=='dlno'){
      useEffect(() => {
        var temp=[]
        firestore().collection('fine').where(Store.filterinfo,'==',Store.filtertype).get().then((snap)=>{
            snap.docs.forEach(doc=>{
                temp.push(doc.data())
                setDet(temp)
            })
        })
    }, [])
  }


  return (
    <View style={styles.view}>
      <FlatList
        data={det}
        renderItem={({ item }) => (
          <View style={{ marginTop: 30, margin: 20, backgroundColor: "#ffffff", borderRadius: 20, padding: 15 }}>
            <Text style={styles.text}>
              Name- {item.name}

            </Text>
            <Text style={styles.text}>
              Dl No.- {item.dlno}

            </Text>
            <Text style={styles.text}>
              Vehicle No.- {item.vlno}

            </Text>
            <Text style={styles.text}>
              Amount- {item.amount}
            </Text>
            <Text style={styles.text}>
              Reason- {item.reason}
            </Text>
          </View>
        )}
        keyExtractor={item=>item.vlno}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    margin: 5,
    fontSize: 15
  },
  view: {
    backgroundColor: '#f1f0f2'
  },
})