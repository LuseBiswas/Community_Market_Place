import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from '../Components/HomeScreen/Categories'

export default function HomeScreen() {

  useEffect(() => {
    getSliders();
    getCategoryList();

  }, [])

  const [categoryList,setCategoryList] = useState([]);

  //fetching slider informantion form firebase
  const db = getFirestore(app);
  const [sliderList, setSliderList] = useState([]);
  const getSliders = async () => {
    setSliderList([])
    const querySnapshot = await getDocs(collection(db, 'Sliders'));
    querySnapshot.forEach((doc) => {
      setSliderList(sliderList => [...sliderList, doc.data()]);
      
    })
  }

  //Category List

  const getCategoryList = async () => {
    setCategoryList([]);
    const querySnapShot = await getDocs(collection(db, 'Category'));

    querySnapShot.forEach((doc) => {

      console.log('Docs:', doc.data());
      setCategoryList(categoryList => [...categoryList, doc.data()])
      //...categoryList,doc,data() is use to 
    })

  }

  return (
    <View className='py-10 px-6 bg-white flex-1'>
      <Header />
      {/*Slider Component */}
      <Slider sliderList={sliderList} />
      {/* Category List */}
      <Categories categoryList={categoryList}/>
    </View>
  )
}
