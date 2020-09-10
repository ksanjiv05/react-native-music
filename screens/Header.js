import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    //flexDirection: 'row',
    backgroundColor: '#ef5466',
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
});
export default Header;
