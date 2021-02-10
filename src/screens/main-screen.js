import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import AddTodo from '../components/add-todo'
import Todo from '../components/todo'

const ScreenMain = ({addTodo, removeTodo, openTodo, todos}) => {
    return (
        <View>
            <AddTodo onAddTodo={addTodo} />
            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({ item }) => <Todo 
                                            todo={item}
                                            onRemove={removeTodo}
                                            onOpen={openTodo}
                                            />}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ScreenMain