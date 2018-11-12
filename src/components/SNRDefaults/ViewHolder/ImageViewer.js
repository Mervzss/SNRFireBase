import React from 'react'
import {View , Text, StyleSheet, Image } from 'react-native'

import ImagePicker from 'react-native-image-crop-picker'
import {SignUpButtons} from '../Button/SignUpButtons'
export const ImageViewer = props => {

     let imageSelected = props.imageSelected 
     ? <Image resizeMode='stretch' style={styles.insertedImage} source={props.imageSelected}/> 
     : <Text style={{fontSize:75, color:'#FA58AC'}}>?</Text>
    
     pickedImage = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
        // ImagePicker.showImagePicker(
        //     {
        //     title:'Select Your Profile Pic',
        //     }
        //     , (response)=>{
        //     console.log(response)
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //       } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //       } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //       } else {
        //         // const source = { uri: response.uri };
        //     }
        // })
    }

    return(
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.imageContainer}>
            {imageSelected}
        </View>
        <SignUpButtons
        middleButton={true} middleTitle={'Take a Pic'} onMidPress={this.pickedImage}
        buttonBack={() => this.props.navigation.navigate('Verify')}
        buttonNext={() => this.props.navigation.navigate('Location')}
    />
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