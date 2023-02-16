import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconDelete, IconEdit} from '../../../assets';

const CardIzin = ({izin, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IzinDetail', izin);
        }}>
        <Text style={styles.nis}>{izin.nis_santri}</Text>
        <Text style={styles.nama}>{izin.nama}</Text>
        <Text style={styles.tgl_izin}>izin {izin.tgl_izin}</Text>
      </TouchableOpacity>
      <View style={styles.wrapIcon}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate('IzinEdit', izin);
          }}>
          <IconEdit />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <IconDelete />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardIzin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nis: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tgl_izin: {
    fontSize: 12,
    color: 'gray',
  },
  wrapIcon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});
