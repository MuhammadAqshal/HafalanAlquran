import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardIzin} from '../../atoms';

const ListIzin = ({izins, navigation}) => {
  return (
    <View style={styles.container}>
      {izins.map(izin => {
        return <CardIzin key={izin.id} izin={izin} navigation={navigation} />;
      })}
    </View>
  );
};

export default ListIzin;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});
