import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const CrossoverLunge = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#eee"
      content={
        <WorkoutTemplate
          name="10 Crossover Lunges"
          subtitle="(per side)"
          description="The GIF is misleading, but Brooke wanted the images to be consistent. Please step out and across as if you're about to throw a backhand. Disc optional for practicing throwing form."
          gif={require('../assets/CrossoverLunge.gif')}
          background={{backgroundColor: '#f5f5f5'}}
          onPress={() => {
            navigation.navigate('MountainClimber');
          }}
        />
      }
    />
  );
};

export default CrossoverLunge;
