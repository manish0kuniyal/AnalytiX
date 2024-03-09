import { BrowserRouter as Router ,Route ,Routes} from "react-router-dom"
import Home from "./pages/home"
import SignIn from "./pages/sign-in"
import NotFound from "./pages/NotFound"
import Users from "./pages/users"
import Test from "./pages/test"
function App() {
  return (
     <Router>
       <Routes>
        <Route path="/" element={<Home/>}/>        
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
     </Router>
  )
}

export default App