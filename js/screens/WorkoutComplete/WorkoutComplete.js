import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../WorkoutComplete/styles';

const WorkoutComplete = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.header}>You're all done!</Text>
      <Image
        style={styles.rayHappy}
        source={require('../../assets/ray/rayHappy.png')}
      />
      <Text style={styles.proud}>Uncle Ray is proud of you.</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.button}>Try Another Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutComplete;
