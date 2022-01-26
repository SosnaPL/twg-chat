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

export const room_details = gql`
  query last_message($id: String!) {
      room(id: $id) {
        messages {
          body
          id
          user {
            id
        }
      }
    }
  }
`;

export const send_message = gql`
  mutation send_message($body: String!, $roomid: String!) {
    sendMessage(body: $body, roomId: $roomid) {
      id
    }
  }
`