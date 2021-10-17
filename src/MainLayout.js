import React, {useContext, useState} from "react";
import {Navbar} from "./components/Navbar";
import {View, StyleSheet} from "react-native";
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/ToDoScreen";
import {TodoContext} from "./context/todo/todoContext";


export const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo}  = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)
   
    let content = (
        <MainScreen
            addTodo={addTodo}
            todos={todos}
            removeTodo={removeTodo}
            openTodo={(id) => {
                setTodoId(id)
            }}/>
    )

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen onRemove={removeTodo}
                              todo={selectedTodo}
                              goBack={() => setTodoId(null)}
                              onSave={updateTodo}
        />
    }


    return (
        <View>
            <Navbar title='Todo App!'/>
            <View style={styles.container}>
                {content}
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
