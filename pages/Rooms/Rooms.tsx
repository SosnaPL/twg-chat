import React from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { get_rooms, room_messages } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import styles from './styles';
import SearchIcon from '../../assets/search.png';
import RoomsIcon from '../../assets/rooms.png';
import ProfileIcon from '../../assets/profile.png';

const LastMessage = (room_id) => {
  const messages = useQuery(room_messages, {
    variables: {
      id: room_id.id
    }
  })

  //Format seconds to day hours minutes

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    return dDisplay + hDisplay + mDisplay + "ago"
  }

  //Convert insert date to fit date format and get the difference beetwen dates

  const lastSeen = () => {
    const date = messages.data.room.messages[0].insertedAt
    const todays_date: any = new Date(Date.now())

    let ymd = date.split(" ")[0]
    let hms = date.split(" ")[1]
    let y = ymd.split("-")[0]
    let m = ymd.split("-")[1]
    let d = ymd.split("-")[2]
    let h = hms.split(":")[0]
    let mi = hms.split(":")[1]
    let s = hms.split(":")[2]

    let converted_date: any = new Date(y, m, d, h, mi, s)
    let difference = Math.abs(todays_date - converted_date) / 1000

    return secondsToDhms(difference)
  }

  if (messages.loading || messages.error) {
    return (
      <Text>...</Text>
    )
  }

  return (
    <View>
      <Text>
        {messages.data.room.messages[0].body}
      </Text>
      <Text style={styles.lastSeen}>{lastSeen()}</Text>
    </View>
  )
}

export const Rooms = ({ navigation }) => {

  //Render available rooms

  const viewRooms = () => {
    const roomData = useQuery(get_rooms)

    if (roomData.loading || roomData.error) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#5603ad" />
        </View>
      )
    }
    return (
      roomData.data.usersRooms.rooms.map((room) => {
        return (
          <TouchableOpacity key={room.id} style={styles.roomEmbed} onPress={() => {
            navigation.navigate('Room', {
              id: room.id
            })
          }}>
            <Image
              style={styles.profileImage}
              source={ProfileIcon}
            />
            <View style={styles.roomEmbedText}>
              <Text style={styles.roomName}>
                {room.name}
              </Text>
              <LastMessage id={room.id} />
            </View>
          </TouchableOpacity>
        )
      }
      ))
  }

  return (
    <View style={styles.rooms}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rooms</Text>
        <View style={styles.headerImages}>
          <Image
            style={styles.headerImage}
            source={SearchIcon}
          />
          <Image
            style={styles.headerImage}
            source={RoomsIcon}
          />
        </View>
      </View>
      <View style={styles.roomsEmbed}>
        {viewRooms()}
      </View>
    </View>
  )
}

export default Rooms;