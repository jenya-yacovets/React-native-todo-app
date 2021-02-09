import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

  return (
    <View>
      <NavBar />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <View>
          {
            todos.map((todo) => <Todo todo={todo} key={todo.id} />)
          }
        </View>
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
