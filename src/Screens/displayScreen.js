import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Store from './Store'
import { FlatList } from 'react-native-gesture-handler';

export default displayScreen = () => {
  const [det, setDet] = useState('');
  const [load, setload] = useState(true);
  //if (Store.filtertype == 'name') {
  useEffect(() => {
    var temp = []
    firestore().collection('fine').where(Store.filtertype, '==', Store.filterinfo).get().then((snap) => {
      console.log(snap.docs)
      setload(false)
      snap.docs.forEach(doc => {
        temp.push(doc.data())
        setDet(temp);
        console.log(det)

      })
    })
  }, [])
  // }
  // else if (Store.filtertype == 'dlno') {
  //   console.log("dlno")
  //   useEffect(() => {
  //     var temp = []
  //     firestore().collection('fine').where(Store.filterinfo, '==', Store.filtertype).get().then((snap) => {
  //       snap.docs.forEach(doc => {
  //         temp.push(doc.data())
  //         setDet(temp)
  //       })
  //     })
  //   }, [])
  // }

  if (load) {
    return (<View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator
        color='#1d6ff2'
        size={80}
        animating={load}
      />

    </View>)
  }
  else {
    if (det !== '') {
      console.log("if", det)
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
            keyExtractor={item => item.vlno}
          />
        </View>
      )
    }
    else {
      console.log("else", det)
      return (<View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>No result Found</Text>
      </View>)
    }
  }
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