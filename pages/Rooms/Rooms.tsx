import React from 'react';
import { Text, View } from 'react-native';
import { get_rooms } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import styles from './styles';

export const Rooms = () => {
  const { data, loading } = useQuery(get_rooms)
  console.log(data)

  return (
    <View style={styles.rooms}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rooms</Text>
      </View>
    </View>
  )
}

export default Rooms;