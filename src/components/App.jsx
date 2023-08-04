// import { QuizList } from './quizList';
// import quizItems from '../components/data.json';
// import { SearchBar } from './SearchBar';
import User from './Profile/user.json';
import Data from './Statistics/data-statistics.json';
import { Profile } from './Profile/ProfileCard';
import { Statistics } from './Statistics/Statistics';
// import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      {/* <SearchBar />
      <QuizList items={quizItems} /> */}
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />
      <Statistics title="Upload stats" stats={Data} />
    </>
  );
};
