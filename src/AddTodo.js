import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = props => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='Добавить'/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
    },
    input: {
        width: '70%',
        borderStyle: 'solid',

    }
})
