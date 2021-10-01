import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
        setTodos(prev => prev.filter(todo => todo.id !== id))
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
        content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)}/>
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
