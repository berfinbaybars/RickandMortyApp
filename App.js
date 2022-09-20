import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navbar from './src/components//layout/Navbar';
import LocationListing from './src/pages/LocationListing';
import store from './src/redux/store';
import styles from './src/styles/main-styles';
import LocationDetail from './src/pages/LocationDetail';
import CharacterDetail from './src/pages/CharacterDetail';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.body}>
                <StatusBar style="auto" />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerTitle: (props) => <Navbar {...props} />,
                            headerTitleAlign: 'center',
                        }}
                    >
                        <Stack.Screen name="Home" component={LocationListing} />
                        <Stack.Screen name="LocationDetail" component={LocationDetail} />
                        <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}
