import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import TodoState from './src/context/todo/todo-state'
import MainLayout from './src/main-layout'
import ScreenState from './src/context/screen/screen-state'

export default function App() {

    const [fontsLoaded] = useFonts({
        montserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
        montserratExtraLight: require('./assets/fonts/Montserrat-ExtraLight.ttf')
    })


    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <ScreenState>
            <TodoState>
                <MainLayout />
            </TodoState>
        </ScreenState>
    )
}