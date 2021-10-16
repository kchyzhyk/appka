import React, {useState} from "react";
import {Navbar} from "./components/Navbar";
import {View, StyleSheet, Alert} from "react-native";
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/ToDoScreen";


export const MainLayout = () => {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prev => [...prev,
            {
                id: Date.now().toString(),
                title
            }])
    }
    const removeTodo = id => {
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            'Удаление элементов',
            `Вы уверены, что хотите удалить ${todo.title} ?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить', onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    }
                }
            ],
            {cancelable: false},
        )
    }
    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }))
    }
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
