import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconDelete, IconEdit} from '../../../assets';

const CardSantri = ({santri, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SantriDetail', santri);
        }}>
        <Text style={styles.nis}>{santri.nis_santri}</Text>
        <Text style={styles.nama}>{santri.nama}</Text>
        <Text style={styles.kelas}>
          Kelas {santri.kelas} | {santri.kamar}
        </Text>
      </TouchableOpacity>
      <View style={styles.wrapIcon}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate('SantriEdit', santri);
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

export default CardSantri;

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
  kelas: {
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
