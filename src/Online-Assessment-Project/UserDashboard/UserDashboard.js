
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import Context from "../Context/Context"

function UserDashboard(){

    const {globalUser,_} = useContext(Context)
    const navigate = useNavigate()


    return(
        <>
            <hr></hr>
            <div className="div">
                <div className = "item">
                    <p>Home</p>
                </div>
            </div>
            <div className="main-div">
                <div className="user-details">
                    <p >Username : {globalUser.Username}</p>
                    <p>Email : {globalUser.Email}</p>
                </div>
                <div className="user-links">
                    <Link to='/reactQuiz'>React quiz</Link>
                    <Link to='/htmlQuiz'>Html quiz</Link>
                    <Link to='/CssQuiz'>Css quiz</Link>
                    <Link to='/jsQuiz'>Java Script quiz</Link>
                </div>
            </div>
        </>
    )
}

export default UserDashboard