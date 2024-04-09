import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native'
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';
import { app } from '../../firebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";


export default function AddPostScreen() {

  const [image, setImage] = useState(null);
  //creating a method to get the category list from the firebase
  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();

  }, [])


  const getCategoryList = async () => {
    setCategoryList([]);
    const querySnapShot = await getDocs(collection(db, 'Category'));

    querySnapShot.forEach((doc) => {

      console.log('Docs:', doc.data());
      setCategoryList(categoryList => [...categoryList, doc.data()])
      //...categoryList,doc,data() is use to 
    })

  }
  //handleChange, handleSubmit need to memorize


  //Used to pick image from gallery
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = ( value )=>{
    value.image = image;
    console.log(value);

  }



  return (
    <View className='p-10'>
      <Text className='text-[27px] font-bold mt-3'>Add New Post</Text>
      <Text className='text-[16px] text-gray-500 mb-10'>Create a Post and Start Selling</Text>
      <Formik
        initialValues={{ title: '', desc: '', category: '', address: '', mobile: '', price: '', image: '' }}
        onSubmit={value => onSubmitMethod(value)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
          <View>

            <TouchableOpacity onPress={pickImage}>

              {image?
              <Image source={{uri:image}} style={{width: 100, height: 100, borderRadius: 15}}/>
              : <Image source={require('./../../assets/Images/placeholder.jpg')} 
              style={{width: 100, height: 100, borderRadius: 15}}
              />}
            
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder='Title'
              value={values?.title}
              onChangeText={handleChange('title')}
            />

            <TextInput
              style={styles.input}
              placeholder='Description'
              value={values?.desc}
              numberOfLines={3}
              onChangeText={handleChange('desc')}
            />

            <TextInput
              style={styles.input}
              placeholder='Price'
              value={values?.price}
              keyboardType='number-pad'//this is used to chosse which type of keyboard you want to use
              onChangeText={handleChange('price')}
            />

            {/* Category List Drope Down*/}
            <View style={{borderWidth:1, borderRadius:10, marginTop:7}}>
            <Picker
            selectedValue={values.category}
            style={styles.input}
            onValueChange={itemValue=>setFieldValue('category',itemValue)}
            >
              {categoryList&&categoryList.map((item,index)=>(
                <Picker.Item key={index}
                label={item.name} value={item.name}/>
              ))}
            </Picker>
            </View>

            <TextInput
              style={styles.input}
              placeholder='Address'
              value={values?.address}
              numberOfLines={2}
              onChangeText={handleChange('address')}
            />

            <TextInput
              style={styles.input}
              placeholder='Mobile'
              value={values?.mobile}
              keyboardType='number-pad'//this is used to chosse which type of keyboard you want to use
              onChangeText={handleChange('mobile')}
            />      

            <TouchableOpacity onPress={handleSubmit} className='p-4 bg-[#007dfe] rounded-full mt-5' >
              <Text className='text-white text-center text-[16px]'>Submit</Text>
            </TouchableOpacity>      

            
          </View>
        )}

      </Formik>

    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10, marginBottom: 5,
    paddingHorizontal: 17,
    textAlignVertical: 'top',
    fontSize: 17

  }
})
