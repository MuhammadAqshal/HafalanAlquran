import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { Logo } from '../../assets';
import { ButtonRN, InputPasswordRN, InputRN } from '../../components';
import { colors, fonts } from '../../utils';
import { loginUser } from '../../actions/AuthAction';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const { email, password } = this.state;

    if (email && password) {
      //action
      this.props.dispatch(loginUser(email, password));
    } else {
      Alert.alert('Error', 'Email & Password harus diisi');
    }
  };

  componentDidUpdate(prevProps) {
    const { loginResult } = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const { email, password } = this.state;
    const { loginLoading } = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.cardLogin}>
          <InputRN
            label="Email"
            placeholder="Masukkan email"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <InputPasswordRN
            label="Password"
            placeholder="Masukkan password"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <View style={{ height: 20 }} />
          {loginLoading ? (
            <ButtonRN loading={loginLoading} />
          ) : (
            <ButtonRN
              text="Login"
              style={styles.login}
              onPress={() => {
                this.login();
              }}
            />
          )}
        </View>
        <View style={styles.register}>
          <Text style={styles.text}>Belum Punya Akun ? </Text>
          <Text
            style={styles.textPrimary}
            onPress={() => this.props.navigation.navigate('Register')}>
            Daftar
          </Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});

export default connect(mapStateToProps, null)(Login);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    marginBottom: 20,
  },
  cardLogin: {
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
  },
  register: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.secondary,
  },
  textPrimary: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
});
