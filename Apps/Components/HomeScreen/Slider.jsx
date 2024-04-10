import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Image, View, TouchableOpacity } from 'react-native';

export default function Slider({ sliderList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex === sliderList.length) {
        nextIndex = 0;
      }//If slider move to end then redirect to the first image
      setActiveIndex(nextIndex);
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderItem = ({ item }) => (
    <View>
      <Image
        source={{ uri: item?.image }}
        style={{ height: 200, width: 325, marginRight: 3, borderRadius: 10 }}
      />
    </View>
  );

  const renderDot = (index) => (
    <TouchableOpacity
      key={index}
      onPress={() => setActiveIndex(index)}
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: activeIndex === index ? '#007dfe' : 'gray',
        marginHorizontal: 5,
      }}
    />
  );

  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        ref={flatListRef}
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        {sliderList.map((_, index) => renderDot(index))}
      </View>
    </View>
  );
}
