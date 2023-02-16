import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ButtonRN, InputRN} from '../../components/atoms';

export default class IzinEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      izin: this.props.route.params,
    };
  }
  render() {
    const {izin} = this.state;
    return (
      <ScrollView>
        <View style={styles.pages}>
          <View style={styles.card}>
            <InputRN
              label="NIS"
              placeholder="Masukkan NIS"
              value={izin.nis_santri}
            />
            <InputRN
              label="Nama"
              placeholder="Masukkan Nama"
              value={izin.nama}
            />
            <InputRN
              label="Tanggal Izin"
              placeholder="Masukkan Tanggal Izin"
              value={izin.tgl_izin}
            />
            <InputRN
              label="Tanggal Batas Izin"
              placeholder="Masukkan Tanggal Batas Izin"
              value={izin.tgl_batas_izin}
            />
            <InputRN
              label="Tanggal Kembali"
              placeholder="Masukkan Tanggal Kembali"
              isTextArea={true}
              value={izin.tgl_kembali}
            />

            <ButtonRN text="SUBMIT" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
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
  gender: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  GenderButton: {
    marginRight: 10,
  },
});
