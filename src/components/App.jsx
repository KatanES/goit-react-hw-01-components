import { QuizList } from './quizList';
import quizItems from '../components/data.json';
import { SearchBar } from './SearchBar';

import { Profile } from './ProfileCard';
import user from '../components/user.json';

export const App = () => {
  return (
    <>
      {/* <SearchBar />
      <QuizList items={quizItems} /> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
