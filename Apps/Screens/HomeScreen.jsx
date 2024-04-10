import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Header from '../Components/HomeScreen/Header'
import Slider from '../Components/HomeScreen/Slider'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'

export default function HomeScreen() {

  useEffect(() => {
    getSliders();

  }, [])

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

  return (
    <View className='py-10 px-6 bg-white flex-1'>
      <Header />
      {/*Slider Component */}
      <Slider sliderList={sliderList} />
    </View>
  )
}
