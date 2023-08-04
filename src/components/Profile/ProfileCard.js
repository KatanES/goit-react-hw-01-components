import { StatsList } from './Stats';

export const Profile = ({ Username, Tag, Location, Avatar }) => {
  return (
    <div>
      <div>
        <img src={Avatar} alt="User avatar" />
        <p>{Username}</p>
        <p>@ {Tag}</p>
        <p>{Location}</p>
      </div>
      <StatsList />
    </div>
  );
};
