import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';


export default function PortfolioScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView, { width: '100%', flexDirection: 'column' }}>
        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.sanganayi.com')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item1.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>Sanganayi</Text>
          <Text style={styles.framework}>CodeIgniter</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.sanganayi.com')}>
            <Text style={styles.projlink}>https://www.sanganayi.com</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>


        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://hre-dev.webtecs.co.uk/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item2.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>HRE</Text>
          <Text style={styles.framework}>WordPress</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://hre-dev.webtecs.co.uk/')}>
            <Text style={styles.projlink}>http://hre-dev.webtecs.co.uk/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.ppp-news.com/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item3.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>PPP News</Text>
          <Text style={styles.framework}>Laravel</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.ppp-news.com/')}>
            <Text style={styles.projlink}>http://www.ppp-news.com/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.kuponsa.com')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item4.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>Kuponsa</Text>
          <Text style={styles.framework}>CodeIgniter</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.kuponsa.com')}>
            <Text style={styles.projlink}>https://www.kuponsa.com</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.pppexperts.com/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item5.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>PPP Experts</Text>
          <Text style={styles.framework}>CodeIgniter</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.pppexperts.com/')}>
            <Text style={styles.projlink}>http://www.pppexperts.com/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.pppinvestments.com/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item6.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>Sanganayi</Text>
          <Text style={styles.framework}>CodeIgniter</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.pppinvestments.com/')}>
            <Text style={styles.projlink}>http://www.pppinvestments.com/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.pppadvisory.com/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item7.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>PPP Advisory</Text>
          <Text style={styles.framework}>WordPress</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.pppadvisory.com/')}>
            <Text style={styles.projlink}>http://www.pppadvisory.com/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.ppptraining.uk/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item8.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>PPP Training</Text>
          <Text style={styles.framework}>CodeIgniter</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.ppptraining.uk/')}>
            <Text style={styles.projlink}>http://www.ppptraining.uk/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.fixgonow.com/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item9.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>FixGoNow</Text>
          <Text style={styles.framework}>CodeIgniter</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.fixgonow.com/')}>
            <Text style={styles.projlink}>https://www.fixgonow.com/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.asansoludan.org/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item10.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>Asansol Udan</Text>
          <Text style={styles.framework}>WordPress</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.asansoludan.org/')}>
            <Text style={styles.projlink}>http://www.asansoludan.org/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.madolfolkband.com/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item11.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>Madol</Text>
          <Text style={styles.framework}>WordPress</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.madolfolkband.com/')}>
            <Text style={styles.projlink}>http://www.madolfolkband.com/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.uzbekppp.com/')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item12.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>Uzbek PPP</Text>
          <Text style={styles.framework}>CodeIgniter</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.uzbekppp.com/')}>
            <Text style={styles.projlink}>http://www.uzbekppp.com/</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.poritem}>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.live.pppinvestmentsummit')}>
            <View style={styles.imgcont}>
              <Image source={require('../src/assets/img/item13.jpg')} style={{ width: '100%', height: '100%', }}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.imgborder}></View>
          <Text style={styles.projname}>Android App</Text>
          <Text style={styles.framework}>Backend, API</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.live.pppinvestmentsummit')}>
            <Text style={styles.projlink}>Google Play</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.divider}></View>



      </ScrollView>
      <View style={styles.divider}></View>
      <View style={styles.divider}></View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flex: 1,
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  scrollView: {
    marginBottom: '2%',
  },
  divider: {
    flex: 1,
    flexWrap: 'wrap',
    height: 50,
    marginTop: '2%',
    marginBottom: '2%',
    flexDirection: 'row',
  },
  poritem: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: '5%',
    backgroundColor: '#fff'
  },
  imgcont: {
    width: '100%',
    height: 250,
    borderColor: '#444',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  imgborder: {
    backgroundColor: '#ddd',
    height: 5,
    width: '100%',
    marginBottom: '2%',
  },
  projname: {
    zIndex: 100,
    width: '100%',
    color: '#c32865',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: -66,
    marginLeft: '2%',
  },
  framework: {
    width: '100%',
    color: '#444',
    fontSize: 18,
    marginLeft: '2%',
  },
  projlink: {
    width: '100%',
    color: '#f00002',
    fontSize: 12,
    textDecorationStyle: 'none',
    marginLeft: '2%',
  }
});
