// import { QuizList } from './quizList';
// import quizItems from '../components/data.json';
// import { SearchBar } from './SearchBar';
import User from './user.json';
import { Profile } from './ProfileCard';

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
        Stats={User.stats}
      />
    </>
  );
};
