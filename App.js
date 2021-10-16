import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'


import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/ToDoScreen";

import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";

async function loadApplication() {
    return await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading startAsync={loadApplication}
                           onError={err => console.log(err)}
                           onFinish={() => setIsReady(true)}
        />
    }

    return <TodoState><MainLayout /></TodoState>
}


