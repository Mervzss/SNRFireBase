import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Custom Components Imports
import {DefaultBG, HeadText, SignUpButtons ,MapViewer} from '../../../components/SNRDefaults'

class SignLocation extends Component {
    render() {
        return (
            <DefaultBG>
                <HeadText>Sign Up: Step 4</HeadText>
                <HeadText> Locate Yourself</HeadText>

                <MapViewer 
                buttonBack={() => this.props.navigation.navigate('Picture')}
                buttonNext={() => this.props.navigation.navigate('Submit')}
                />

                
            </DefaultBG>
        )
    }
}
export default SignLocation;