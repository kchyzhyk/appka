import React, {useState} from "react";
import {Button, StyleSheet, Text, View} from 'react-native'
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove}) => {
    const [modal, setModal] = useState(false)
    return (
        <View>
           <EditModal visible={modal} onCancel={()=> setModal(false)}/>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Редактировать' onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.GREY_COLOR} title="Назад" onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button color={THEME.DANGER_COLOR}
                            title="Удалить"
                            onPress={() => onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})
