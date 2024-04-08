import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from '../../firebaseConfig';

export default function AddPostScreen()  {

  //creating a method to get the category list from the firebase
  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
    getCategoryList();

  },[])

  
  const getCategoryList = async()=>{
    const querySnapShot = await getDocs(collection(db, 'Category'));

    querySnapShot.forEach((doc)=>{
      console.log('Docs:',doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()])
      //...categoryList,doc,data() is use to 
    })

  }
  
    return (
      <View>
        <Text> Add Post </Text>
      </View>
    )
  
}
