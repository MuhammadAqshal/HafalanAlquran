import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ButtonRN, InputRN} from '../../components/atoms';

export default class SantriEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      santri: this.props.route.params,
    };
  }
  render() {
    const {santri} = this.state;
    return (
      <ScrollView>
        <View style={styles.pages}>
          <View style={styles.card}>
            <InputRN
              label="NIS"
              placeholder="Masukkan NIS"
              value={santri.nis_santri}
            />
            <InputRN
              label="Nama"
              placeholder="Masukkan Nama"
              value={santri.nama}
            />
            <View>
              <Text style={styles.label}>Jenis Kelamin :</Text>
              <View style={styles.gender}>
                <View style={styles.GenderButton}>
                  <ButtonRN text="Laki - Laki" bgColor="#01A6EA" />
                </View>
                <View>
                  <ButtonRN text="Perempuan" bgColor="#FFB1CB" />
                </View>
              </View>
            </View>
            <InputRN
              label="Kelas"
              placeholder="Masukkan Kelas"
              value={santri.kelas}
            />
            <InputRN
              label="Asrama"
              placeholder="Masukkan Asrama"
              value={santri.asrama}
            />
            <InputRN
              label="Kamar"
              placeholder="Masukkan Kamar"
              value={santri.kamar}
            />
            <InputRN
              label="Alamat"
              placeholder="Masukkan Alamat"
              isTextArea={true}
              value={santri.alamat}
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
