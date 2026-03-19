import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen.js';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, onChangeTextUser] = React.useState('');
    const [pass, onChangeTextPass] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.loginWord}>Login</Text>

            <View>

                <TextInput style={styles.input} placeholder="username" onChangeText={onChangeTextUser} value={username}/>
                <TextInput style={styles.input} placeholder="password" onChangeText={onChangeTextPass} value={pass} secureTextEntry={true}/>
                    
            </View>
            <Button style={styles.buttonContainer}
            onPress={() => {
                handleLogin(username, pass, navigation);
            }}
            title = "Go"/>
        </View>
    )
};

const handleLogin = (username, password, navigation) => {
    if (!username || !password) {
        return;
    }
    else{
        navigation.replace('Home');
    }

    //call hook maybe api?  *this is for later
        //some code//

    //next screen just for now until api is built

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center'
    },

    loginWord: {
        marginTop: 250,
        fontSize: 50,
        marginBottom: 30
    },

    input: {
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
    },

    buttonContainer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20
    }

});
export default LoginScreen;