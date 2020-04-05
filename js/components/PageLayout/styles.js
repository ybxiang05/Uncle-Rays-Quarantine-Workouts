import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#13a0bd',
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 15,
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  arrow: {
    width: 30,
    height: 30,
    position: 'absolute',
  },
  card: {
    borderTopLeftRadius: 50,
    backgroundColor: '#f5f5f5',
    borderTopRightRadius: 50,
    height: '100%',
    width: '100%',
  },
  content: {
    paddingTop: 25,
    borderTopLeftRadius: 50,

    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
});

export default styles;
