import React, { createContext, FC, useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from '../screens/styles';
import axios from 'axios';
import { calculateLayout, createWeatherParams, ForecastItemProps, WEATHER_API } from '../helpers/Helper';
import { emptyComponent, Header, itemComponent, separatorComponent } from '../helpers/HelperComp';

export const NavigationContext = createContext<any>(null);


const Forecast: FC<{ navigation: any }> = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState<ForecastItemProps[] | null>(null);

  useEffect(() => {
    getWeatherAPI();
  }, []);

  const getWeatherAPI = useCallback(() => {
    axios.get(WEATHER_API.URL, {
      params: createWeatherParams()
    })
      .then((response) => {
        if (response?.status == 200) {
          const { forecast: { forecastday } } = response?.data;
          const fcday: ForecastItemProps[] = [...forecastday];
          setWeatherData(fcday);
        }
      })
      .catch((error) => {
        console.log('================= FAILED ===================');
        console.log(error);
        console.log('================= FAILED ===================');
      });
  }, []);

  return (
    <NavigationContext.Provider value={navigation}>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

        <Header />

        <FlatList
          style={styles.weatherList}
          showsVerticalScrollIndicator={false}
          data={weatherData}
          renderItem={itemComponent}
          ListEmptyComponent={emptyComponent}
          ItemSeparatorComponent={separatorComponent}
          getItemLayout={(_, index) => calculateLayout(index)} />
      </SafeAreaView>
    </NavigationContext.Provider>
  );
}

export default Forecast;