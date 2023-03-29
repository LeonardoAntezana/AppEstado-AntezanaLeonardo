import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/colors'
import { FONTS } from '../constants/fonts'

const { width } = Dimensions.get('screen');

const AuthScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        <Text style={styles.title}>login</Text>
        <Text>Email</Text>
        <TextInput style={styles.input}/>
        <Text>Password</Text>
        <TextInput style={styles.input}/>
        <TouchableOpacity style={styles.button}>
            <Text>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
    },
    title: {
        fontFamily: FONTS.OPSANSREGULAR,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 30,
    },
    box: {
        width: width - 50,
        maxWidth: '80%',
        backgroundColor: '#fff',
        paddingHorizontal: 20, 
        paddingVertical:30,
        borderRadius: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
        paddingLeft: 10,
        height: 40,
    },
    button: {
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        marginTop: 10,
    },
})