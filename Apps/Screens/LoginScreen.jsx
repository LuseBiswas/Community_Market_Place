import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Image source={require('./../../assets/Images/login.jpg')}
        className='w-full h-[400px] object-cover'
        />
        <View className='p-8'>
            <Text className='text-[30px] font-bold'>Communty Marketplace</Text>
            <Text className='text-[18px] text-slate-500 m-6'>Buy Sell Marketplace where you sell your item and make real money</Text>

            <TouchableOpacity onPress={()=> console.log("SignIn")} className="p-4 bg-[#007dfe] rounded-full mt-20">
                <Text className='text-white text-center text-[18px]'>Get Started</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
