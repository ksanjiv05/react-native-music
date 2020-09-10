import TrackPlayer from 'react-native-track-player';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Home from './screens/Home';
// Creates the player
const Player = ({navigation}) => {
  TrackPlayer.setupPlayer().then(async () => {
    // Adds a track to the queue
    await TrackPlayer.add({
      id: 'trackId',
      url:
        'https://drive.google.com/uc?export=download&id=1V-c_WmanMA9i5BwfkmTs-605BQDsfyzC',
      title: 'Track Title',
      artist: 'Track Artist',
      artwork: require('./static/refresh.png'),
    });
  });
  const playHandel = () => {
    TrackPlayer.play()
      .then(() => {
        console.log('played');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const pushHandel = () => {
    console.log('push');
    TrackPlayer.pause();
  };
  return (
    <>
      <Home navigation={navigation} play={playHandel} pause={pushHandel} />
    </>
  );
};

export default Player;
