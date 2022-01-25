import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export const Rooms = () => {
  return (
    <View style={styles.rooms}>
      <View style={styles.header}>
        <Text>Rooms</Text>
      </View>
    </View>
  )
}

export default Rooms;