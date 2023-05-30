import CanvasModel from "./canvas";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      {/* <CanvasModel /> */}
      <Customizer />
    </main>
  );
};

export default App;
