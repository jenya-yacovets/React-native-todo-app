import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AddTodo from './src/components/add-todo';
import NavBar from './src/components/nav-bar'
import Todo from './src/components/todo';

export default function App() {

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

  return (
    <View>
      <NavBar />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
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
