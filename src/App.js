import { BrowserRouter, Routes, Route } from "react-router-dom"
import PortfolioPage from "./pages/PotfolioPage"

const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
