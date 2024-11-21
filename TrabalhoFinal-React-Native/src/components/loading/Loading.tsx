import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type LoadingProps = {
visible: boolean;
};

export const Loading:React.FC<LoadingProps> = ({visible}) =>{
    if (!visible) return null;

    return(
        <View style={styles.container}>
        <ActivityIndicator size="large" />
        </View>
       
);
};

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:'rgba(0, 0, 0, 0.5)',
}
    
})
