import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const Burpee = ({navigation}) => {
  return (
    <PageLayout
      content={
        <WorkoutTemplate
          name="15 Burpees"
          subtitle=""
          description="Push-up optional. Feel the burn!"
          gif={require('../assets/Burpee.gif')}
          onPress={() => {
            navigation.navigate('LateralLunge');
          }}
        />
      }
      workoutName="Ultimate Workout"
      background="#f5f5f5"
    />
  );
};

export default Burpee;
