import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import List from './components/List';

class App extends Component {
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
   
   }
   render() {
    //  console.log(this.state.data)
      return (
        <List data={this.state.data}></List>
      
      )
   }
}
export default App


// 'https://api1.binance.com/api/v3/ticker/price'

// 'https://api.coinmarketcap.com'