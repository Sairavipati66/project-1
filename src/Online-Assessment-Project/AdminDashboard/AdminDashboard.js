import { useContext,useEffect} from "react"
import axios from "axios"
import Context from "../Context/Context"
import { useNavigate,Link} from "react-router-dom"

function AdminDashboardFunction(){
    const {globalUser} = useContext(Context)
    const navigate = useNavigate()
    return(
        <>
        <div>
            <div>
            <p >Username : {globalUser.Username}</p>
            <p>Email : {globalUser.Email}</p>
            </div>
            <div className="admin-links">
                    <h2><Link to='/createQuiz'>Create a quiz</Link></h2>
                    <h2><Link to='/viewResults'>View Results</Link></h2>
                </div>
        </div>
        </>
    )
}

export default AdminDashboardFunction