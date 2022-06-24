import type { NextPage } from 'next';
import { Button, Htag } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary'>button</Button>
      <Button appearance='ghost' arrow='right'>
        button
      </Button>
    </>
  );
};

export default Home;
