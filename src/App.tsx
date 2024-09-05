import landscapeImage from "@/assets/landscape.jpg";
import Weather from "@/components/Weather/Weather";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src={landscapeImage}
        alt="landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
      <div className="relative z-10">
        <Weather />
      </div>
    </div>
  );
};

export default App;
