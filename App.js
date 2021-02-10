import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/components/nav-bar'
import ScreenMain from './src/screens/main-screen';
import ScreenTodo from './src/screens/todo-screen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {

    const newTodo = {
      id: Date.now().toString(),
      title
    }
    setTodos((state) => [newTodo, ...state])
  }

  const removeTodo = id => {
    setTodos(state => {

      const newState = state.filter(todo => {
        if (todo.id != id) return true
      })

      return [...newState]
    })
  }

  let content = <ScreenMain 
                addTodo={addTodo} 
                removeTodo={removeTodo} 
                todos={todos} 
                openTodo={setTodoId} 
                />

  if (todoId) {
    content = <ScreenTodo 
              closeTodo={setTodoId} 
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
