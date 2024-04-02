import React from 'react';
import store from './src/store/store';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, Text, useColorScheme, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { AppRoutes } from './src/routes/AppRoutes';
import { Providers } from './src/modules/Utils/Providers';
// import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <Providers>
          {/* <Text>Hello</Text> */}
          <AppRoutes />
        </Providers>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
