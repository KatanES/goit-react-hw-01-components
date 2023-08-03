export const Profile = ({
  Username,
  Tag,
  Location,
  Avatar,
  Stats: { Followers, Views, Likes },
}) => {
  return (
    <div>
      <div>
        <img src={Avatar} alt="User avatar" />
        <p>{Username}</p>
        <p>{Tag}</p>
        <p>{Location}</p>
      </div>
      span
      <div>
        <div>
          <span>Followers</span>
          <span>{Followers}</span>
        </div>
        <div>
          <span>Views</span>
          <span>{Views}</span>
        </div>
        <div>
          <span>Likes</span>
          <span>{Likes}</span>
        </div>
      </div>
    </div>
  );
};
