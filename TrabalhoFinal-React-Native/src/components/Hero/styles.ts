import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    hero:{
        height: 300, 
        width: '100%',

    },
    letreiro:{
        marginTop: 100,
        alignSelf: 'flex-start',
        resizeMode: "contain",
        width: 300, 
        height: 150,
        position: 'absolute',
        zIndex: 10,
    },

});

export default styles;