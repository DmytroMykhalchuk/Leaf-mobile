import { authorizeSession } from '../../store/user/userReducer';
import { colorModeStorageKey, tokenStorageKey } from '../../constants/storage';
import { getDataFromStorage } from '../../utils/getDataFromStorage';
import { ThemeModeType } from '../../store/app/appTypes';
import { toggleThemeMode } from '../../store/app/appReducer';
import { UIFullScreenLoader } from '../UI/UIFullScreenLoader';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const initLimit = 2;

type InitComponentType = {
   onInitApp: () => void
};

export const InitComponent: React.FC<InitComponentType> = ({ onInitApp }) => {
   const dispatch: any = useDispatch();

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
         dispatch(authorizeSession());
      }
      setInitedCount((prev: number) => prev + 1);
   };

   const getThemeMode = async () => {
      const theme = await getDataFromStorage(colorModeStorageKey);
      dispatch(toggleThemeMode(theme as ThemeModeType));
      setInitedCount((prev: number) => prev + 1);
   };

   return (
      <UIFullScreenLoader />
   );
};