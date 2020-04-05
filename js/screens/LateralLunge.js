import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const LateralLunge = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#f5f5f5"
      content={
        <WorkoutTemplate
          name="10 Lateral Lunges"
          subtitle="(per side)"
          description="As if stepping out for a flick. Disc optional to practice throwing form."
          gif={require('../assets/LateralLunge.gif')}
          onPress={() => {
            navigation.navigate('CrossoverLunge');
          }}
        />
      }
    />
  );
};

export default LateralLunge;
