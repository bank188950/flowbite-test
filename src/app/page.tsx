//'use client';
import { Flowbite, Button } from 'flowbite-react';
import { customTheme } from '@/configs/customTheme';

export default function Home(): React.ReactElement {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button color="primary">Click me 1</Button>
      <Button color="secondary">Click me 2</Button>
      <Button color="base-1">Click me 3</Button>

      <Button color="warning">Click me 4</Button>
      <div className="bg-green">1111</div>
      <div className="bg-dark-green">1111</div>
      <div className="bg-blue-500 hover:bg-blue-600">2222</div>
      <div className="bg-sky-500 hover:bg-sky-600">3333</div>
    </Flowbite>
  );
}
