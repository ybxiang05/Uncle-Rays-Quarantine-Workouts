import React from 'react';
import {Text, TouchableOpacity, ScrollView, Image, View} from 'react-native';
import styles from './styles';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Uncle Ray's Quarantine Workouts</Text>
        <Image style={styles.ray} source={require('../../assets/ray.png')} />
        <TouchableOpacity
          onPress={() => {
            this.setState({open: !this.state.open});
          }}>
          <Text style={styles.workout}>Ultimate Workout</Text>
        </TouchableOpacity>
        {this.state.open ? (
          <>
            <Text style={styles.overview}>
              15 Squats {'\n'}
              15 Push Ups {'\n'}
              20 Superman Planks {'\n'}
              10 Reverse Lunges {'\n'}
              15 Tricep Dips {'\n'}
              15 Burpees {'\n'}
              10 Lateral Lunges {'\n'}
              10 Crossover Lunges{'\n'}
              30 Mountain Climbers{'\n'}
              30 Russian Twists {'\n'}
              {'\n'}
              Rise and repeat 3 times (or more)
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Ultimate Workout');
                this.setState({open: !this.state.open});
              }}>
              <Text style={styles.lfg}>LFGGGG</Text>
            </TouchableOpacity>
          </>
        ) : null}
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.workout}>Coming Soon</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.workout}>Coming Soon</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.workout}>Coming Soon</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Home;
