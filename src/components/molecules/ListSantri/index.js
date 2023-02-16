import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardSantri} from '../../atoms';

const ListSantri = ({santris, navigation}) => {
  return (
    <View style={styles.container}>
      {santris.map(santri => {
        return (
          <CardSantri key={santri.id} santri={santri} navigation={navigation} />
        );
      })}
    </View>
  );
};

export default ListSantri;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});
