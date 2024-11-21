import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type LoadingProps = {
visible: boolean;
};

export const Loading:React.FC<LoadingProps> = ({visible}) =>{
    if (!visible) return null;

    return(
        <View style = {styles.overlay}>
        <View style={styles.container}>
        <ActivityIndicator size="large" />
        </View>
        </View>
);
};

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
},

overlay: { 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente 
    zIndex: 1000,
}
})
