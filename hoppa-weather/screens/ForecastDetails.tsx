import React, { FC, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  useWindowDimensions,
  Text
} from 'react-native';
import styles from './styles';
import { Header } from '../helpers/HelperComp';
import { ForecastItemProps } from '../helpers/Helper';
import { NavigationContext } from './Forecast';


const ForecastDetails: FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const [weatherItem, setWeatherItem] = useState<ForecastItemProps | null>(null);

  useEffect(() => {
    if (route?.params?.forecastItem) {
      setWeatherItem(route?.params?.forecastItem);
    }
  }, [route]);

  return (
    <NavigationContext.Provider value={navigation}>
      <SafeAreaView style={[styles.backgroundStyle, { alignItems: 'center' }]}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

        <Header backButton={true} />

        <View style={{ marginTop: height * 0.06, alignItems: 'center' }}>
          <Image
            source={{ uri: 'https:' + weatherItem?.day?.condition?.icon }}
            style={styles.forecastDetailsImage}
            resizeMode={'contain'} />

          <Text style={styles.forecastDetailsDescription}>{weatherItem?.day?.condition?.text ?? ''}</Text>

          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <Text style={styles.forecastDetailsTemp}>min {weatherItem?.day?.mintemp_c ?? ''} &#8451;</Text>
            <View style={{ width: 8 }} />
            <Text style={styles.forecastDetailsTemp}>max {weatherItem?.day?.maxtemp_c ?? ''} &#8451;</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <Text style={styles.forecastDetailsTemp}>{weatherItem?.day?.daily_chance_of_rain ?? ''}%</Text>
            <Text style={styles.forecastDetailsTemp}> chance of rain</Text>
          </View>
        </View>
      </SafeAreaView>
    </NavigationContext.Provider>
  );
}

export default ForecastDetails;
