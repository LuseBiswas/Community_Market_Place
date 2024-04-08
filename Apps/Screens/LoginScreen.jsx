import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen(){

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    return (
        <View>
            <Image source={require('./../../assets/Images/login.jpg')}
                className='w-full h-[400px] object-cover'
            />
            <View className='p-8'>
                <Text className='text-[30px] font-bold'>Communty Marketplace</Text>
                <Text className='text-[18px] text-slate-500 m-6'>Buy Sell Marketplace where you sell your item and make real money</Text>

                <TouchableOpacity onPress={onPress} className="p-4 bg-[#007dfe] rounded-full mt-20">
                    <Text className='text-white text-center text-[18px]'>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )







}

    


