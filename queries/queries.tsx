import { gql } from '@apollo/client';

//Get available rooms for authenticated user

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

//Get available messages for specified room (used for lastseen/lastmessage)

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

//Get available messages for specified room (used for chat)

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

//Send message

export const send_message = gql`
  mutation send_message($body: String!, $roomid: String!) {
    sendMessage(body: $body, roomId: $roomid) {
      id
    }
  }
`