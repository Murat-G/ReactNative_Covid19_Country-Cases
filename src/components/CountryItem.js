import React from 'react';
import {Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
const CountryItem = (props) => {
    return (
            <TouchableOpacity style={styles.Container} onPress={props.onSelected}>
                <Text style={styles.text}>{props.data}</Text>
            </TouchableOpacity>
    )
}
export { CountryItem }
const styles = StyleSheet.create({
    Container: {
        padding:10,
        margin:5,
        backgroundColor: '#bdbdbd',
        borderRadius: 8,
        width: Dimensions.get('screen').width*0.7,
        alignSelf: 'center'
    },
    text: {
        textAlign:'center',
        fontWeight:'200',
        fontSize: 20,
    }
})