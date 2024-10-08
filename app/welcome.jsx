import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <ScreenWrapper bg='white'>
        <StatusBar style ="dark"/>
        <View style={styles.container}>
{/* welcome */}
            <Image style={styles.welcomeImage} resizeMode="contain" source = {require('../assets/images/welcome.png')}/>
{/* title */}
<View style={{gap:20}}>

<Text style={styles.title}>Socio.Pk</Text>
<Text style={styles.punchline}>
    Where Every Thought finds a home
    and every image tells a story.
</Text>

</View>

<View style={styles.footer}>
<Button
title ="getting Started"
buttonStyle={{marginHorizontal: wp(3)}}
onPress={()=> {}}
/>
<View style={styles.bottomTextContainer}>
    <Text style={styles.loginText}>
        Already have an account! 
    </Text>
    <Pressable>
        <Text style={[styles.loginText, {color: theme.colors.primarydark, fontWeight: theme.fonts.semibold}]}>
            Login

        </Text>
    </Pressable>

</View>


</View>
</View>

             </ScreenWrapper>
  
  )
}

export default Welcome

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },
    title:{
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold
    },
    punchline:{
        color: theme.colors.text,
        fontSize: hp(1.7),
        textAlign: 'center',
       paddingHorizontal: wp(10)
    },
    footer:{
        gap:30,
        width: '100%'
    },
    bottomTextContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    loginText:{
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6)

    }
})