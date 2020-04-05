import React from 'react';
import {UltimateStackScreens} from './navigation';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Rest from '../screens/Rest';
import WorkoutComplete from '../screens/WorkoutComplete';

const Rootstack = createStackNavigator();

const RootstackScreens = props => {
  return (
    <Rootstack.Navigator initialRouteName="Home" headerMode="none">
      <Rootstack.Screen name="Home" component={Home} />
      <Rootstack.Screen
        name="Ultimate Workout"
        component={UltimateStackScreens}
      />
      <Rootstack.Screen name="Rest" component={Rest} />
      <Rootstack.Screen name="Workout Complete" component={WorkoutComplete} />
    </Rootstack.Navigator>
  );
};

export default RootstackScreens;
