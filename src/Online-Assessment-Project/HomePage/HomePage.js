import { useNavigate } from 'react-router-dom'
import './HomePage.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
function HomePage(){
    const navigate=useNavigate();
    const adminSignUp=(e)=>{
         e.preventDefault()
         navigate("/adminSignUp")
    }
    const userSignUp=(e)=>{
     e.preventDefault()
     navigate("/userSignUp")
}
    const adminLogin=(e)=>{
     e.preventDefault()
     navigate("/adminLogin")
}
const userLogin=(e)=>{
     e.preventDefault()
     navigate("/userLogin")
}
    return(
     <>
     <div className="mcqcontainer">
        <img className="mcqlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvHYkyEyufMquh98AqGr-4QsDXmkQkf589g&s"/>
        <div>
            {/* <button className="mcqbutton">Login</button> */}
    <div className="popupflexing">
    <div>
        <Popup trigger={
       <button type="button" className="mcqbutton">SignUp</button>
     }
     position="bottom right"
   >
    <div className="popupcontainer">
    <button className="signupbutton" onClick={(e)=>userSignUp(e)}>UserSignUp</button>
    <button className="signupbutton" onClick={(e)=>adminSignUp(e)}>AdminSignUp</button>
    </div>
   </Popup>
        </div>
        <div>
        <Popup trigger={
       <button type="button" className="mcqbutton">LogIn</button>
     }
     position="bottom right"
   >
    <div className="popupcontainer">
    <button className="signupbutton" onClick={(e)=>userLogin(e)}>UserLogIn</button>
    <button className="signupbutton" onClick={(e)=>adminLogin(e)}>AdminLogIn</button>
    </div>
   </Popup>
        </div>
   </div>
        </div>
     </div>
     <div className="mcqcontainer1">
        <div>
            <button className="mcqbutton1">Demo Test</button>
        </div>
        <div>
        <img className="mcqimage" src="https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-online-testing-background-vector-illustration-with-checklist-png-image_5084763.png"/>
        </div>
     </div>
     <div className="mcqcontainer2">
</div>
     </>
    )
}
export default HomePage