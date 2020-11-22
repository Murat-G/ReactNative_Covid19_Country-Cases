import React, { useEffect,useState } from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';
import { CountryItem, SearchBar, Header } from '../components'

let originalList = [];
const HomePage = (props) => {
    const [countryList, setCountryList] = useState([]);
    const fetchCountry = async () => {
        const responser = await axios.get('https://rapidapi.p.rapidapi.com/countries', 
        {
            headers: {
                "x-rapidapi-key": "ffcee8c9f7mshdf8f6e1665c83ecp13072djsna22946ca81fa",
	            "x-rapidapi-host": "covid-193.p.rapidapi.com",   
            }
        }
        )
        // console.log(responser.data.response)
        setCountryList(responser.data.response)
        originalList = [...responser.data.response]
        // console.log(countryList)
    }
    const searchingRestaurant = (value) => {
        const filterCity = originalList.filter(i => {
            const text = value.toLowerCase();
            const country = i.toLowerCase();

            return country.startsWith(text)
        })
        setCountryList(filterCity)
    }

    useEffect(() => {
        fetchCountry();
    }, [])
    const renderCountry = ( {item} ) => {
        return ( 
           
        <CountryItem 
            data = {item}
            onSelected={() => props.navigation.navigate('Condition',{selectedCountry: item}) }
        />
        )
    }

        return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Header />
                <SearchBar onSelected={(value) => searchingRestaurant(value)}/>
                <FlatList 
                    keyExtractor={(_,index) => index.toString()}
                    data={countryList}
                    renderItem= {renderCountry}
                />
            </View>
        </SafeAreaView>
    )
}

export { HomePage }