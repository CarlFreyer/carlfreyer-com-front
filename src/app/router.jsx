import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./routes/home"
import PostPage from "./routes/postPage"
import Redirect from "./routes/redirect"

let Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/linkedin" element={<Redirect href="https://www.linkedin.com/in/carl-k-freyer/"/>} />
        <Route path="/resume" element={<Redirect href="/carlfreyer.pdf"/>} />
        <Route path="" element={<Home/>} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
    )
    
}
  
export default Router
