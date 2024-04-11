import { authorizeSession, fetchProfile } from '../../store/user/userReducer';
import { colorModeStorageKey, tokenStorageKey } from '../../constants/storage';
import { getDataFromStorage } from '../../utils/getDataFromStorage';
import { ThemeModeType } from '../../store/app/appTypes';
import { toggleThemeMode } from '../../store/app/appReducer';
import { UIFullScreenLoader } from '../UI/UIFullScreenLoader';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkMode, lightMode } from '../../constants/layout';
import { saveToStorage } from '../../utils/saveToStorage';

const initLimit = 2;

type InitComponentType = {
   onInitApp: () => void
};

export const InitComponent: React.FC<InitComponentType> = ({ onInitApp }) => {
   const dispatch: any = useDispatch();
   const isDarkMode = useColorScheme() === 'dark';

   const [initedCount, setInitedCount] = useState(0);

   useEffect(() => {
      initLimit <= initedCount && onInitApp();
   }, [initedCount])

   useEffect(() => {
      handleAuthorization();
      getThemeMode();
   }, []);

   const handleAuthorization = async () => {
      const token = await getDataFromStorage(tokenStorageKey);

      if (token) {
         console.log({ token })
         // dispatch(authorizeSession());
         await dispatch(fetchProfile());
      }
      setInitedCount((prev: number) => prev + 1);
   };

   const getThemeMode = async () => {
      try {
         const theme = await getDataFromStorage(colorModeStorageKey);
         console.log({ theme })
         dispatch(toggleThemeMode(theme as ThemeModeType));
      } catch (e) {
         const defaultMode = isDarkMode ? darkMode : lightMode;
         await saveToStorage(colorModeStorageKey, defaultMode);
         dispatch(toggleThemeMode(defaultMode));
      }
      setInitedCount((prev: number) => prev + 1);
   };

   return (
      <UIFullScreenLoader />
   );
};