import { useState } from "react";
import "./App.css";
import FakeCallScreen from "./components/FakeCallScreen";
import HomeScreen from "./components/HomeScreen";

const App = () => {
  const [screen, setScreen] = useState("home");
  const [callSettings, setCallSettings] = useState({});

  const handleStart = (settings) => {
    setCallSettings(settings);
    setTimeout(() => {
      setScreen("call");
    }, settings.delay * 1000);
  };

  const handleEnd = () => {
    setScreen("home");
  };

  return (
    <>
      {screen === "home" && <HomeScreen onStart={handleStart} />}
      {screen === "call" && (
        <FakeCallScreen caller={callSettings.caller} onEnd={handleEnd} />
      )}
    </>
  );
};

export default App;
