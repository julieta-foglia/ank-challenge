import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JobsComponent } from '../../components';
import { ButtonWrapper, RemoveButton, Wrapper, Title } from './styled';
import { REMOVE_ALL_TEXT } from '../../config/constants/texts';
import { isNonEmptyArray } from '@apollo/client/utilities';


const FavedJobs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    getFavorites();
  }, [favs]);

  const getFavorites = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('faved-jobs');
        if(jsonValue) setFavs(JSON.parse(jsonValue));
      } catch(e) {
        // read key error
      }
  }

  const confirmAction = () => {
    Alert.alert(
      "Remove All",
      REMOVE_ALL_TEXT,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: "OK", onPress: () => removeFavorites() }
      ],
      { cancelable: false }
    );
  }

  const removeFavorites = () => {
    AsyncStorage.removeItem('faved-jobs');
    getFavorites();
  }

  return (
    <Wrapper>
    {isNonEmptyArray(favs)?  
    (
    <>
    <JobsComponent jobs={favs} />
    <ButtonWrapper>
      <RemoveButton color="white" onPress={() => confirmAction()} title="Remove All" />
    </ButtonWrapper>
    </>
    ) :
    <Title>There are no faved jobs</Title>
    }

  </Wrapper>
  );

}

export default FavedJobs;