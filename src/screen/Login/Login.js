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

import {AuthContext} from '../../navigation/context';

const LoginScreen = props => {
  const {signIn} = React.useContext(AuthContext);

  const handleSubmitButton = () => {
    signIn();
  };

  return (
    <View style={styles.mainBody}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 100}}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.heading}>User Login </Text>
            </View>
            <View style={styles.SectionStyle}>
              {console.log('props', props.username)}

              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email" 
                placeholderTextColor="#F6F6F7"
                keyboardType="email-address"
                selectionColor={'#FFFFFF'}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Password" 
                placeholderTextColor="#F6F6F7"
                keyboardType="default"
                secureTextEntry={true}
                selectionColor={'#FFFFFF'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>

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

export default LoginScreen;
