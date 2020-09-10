import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TrackImage = ({title}) => {
  return (
    <View style={styles.header}>
      <Image />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#ef5462',
    //alignContent:"center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
});
export default TrackImage;
