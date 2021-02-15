import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import NavBar from './components/nav-bar'
import ScreenContext from './context/screen/screen-context'
import ScreenMain from './screens/main-screen'
import ScreenTodo from './screens/todo-screen'

const MainLayout = () => {

    const { screen } = useContext(ScreenContext)

    return (
        <View style={ styles.main }>
            <NavBar />
            <View style={styles.container}>
                {screen ? <ScreenTodo /> : <ScreenMain />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1
    },
    main: {
        flex: 1
    }
})

export default MainLayout