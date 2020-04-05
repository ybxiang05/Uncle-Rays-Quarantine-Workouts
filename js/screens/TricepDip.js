import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const TricepDip = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#f5f5f5"
      content={
        <WorkoutTemplate
          name="15 Tricep Dips"
          subtitle=""
          description="Do these dips before you dip."
          gif={require('../assets/workout_images/TricepDip.gif')}
          onPress={() => {
            navigation.navigate('Burpee');
          }}
        />
      }
    />
  );
};

export default TricepDip;
