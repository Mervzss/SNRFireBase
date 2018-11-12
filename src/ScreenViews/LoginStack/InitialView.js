import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
// Custom Components Imports
import {HomeButton,DefaultBG,HeadText} from '../../components/SNRDefaults'

class InitialView extends Component{
    componentDidMount(){
        ImagePicker.showImagePicker(
            {
            title:"Pick an image",
            }
            , (response)=>{
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                // const source = { uri: response.uri };
            }
        })
    }
    render(){
        return(
            <DefaultBG  >
                <HeadText> SNR Home </HeadText>
                    <View style={styles.inContainer}>


                        <HomeButton textTitle={'Log In'} iconName='md-key' inverted={true} onPress={() => this.props.navigation.replace('Login')}/>
                        <HomeButton textTitle={'Sign In'} iconName='md-brush' onPress={() => this.props.navigation.replace('SignUp')} />

                 </View>

            </DefaultBG>
        )
    }
}

const styles = StyleSheet.create({
    inContainer:{
        width:'100%',
        alignItems: 'center',
    },
  });

export default InitialView;

