import React, {useState} from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const RegistrationScreen = props => {
  const handleSubmitButton = () => {
    props.navigation.navigate('login');

    // await axios
    // .post(config.apiUrl + '/userSignUp', dataToSend)
    // .then(response => {
    //   console.log('resss', response);

    // })
    // .catch(err => ({error: err}));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 20}}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.heading}>User Registration </Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Name"
                placeholderTextColor="#F6F6F7"
                selectionColor={'#FFFFFF'}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Age"
                placeholderTextColor="#F6F6F7"
                keyboardType="numeric"
                selectionColor={'#FFFFFF'}
              />
            </View>

            <View style={styles.SectionStyle}>
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
                secureTextEntry={true}
                selectionColor={'#FFFFFF'}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Confirm Password"
                placeholderTextColor="#F6F6F7"
                secureTextEntry={true}
                selectionColor={'#FFFFFF'}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Address"
                placeholderTextColor="#F6F6F7"
                onSubmitEditing={Keyboard.dismiss}
                selectionColor={'#FFFFFF'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>

            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.push('login')}>
              Already Register ? Login
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
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
    fontSize: 16,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  heading: {
    margin: 5,
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 30,
  },
});
