

import React, { Component } from 'react'
import { Text, View ,FlatList,StatusBar} from 'react-native'

const List = (props) => {
   return (
       <View style={{flex:1,backgroundColor:'#ffffff'}}>
           
           
           <FlatList
           data={props.data}
           keyExtractor={item=>item.key}
           contentContainerStyle={{
             padding:10,
             paddingTop:StatusBar.currentHeight || 42
           }}
           renderItem={({item,index})=>{
             return <View style={{flexDirection:'row',padding:10 ,marginBottom:10 , borderRadius:13,
             backgroundColor:'rgba(255,255,255,0.9)',
             shadowColor:'#000',
             shadowOffset:{
               width:0,
               height:10

             },
             shadowOpacity: .3,
             shadowRadius:20
             }}>
               <Text style={{fontSize:12,fontWeight:'700'}}>{item.symbol}</Text>
               <Text style={{fontSize:12,fontWeight:'7000', paddingLeft:40,color:'red',marginRight:5}}>$ {item.price}</Text>
             </View>
           }}
           >

           </FlatList>

         </View>
   )
}
export default List

//  <View style={{flex:1,backgroundColor:'#ffffff'}}>
           
           
        //    <FlatList
        //    data={this.props.data}
        //    keyExtractor={item=>item.key}
        //    contentContainerStyle={{
        //      padding:10,
        //      paddingTop:StatusBar.currentHeight || 42
        //    }}
        //    renderItem={({item,index})=>{
        //      return <View style={{flexDirection:'row',padding:10 ,marginBottom:10 , borderRadius:13,
        //      backgroundColor:'rgba(255,255,255,0.9)',
        //      shadowColor:'#000',
        //      shadowOffset:{
        //        width:0,
        //        height:10

        //      },
        //      shadowOpacity: .3,
        //      shadowRadius:20
        //      }}>
        //        <Text style={{fontSize:12,fontWeight:'700'}}>{item.symbol}</Text>
        //        <Text style={{fontSize:12,fontWeight:'7000', paddingLeft:40,color:'red',marginRight:5}}>$ {item.price}</Text>
        //      </View>
        //    }}
        //    >

        //    </FlatList>

        //  </View>