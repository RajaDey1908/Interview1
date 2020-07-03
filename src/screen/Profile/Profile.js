import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';


const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{marginTop: 40}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.heading}>My Profile </Text>
          </View>
      </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
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
    fontSize: 14,
  },
  heading: {
    margin: 5,
    fontSize: 25,
    color: '#307ecc',
    marginTop: 30,
  },
});

export default Profile;