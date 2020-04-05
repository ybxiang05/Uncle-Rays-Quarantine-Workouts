import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Burpee from '../screens/Burpee';
import LateralLunge from '../screens/LateralLunge';
import CrossoverLunge from '../screens/CrossoverLunge';
import MountainClimber from '../screens/MountainClimber';
import PushUp from '../screens/PushUp';
import ReverseLunge from '../screens/ReverseLunge';
import RussianTwist from '../screens/RussianTwist';
import Squat from '../screens/Squat';
import SupermanPlank from '../screens/SupermanPlank';
import TricepDip from '../screens/TricepDip';
import Rest from '../screens/Rest';
import WorkoutComplete from '../screens/WorkoutComplete';

const UltimateStack = createStackNavigator();

export const UltimateStackScreens = props => {
  return (
    <UltimateStack.Navigator initialRouteName="Squat" headerMode="none">
      <UltimateStack.Screen name="Burpee" component={Burpee} />
      <UltimateStack.Screen name="LateralLunge" component={LateralLunge} />
      <UltimateStack.Screen name="CrossoverLunge" component={CrossoverLunge} />
      <UltimateStack.Screen
        name="MountainClimber"
        component={MountainClimber}
      />
      <UltimateStack.Screen name="PushUp" component={PushUp} />
      <UltimateStack.Screen name="ReverseLunge" component={ReverseLunge} />
      <UltimateStack.Screen name="RussianTwist" component={RussianTwist} />
      <UltimateStack.Screen name="Squat" component={Squat} />
      <UltimateStack.Screen name="SupermanPlank" component={SupermanPlank} />
      <UltimateStack.Screen name="TricepDip" component={TricepDip} />
      <UltimateStack.Screen name="Rest" component={Rest} />
    </UltimateStack.Navigator>
  );
};
