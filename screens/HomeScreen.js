import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../src/assets/img/arijit.jpg')} style={{ width: 150, height: 150, resizeMode: 'contain'}}></Image>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameBig}>Arijit Nandi</Text>
          <Text style={styles.smallBig}>Web Developer</Text>
          <Text>{"\n"}{"\n"}{"\n"}</Text>
          <View style={{ flexDirection: 'row', }}>
            <View style={{width: '30%'}}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/arijit.nandi')}>
                <Image source={require('../src/assets/img/facebook.png')} style={{ width: 26, height: 26, marginLeft: '3%', marginRight: '3%', }} resizeMode='contain'></Image>
              </TouchableOpacity>
            </View>
            <View style={{width: '30%'}}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/arijit-nandi-16356962/')}>
                <Image source={require('../src/assets/img/linkedin.png')} style={{ width: 26, height: 26, marginLeft: '3%', marginRight: '3%', }} resizeMode='contain'></Image>
              </TouchableOpacity>
            </View>
            <View style={{width: '30%'}}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/arijit_nandi1986/')}>
                <Image source={require('../src/assets/img/instagram.png')} style={{ width: 26, height: 26, marginLeft: '3%', marginRight: '3%', }} resizeMode='contain'></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.introtext}>With 5+ years of experience in the web development specifically in PHP based frameworks, possessed knowledge of the development of web applications and scripts using PHP programming language and MySQL databases. Experienced in developing applications and solutions for a wide range of corporate, charity and public sector clients and having the enthusiasm and ambition to complete projects to the highest standard. Efficient in WordPress, CodeIgniter and having knowledge of CakePHP, Laravel and React framework development.</Text>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    // marginTop: '10%',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  topContainer: {
    backgroundColor: '#fbfbfb',
    flexDirection: 'row',
    height: 150,
    marginBottom: '5%',
  },
  bottomContainer: {
    paddingTop: '5%',
    backgroundColor: '#fbfbfb',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '50%',
  },
  nameContainer: {
    width: '50%',
    paddingLeft: '2%',
  },
  nameBig: {
    color: '#000',
    fontSize: 28,
  },
  smallBig: {
    color: '#354147',
    fontSize: 16,
  }
});
