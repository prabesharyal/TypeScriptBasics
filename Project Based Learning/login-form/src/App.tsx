import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import statement
import ErrorPage from "./404";
import Home from "./submodules/home";
import SignUp from "./submodules/signup";
import Login from "./submodules/login";
import './App.css'

function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <ul>
            

            {currentPath !== "/" && (
              <li>
                <a href="/">Home</a>
              </li>)}
            {(currentPath == "/signup" || currentPath == "/") && ( // Render "Login" link only if not on the login page
              <li>
                <a href="/login">Login</a>
              </li>
            )}
            {(currentPath == "/login" || currentPath == "/") && ( // Render "Sign Up" link only if not on the signup page and not on the home page
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            )}
          </ul>
        </nav>

        {/* Routing */}
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} /> {/* Handle 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
