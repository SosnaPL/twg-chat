import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loader: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  room: {
    fontFamily: 'Poppins',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
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

  user: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5603ad',
    minWidth: '70%',
  },

  back: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5603ad',
  },

  userActivity: {
    color: '#fff',
  },

  headerImages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '30%',
  },

  headerImage: {
    marginRight: 10,
    width: 44,
    height: 44,
  },

  profileImage: {
    marginLeft: 5,
    marginRight: 10,
    width: 44,
    height: 44,
  },

  chat: {
    height: '80%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },

  footer: {
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#b6defd',
  },

  message: {
    minWidth: '100%',
  },

  send: {
    right: 10,
  }

})

export default styles;