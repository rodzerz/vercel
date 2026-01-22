import Translations from './components/Translations';
import FunctionalFeature from "./components/FunctionalFeature";
import UserStory from "./components/UserStory";
import Scenarios from "./components/Scenarios";
import RubiksCube from "./components/RubiksCube";
import HappyPath from "./components/HappyPath";
function App() {
  return (
    <div>
      <Translations />
         <FunctionalFeature />
      <UserStory />
      <Scenarios />
      <RubiksCube />
      <HappyPath />
    </div>
  );
}

export default App;
