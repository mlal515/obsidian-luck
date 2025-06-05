import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Obsidian Luck!</h1>
        <Button onClick={() => alert('Hello!')}>Click me</Button>
      </div>
    </div>
  );
};

export default Home;
