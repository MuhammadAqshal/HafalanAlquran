import {Button, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ButtonRN} from '../../components';

export default class IzinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      izin: this.props.route.params,
    };
  }
  render() {
    const {izin} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.pages}>
        <View style={styles.card}>
          <View style={styles.list}>
            <Text style={styles.label}>NIS</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{izin.nis_santri} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Nama</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{izin.nama} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Keperluan</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{izin.keperluan} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Tanggal Izin</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{izin.tgl_izin} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Batas Izin</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{izin.tgl_batas_izin} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Kembali</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{izin.tgl_kembali} </Text>
          </View>
        </View>
        <View style={styles.menu}>
          <View style={styles.button}>
            <ButtonRN
              text="Edit"
              bgColor="#FFC107"
              onPress={() => {
                navigation.navigate('IzinEdit', izin);
              }}
            />
          </View>
          <View style={styles.button}>
            <ButtonRN text="Hapus" bgColor="#DC3545" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  menu: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  button: {
    marginLeft: 10,
    paddingLeft: 10,
  },
  card: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  list: {
    flexDirection: 'row',
  },
  label: {
    flex: 0.3,
  },
  colon: {
    flex: 0.05,
  },
  text: {
    flex: 0.75,
  },
});
