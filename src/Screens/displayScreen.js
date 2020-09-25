import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default displayScreen = () => {
  return (
    <View style={styles.view}>
      <View style={{ marginTop: 30, margin: 20, backgroundColor: "#ffffff", borderRadius: 20, padding: 15 }}>
        <Text style={styles.text}>
          Name-
        </Text>
        <Text style={styles.text}>
          Dl No.
        </Text>
        <Text style={styles.text}>
          Vehicle No.
        </Text>
        <Text style={styles.text}>
          Amount
        </Text>
      </View>
      <View style={{ marginTop: 30, margin: 20, backgroundColor: "#ffffff", borderRadius: 20, padding: 15 }}>
        <Text style={styles.text}>
          Name-
        </Text>
        <Text style={styles.text}>
          Dl No.
        </Text>
        <Text style={styles.text}>
          Vehicle No.
        </Text>
        <Text style={styles.text}>
          Amount
        </Text>
      </View>
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