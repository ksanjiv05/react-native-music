import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Controls({play, pause}) {
  const [isPlay, setIsPlay] = useState(false);
  const handelPlay = () => {
    console.log('is play', isPlay);
    isPlay ? setIsPlay(false) : setIsPlay(true);
    //play();
    if (isPlay) {
      console.log('paush in');
      pause();
    } else {
      play();
      console.log('play in');
    }
  };
  return (
    <View style={{flexDirection: 'row', height: 75}}>
      <Icon.Button
        name="exchange"
        size={40}
        color="#ef5466"
        backgroundColor="#ead2d8"
        style={styles.controller}
        iconStyle={{
          paddingLeft: 18,
          marginTop: '13%',
        }}></Icon.Button>
      <Icon.Button
        name="backward"
        size={40}
        color="#ef5466"
        backgroundColor="#ead2d8"
        style={styles.controller}
        iconStyle={{
          paddingLeft: 18,
          marginTop: '13%',
        }}></Icon.Button>
      <Icon.Button
        name={isPlay ? 'stop' : 'play'} // "play"
        size={40}
        color="#ead2d8"
        backgroundColor="#ef5466"
        borderRadius={40}
        iconStyle={{
          paddingLeft: 18,
          marginTop: '13%',
        }}
        onPress={handelPlay}
        style={styles.PlayButton}></Icon.Button>
      <Icon.Button
        name="forward"
        size={40}
        color="#ef5466"
        backgroundColor="#ead2d8"
        style={styles.controller}
        iconStyle={{
          paddingLeft: 18,
          marginTop: '13%',
        }}></Icon.Button>
      <Icon.Button
        name="repeat"
        size={40}
        color="#ef5466"
        backgroundColor="#ead2d8"
        style={styles.controller}
        iconStyle={{
          paddingLeft: 18,
          marginTop: '13%',
        }}></Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  controller: {
    padding: 10,
  },
});
export default Controls;
