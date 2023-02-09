import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export type StyleProps = {
    [key: string]: any;
};

type WeatherApiProps = {
    URL: string;
}

type WeatherParamsProps = {
    URL: string;
    PARAM_KEY: string;
    PARAM_LOCATION: string;
    PARAM_FORECAST_DAYS: string;
    PARAM_AQI: string;
    PARAM_ALERTS: string;
}

const WEATHER_API_KEY = '229c21aa33484d05a9e173641230802';

const WEATHER_PARAMS: WeatherParamsProps = {
    URL: 'https://api.weatherapi.com/v1/forecast.json',
    PARAM_KEY: WEATHER_API_KEY,
    PARAM_LOCATION: 'London',
    PARAM_FORECAST_DAYS: '7',
    PARAM_AQI: 'no',
    PARAM_ALERTS: 'no'
};

export const WEATHER_API: WeatherApiProps = {
    URL: 'https://api.weatherapi.com/v1/forecast.json'
};

export const createWeatherParams = () => {
    return {
        key: WEATHER_PARAMS.PARAM_KEY,
        q: WEATHER_PARAMS.PARAM_LOCATION,
        days: WEATHER_PARAMS.PARAM_FORECAST_DAYS,
        aqi: WEATHER_PARAMS.PARAM_AQI,
        alerts: WEATHER_PARAMS.PARAM_ALERTS
    }
};

export const calculateLayout = (index: number): FlatlistProps => {
    let itemHeight: number = height * 0.1;
    let separatorHeight: number = 2;
    return (
        { length: itemHeight, offset: (itemHeight * index) + separatorHeight, index }
    )
};

type FlatlistProps = {
    length: number;
    offset: number;
    index: number;
};

export type ForecastProps = {
    item: ForecastItemProps;
};

export type ForecastItemProps = {
    day: ForecastDayProps;
};

export type ForecastDayProps = {
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
    condition: ForecastConditionProps;
};

type ForecastConditionProps = {
    text: string;
    icon: string;
    code: number;
};