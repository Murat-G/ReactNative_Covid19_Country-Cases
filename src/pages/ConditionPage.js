import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text,FlatList,StyleSheet} from 'react-native';
import  {ConditionItem}  from '../components'
const ConditionPage = (props) => {
    const [conditionList,setConditionList] = useState([]); 
    const {selectedCountry} = props.route.params
    const fetchCondition = async () => {
        const responses = await Axios.get('https://covid-193.p.rapidapi.com/statistics',
        { params: {country: `${ selectedCountry }`}, headers:{
            'x-rapidapi-key': 'ffcee8c9f7mshdf8f6e1665c83ecp13072djsna22946ca81fa',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        } },
        )
        // console.log(responses.data.response)
        setConditionList(responses.data.response)
        // console.log(conditionList)
    }
    const renderCondition = ( {item} ) => {
        // console.log(item)
        return (
            <ConditionItem datas={item} info={selectedCountry}/>
        )
    }
    useEffect(() => {
        fetchCondition();
    }, [])
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}> 
                {/* <Text>ConditionPage</Text> */}
                <View style = {styles.container}>
                <Text style={styles.text}>{selectedCountry}</Text>
                </View>
                <FlatList 
                     keyExtractor={(_,index) => index.toString()}
                     data={conditionList}
                     renderItem= {renderCondition}
                     />
            </View>
        </SafeAreaView>
    )
}
export { ConditionPage };
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c62828',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize:30,
        fontWeight:'400',
        textAlign:'center',
    }
})