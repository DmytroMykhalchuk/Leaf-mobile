import { getCountryInfo } from '../../utils/getCountryInfo';
import { HStack, Text } from '@gluestack-ui/themed';
import { SvgUri } from 'react-native-svg';
import { View } from 'react-native';

type CountryTextType = {
    country: string | undefined;
};

export const CountryText: React.FC<CountryTextType> = ({ country }) => {
    if (!country) return null;

    const countryInfo = getCountryInfo(country);

    return (
        <HStack justifyContent="center" alignItems='center' space='md'>
            <SvgUri
                width={20}
                height={'100%'}
                uri={countryInfo.image}
            />
            <Text>{countryInfo.name}</Text>
        </HStack>
    );
};