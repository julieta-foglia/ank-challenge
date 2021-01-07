import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isNonEmptyArray } from '@apollo/client/utilities';
import { CardWrapper, JobWrapper, Title, Subtitle, IconWrapper, Icon } from './styled';
import FavOutline from '../../assets/fav-outline.png';
import FavFilled from '../../assets/fav-filled.png';
import { REMOVE_TEXT, SAVE_TEXT } from '../../config/constants/texts';
import { City } from 'types/city';
import { Country } from 'types/country';
import { Remote } from 'types/remote';
import { useNavigation } from '@react-navigation/native';

interface JobListItemProps {
    id: string;
    title: string;
    cities: City[];
    countries: Country[];
    commitment: string;
    remote: Remote[];
    onPress: () => void;
}

const JobListItem: React.FC<JobListItemProps> = ({
    id,
    title,
    cities,
    countries,
    commitment,
    remote,
    onPress,
}: JobListItemProps) => {
    const navigation = useNavigation();
    const [isFav, setIsFav] = useState(false);
    const cityNames = isNonEmptyArray(cities) ? cities.map(({ name }) => name).join(', ') : '-';
    const countryNames = isNonEmptyArray(countries)
        ? countries.map(({ name }) => name).join(', ')
        : '-';

    useEffect(() => {
        isJobInFavorites();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            isJobInFavorites();
        });

        return unsubscribe;
    }, [navigation]);

    const isJobInFavorites = async (): Promise<void> => {
        try {
            const jsonValue = await AsyncStorage.getItem('faved-jobs');
            const savedJobs = JSON.parse(jsonValue || '[]');

            setIsFav(savedJobs.some((job: { id: string }) => job.id === id));
        } catch (e) {
            console.log('Error when getting favorites');
        }
    };

    const confirmAction = (): void => {
        Alert.alert(
            'Confirm',
            isFav ? REMOVE_TEXT : SAVE_TEXT,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => (isFav ? removeJobFromFavorites() : saveJobToFavorites()),
                },
            ],
            { cancelable: false },
        );
    };

    const saveJobToFavorites = async (): Promise<void> => {
        try {
            const jsonValue = await AsyncStorage.getItem('faved-jobs');
            const savedJobs = JSON.parse(jsonValue || '[]');
            const newSavedJobs = [
                ...savedJobs,
                { id, title, cities, countries, commitment, remote },
            ];
            await AsyncStorage.setItem('faved-jobs', JSON.stringify(newSavedJobs));

            setIsFav(true);
        } catch (e) {
            console.log('Error saving favorites');
        }
    };

    const removeJobFromFavorites = async (): Promise<void> => {
        try {
            const jsonValue = await AsyncStorage.getItem('faved-jobs');
            const savedJobs = JSON.parse(jsonValue || '[]');
            const newSavedJobs = savedJobs.filter((job: { id: string }) => job.id !== id);
            await AsyncStorage.setItem('faved-jobs', JSON.stringify(newSavedJobs));

            setIsFav(false);
        } catch (e) {
            console.log('Error removing favorites');
        }
    };

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
                {isFav ? <Icon source={FavFilled} /> : <Icon source={FavOutline} />}
            </IconWrapper>
        </CardWrapper>
    );
};

export default JobListItem;
