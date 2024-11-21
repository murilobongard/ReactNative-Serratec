import React from "react";
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

const Hero = () => {
    return(
        <ImageBackground source={require('../../../assets/home3.png')} style={styles.hero}> 
            <TouchableOpacity>
                <Image source={require('../../../assets/letreiro.png')} style={styles.letreiro}/>
            </TouchableOpacity>
       </ImageBackground>

    );
};

export default Hero;
