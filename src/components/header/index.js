/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';

// import {logout} from '../../auth/authActions';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import Alert from '../alert/index';
import logo from '../../../assets/logo.jpeg';

// export default function Header({navigation, backbutton, openMenuRight}) {
export default function Header() {
//   const dispatch = useDispatch();
  // const [backbutton, setbackbutton] = useState(true);
//   const messageAlert = useSelector(state => state.alertReducer.messageAlert);

  return (
    <>
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.rowHeader}>
          <View style={styles.containerMenuRight}>
            {/* {backbutton && (
              <TouchableOpacity
                style={styles.buttonMenuLeft}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name="arrow-left" size={20} color="#fff" />
              </TouchableOpacity>
            )} */}
          </View>

          <View style={styles.containerTitleLogo}>           
            <Image
                style={styles.imagelogo}
                source={logo}
                resizeMode="contain"
            />
          </View>

          <View style={styles.containerMenuLeft}>
            <View style={styles.buttonMenuRight}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(logout());
                }}>
                <Text style={styles.logoutText}>SAIR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* <View>{messageAlert !== '' && <Alert message={messageAlert} />}</View> */}
      
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    height: 40,
    // width: '100%',
    alignItems: 'center',
    backgroundColor: '#9B59B6',
  },
  rowHeader: {
    flexDirection: 'row',
  },
  containerMenuLeft: {
    flex: 1,
  },
  containerTitleLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagelogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#000000",
},
  containerMenuLeft: {
    flex: 1,
  },
  buttonMenuLeft: {
    alignContent: 'flex-start',
  },
  textTitle: {
    alignContent: 'center',
    marginTop: -10,
    fontSize: 23,
    color: '#f5f5f5',
  },
  textTitleStrong: {
    fontWeight: 'bold',
  },
  containerMenuRight: {
    flex: 1,
  },
  buttonMenuRight: {
    alignItems: 'flex-end',
    // paddingLeft: 25,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 3,
  },
});
