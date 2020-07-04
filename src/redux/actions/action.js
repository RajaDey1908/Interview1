import * as actionTypes from '../types/types';
import axios from 'react-native-axios';


export const getUsers = () => async dispatch => {
  let newUsers = [];
  await axios
    .get('https://reqres.in/api/users')
    .then(response => {
      let usersData = response.data.data;
      usersData.map((item, key) => {
        let user = {
          name: item.first_name + ' ' + item.last_name,
          email: item.email,
        };
        newUsers.push(user);
      });
      dispatch({type: actionTypes.GET_USERS, userDetails: newUsers});
    })
    .catch(err => {
      console.log('err', err);
      dispatch({type: actionTypes.GET_USERS, userDetails: newUsers});
    });
};
