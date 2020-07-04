import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {AuthContext} from './context';
import Icon from 'react-native-vector-icons/FontAwesome';

export function DrawerContent(props) {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <DrawerItem
            style={styles.drawerSection}
            icon={() => (
              <Icon name="universal-access" color="#FFFFFF" size={30} />
            )}
            labelStyle={{
              fontFamily: 'SomeFont',
              color: 'white',
            }}
            label="Dashboard"
            onPress={() => {
              props.navigation.navigate('dashboard');
            }}
          />
          <DrawerItem
            style={styles.drawerSection}
            icon={() => <Icon name="user" color="#FFFFFF" size={30} />}
            labelStyle={{
              fontFamily: 'SomeFont',
              color: 'white',
            }}
            label="Profile"
            onPress={() => {
              props.navigation.navigate('profile');
            }}
          />
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        style={styles.drawerSection}
        icon={() => <Icon name="sign-out" color="#FFFFFF" size={30} />}
        labelStyle={{
          fontFamily: 'SomeFont',
          color: 'white',
        }}
        label="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    backgroundColor: '#3399ff',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
