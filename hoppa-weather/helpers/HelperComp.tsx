import React, { FC, useContext } from 'react';
import {
    Image,
    Pressable,
    Text,
    View
} from 'react-native';
import { NavigationContext } from '../screens/Forecast';
import styles from '../screens/styles';
import { ForecastItemProps } from './Helper';


export const Header: FC<{ backButton?: boolean }> = ({ backButton = false }) => {
    const navigation = useContext(NavigationContext);

    return (
        <View style={styles.headerView}>
            <Text style={{ color: 'black' }}>Header</Text>

            {backButton &&
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={({ pressed }) => styles.headerBack(pressed)}>
                    <Text style={{ color: 'black' }}>Back</Text>
                </Pressable>
            }
        </View>
    );
};

export const ForecastItem: FC<{ item: ForecastItemProps }> = ({ item }) => {
    const navigation = useContext(NavigationContext);

    return (
        <Pressable
            onPress={() => navigation.navigate('ForecastDetails', { forecastItem: item })}
            style={({ pressed }) => styles.forecastItemView(pressed)}>
            <View style={styles.forecastLeftSection}>
                <Image
                    source={{ uri: 'https:' + item?.day?.condition?.icon }}
                    style={styles.forecastImage}
                    resizeMode={'contain'} />

                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.forecastDescription}>{item?.day?.condition?.text ?? ''}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.forecastTemp}>min {item?.day?.mintemp_c ?? ''} &#8451;</Text>
                        <View style={{ width: 8 }} />
                        <Text style={styles.forecastTemp}>max {item?.day?.maxtemp_c ?? ''} &#8451;</Text>
                    </View>
                </View>
            </View>

            <View style={styles.forecastRightSection}>
                <Text style={styles.forecastTemp}>{item?.day?.daily_chance_of_rain ?? ''}%</Text>
                <Text style={styles.forecastTempChance}>Chance of rain</Text>
            </View>
        </Pressable>
    );
};

export const emptyComponent: FC<{}> = () => {
    return (
        <Text style={styles.emptyList}>Loading...</Text>
    );
};

export const itemComponent: FC<{ item: ForecastItemProps }> = ({ item }) => {
    return (
        <ForecastItem item={item} />
    );
};

export const separatorComponent: FC<{}> = () => {
    return (
        <View style={styles.separator} />
    );
};