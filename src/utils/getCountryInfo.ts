import { CountryType, countries } from "../constants/content";

export const getCountryInfo = (country: string): CountryType => {
    const countryItem = countries.find(item => item.name.toLocaleLowerCase() === country.toLocaleLowerCase());
  
    return {
        image: countryItem?.image || '',
        name: countryItem?.name || '',
    };
};