import { Item, OnlineStatus, Avatar, Name } from './FriendList.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <OnlineStatus status={isOnline} />
      <Avatar src={avatar} alt="user avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
