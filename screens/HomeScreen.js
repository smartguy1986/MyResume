import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking, ImageBackground, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../src/assets/img/arijit-black2.jpg')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>

        <View style={styles.topContainer}>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ width: 30 }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/arijit.nandi')}>
                <Image source={require('../src/assets/img/facebook.png')} style={{ width: 18, height: 18, marginLeft: '5%', marginRight: '5%', }} resizeMode='contain'></Image>
              </TouchableOpacity>
            </View>
            <View style={{ width: 30 }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/arijit-nandi-16356962/')}>
                <Image source={require('../src/assets/img/linkedin.png')} style={{ width: 18, height: 18, marginLeft: '5%', marginRight: '5%', }} resizeMode='contain'></Image>
              </TouchableOpacity>
            </View>
            <View style={{ width: 30 }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/arijit_nandi1986/')}>
                <Image source={require('../src/assets/img/instagram.png')} style={{ width: 18, height: 18, marginLeft: '5%', marginRight: '5%', }} resizeMode='contain'></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.bottomContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameBig}>Howdy,</Text>
              <Text style={styles.smallBig}>I'm</Text>
              <Text style={styles.smallBig}>Arijit</Text>
            </View>

            <Text style={styles.introtext}>With 5+ years of experience in the web development specifically in PHP based frameworks, possessed knowledge of the development of web applications and scripts using PHP programming language and MySQL databases. Experienced in developing applications and solutions for a wide range of corporate, charity and public sector clients and having the enthusiasm and ambition to complete projects to the highest standard. Efficient in WordPress, CodeIgniter and having knowledge of CakePHP, Laravel and React framework development.</Text>

          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fbfbfb',
    // marginTop: '10%',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  topContainer: {
    //backgroundColor: '#fbfbfb',
    width: '100%',
    height: 50,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: '5%',
  },
  bottomContainer: {
    paddingTop: '5%',
    //backgroundColor: '#fbfbfb',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '50%',
  },
  nameContainer: {
    width: '100%',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginBottom: '2%',
  },
  nameBig: {
    color: '#c32865',
    fontSize: 90,
    fontWeight: 600,
  },
  smallBig: {
    color: '#fff',
    fontSize: 90,
    fontWeight: 600,
  },
  introtext: {
    color: '#fff',
    marginTop: '5%',
    marginBottom: '5%',
  },
});
