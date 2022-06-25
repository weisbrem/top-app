import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';

const Home: NextPage = (): JSX.Element => {
  const [r, setR] = useState<number>(4);

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
      <Tag size='s'>Tag</Tag>
      <Tag color='red'>Tag red</Tag>
      <Tag color='green'>Tag green</Tag>
      <Tag size='s' color='primary'>
        Tag primary
      </Tag>
      <Tag color='gray'>Tag gray</Tag>
      <Rating rating={r} isEditable setRating={setR} />
    </>
  );
};

export default Home;
