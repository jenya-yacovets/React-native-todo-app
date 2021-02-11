import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import NavBar from './src/components/nav-bar'
import ScreenMain from './src/screens/main-screen'
import ScreenTodo from './src/screens/todo-screen';

export default function App() {

    const [fontsLoaded] = useFonts({
        montserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
        montserratExtraLight: require('./assets/fonts/Montserrat-ExtraLight.ttf')
    })
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([])

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const addTodo = (title) => {

        const newTodo = {
            id: Date.now().toString(),
            title
        }
        setTodos((state) => [newTodo, ...state])
    }

    const removeTodo = id => {

        const { title } = todos.find(item => item.id === id)

        Alert.alert(
            'Удалить задачу',
            `Вы действительно хотите удалить задачу "${title}"?`,
            [{
                text: 'Удалить',
                style: 'destructive',
                onPress: () => {

                    if (todoId === id) {
                        setTodoId(null)
                    }

                    setTodos(state => {

                        const newState = state.filter(todo => {
                            if (todo.id != id) return true
                        })

                        return [...newState]
                    })
                },
            }, {
                text: 'Отмена',
                style: 'cancel'
            }],
            { cancelable: false }
        )
    }

    const editTodo = ({ id, title }) => {
        setTodos(old => old.map(item => {
            if (item.id === id) {
                item.title = title
            }
            return item
        }))
    }

    let content = <ScreenMain
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
        openTodo={setTodoId}
    />

    if (todoId) {
        const todo = todos.find(item => item.id === todoId)

        content = <ScreenTodo
            closeTodo={setTodoId}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
        />
    }

    return (
        <View>
            <NavBar />
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    }
});