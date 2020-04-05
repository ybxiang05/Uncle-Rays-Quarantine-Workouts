import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const MountainClimber = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#f5f5f5"
      content={
        <WorkoutTemplate
          subtitle=""
          name="30 Mountain Climbers"
          description="Climb those mountains!"
          gif={require('../assets/workout_images/MountainClimber.gif')}
          onPress={() => {
            navigation.navigate('RussianTwist');
          }}
        />
      }
    />
  );
};

export default MountainClimber;
