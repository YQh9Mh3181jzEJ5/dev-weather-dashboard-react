import Weather from "./components/Weather/Weather";
import landscapeImage from "./assets/landscape.jpg";

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${landscapeImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
      <div className="relative z-10">
        <Weather />
      </div>
    </div>
  );
};

export default App;
