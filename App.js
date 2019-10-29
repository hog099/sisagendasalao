import React, {useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';

import SplashScreen from './src/components/splashscreen/splashscreen';
import Routes from './src/routes/homeRoutes';


export default function App() {
  const [splashscreen, setsplashscreen] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setsplashscreen(false);
    }, 1500);
  });

 
if(splashscreen){
  return <SplashScreen />;
}else{
  return <Routes />;
}

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
