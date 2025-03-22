import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/practice1" element={<Practice1/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
