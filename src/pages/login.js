import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/login.css"
import "../css/register.css"
import { setCurrentUser } from "../redux/actions/userActions";
export default function Login() {
    const dispatch = useDispatch(); 
    const currentUser=useSelector((state)=>state.reducers.currentUser);
    const navigate = useNavigate();
    const [formdata, setformdata] = React.useState({
        user: "", password: ""
    })

    const [identify, setidentify] = React.useState({
        state: false,
        style: { color: "red" }
    })

    function handleSubmit() {
        var userCheck = /^[A-Za-z. ]{3,30}$/;
        if (!userCheck.test(formdata.user)) {
            setidentify((prev) => {
                return {
                    ...prev,
                    state: true
                }
            })
        }
        else {
            fetch("http://localhost:1000/login", {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata)
            }).then((res) => {
                if (res.status === 403) {
                    console.log("Wrong EMail or Password     ")
                    setidentify((prev) => {
                        return {
                            ...prev,
                            state: true
                        }
                    })
                }
                return res.json()
            }).then((res) => {
                dispatch(setCurrentUser(res.foundUser))
                res.foundUser.userRole==='Normal'?navigate('/'):navigate('/admin')
            })
        }
    }

    function handleChange(event) {
        setformdata(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value
                }
            }
        )
    }

    return (
        <div className="page">
            <div className="login-form">
                <h2 className="login-title">Login</h2>
                <label className="labels" htmlFor="username">Username: </label> <br />
                <input type="text" className="fields"
                    id='username'
                    name='user'
                    value={FormData.user}
                    onChange={handleChange}></input><br />
                <label className="labels" htmlFor="password">Password: </label> <br />
                <input type="password" className="fields"
                    id='password'
                    name='password'
                    value={FormData.username}
                    onChange={handleChange}></input> <br />
                {identify.state ? <p className="error"> <small style={identify.style}>Email or Password is not correct</small> </p> : ""}
                <a className="signup" href="/register">Signup</a>
                <button className="login-button" onClick={handleSubmit} >Login</button>
            </div>
        </div>

    )
}