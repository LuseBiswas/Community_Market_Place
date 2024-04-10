import React, { Component } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

export default function Categories({categoryList}){
  
    return (
      <View className='mt-3'>
        <Text className='font-bold text-[20px]'>Categories</Text>
        <FlatList
        data={categoryList}
        numColumns={3}
        renderItem={({item,index})=>/*index<=5&&*/(
          <TouchableOpacity className='flex-1 items-center justify-center p-2 border-[1px] border-blue-200 m-1 h-[80px] rounded-lg bg-blue-50'>
            <Image source={{uri:item.Icons}} className='w-[40px] h-[40px] '/>
            <Text className='text-[14px] mt-1'>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
      </View>
    )
}
