import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native';
let styles = require('./style');
import backgroundImage from '../../assets/beautiful-place.jpg';


class Splash extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} >

                <View style={styles.MainContainer}>
                    <Image style={styles.ImageContainer} source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png' }}
                    />
                    <Text style={styles.TextStyle}>Welcome To My App</Text>
                </View>
            </ImageBackground>
        )
    }
}



export default Splash