import React, {useEffect, useState, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'react-native-axios';

import {AuthContext} from '../../navigation/context';
import {connect} from 'react-redux';
import * as actionTypes from '../../redux/actions/index';

const LoginScreen = props => {
  const {signIn} = React.useContext(AuthContext);

  let [email, setEmail] = useState('');
  let [emailError, setEmailError] = useState('');
  let [password, setPassword] = useState('');
  let [passwordError, setPasswordError] = useState('');

  const handleChange = async () => {
    signIn();
  };

  const onChangeText = (key, val) => {
    if (key == 'email') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(val) === false) {
        setEmailError('Email is Not Correct');
        setEmail(val);
        return false;
      } else {
        setEmailError('');
        setEmail(val);
      }
    } else if (key == 'password') {
      setPasswordError('');
      setPassword(val);
    }
  };

  const handleSubmitButton = () => {
    if (!email || !password) {
      if (!email) {
        setEmailError('Please Enter Your Email');
      }
      if (!password) {
        setPasswordError('Please Enter Your Password');
      }
      return;
    }
    setEmailError('');
    setPasswordError('');

    var dataToSend = {
      user_email: email,
      user_phone: password,
    };

    console.log('dataToSend in login', dataToSend);
  };

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 100}}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.heading}>User Login </Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#F6F6F7"
                keyboardType="email-address"
                onChangeText={val => onChangeText('email', val)}
                selectionColor={'#FFFFFF'}
              />
            </View>
            {emailError ? (
              <Text style={styles.errorTextStyle}>{emailError}</Text>
            ) : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Password" //12345
                placeholderTextColor="#F6F6F7"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={val => onChangeText('password', val)}
                selectionColor={'#FFFFFF'}
              />
            </View>
            {passwordError ? (
              <Text style={styles.errorTextStyle}>{passwordError}</Text>
            ) : null}

            {!emailError && !passwordError ? (
              <>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleSubmitButton}>
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.buttonStyleDisable} activeOpacity={0.5}>
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </View>
              </>
            )}

            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.push('registration')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
// export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonStyleDisable: {
    backgroundColor: '#ccc',
    color: '#999',
    borderWidth: 0,
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 15,
  },
  heading: {
    margin: 5,
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 30,
  },
});

const mapStateToProps = state => {
  return {
    username: state.testReducer.username,
  };
};
// const mapStateToProps = state => {
//     return {
//         places: state.places.places,
//         selectedPlace: state.places.selectedPlace
//     };
// };

const mapDispatchToProps = dispatch => {
  return {
    // onAddPlace: name => dispatch(addPlace(name)),
    addUsername: username => dispatch(actionTypes.addUsername(username)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
// export default LoginScreen;
