import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isNonEmptyArray } from '@apollo/client/utilities';
import { CardWrapper, JobWrapper, Title, Subtitle, IconWrapper, Icon } from './styled';
import FavOutline from '../../assets/fav-outline.png';
import FavFilled from '../../assets/fav-filled.png';
import { REMOVE_TEXT, SAVE_TEXT } from '../../config/constants/texts';

const JobListItem = ({id, title, cities, countries, commitment, remote, onPress}) => {
  const [isFav, setIsFav] = useState(false);
  const cityNames = isNonEmptyArray(cities) ? cities.map(({ name }) => name).join(', ') : '-';
  const countryNames = isNonEmptyArray(countries) ? countries.map(({ name }) => name).join(', ') : '-';

  useEffect(() => {
    isJobInFavorites();
  }, [isFav]);

  const isJobInFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('faved-jobs');
      console.log(jsonValue); 
      if (jsonValue) {
        const savedJobs = JSON.parse(jsonValue);
        setIsFav(savedJobs.some((job) => job.id === id));
      }
    } catch(e) {
      // read error
    }
  }

  const confirmAction = () => {
    Alert.alert(
      "Confirm",
      isFav? REMOVE_TEXT : SAVE_TEXT,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: "OK", onPress: () => isFav? removeJobFromFavorites() : saveJobToFavorites() }
      ],
      { cancelable: false }
    );
  }

  const saveJobToFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('faved-jobs');
      const savedJobs = JSON.parse(jsonValue || "[]");
      const newSavedJobs = [...savedJobs, { id, title, cities, countries, commitment, remote}];
      await AsyncStorage.setItem('faved-jobs', JSON.stringify(newSavedJobs));

      setIsFav(true);
    } catch (e) {
      console.log('Error saving');
    }
  }

  const removeJobFromFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('faved-jobs');
      const savedJobs = JSON.parse(jsonValue || "[]");
      const newSavedJobs = savedJobs.filter((job) => job.id !== id);
      await AsyncStorage.setItem('faved-jobs', JSON.stringify(newSavedJobs));

      setIsFav(false);
    } catch (e) {
      console.log('Error saving');
    }
  }

  return (
    <CardWrapper>
      <JobWrapper onPress={onPress}>
        <Title>{title}</Title>
        <Subtitle>City: {cityNames}</Subtitle>
        <Subtitle>Country: {countryNames}</Subtitle>
        <Subtitle>Commitment: {commitment}</Subtitle>
        <Subtitle>Remote: {isNonEmptyArray(remote) ? 'Yes' : 'No'}</Subtitle>
      </JobWrapper>
    <IconWrapper onPress={() => confirmAction()}>
      {isFav? <Icon source={FavFilled}/> : <Icon source={FavOutline}/>}
    </IconWrapper>
    </CardWrapper>
  
);}

export default JobListItem;
