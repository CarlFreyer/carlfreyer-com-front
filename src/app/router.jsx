import {BrowserRouter, Routes, Route, Link} from "react-router"
import Home from "./routes/home"
import Redirect from "./routes/redirect"

let Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/linkedin" element={<Redirect href="https://www.linkedin.com/in/carl-k-freyer/"/>} />
        <Route path="" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    )
    
}
  
export default Router
