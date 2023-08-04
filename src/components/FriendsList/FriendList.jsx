import { Wrapper, FriendsList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </Wrapper>
  );
};
