import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
//Importing Icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();
const MainColour = '#007dfe';

export default function TabNavigation(){
  
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:'#007dfe'
      }}>
        <Tab.Screen name='home' component={HomeScreen}
        options={{
            tabBarLabel: ({color})=>(
                <Text style={{color:color, fontSize:12, marginBottom:3}}>Home</Text>
            ),
            tabBarIcon:({color,size})=>(
                <Ionicons name="home" size={24} color={MainColour} />

            )
        }}
        />

        <Tab.Screen name='explore' component={ExploreScreen}
        options={{
            tabBarLabel: ({color})=>(
                <Text style={{color:color, fontSize:12, marginBottom:3}}>Explore</Text>
            ),
            tabBarIcon:({color,size})=>(
                <MaterialIcons name="explore" size={24} color={MainColour} />

            )
        }}
        />

        <Tab.Screen name='addpost' component={AddPostScreen}
        options={{
            tabBarLabel: ({color})=>(
                <Text style={{color:color, fontSize:12, marginBottom:3}}>Add Post</Text>
            ),
            tabBarIcon:({color,size})=>(
                <AntDesign name="plussquare" size={24} color={MainColour}/>

            )
        }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
        options={{
            tabBarLabel: ({color})=>(
                <Text style={{color:color, fontSize:12, marginBottom:3}}>Profile</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome6 name="face-laugh" size={24} color={MainColour} />

            )
        }}
        />
      </Tab.Navigator>
    )
  
}
