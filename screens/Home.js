import React from 'react';
import {Button, View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import Header from './Header';
import Slider from 'react-native-slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import StackMenu from './StackMenu';
import Controls from './Controls';
import TrackDetails from './TrackDetails';
const Home = ({navigation, play, pause}) => {
  console.log('home ', navigation);
  return (
    <>
      <Header title="V3S Music" />
      <View style={{flex: 1}}>
        <View style={styles.musicArt}>
          <Image
            style={styles.musicArtPic}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAU',
            }}
          />
        </View>
        <View style={{backgroundColor: '#ead2d8', flex: 0.09}}>
          <Slider
            value={0.8}
            thumbStyle={{backgroundColor: '#ef5466'}}
            //trackStyle={{backgroundColor: 'red'}}
          />
        </View>
        {/* <View style={{backgroundColor: '#ead2d8'}}>
          <TrackDetails music_title="hii.mp3" artist="sanjiv" />
        </View> */}
        <View style={[styles.controllerButton, {backgroundColor: '#ead2d8'}]}>
          <Controls play={play} pause={pause} />
        </View>
      </View>
      <StackMenu navigation={navigation} />
    </>
  );
};
const styles = StyleSheet.create({
  musicArt: {
    width: windowWidth,
    flex: 0.76,
    marginTop: 0,

    padding: 20,
    backgroundColor: '#ead2d8',
  },
  musicArtPic: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    backgroundColor: 'red',
  },
  controllerButton: {
    padding: 5,
    flex: 0.15,
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  PlayButton: {
    //padding: 20,
    // borderWidth: 2,
    // borderColor: 'red',
  },
});
export default Home;
