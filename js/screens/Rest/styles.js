import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#fff',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 20,
  },
  countdown: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
    width: 300,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    width: 350,
    marginBottom: 20,
  },
  image: {
    margin: 20,
  },
  button: {
    backgroundColor: '#f2c602',
    padding: 10,
    marginTop: 20,
    width: 350,
    fontSize: 22,
    fontWeight: '600',
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',
  },
});

export default styles;
