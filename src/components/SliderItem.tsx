import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { ImageSliderType } from "@/data/SliderData";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
    item: ImageSliderType;
    index: number;
    scrollX: SharedValue<number>
}

const {width} = Dimensions.get('screen');

const SliderItem = ({item, index, scrollX} : Props) => {
    const rnAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index-1) * width, index * width, (index+1) * width],
                        [-width * 0.25, 0, width*0.25],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index-1) * width, index * width, (index+1) * width],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    ),
                }
            ],
        };
    });

    return(
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]} >
        <Image source={item.image} style ={styles.image}/>
        <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8']}
        style={styles.background}
        >
        <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity>
            
            </TouchableOpacity>
        </View>
        <View style={{gap: 10}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
        </LinearGradient>
    </Animated.View>
  )
}
export default SliderItem

const styles = StyleSheet.create({
    itemContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width
    },
    image:{
        width: 300,
        height: 500,
        borderRadius: 20,
    },
    background:{
        position:'absolute',
        height: 500,
        width: 300, 
        padding: 20,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1.5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3
    },
    description: {
        color: '#fff',
        fontSize: 12,
        letterSpacing: 1.2,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3

    },
});
