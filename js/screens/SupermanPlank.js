import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const SupermanPlank = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#f5f5f5"
      content={
        <WorkoutTemplate
          subtitle=""
          name="20 Superman Planks"
          description="Raymond Senpei says: focus on extending your body and being as horizontal as possible. Crunch optional. For the real Clark Kents around here, feel free to do this exercise from your feet instead."
          gif={require('../assets/SupermanPlank.gif')}
          onPress={() => {
            navigation.navigate('ReverseLunge');
          }}
        />
      }
    />
  );
};

export default SupermanPlank;
