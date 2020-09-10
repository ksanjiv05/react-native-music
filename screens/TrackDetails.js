import React from 'react';
import {View, StyleSheet} from 'react-native';

const TrackDetails = ({music_title, artist}) => {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <Text>{{music_title}}</Text>
      <Text>{{artist}}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetails;
