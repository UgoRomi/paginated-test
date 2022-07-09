import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { PostsList } from '../components/PostsList';

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 0 2rem;
  background-color: #dddddd;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Paginated assignment</title>
        <meta
          name='description'
          content='List of item paginated via infinite scroll'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <PostsList></PostsList>
      </Main>
    </Container>
  );
};

export default Home;
