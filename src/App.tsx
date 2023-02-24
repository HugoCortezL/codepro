import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/shared/Header"
import Home from "./pages/Home"
import Category from "./pages/Category"
import DataStructure from "./pages/Topic/DataStructure"

function App() {
  return (
    <div>
      <Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:topic" element={<DataStructure />} />
          </Routes>
        </BrowserRouter>
      </Header>
    </div>
  )
}

export default App
