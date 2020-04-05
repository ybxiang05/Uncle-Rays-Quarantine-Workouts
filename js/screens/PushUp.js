import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const PushUp = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#f5f5f5"
      content={
        <WorkoutTemplate
          subtitle=""
          name="15 Push Ups"
          description="This is Brooke's least favourite exercise. But they do it for the love of Mola and Fable."
          gif={require('../assets/PushUp.gif')}
          onPress={() => {
            navigation.navigate('SupermanPlank');
          }}
        />
      }
    />
  );
};

export default PushUp;
