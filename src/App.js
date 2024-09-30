
import HomePage from "./Online-Assessment-Project/HomePage/HomePage.js";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import AdminSignUp from "./Online-Assessment-Project/AdminSingnUp/AdminSignUp.js";
import AdminLogIn from "./Online-Assessment-Project/AdminLogIn/AdminLogIn.js";
import AdminDashboardFunction from "./Online-Assessment-Project/AdminDashboard/AdminDashboard.js";
import Context from "./Online-Assessment-Project/Context/Context.js";
import { useState } from "react";
import CreateQuiz1 from "./Online-Assessment-Project/AdminDashboard/CreateQuiz1.js";
import ViewResults from "./Online-Assessment-Project/AdminDashboard/ViewResults.js";
import UserSignUp from "./Online-Assessment-Project/UserSignUp/UserSignUp.js";
import UserLogIn from "./Online-Assessment-Project/UserLogIn/UserLogIn.js";
import UserDashboard from "./Online-Assessment-Project/UserDashboard/UserDashboard.js";
import CssQuiz from "./Online-Assessment-Project/UserDashboard/CssQuiz.js";
import HtmlQuiz from "./Online-Assessment-Project/UserDashboard/HtmlQuiz.js";
import JsQuiz from "./Online-Assessment-Project/UserDashboard/JsQuiz.js";
import ReactQuiz from "./Online-Assessment-Project/UserDashboard/ReactQuiz.js";
function App(){
  const [globalUser, setGlobalUser] = useState({
    Username : '',
    Email : '',
    Dropdown : ''
  })
  return(
    <>
    <BrowserRouter>
      <Context.Provider value={{globalUser:globalUser,setGlobalUser:setGlobalUser}}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}> </Route>
           <Route path="/adminSignUp" element={<AdminSignUp></AdminSignUp>}></Route>
           <Route path="userSignUp" element={<UserSignUp></UserSignUp>}></Route>
           <Route path="/adminLogin" element={<AdminLogIn></AdminLogIn>}></Route>
           <Route path="/userLogin" element={<UserLogIn></UserLogIn>}></Route>
           <Route path="/adminDashboard" element={<AdminDashboardFunction></AdminDashboardFunction>}></Route>
           <Route path="/userDashboard" element={<UserDashboard></UserDashboard>}></Route>
           <Route path="/createQuiz" element={<CreateQuiz1></CreateQuiz1>}></Route>
           <Route path="/viewResults" element={<ViewResults></ViewResults>}></Route>
           <Route path="/cssQuiz" element={<CssQuiz></CssQuiz>}></Route>
           <Route path="/htmlQuiz" element={<HtmlQuiz></HtmlQuiz>}></Route>
           <Route path="/jsQuiz" element={<JsQuiz></JsQuiz>}></Route>
           <Route path="/reactQuiz" element={<ReactQuiz></ReactQuiz>}></Route>
           </Routes>
           </Context.Provider>
 </BrowserRouter>
    </>
  )
}
export default App;