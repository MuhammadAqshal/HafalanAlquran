import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderHome, MenuDashboard } from '../../components';
import { dummyDashboars } from '../../data';
import { colors, fonts, getData } from '../../utils';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: false,
      dashboards: dummyDashboars,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;

      if (data) {
        this.setState({
          profile: data,
        });
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };
  render() {
    const { dashboards, profile } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.page}>
        <HeaderHome menu="Login" navigation={navigation} />
        <View style={styles.welcome}>
          <Text style={styles.welcomeName}>Hi, {profile.nama}</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <MenuDashboard dashboards={dashboards} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  welcome: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  welcomeName: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
