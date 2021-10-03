import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/ToDoScreen";

export default function App() {
    const [todoId, setTodoId] = useState('2')
    const [todos, setTodos] = useState([
        {id: '1', title: 'Hello'},
        {id: '2', title: 'Removeeeee'},
    ])

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
                              goBack={() => setTodoId(null)}/>
    }

    return (
        <View>
            <Navbar title='Todo App!'/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    }
});
