import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  rooms: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
  },

  header: {
    height: '15%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#b6defd',
    paddingLeft: 10,
    paddingBottom: 20,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5603ad',
  }
});

export default styles;