import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

export default function Form({ addHandler }) {
    const [info, setInfo] = useState('');

    const onChange = (text) => {
        setInfo(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Add Todo'></TextInput>
            <Button color='green' onPress={() => addHandler(info)} title='Add' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: 'green',
        borderBottomWidth: 1,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    },

});
