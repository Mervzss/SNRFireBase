import React from 'react'
import {View , Text, StyleSheet, Image } from 'react-native'

export const ImageViewer = props => {

     let imageSelected = props.imageSelected 
     ? <Image resizeMode='stretch' style={styles.insertedImage} source={props.imageSelected}/> 
     : <Text style={{fontSize:75, color:'#FA58AC'}}>?</Text>
    

    return(
        <View style={styles.imageContainer}>
            {imageSelected}
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'90%',
        height: 200,
        backgroundColor:'white',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    insertedImage:{
        width:150,
        height:150
    }
});