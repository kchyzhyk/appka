import React, {useContext, useState} from "react";
import {Navbar} from "./components/Navbar";
import {View, StyleSheet} from "react-native";
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/ToDoScreen";
import {TodoContext} from "./context/todo/todoContext";
import {ScreenContext} from "./context/screen/screenContext";


export const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo}  = useContext(TodoContext)
    const {todoId} = useContext(ScreenContext)

    return (
        <View>
            <Navbar title='Todo App!'/>
            <View style={styles.container}>{
                todoId ? <TodoScreen /> : <MainScreen/>
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
    }
});
