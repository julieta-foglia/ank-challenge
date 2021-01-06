import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isNonEmptyArray } from '@apollo/client/utilities';
import { CardWrapper, JobWrapper, Title, Subtitle, IconWrapper, Icon } from './styled';
import FavOutline from '../../assets/fav-outline.png';
import FavFilled from '../../assets/fav-filled.png';

const JobListItem = ({id, title, cities, countries, commitment, remote, onPress}) => {
  const [isFav, setIsFav] = useState(false);
  const cityNames = isNonEmptyArray(cities) ? cities.map(({ name }) => name).join(', ') : '-';
  const countryNames = isNonEmptyArray(countries) ? countries.map(({ name }) => name).join(', ') : '-';

  useEffect(() => {
    isJobInFavorites();
  }, []);

  const isJobInFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(id);
      const jobFound = jsonValue != null ? true : false;
      setIsFav(jobFound)
    } catch(e) {
      // read error
    }
  }

  const confirmSave = () => {
    Alert.alert(
      "Save",
      "Do you want to save this job to favorites?",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: "OK", onPress: () => saveJobToFavorites(), }
      ],
      { cancelable: false }
    );
  }

  const saveJobToFavorites = async () => {
    try {
      const jsonValue = JSON.stringify({ id, title, cities, countries, commitment, remote});
      await AsyncStorage.setItem(id, jsonValue);
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
    <IconWrapper onPress={() => confirmSave()}>
      {isFav? <Icon source={FavFilled}/> : <Icon source={FavOutline}/>}
    </IconWrapper>
    </CardWrapper>
  
);}

export default JobListItem;
