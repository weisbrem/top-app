import type { NextPage } from 'next';
import { Button, Htag, Ptag } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary'>button</Button>
      <Button appearance='ghost' arrow='right'>
        button
      </Button>
      <Ptag size='s'>text s</Ptag>
      <Ptag>text m</Ptag>
      <Ptag size='l'>text l</Ptag>
    </>
  );
};

export default Home;
