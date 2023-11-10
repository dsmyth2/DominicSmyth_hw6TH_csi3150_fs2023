import "./App.css";
import Hero from "./components/Hero/Hero";
import data from "./TravelData";
import TravelBlog from "./components/TravelBlog/TravelBlog";

function App() {
  const places = data.map((item) => {
    return (
      // generalization of location data
      <TravelBlog
        key={item.id}
        placeHeading={item.placeHeading}
        placeImg1={item.placeImg1}
        placeImg2={item.placeImg2}
        placeImg3={item.placeImg3}
        placeDescription={item.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      <section className="place-section-container">{places}</section>
    </div>
  );
}

export default App;
