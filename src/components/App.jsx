// import { QuizList } from './quizList';
// import quizItems from '../components/data.json';
// import { SearchBar } from './SearchBar';
import User from './Profile/user.json';
import { Profile } from './Profile/ProfileCard';
import { StatsList } from './Profile/Stats';

export const App = () => {
  return (
    <>
      {/* <SearchBar />
      <QuizList items={quizItems} /> */}
      <Profile
        Username={User.username}
        Tag={User.tag}
        Location={User.location}
        Avatar={User.avatar}
      />
      <StatsList Stats={User.stats} />
    </>
  );
};
