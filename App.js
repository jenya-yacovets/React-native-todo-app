import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import NavBar from './src/components/nav-bar'
import ScreenMain from './src/screens/main-screen';
import ScreenTodo from './src/screens/todo-screen';

export default function App() {
    const [todoId, setTodoId] = useState('1')
    const [todos, setTodos] = useState([{
        id: '1',
        title: 'Покормить кота'
    }])

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
            {cancelable: false}
        )
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
