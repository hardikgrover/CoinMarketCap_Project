

import React, { Component } from 'react'
import { Text, View ,FlatList,StatusBar,StyleSheet} from 'react-native'
import Item from './Item';
// import Item from './Item.js'

const List = (props) => {
  console.log(props.data);
   return (
        <View style={styles.container}>
           
           
           <FlatList
           style={{flex:1}}
           data={props.data}
           keyExtractor={item=>item.key}
           contentContainerStyle={{
             padding:10,
             paddingTop:StatusBar.currentHeight || 20
           }}
           renderItem={({item,index})=>{
             return( <Item item={item}></Item>)
           }}
           >

           </FlatList>

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
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});
export default List

//  <View style={{flex:1,backgroundColor:'#ffffff'}}>
           
           
//            <FlatList
//            data={this.props.data}
//            keyExtractor={item=>item.key}
//            contentContainerStyle={{
//              padding:10,
//              paddingTop:StatusBar.currentHeight || 42
//            }}
//            renderItem={({item,index})=>{
//              return <View style={{flexDirection:'row',padding:10 ,marginBottom:10 , borderRadius:13,
//              backgroundColor:'rgba(255,255,255,0.9)',
//              shadowColor:'#000',
//              shadowOffset:{
//                width:0,
//                height:10

//              },
//              shadowOpacity: .3,
//              shadowRadius:20
//              }}>
//                <Text style={{fontSize:12,fontWeight:'700'}}>{item.symbol}</Text>
//                <Text style={{fontSize:12,fontWeight:'7000', paddingLeft:40,color:'red',marginRight:5}}>$ {item.price}</Text>
//              </View>
//            }}
//            >

//            </FlatList>

//          </View>