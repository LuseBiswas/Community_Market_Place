import React, { Component } from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import {useUser} from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    const {user}=useUser();
  
    return (
        <View>
            {/* User Info Section */}
      <View className='felx flex-row items-center gap-2'>
        <Image source={{uri:user?.imageUrl}} 
        className='rounded-full w-12 h-12'
        />
        <View>
            <Text className='text-[16px]'>नमस्ते</Text>
            <Text className='text-[20px] font-bold'>{user?.fullName}</Text>
        </View>
      </View>
      
      {/* Seacrh Bar Section */}

      <View className='p-[2px] px-2 flex flex-row items-center gap-2 bg-blue-50 mt-5 rounded-full border-[2px] border-blue-300 mb-4' >
      <Ionicons name="search" size={24} color="gray" />
        <TextInput placeholder='Search' className='ml-2 text-[18px] w-full'
        onChangeText={(value)=>console.log(value)}/>
      </View>


      </View>
    )
}
