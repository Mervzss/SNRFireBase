import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

// Custom Components Imports
import { DefaultBG, HeadText, SignUpButtons, InitialTextInput } from '../../../components/SNRDefaults'

class SignVerify extends Component {
    render() {
        return (
            <DefaultBG>

                <HeadText> Sign Up: Step 2</HeadText>

                <View style={{ width: '90%' }}>
                    <InitialTextInput
                        underlineColorAndroid='white'
                        placeholder='Confirm Password'
                        placeholderTextColor='#F6CEE3'
                        
                        />
                </View>

                <SignUpButtons 
                    buttonBack={() => this.props.navigation.navigate('SignInit')}
                    buttonNext={() => this.props.navigation.navigate('Picture')}
                />


            </DefaultBG>
        )
    }
}


export default SignVerify;