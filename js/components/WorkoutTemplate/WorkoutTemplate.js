import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const WorkoutTemplate = ({name, subtitle, description, gif, onPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={gif} style={styles.gif} />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WorkoutTemplate;
