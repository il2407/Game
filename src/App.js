import Home from "./Home";
import AppAppBar from "./AppBar";
import ParticlesBackground from "./ParticlesBackground";

export default function App() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <AppAppBar />
        <div style={{ position: "absolute", zIndex: -1 }}>
          <ParticlesBackground />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Home />
        </div>
      </div>
    </>
  );
}
