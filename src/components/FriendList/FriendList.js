import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendList/FriendListItem';
import { FriendListContainer } from 'components/FriendList/FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(frend => (
        <FriendListItem
          key={frend.id}
          avatar={frend.avatar}
          name={frend.name}
          isOnline={frend.isOnline}
        />
      ))}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
