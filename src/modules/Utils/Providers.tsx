import { Provider, useSelector } from "react-redux";
import store from "../../store/store";
import { useEffect, useState } from "react";
import { getIsFetching, getThemeMode } from "../../store/app/appSelector";
import { darkMode } from "../../constants/layout";
import { globalTheme } from "../../configs/theme/theme";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { InitComponent } from "./InitComponents";
import { NavigationContainer } from "@react-navigation/native";

type ProvidersType = {
    children: JSX.Element;
};

export const Providers: React.FC<ProvidersType> = ({ children }) => {
    const [isInited, setIsInited] = useState(true);

    const isDarkMode = useSelector(getThemeMode) === darkMode;

    useEffect(() => {

    }, []);

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
            <NavigationContainer>
                {isInited
                    ? children
                    : <InitComponent onInitApp={initApp} />
                }
            </NavigationContainer>
        </GluestackUIProvider>
    );
};