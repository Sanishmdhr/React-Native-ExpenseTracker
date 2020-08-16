import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button} from 'native-base';

import {useSelector} from 'react-redux';

function Card({navigation}) {

  const {transactions} = useSelector(state => state.transactions);
  const prices = transactions.map((transaction) => transaction.price);

  const totalPrice = prices.reduce((prev,cur) => (prev+=cur), 0);

  const expense = prices.filter(price =>price < 0)
                        .reduce((prev,cur)=> (prev+=cur),0)*-1;

  return (
    <LinearGradient
          colors={['#FAAD3D', "#EFC90A", "#F1CB0C"]}
          style={styles.Box}>
          <View 
          style={{width:"70%", alignItems:'flex-start'}}>
              <Text
              style={{
                fontSize:15,
                color:'#fff',
                fontFamily:'Lato-Regular',
                fontWeight:'600'
              }}
              >
              Current Balance
              </Text>
              <Text style={{
                fontFamily:'Lato-Medium',
                fontSize:30,
                color:"#fff",
                fontWeight:"700"
              }}>
                Rs {totalPrice}
              </Text> 
              <Text
              style={{
                marginTop:67,
                color:"#fff",
                fontFamily:"Lato-Regular",
                fontSize:18,
                fontWeight:'700'
              }}>
                4234 **** **** 6533
              </Text>
          </View>
          <View
          style={{width:"30%", alignItems:'flex-end'}}>
            <Text
            style={{
                fontSize:20,
                color:'#fff',
                fontFamily:'Lato-Medium',
                fontWeight:'700'
              }}>
              NGN
            </Text>
            <View style={{flex:1}}>
              <Button
              rounded
              light
              style={{
                padding:10,
                marginTop:32,
                borderWidth: 3,
                borderColor: "#fff",
                backgroundColor:'#E10C62',
                alignItems:"center",
                justifyContent:"center"
              }}
              onPress={() => {
                navigation.navigate("Add");
              }}
              >
                <Text style={{
                  color:"#fff",
                  fontWeight:"700",
                  fontSize:15,
                }}>
                  Add
                </Text>
              </Button>
              <Text
              style={{
                marginTop:17,
                color:"#fff",
                fontSize:12,
                fontWeight:"700"
              }}>
                Expense
              </Text>
              <Text style={{
                color:"#fff",
                fontSize:20,
                fontWeight:"700"
              }}>
                Rs {expense}
              </Text>
            </View>
          </View>
        </LinearGradient>
  )
}

const styles = StyleSheet.create({
  Box: {
    width: "100%",
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22
  }
})

export default Card
