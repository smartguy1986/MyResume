import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking, ImageBackground, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

const skills = [
  {type: "Java", level: 85},
  {type: "Javascript", level: 75},
];

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

            <Text style={styles.introtext}>With 5+ years of experience in the web development specifically in PHP based frameworks, possessed knowledge of the development of web applications and scripts using PHP programming language and MySQL databases.</Text>
            <Text style={styles.introtext}>Experienced in developing applications and solutions for a wide range of corporate, charity and public sector clients and having the enthusiasm and ambition to complete projects to the highest standard. Efficient in WordPress, CodeIgniter and having knowledge of CakePHP, Laravel and React framework development.</Text>

            <View style={styles.education}>
              <Text style={styles.bigheading}>Education <Image source={require('../src/assets/img/book.png')} style={{ width: 32, height: 32, marginLeft: '5%', }}></Image></Text>
              <View style={styles.divider}></View>
              <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#fff', }}>Calcutta University <Text style={{ fontSize: 22, color: '#c32865', }}>2009</Text></Text>
              <Text style={{ fontSize: 16, color: '#fff' }}>B.Sc. General in Economics</Text>
              <View style={styles.divider}></View>
              <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#fff', }}>WBCHSE <Text style={{ fontSize: 22, color: '#c32865', }}>2005</Text></Text>
              <Text style={{ fontSize: 16, color: '#fff' }}>Higher Secondary (XII) in Science</Text>
              <View style={styles.divider}></View>
              <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#fff', }}>WBBSE <Text style={{ fontSize: 22, color: '#c32865', }}>2003</Text></Text>
              <Text style={{ fontSize: 16, color: '#fff' }}>Madhyamik Examination (X)</Text>
              <View style={styles.divider}></View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.skills, { alignItems: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end', }}>
              <View style={styles.rightbox}><Text style={styles.bigheading2}> Skills</Text><Image source={require('../src/assets/img/skills.png')} style={{ width: 32, height: 32, marginRight: '5%', marginTop: '7%', }}></Image></View>
              <View style={styles.divider}></View>
              <Text style={{ fontSize: 20, color: '#fff'}}>HTML, CSS</Text>
              <Text style={{ fontSize: 20, color: '#fff'}}>PHP, MYSQL</Text>
              <Text style={{ fontSize: 20, color: '#fff'}}>WordPress</Text>
              <Text style={{ fontSize: 20, color: '#fff'}}>CodeIgniter, CakePHP</Text>
              <Text style={{ fontSize: 20, color: '#fff'}}>AJAX, jQuery, Javascript</Text>
              <Text style={{ fontSize: 20, color: '#fff'}}>Laravel, React Native</Text>
              <Text style={{ fontSize: 20, color: '#fff'}}>Photoshop</Text>
              <View style={styles.divider}></View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.strenghts}>
              <Text style={styles.bigheading}>Strength <Image source={require('../src/assets/img/strength.png')} style={{ width: 32, height: 32, marginLeft: '5%', }}></Image></Text>
              <View style={styles.divider}></View>
              <Text style={{ fontSize: 20, color: '#fff' }}>Hard Working, Self-Motivating, Quick Learner, Team Work, Creative</Text>
              <View style={styles.divider}></View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.languages, { alignItems: 'flex-end', alignContent: 'flex-end', alignSelf: 'flex-end', }}>
              <View style={styles.rightbox}><Text style={styles.bigheading2}> Languages</Text><Image source={require('../src/assets/img/language.png')} style={{ width: 32, height: 32, marginRight: '5%', marginTop: '7%', }}></Image></View>
              <View style={styles.divider}></View>
              <Text style={{ fontSize: 20, color: '#fff' }}>Bengali, English, Hindi</Text>
              <View style={styles.divider}></View>
            </View>

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
    fontWeight: 'bold',
  },
  smallBig: {
    color: '#fff',
    fontSize: 90,
    fontWeight: 'bold',
  },
  introtext: {
    color: '#fff',
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: 16,
  },
  bigheading: {
    color: '#c32865',
    fontSize: 40,
    fontWeight: 'bold',
    width: '100%',
  },
  bigheading2: {
    flex: 1,
    color: '#c32865',
    fontSize: 40,
    fontWeight: 'bold',
    //width: '100%',
  },
  divider: {
    flex: 1,
    flexWrap: 'wrap',
    height: 50,
    marginTop: '2%',
    marginBottom: '2%',
    flexDirection: 'row',
  },
  rightbox:{
    flex: 1,
    flexDirection:'column',
    flexWrap: 'wrap-reverse',
    marginBottom: '5%',  
  }
});
