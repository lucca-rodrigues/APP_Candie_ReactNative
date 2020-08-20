import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import ProfileUsers from '../Pages/ProfileUsers';

const Routes = createAppContainer(
    createSwitchNavigator(
      {
        Home: createSwitchNavigator({
          Login,
          Register,
        }),
          App: createBottomTabNavigator({
            Profile,
            ProfileUsers,
        },{
            tabBarOptions: {
              showLabel: false,
              activeTintColor : '#fff',
              style: {
                backgroundColor: '#1b2c4c'
              }
            }
        })
      },
    ),
  )

export default Routes;