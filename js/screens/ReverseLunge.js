import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const ReverseLunge = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#f5f5f5"
      content={
        <WorkoutTemplate
          name="10 Reverse Lunges"
          subtitle="(per side)"
          description="Instead of kicking straight out, bend at the knee as if you're running. Move your arms, too. Make it believable!"
          gif={require('../assets/workout_images/ReverseLunge.gif')}
          onPress={() => {
            navigation.navigate('TricepDip');
          }}
        />
      }
    />
  );
};

export default ReverseLunge;
