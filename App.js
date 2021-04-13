import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, SafeAreaView,Image, Button, Alert, Platform } from 'react-native';



export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Text>hi there my name is hardik </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop:Platform.OS === "android"? StatusBar.currentHeight:0,
    
  },
});


