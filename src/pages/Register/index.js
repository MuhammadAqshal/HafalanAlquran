import React, { Component } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { IconBack, Logo } from '../../assets';
import { ButtonRN, InputPasswordRN, InputRN } from '../../components';
import { colors, fonts } from '../../utils';
import { registerUser } from '../../actions/AuthAction';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: '',
      registerLoading: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { registerResult } = this.props;

    if (registerResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  onContinue = () => {
    const { nama, email, nohp, password } = this.state;
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        password: password,
      };
      this.setState({ registerLoading: true });
      this.props.dispatch(registerUser(data, password));
    } else {
      Alert.alert('Error', 'Nama, Email, No Hp dan Password harus diisi');
    }
  };
  render() {
    const { nama, email, nohp, password, registerLoading } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <IconBack />
              </TouchableOpacity>
            </View>
            <View style={styles.title}>
              <Text style={styles.titleText}>Register</Text>
            </View>
            <View style={styles.cardRegister}>
              <InputRN
                label="Nama"
                value={nama}
                onChangeText={nama => this.setState({ nama })}
                placeholder="Masukkan nama"
              />
              <InputRN
                label="Email"
                placeholder="Masukkan email"
                value={email}
                onChangeText={email => this.setState({ email })}
              />
              <InputRN
                label="No. HP"
                placeholder="Masukkan no. hp"
                value={nohp}
                onChangeText={nohp => this.setState({ nohp })}
              />
              <InputPasswordRN
                label="Password"
                placeholder="Masukkan password"
                value={password}
                onChangeText={password => this.setState({ password })}
              />
              <View style={{ height: 20 }} />

              {registerLoading ? (
                <ButtonRN loading={registerLoading} />
              ) : (
                <ButtonRN
                  text="Register"
                  onPress={() => {
                    this.onContinue();
                  }}
                />
              )}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
});

export default connect(mapStateToProps, null)(Register);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cardRegister: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  btnBack: {
    marginLeft: 30,
    paddingVertical: 15,
  },
  title: {
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontFamily: fonts.primary.bold,
    color: colors.secondary,
  },
});
