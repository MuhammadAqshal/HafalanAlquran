import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Logo} from '../../assets';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('MainApp');
    }, 3000);
  }
  render() {
    return (
      <View style={styles.pages}>
        <Logo />
        <Text style={styles.text}>Perizinan Santri</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
  },
});
