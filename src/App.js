import { BrowserRouter, Routes, Route } from "react-router-dom";
import Youtube from "./pages/Youtube/Youtube";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Youtube />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
