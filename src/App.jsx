import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing"
// import Testing from "./Landing/Testing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/testing" element={<Testing/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
