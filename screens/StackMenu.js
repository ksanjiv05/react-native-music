import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const StackMenu = ({navigation}) => {
  console.log('music ', navigation);
  return (
    <View style={styles.stackmenu}>
      <Icon.Button
        name="music"
        size={21}
        color="#ef5466"
        backgroundColor="#ead2d8"
        style={styles.navigateButton}
        onPress={() => navigation.navigate('Player')}></Icon.Button>
      <Icon.Button
        name="list-ul"
        size={21}
        color="#ef5466"
        backgroundColor="#ead2d8"
        style={styles.navigateButton}
        onPress={() => navigation.navigate('Music')}></Icon.Button>

      <Icon.Button
        name="gear"
        size={21}
        color="#ef5466"
        backgroundColor="#ead2d8"
        style={styles.navigateButton}></Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  stackmenu: {
    width: windowWidth,
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1.4,
    //padding: 10,

    borderTopColor: 'red',
  },
  navigateButton: {
    //width: '33%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: windowWidth / 3 / 2 - 17,
    paddingRight: windowWidth / 3 / 2 - 17,
    //borderEndWidth: 2,

    //borderWidth: 2,
    // borderEndColor: 'red',
    //borderColor: 'red',
  },
});

export default StackMenu;
