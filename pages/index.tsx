import type { NextPage } from 'next';
import { Button, Htag, Paragraph } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary'>button</Button>
      <Button appearance='ghost' arrow='right'>
        button
      </Button>
      <Paragraph size='s'>text s</Paragraph>
      <Paragraph>text m</Paragraph>
      <Paragraph size='l'>text l</Paragraph>
    </>
  );
};

export default Home;
