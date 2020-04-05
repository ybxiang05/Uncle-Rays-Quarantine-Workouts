import React from 'react';
import {Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import CountDown from 'react-native-countdown-component';
import PageLayout from '../../components/PageLayout';
class Rest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PageLayout
        background="#fff"
        workoutName="Hydrate Yo Self"
        content={
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>You made it! </Text>
            <Image
              style={styles.image}
              source={require('../../assets/Rest.gif')}
            />
            <Text style={styles.countdown}>
              Take a break. Drink some water. Maybe call your mother.{' '}
            </Text>
            <Text style={styles.instruction}>
              At the end of the countdown, you will be redirected to the start
              of this workout.
            </Text>
            <CountDown
              until={180}
              onFinish={() => {
                this.props.navigation.navigate('Squat');
              }}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'MIN', s: 'SEC'}}
              size={20}
              digitStyle={{backgroundColor: '#f2c602'}}
            />

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Workout Complete');
              }}>
              <Text style={styles.button}>No more! Please, I beg of you!</Text>
            </TouchableOpacity>
          </SafeAreaView>
        }
      />
    );
  }
}

export default Rest;
