import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserSignUp() {
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [errorName, setErrorName] = useState("")
  const [errorEmail, seterrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [number, setnumber] = useState()
  const [errorNumber, seterrorNumber] = useState()
  const [successfulmsg, setSuccessfulmsg] = useState("")
  const [create, setCreate] = useState("please create an account!")
  const [adminData, setadminData] = useState([])


  useEffect(() => {
    axios
      .get("http://localhost:3001/UserLoginDetails")
      .then((res) => {
        setadminData(res.data);
        console.log("res", res.data)
      })
      .catch((error) => console.log(error));
  }, []);



  const navigate = useNavigate()
  const handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "name") {
      setName(e.target.value);
    } if (keyword === "password") {
      setPassword(e.target.value)
    } if (keyword === "email") {
      setemail(e.target.value);
    }
    if (keyword === "number") {
      setnumber(e.target.value);
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
          if (name && password && email && number && errorName === "" && errorPassword === "" && errorEmail === "" && errorNumber === "") {
            if ((number.length === 10) && (password.length === 6)) {
              axios
                .post("http://localhost:3001/UserLoginDetails", {
                  username: name,
                  userpassword: password,
                  useremail: email,
                  phonenumber:number

                })
                .then((res) => {
                  console.log(res.data);
                  //   const temp = [...this.state.adminData, res.data];

                  //   this.setState({ adminData: temp });
                })
                .catch((error) => console.log(error));
              setSuccessfulmsg("You've created your account successfully!");
              navigate("/adminLogin")
            } else {
              if (!(number.length === 10)) {
                seterrorNumber(`the phone number must be 10 digits you enter ${number.length}`)
              } else {
                seterrorNumber("")
              }
              if (!(password.length === 6)) {
                setErrorPassword(`the password must be 6 digits you enter ${password.length}`)
              } else {
                setErrorPassword("")
              }
            }
          } else {
            if (!name) {
              setErrorName("please enter the name");
            } else {
              setErrorName("");
            }
            if (!password) {
              setErrorPassword("please enter the password");
            } else {
              setErrorPassword("");
            }
            if (!email) {
              seterrorEmail("please enter the email");
            } else {
              seterrorEmail("");
            }
            if (!number) {
              seterrorNumber("please enter the Phone Number");
            } else {
              seterrorNumber("");
            }
          }
  }

  return (
    <>
      <div className="signuppage">
        <h1 className="errormsg">
          {create}
        </h1>
        <div>
          <div>
            <form>
              <div className="container">
                <div className="form">
                  <h1 className="signupheading">SignUp</h1>
                  <div>
                    <label className="heading" htmlFor="name">
                      Name :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupname"
                      placeholder="Enter your name"
                      onChange={(e) => handleChange(e, "name")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {errorName}
                    </p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="email">
                      Email :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupemail"
                      placeholder="Enter your email"
                      onChange={(e) => handleChange(e, "email")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {errorEmail}
                    </p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="password">
                      Password :
                    </label>
                    <br></br>
                    <input
                      type="password"
                      id="signuppassword"
                      placeholder="Enter your Password"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {errorPassword}
                    </p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="number">
                      Phone Number :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupnumber"
                      placeholder="Enter Your  Phone Number"
                      onChange={(e) => handleChange(e, "number")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {errorNumber}
                    </p>
                  </div>


                  <div className="button-box">
                    <button
                      className="createbutton"
                      onClick={(e) => handleClick(e)}
                    >
                      Create Account
                    </button>
                  </div>
                  <p
                    style={{
                      color: "green",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {successfulmsg}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserSignUp