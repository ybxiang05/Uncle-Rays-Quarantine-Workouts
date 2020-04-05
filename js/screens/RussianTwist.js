import React from 'react';
import WorkoutTemplate from '../components/WorkoutTemplate';
import PageLayout from '../components/PageLayout';

const RussianTwist = ({navigation}) => {
  return (
    <PageLayout
      workoutName="Ultimate Workout"
      background="#f5f5f5"
      content={
        <WorkoutTemplate
          subtitle=""
          name="30 Russian Twists"
          description="Disc and/or weights optional. Take the time to consider exercise names like this one, or 'Hindu push up', and whether they're still harmless and inoffensive in 2020."
          gif={require('../assets/RussianTwist.gif')}
          onPress={() => {
            navigation.navigate('Rest');
          }}
        />
      }
    />
  );
};

export default RussianTwist;
