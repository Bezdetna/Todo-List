import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {


    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                Todo List
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 40,
        height: 100,
        backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 28,
        color: 'green',
        fontStyle: 'normal',
        textAlign: 'center',
    }


});
