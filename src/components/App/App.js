import Profile from 'components/Profile/Profile';
import user from 'user.json';
import { Container } from 'components/App/App.styled';
import Statistics from 'components/Statistics/Statistics';
import data from 'data.json';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Container>
  );
}
