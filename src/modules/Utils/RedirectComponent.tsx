import { getRedirectScreen } from '../../store/app/appSelector';
import { NavigateStackType } from '../../store/app/appTypes';
import { removeRedirect } from '../../store/app/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

type RedirectComponentType = {
   stack: NavigateStackType;
};

export const RedirectComponent: React.FC<RedirectComponentType> = ({ stack }) => {
   const dispatch: any = useDispatch();
   const navigation = useNavigation();

   const redirectScreen = useSelector(getRedirectScreen)

   useEffect(() => {
      if (!redirectScreen.stack && stack !== redirectScreen.stack)
         return;

      navigation.navigate(redirectScreen.screen as never);
      dispatch(removeRedirect());
   }, [redirectScreen]);

   return null;
};
