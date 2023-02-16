import {Button, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {ButtonRN} from '../../components';

export default class SantriDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      santri: this.props.route.params,
    };
  }
  render() {
    const {santri} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.pages}>
        <View style={styles.card}>
          <View style={styles.list}>
            <Text style={styles.label}>Nama</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{santri.nama} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Jenis Kelamin</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{santri.jkel} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>NIS</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{santri.nis_santri} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Kelas</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{santri.kelas} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Asrama</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{santri.asrama} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Kamar</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{santri.kamar} </Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.label}>Alamat</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.text}>{santri.alamat} </Text>
          </View>
        </View>
        <View style={styles.menu}>
          <View style={styles.button}>
            <ButtonRN
              text="Edit"
              bgColor="#FFC107"
              onPress={() => {
                navigation.navigate('SantriEdit', santri);
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
