// import * as React from 'react';
// import { View, Text, Button} from 'react-native';

// const RegistrationScreen = (props) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Registration Screen</Text>

//       <Button
//         title="Go To Login"
//         onPress={() => {
//           props.navigation.push("login")
//         }}
//       />
//     </View>
//   );
// }
// export default RegistrationScreen;

/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hook we needed
import React, {useState} from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Loader from './Components/loader';

const RegistrationScreen = props => {
  let [name, setName] = useState('');
  let [nameError, setNameError] = useState('');
  let [age, setAge] = useState('');
  let [ageError, setAgeError] = useState('');
  let [email, setEmail] = useState('');
  let [emailError, setEmailError] = useState('');
  let [password, setPassword] = useState('');
  let [passwordError, setPasswordError] = useState('');
  let [cpassword, setCpassword] = useState('');
  let [cpasswordError, setCpasswordError] = useState('');
  let [address, setAddress] = useState('');
  let [addressError, setAddressError] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const onChangeText = (key, val) => {
    if (key == 'name') {
      setNameError('');
      setName(val);
    } else if (key == 'age') {
      const reg = /^[0-9\b]+$/;
      if (reg.test(val) === false) {
        setAgeError('Please Enter Number');
        setAge(val);
      } else {
        setAgeError('');
        setAge(val);
      }
    } else if (key == 'email') {
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
    } else if (key == 'cpassword') {
      if (password === val) {
        setCpasswordError('');
        setCpassword(val);
      } else {
        setCpasswordError('Confirm Password Not Match');
      }
    } else if (key == 'address') {
      setAddressError('');
      setAddress(val);
    }
  };

  const handleSubmitButton = async () => {
    if (!name || !age || !email || !password || !address) {
      if (!name) {
        setNameError('Please fill Name');
      }
      if (!age) {
        setAgeError('Please fill Age');
      }
      if (!email) {
        setEmailError('Please fill Email');
      }
      if (!password) {
        setPasswordError('Please fill Password');
      }
      if (!cpassword) {
        setCpasswordError('Please fill Confirm Password');
      }
      if (!address) {
        setAddressError('Please fill Address');
      }
      return;
    }
    setNameError('');
    setAgeError('');
    setEmailError('');
    setPasswordError('');
    setCpasswordError('');
    setAddressError('');

    //Show Loader
    setLoading(true);
    var dataToSend = {
      user_name: name,
      user_email: email,
      user_age: age,
      user_phone: password,
      user_address: address,
    };

    console.log('dataToSend in registration', dataToSend);
    await axios
    .post(config.apiUrl + '/userSignUp', dataToSend)
    .then(response => {
      console.log('resss', response);
      
    })
    .catch(err => ({error: err}));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#307ecc'}}>
      {/* <Loader loading={loading} /> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 20}}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.heading}>User Registration </Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={val => onChangeText('name', val)}
                placeholder="Enter Name"
                placeholderTextColor="#F6F6F7"
                selectionColor={'#FFFFFF'}
              />
            </View>
            {nameError ? (
              <Text style={styles.errorTextStyle}>{nameError}</Text>
            ) : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={val => onChangeText('age', val)}
                placeholder="Enter Age"
                placeholderTextColor="#F6F6F7"
                keyboardType="numeric"
                selectionColor={'#FFFFFF'}
              />
            </View>
            {ageError ? (
              <Text style={styles.errorTextStyle}>{ageError}</Text>
            ) : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={val => onChangeText('email', val)}
                placeholder="Enter Email"
                placeholderTextColor="#F6F6F7"
                keyboardType="email-address"
                selectionColor={'#FFFFFF'}
              />
            </View>
            {emailError ? (
              <Text style={styles.errorTextStyle}>{emailError}</Text>
            ) : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={val => onChangeText('password', val)}
                placeholder="Enter Password"
                placeholderTextColor="#F6F6F7"
                secureTextEntry={true}
                selectionColor={'#FFFFFF'}
              />
            </View>
            {passwordError ? (
              <Text style={styles.errorTextStyle}>{passwordError}</Text>
            ) : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={val => onChangeText('cpassword', val)}
                placeholder="Enter Confirm Password"
                placeholderTextColor="#F6F6F7"
                secureTextEntry={true}
                selectionColor={'#FFFFFF'}
              />
            </View>
            {cpasswordError ? (
              <Text style={styles.errorTextStyle}>{cpasswordError}</Text>
            ) : null}

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={val => onChangeText('address', val)}
                placeholder="Enter Address"
                placeholderTextColor="#F6F6F7"
                onSubmitEditing={Keyboard.dismiss}
                selectionColor={'#FFFFFF'}
              />
            </View>
            {addressError ? (
              <Text style={styles.errorTextStyle}>{addressError}</Text>
            ) : null}
            {!nameError &&
            !ageError &&
            !emailError &&
            !passwordError &&
            !cpasswordError &&
            !addressError ? (
              <>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleSubmitButton}>
                  <Text style={styles.buttonTextStyle}>REGISTER</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.buttonStyleDisable} activeOpacity={0.5}>
                  <Text style={styles.buttonTextStyle}>REGISTER</Text>
                </View>
              </>
            )}

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
