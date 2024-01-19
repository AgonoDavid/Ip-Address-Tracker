import Header from "./components/header";
import Map from "./components/map";
import { MapDataProvider } from "./components/contextApi";

function App() {
  return (
    <div>
      <MapDataProvider>
        <Header />
        <Map />
      </MapDataProvider>
    </div>
  );
}

export default App;
