import React from 'react';
import { DefineRoutes } from './src/modules/Utils/DefineRoutes';
import { Providers } from './src/modules/Utils/Providers';
import { SafeAreaView, StatusBar, Text, useColorScheme, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
// import 'react-native-gesture-handler';

function App(): React.JSX.Element {
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
