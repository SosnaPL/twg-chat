import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  loader: {
    width: '100%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rooms: {
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

  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#5603ad',
    width: '70%',
  },

  headerImages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '30%',
  },

  headerImage: {
    marginRight: 5,
    width: 44,
    height: 44,
  },

  roomsEmbed: {
    height: '85%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor: '#f0f8ff',
  },

  roomEmbed: {
    position: 'relative',
    height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 20,
  },

  profileImage: {
    width: 64,
    height: 64,
    margin: 10
  },

  roomEmbedText: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  roomName: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  lastSeen: {
    color: '#bfc1cc',
  }

});

export default styles;