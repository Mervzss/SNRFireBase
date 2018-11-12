import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { DefaultBG, HeadText, HomeButton } from '../../../components/SNRDefaults'
class SignSubmit extends Component {
    render() {
        return (
            
            <DefaultBG>
                <ScrollView contentContainerStyle={{alignItems: "center", paddingVertical:'10%'}} showsVerticalScrollIndicator={false}>

                <HeadText> Sign Up: Submit</HeadText>

                <View style={{width:'100%', alignItems: 'center',}}>
                <HomeButton textTitle={'Submit'} iconName='md-done-all' inverted={true}  />
                </View>
                
                <HeadText> Sign Up: Submit</HeadText>
                
                </ScrollView>
            </DefaultBG>
            
        )
    }
}
export default SignSubmit;