import React from 'react';
import {Button, View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Header from './Header';

const windowWidth = Dimensions.get('window').width;
//import Home from './Home';
import Player from '../Player';
import StackMenu from './StackMenu';
function MusicScreen({navigation}) {
  return (
    <>
      <Header />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Text>Music</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>controls</Text>
        </View>
      </View>
      <StackMenu navigation={navigation} />
    </>
  );
}
// function HomeScreen({navigation}) {
//   return (
//     <>
//       <Header title="V3S Music" />
//       <View style={{flex: 1}}>
//         <View style={styles.musicArt}>
//           <Image
//             style={styles.musicArtPic}
//             source={{
//               uri:
//                 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAU',
//             }}
//           />
//         </View>
//         <View style={{backgroundColor: '#ead2d8', flex: 0.09}}>
//           <Slider
//             value={0.8}
//             thumbStyle={{backgroundColor: '#ef5466'}}
//             //trackStyle={{backgroundColor: 'red'}}
//           />
//         </View>
//         <View style={[styles.controllerButton, {backgroundColor: '#ead2d8'}]}>
//           <Icon.Button
//             name="exchange"
//             size={40}
//             color="#ef5466"
//             backgroundColor="#ead2d8"
//             style={styles.controller}
//             iconStyle={{
//               paddingLeft: 18,
//               marginTop: '13%',
//             }}></Icon.Button>
//           <Icon.Button
//             name="backward"
//             size={40}
//             color="#ef5466"
//             backgroundColor="#ead2d8"
//             style={styles.controller}
//             iconStyle={{
//               paddingLeft: 18,
//               marginTop: '13%',
//             }}></Icon.Button>
//           <Icon.Button
//             name="play"
//             size={40}
//             color="#ead2d8"
//             backgroundColor="#ef5466"
//             borderRadius={40}
//             iconStyle={{
//               paddingLeft: 18,
//               marginTop: '13%',
//             }}
//             //</View>
//             style={styles.PlayButton}></Icon.Button>
//           <Icon.Button
//             name="forward"
//             size={40}
//             color="#ef5466"
//             backgroundColor="#ead2d8"
//             style={styles.controller}
//             iconStyle={{
//               paddingLeft: 18,
//               marginTop: '13%',
//             }}></Icon.Button>
//           <Icon.Button
//             name="repeat"
//             size={40}
//             color="#ef5466"
//             backgroundColor="#ead2d8"
//             style={styles.controller}
//             iconStyle={{
//               paddingLeft: 18,
//               marginTop: '13%',
//             }}></Icon.Button>
//         </View>
//       </View>
//       <StackMenu navigation={navigation} />
//     </>
//   );
// }

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Player">
        <Stack.Screen
          name="Player"
          component={Player}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Music" component={MusicScreen} />
      </Stack.Navigator>
    </>
  );
}

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

export default StackNavigator;
