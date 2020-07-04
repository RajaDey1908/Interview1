import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as actionTypes from '../../redux/actions/index';
import Spinner from 'react-native-loading-spinner-overlay';

const Dashboard = props => {
  const {userDetails} = props;
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>Welcome To My Dashboard </Text>
        </View>
        <Text style={styles.subHeading}>Users Listing</Text>
        {userDetails.length > 0 ? (
          <>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.listHeading}>Name</Text>
              <Text style={styles.listHeading}> </Text>
              <Text style={styles.listHeading}> </Text>
              <Text style={styles.listHeading}>Email</Text>
            </View>
            <FlatList
              data={userDetails}
              renderItem={({item}) => (
                <>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.email}</Text>
                  </View>
                </>
              )}
            />
          </>
        ) : (
          <Spinner
            visible={true}
            textContent={'Data Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginLeft: 10,
    color: '#66c2ff',
  },
  heading: {
    margin: 5,
    fontSize: 25,
    color: '#307ecc',
    marginTop: 30,
  },
  listHeading: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#307ecc',
    marginTop: 30,
  },
  subHeading: {
    marginLeft: 30,
    fontSize: 20,
    color: '#307ecc',
    marginTop: 30,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.userDetails,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: username => dispatch(actionTypes.getUsers(username)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
