import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const Squat = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#eee"
      content={
        <WorkoutTemplate
          name="15 Squats"
          subtitle=""
          description="It took Brooke an hour to find this GIF. They were not pleased."
          gif={require('../assets/workout_images/Squat.gif')}
          onPress={() => {
            navigation.navigate('PushUp');
          }}
        />
      }
    />
  );
};

export default Squat;
