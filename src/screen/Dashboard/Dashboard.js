import React, {useEffect, useState, Component} from 'react';

import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import axios from 'react-native-axios';

const Dashboard = () => {

  let [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchStorageValue() {
      await axios
        .get('https://reqres.in/api/users')
        .then(response => {
          let usersData=response.data.data;
          let newUsers=[]
          usersData.map((item, key)=>{
            let user={
              name: item.first_name+' '+item.last_name,
              email: item.email,
            }
            newUsers.push(user)
          })
          setUsers(newUsers)
        })
        .catch(err => ({error: err}));
    }
    fetchStorageValue();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {console.log("render users",users)}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>Welcome To My Dashboard </Text>
        </View>
        <Text style={styles.subHeading}>Users Listing</Text>

        { users ?<>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.listHeading}>Name</Text>
          <Text style={styles.listHeading}> </Text>
          <Text style={styles.listHeading}> </Text>
          <Text style={styles.listHeading}>Email</Text>
        </View>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.email}</Text>
              </View>
            </>
          )}
        /></> :null}
        
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
    fontWeight:'bold',
    color: '#307ecc',
    marginTop: 30,
  },
  subHeading: {
    marginLeft: 30,
    fontSize: 20,
    // fontWeight:'bold',
    color: '#307ecc',
    marginTop: 30,
  },
});
export default Dashboard;
