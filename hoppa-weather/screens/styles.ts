import { Dimensions, StyleSheet } from 'react-native';
import { StyleProps } from '../helpers/Helper';

const { width, height } = Dimensions.get('window');


export default StyleSheet.create<StyleProps>({
    backgroundStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    headerView: {
        width: '100%',
        backgroundColor: 'lightgray',
        height: height * 0.08,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forecastItemView: (pressed: boolean) => ({
        width: '100%',
        height: height * 0.1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        opacity: pressed ? 0.4 : 1
    }),
    forecastLeftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forecastImage: {
        width: width * 0.12,
        height: width * 0.12
    },
    forecastDescription: {
        color: 'black',
        fontSize: 17
    },
    forecastTemp: {
        color: 'black',
        fontSize: 13
    },
    forecastRightSection: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    forecastTempChance: {
        color: 'black',
        fontSize: 11
    },
    weatherList: {
        width: '100%',
        height: '100%'
    },
    emptyList: {
        color: 'black',
        alignSelf: 'center',
        marginTop: '70%'
    },
    separator: {
        height: 2,
        width: '100%',
        backgroundColor: 'gray'
    },
    headerBack: (pressed: boolean) => ({
        opacity: pressed ? 0.4 : 1,
        borderColor: 'gray',
        borderWidth: 1,
        position: 'absolute',
        left: 16,
        paddingHorizontal: 4
    }),
    forecastDetailsImage: {
        width: width * 0.36,
        height: width * 0.36
    },
    forecastDetailsDescription: {
        color: 'black',
        fontSize: 26,
        fontWeight: 500,
        marginTop: 12
    },
    forecastDetailsTemp: {
        color: 'black',
        fontSize: 13,
        fontWeight: 600,
    }
});