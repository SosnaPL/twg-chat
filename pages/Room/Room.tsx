import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { bubble_styles, input_styles, send_styles } from './gifted_chat_styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { room_details, send_message } from '../../queries/queries';
import { useQuery, useMutation } from '@apollo/client';
import styles from './styles';
import PhoneIcon from '../../assets/phone.png';
import VideoIcon from '../../assets/videocall.png';
import ProfileIcon from '../../assets/profile.png';

export const Room = ({ route, navigation }) => {

  const [messages, setMessages] = useState([]);

  const roomData = useQuery(room_details, {
    variables: {
      id: route.params.id
    }
  })

  const [sendMessage, { data, loading, error }] = useMutation(send_message)

  const handleSend = (message) => {
    sendMessage({
      variables: {
        body: message.text,
        roomid: route.params.id
      }
    })
  }

  const formatRoomData = (messageData) => {
    let messages: any = []
    if (!messageData.loading) {
      messageData.data.room.messages.forEach(message => {
        messages.push({
          _id: message.id,
          text: message.body,
          user: {
            _id: message.user.id
          }
        })
      })
    }
    return messages
  }


  useEffect(() => {
    setMessages(formatRoomData(roomData))
  }, [roomData.data])

  useEffect(() => {
    setMessages(formatRoomData(roomData))
  }, [roomData.data])


  if (roomData.loading || roomData.error) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#5603ad" />
      </View>
    )
  }

  return (
    <View style={styles.room}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Icon name="left" size={40} color="#5603ad" style={styles.back} onPress={() => {
            navigation.navigate('Rooms')
          }} />
          <Image
            style={styles.profileImage}
            source={ProfileIcon}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>The Widlarz Group</Text>
            <Text style={styles.userActivity}>Active Now</Text>
          </View>
        </View>
        <View style={styles.headerImages}>
          <Image
            style={styles.headerImage}
            source={PhoneIcon}
          />
          <Image
            style={styles.headerImage}
            source={VideoIcon}
          />
        </View>
      </View>
      <View style={styles.chat}>
        <GiftedChat
          messages={messages}
          user={{
            _id: "9ba8077f-cc0f-41b7-b603-c5cb90afa3b2",
          }}
          messagesContainerStyle={styles.message}
          placeholder=''
          renderBubble={bubble_styles}
          renderInputToolbar={input_styles}
          renderSend={send_styles}
          onSend={message => {
            handleSend(message[0]);
          }}
        />
      </View>

    </View>
  )

}

export default Room;