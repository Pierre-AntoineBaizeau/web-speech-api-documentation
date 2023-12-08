import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { webVoiceHub } from "webvoicehub/src/main";
import "../components/css/homepage.css";
export const HomePage = () => {
  useEffect(() => {
    webVoiceHub();
  }, []);

  return (
    <div className="home">
      <h1>Web Speech API</h1>
      <p>
        Web Speech API is a JavaScript library that allows you to control your
        website with your voice.
      </p>
      <p>
        It is compatible with most browsers and is easy to use. It is also
        customizable and allows you to add your own voice commands.
      </p>
      <p>
        To get started, check out the
        <Routes>
          <Route path="/guide-user">User Guide</Route>
        </Routes>
        .
      </p>
      <p>
        To see a demo of Web Speech API in action, click the microphone icon in
        the bottom right corner of this page and say "scroll down".
      </p>
      <div className="microphone-output" id="output"></div>
      <div className="microphone-button" id="startListening">
        <span className="icon">&#127908;</span>
      </div>
    </div>
  );
};
