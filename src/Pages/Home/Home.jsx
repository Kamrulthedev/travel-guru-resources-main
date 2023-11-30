
import Navber from './Navber';

import Rectangle from "../../assets/Rectangle 1.png"

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Rectangle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height as needed
  };

  return (
    <div className="relative" style={backgroundStyle}>
      <Navber />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl">This is my Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
