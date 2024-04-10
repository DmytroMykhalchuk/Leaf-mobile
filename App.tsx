import React, { useEffect } from 'react';
import { DefineRoutes } from './src/modules/Utils/DefineRoutes';
import { Providers } from './src/modules/Utils/Providers';
import { SafeAreaView, StatusBar, Text, useColorScheme, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { saveToStorage } from './src/utils/saveToStorage';
import { unverifiedEmailStorageKey } from './src/constants/storage';
// import 'react-native-gesture-handler';

function App(): React.JSX.Element {

  useEffect(() => {
    // saveToStorage(unverifiedEmailStorageKey,'dende5634@gmail.com');
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Providers>
        <DefineRoutes/>
      </Providers>
    </SafeAreaView>
  );
}

export default App;
