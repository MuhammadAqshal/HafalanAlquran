import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ListSantri} from '../../components';
import {dummySantris} from '../../data';

export default class Santri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      santris: dummySantris,
    };
  }
  render() {
    const {santris} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ListSantri santris={santris} navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
