import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { IconLogout, LogoHeader } from '../../../assets';
import { clearStorage, colors, fonts } from '../../../utils';
import FIREBASE from '../../../config/FIREBASE';

const HeaderHome = ({ menu, navigation }) => {
  const onSubmit = () => {
    if (menu === 'Login') {
      FIREBASE.auth()
        .signOut()
        .then(function () {
          clearStorage();
          navigation.replace('Login');
        })
        .catch(function (error) {
          alert(error);
        });
    } else {
      navigation.navigate(menu);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoApp}>
        <LogoHeader />
        <View>
          <Text style={styles.appName}>Perizinan</Text>
          <Text style={styles.appName}>Santri</Text>
        </View>
      </View>
      <View style={styles.logout}>
        <TouchableOpacity onPress={() => onSubmit()}>
          <IconLogout />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  logoApp: { flexDirection: 'row', alignItems: 'center' },
  appName: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.secondary,
    paddingLeft: 10,
    lineHeight: 20,
  },
  logout: {
    alignSelf: 'center',
  },
});
