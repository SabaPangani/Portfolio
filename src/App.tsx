import "./App.css";
import { useParallax } from "react-scroll-parallax";
const App = () => {
  const parallax = useParallax({
    translateX: [0, 360],
  });
  const parallax2 = useParallax({
    translateX: [360, 360],
  });
  return (
    <div className="container-body">
      <div ref={parallax.ref as any} className="spinner"></div>
      <div ref={parallax2.ref as any} className="spinner"></div>
    </div>
  );
};
export default App;