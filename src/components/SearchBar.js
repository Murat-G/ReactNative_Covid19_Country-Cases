import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';


const SearchBar = (props) => {
    return (
        <View>

            <TextInput
                placeholder='Search a Country...'
                style={styles.search}
                onChangeText={value => props.onSelected(value)}
            />

        </View>
    )
}

export { SearchBar }


const styles = StyleSheet.create({
    search:{
        margin:5,
        padding:10,
        borderRadius:8,
        borderWidth:1
    }
})