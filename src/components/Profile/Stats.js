import User from './user.json';

const Stats = User.stats;
export const StatsList = ({ Followers, Views, Likes }) => {
  return (
    <div>
      <div>
        <p>{Stats.Followers}</p>
      </div>
      <div>
        <p>{Stats.Views}</p>
      </div>
      <div>
        <p>{Stats.Likes}</p>
      </div>
    </div>
  );
};
