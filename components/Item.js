import React, { Component } from 'react'
import { Text, View ,FlatList,StatusBar,StyleSheet} from 'react-native'

const List = (props) => {
   return (
    <View style={styles.listItem}>
               <Text style={{fontSize:12,fontWeight:'700'}}>{props.item.symbol}</Text>
               <Text style={{fontSize:12,fontWeight:'700', paddingLeft:40,color:'blue',marginLeft:60 }}>$ {props.item.price}</Text>
             </View>
   )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:5,
    padding:15,
    backgroundColor:"#FFF",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});
export default List
