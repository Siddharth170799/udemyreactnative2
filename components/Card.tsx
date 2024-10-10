import React from "react"
import { StyleSheet, View } from "react-native"

function Card({children}){
    
    return(
<View style={styles.card}>{children}</View>
    )
}


export default Card


const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 36,
        backgroundColor: "3b021f",
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})