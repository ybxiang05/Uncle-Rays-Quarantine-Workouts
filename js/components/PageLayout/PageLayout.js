import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PageLayout = ({workoutName, content, background}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image
              source={require('../../assets/ios-arrow.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.header}>{workoutName}</Text>
        </View>
        <View style={[styles.card, {backgroundColor: background}]}>
          <View style={styles.content}>{content}</View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PageLayout;
