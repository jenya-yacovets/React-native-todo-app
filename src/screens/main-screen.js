import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import AddTodo from '../components/add-todo'
import Todo from '../components/todo'

const ScreenMain = ({ addTodo, removeTodo, openTodo, todos }) => {
    let content = <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => <Todo
            todo={item}
            onRemove={removeTodo}
            onOpen={openTodo}
        />}
    />

    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrap}>
                <Image style={styles.image} source={require('../../assets/no-items.png')} />
            </View>
        )
    }

    return (
        <View>
            <AddTodo onAddTodo={addTodo} />
            { content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default ScreenMain