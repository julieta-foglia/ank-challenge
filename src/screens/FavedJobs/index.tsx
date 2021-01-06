import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JobsComponent } from '../../components';

const FavedJobs = () => {
  const [keys, setKeys] = useState([]);
  const [favs, setFavs] = useState([]);
  console.log(favs);

  useEffect(() => {
    getFavoritesKeys();
    getFavoritesData();
  }, []);

  const getFavoritesKeys = async () => {
      let keys = [];
      try {
        keys = await AsyncStorage.getAllKeys();
        setKeys(keys);
      } catch(e) {
        // read key error
      }
  }


  const getFavoritesData = async () => {
    let favs = [];
    try {
      for(const key of keys){
        const jsonValue = await AsyncStorage.getItem(key);
        favs.push(JSON.parse(jsonValue));
      }
      setFavs(favs);
    } catch(e) {
      // read key error
    }
}

  return (
    <JobsComponent jobs={favs} />
  );

}

export default FavedJobs;