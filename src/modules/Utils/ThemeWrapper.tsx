import { darkMode } from '../../constants/layout';
import { getThemeMode } from '../../store/app/appSelector';
import { globalTheme } from '../../configs/theme/theme';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { InitComponent } from './InitComponents';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type ThemeWrapperType = {
    children: JSX.Element;
};

export const ThemeWrapper: React.FC<ThemeWrapperType> = ({ children }) => {
    const [isInited, setIsInited] = useState(true);

    const isDarkMode = useSelector(getThemeMode) === darkMode;

    const initApp = () => {
        setIsInited(true);
    };

    return (
        <GluestackUIProvider
            colorMode={isDarkMode ? 'dark' : 'light'}
            // colorMode={'dark'}
            // colorMode={'light'}
            config={globalTheme}
        >
            {isInited
                ? children
                : <InitComponent onInitApp={initApp} />
            }
        </GluestackUIProvider>
    );
};