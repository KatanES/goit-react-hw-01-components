export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <div>
        <div>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </div>
        <div>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </div>
        <div>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </div>
      </div>
    </div>
  );
};
