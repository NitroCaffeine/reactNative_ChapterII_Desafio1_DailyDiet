import { StatusBar } from 'react-native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';
import { Home } from '@screens/Home/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
      
          {fontsLoaded && <Home/>}
          <StatusBar barStyle='dark-content'  backgroundColor='transparent'   translucent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}