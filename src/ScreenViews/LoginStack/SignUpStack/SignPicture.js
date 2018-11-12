import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Custom Components Imports
import {DefaultBG, HeadText, SignUpButtons, ImageViewer} from '../../../components/SNRDefaults'

//Sample Pic
import Sample from '../../../../assets/ninje.gif'
class SignPicture extends Component {
    render() {
        return (
            <DefaultBG>
                <HeadText>Sign Up: Step 3</HeadText>

                <HeadText style={{fontSize:20}}>"Set a Picture"</HeadText>
                
                <ImageViewer imageSelected={Sample}/>

                <SignUpButtons
                    middleButton={true} middleTitle={'Take a Pic'} onMidPress={() => alert('Picture Setted')}
                    buttonBack={() => this.props.navigation.navigate('Verify')}
                    buttonNext={() => this.props.navigation.navigate('Location')}
                />
            </DefaultBG>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'90%',
        height: 200,
        backgroundColor:'white',
        borderRadius:20
    }
});


export default SignPicture;