import React from 'react';
import {SafeAreaView,Text,View, StyleSheet} from 'react-native';
const Header = (props) => {
    return(
        <View style = {styles.headers}>
            <Text style = {styles.text}>COVID-19</Text>
            <Text style = {styles.text}>COUNTRY REPORTS</Text>
        </View>
    )
}
export { Header };
const styles = StyleSheet.create({
    headers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 13,
        backgroundColor: '#c62828'
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700'
    }
})