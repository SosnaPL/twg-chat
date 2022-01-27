import { Bubble, InputToolbar, Send } from 'react-native-gifted-chat';
import { View, Image, TouchableOpacity } from 'react-native';
import SendIcon from '../../assets/send.png';
import styles from './styles';

export const bubble_styles = (props) => {
  return (
    <Bubble
      {...props}

      textStyle={{
        right: {
          color: 'white',
        },
        left: {
          color: '#1a1a1a',
        },
      }}
      wrapperStyle={{
        left: {
          backgroundColor: '#fff',
          borderRadius: 25,
          borderBottomLeftRadius: 0,
          margin: 5
        },
        right: {
          backgroundColor: "#993afc",
          borderRadius: 25,
          borderBottomRightRadius: 0,
          margin: 5
        },
      }}
    />
  );
}

export const input_styles = (props) => {
  return (
    <View style={styles.footer}>
      <InputToolbar
        {...props}
        containerStyle={{
          borderRadius: 25,
          borderBottomRightRadius: 0,
          width: '95%',
          position: 'relative',
          margin: 10,
        }}
      />
    </View>
  )
}

//Note: I wasn't able to get onpress event to work outside of the view https://github.com/entria/react-native-view-overflow/issues/13

export const send_styles = (props) => {
  return (
    <TouchableOpacity style={styles.send} onPress={() => {
      if (props.text) {
        props.onSend({ text: props.text })
      }
    }}>
      <Image source={SendIcon} />
    </TouchableOpacity>
  )
}