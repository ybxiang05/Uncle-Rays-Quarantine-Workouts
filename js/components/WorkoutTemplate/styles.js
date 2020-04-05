import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 60,
    height: '100%',
  },
  gif: {
    height: 200,
    width: 200,
    margin: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 30,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 18,
    margin: 20,
  },
  next: {
    backgroundColor: '#f2c602',
    padding: 10,
    width: 100,
    marginTop: 30,
    fontSize: 22,
    fontWeight: '600',
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',
  },
});

export default styles;
