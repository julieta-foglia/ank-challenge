import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JobsComponent } from '../../components';
import { ButtonWrapper, RemoveButtonText, Wrapper, Title } from './styled';
import { REMOVE_ALL_TEXT } from '../../config/constants/texts';
import { isNonEmptyArray } from '@apollo/client/utilities';

const FavedJobs: React.FC = () => {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        getFavorites();
    }, [favs]);

    const getFavorites = async (): Promise<void> => {
        try {
            const jsonValue = await AsyncStorage.getItem('faved-jobs');
            setFavs(JSON.parse(jsonValue) || []);
        } catch (e) {
            // read key error
        }
    };

    const confirmAction = (): void => {
        Alert.alert(
            'Remove All',
            REMOVE_ALL_TEXT,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => removeFavorites() },
            ],
            { cancelable: false },
        );
    };

    const removeFavorites = async (): Promise<void> => {
        try {
            await AsyncStorage.removeItem('faved-jobs');
            getFavorites();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapper>
            {isNonEmptyArray(favs) ? (
                <>
                    <JobsComponent jobs={favs} />
                    <ButtonWrapper onPress={() => confirmAction()}>
                        <RemoveButtonText>Remove All</RemoveButtonText>
                    </ButtonWrapper>
                </>
            ) : (
                <Title>There are no faved jobs</Title>
            )}
        </Wrapper>
    );
};

export default FavedJobs;
