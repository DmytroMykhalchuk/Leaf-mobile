import store from '../../store/store';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeWrapper } from './ThemeWrapper';
import './../../configs/translation/i18n';

type ProvidersType = {
    children: JSX.Element;
};

export const Providers: React.FC<ProvidersType> = ({ children }) => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <ThemeWrapper>
                    {children}
                </ThemeWrapper>
            </NavigationContainer>
        </Provider>
    );
};
