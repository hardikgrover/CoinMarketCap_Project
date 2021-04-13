import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://api1.binance.com/api/v3/ticker/price', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
     console.log(this.state.data)
      return (
         <View style={{flex:1,backgroundColor:'#ffffff'}}>
           <FlatList
           data={this.state.data}
           renderItem={({item,index})=>{
             return <View>
               <Text>{item.symbol}</Text>
             </View>
           }}
           >

           </FlatList>

         </View>
      )
   }
}
export default HttpExample


