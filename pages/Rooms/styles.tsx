import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  rooms: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '20%',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;