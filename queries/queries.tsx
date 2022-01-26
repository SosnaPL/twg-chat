import { gql } from '@apollo/client';

export const get_rooms = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;

export const room_messages = gql`
  query last_message($id: String!) {
      room(id: $id) {
        messages {
          body
          insertedAt
      }
    }
  }
`;