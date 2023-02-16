import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ListIzin} from '../../components';
import {dummyDataIzin} from '../../data';

export default class Izin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      izins: dummyDataIzin,
    };
  }
  render() {
    const {izins} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ListIzin izins={izins} navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
