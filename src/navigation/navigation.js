import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage, Text, Button} from 'react-native';

import {AuthContext} from './context';
import {DrawerContent} from '../screen/DrawerContent/DrawerContent';

import SplashScreen from '../screen/Splash/Splash';
import Profile from '../screen/Profile/Profile';
import LoginScreen from '../screen/Login/Login';
import RegistrationScreen from '../screen/Registration/Registration';
import Dashboard from '../screen/Dashboard/Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </LoginStack.Navigator>
);

const RegistrationStack = createStackNavigator();
const RegistrationStackScreen = () => (
  <RegistrationStack.Navigator>
    <RegistrationStack.Screen
      name="registration"
      component={RegistrationScreen}
      options={{
        headerShown: false,
      }}
    />
  </RegistrationStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = props => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="profile"
      component={Profile}
      options={{
        title: 'Profile',
        headerTintColor: '#307ecc',
        headerLeft: () => (
          <Icon
            name="md-menu"
            size={30}
            style={{
              marginLeft: 10,
            }}
            color="#307ecc"
            onPress={() => props.navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const DashboardStack = createStackNavigator();
const DashboardStackScreen = props => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name="dashboard"
      component={Dashboard}
      options={{
        title: 'Dashboard',
        headerTintColor: '#307ecc',
        headerLeft: () => (
          <Icon
            name="md-menu"
            size={30}
            style={{
              marginLeft: 10,
            }}
            color="#307ecc"
            onPress={() => props.navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </DashboardStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="profile" component={ProfileStackScreen} />
      <Drawer.Screen name="dashboard" component={DashboardStackScreen} />
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="app" component={DrawerScreen} />
    ) : (
      <>
        <RootStack.Screen name="login" component={LoginStackScreen} />
        <RootStack.Screen
          name="registration"
          component={RegistrationStackScreen}
        />
      </>
    )}
  </RootStack.Navigator>
);

const Navigation = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  let token = 'abcd';

  const authContext = React.useMemo(() => {
    return {
      signIn: async () => {
        setIsLoading(false);
        await AsyncStorage.setItem('token', token);
        setUserToken(token);
      },
      signUp: async () => {
        setIsLoading(false);
        await AsyncStorage.setItem('token', token);
        setUserToken(token);
      },
      signOut: async () => {
        setIsLoading(false);
        await AsyncStorage.removeItem('token');
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    async function fetchStorageValue() {
      var token = await AsyncStorage.getItem('token');
      if (token) {
        setUserToken(token);
      }
    }
    fetchStorageValue();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
