import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Alert, PermissionsAndroid} from 'react-native';
//import MusicFiles from 'react-native-get-music-files';
//import Permissions from 'react-native-permissions';
import MusicFiles, {
  Constants,
  CoverImage,
} from 'react-native-get-music-files-v3dev-test';

const track = {
  length: 18,
  results: [
    {
      album: 'audio',
      artist: '<unknown>',
      duration: '375928',
      id: '607',
      path:
        '/storage/emulated/0/Xender/audio/Aati_Hai_To_Chal_Lyrical_Video_|_Saat_Rang_Ke_Sapne_|_Arwind_Swami,_Juhi_Chawla(128k).mp3',
      title:
        'Aati_Hai_To_Chal_Lyrical_Video_|_Saat_Rang_Ke_Sapne_|_Arwind_Swami,_Juhi_Chawla(128k)',
    },
    {
      album: 'Music',
      artist: '<unknown>',
      duration: '239954',
      id: '1274',
      path:
        '/storage/emulated/0/Music/soniye heriye teri yaad andiye.flv by dushyant singh parihar.mp3',
      title: 'soniye heriye teri yaad andiye.flv by dushyant singh parihar',
    },
    {
      album: 'Music',
      artist: '<unknown>',
      duration: '266606',
      id: '1279',
      path:
        '/storage/emulated/0/Music/Jo_Dil_Ke_Pas_Rehte_Hai_Wo_Dil_Kyo_Tod_jate_Hai.mp3',
      title: 'Jo_Dil_Ke_Pas_Rehte_Hai_Wo_Dil_Kyo_Tod_jate_Hai',
    },
    {
      album: 'Music',
      artist: '<unknown>',
      duration: '261930',
      id: '1280',
      path:
        '/storage/emulated/0/Music/Dil_Meri_Na_Sune_Lyrical_-_Genius___Utkarsh,_Ishita___Atif_Aslam___Himesh_Resham.mp3',
      title:
        'Dil_Meri_Na_Sune_Lyrical_-_Genius___Utkarsh,_Ishita___Atif_Aslam___Himesh_Resham',
    },
  ],
};

const Tracks = () => {
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ],
        {
          title: 'Permission',
          message: 'Storage access is requiered',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert('You can use the package');
      } else {
        requestPermission();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermission();
  });

  const _getSongs = () => {
    console.log('song');

    MusicFiles.getAll({
      cover: false,
      minFileSize: 0,
      maxFileSize: 1024,
      extensionFilter: '.mp3',
      // batchSize: 0,
      // batchNumber: 0,
      // sortBy: Constants.SortBy.Title,
      // sortOrder: Constants.SortOrder.Ascending
    })
      .then((tracks) => {
        console.log(traks);
      })
      .catch((er) => console.log(e));
  };
  return (
    <View
      style={{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text onPress={_getSongs}>get songs</Text>
    </View>
  );
};

export default Tracks;
