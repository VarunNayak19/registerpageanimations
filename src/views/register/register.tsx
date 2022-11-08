import { TextField } from '@mui/material'
// import { Box, Container } from '@mui/system'
import Switch from '@mui/material/Switch'
import { useState } from 'react'
import './register.css'
const Register = () => {
    const [formDiv, setformDiv] = useState(false)
    const [style, setstyle] = useState("registerText")
    const [truee, settruee] = useState(false)
    const [darkmode, setdarkmode] = useState("")


    //register state set data
    const [userdets, setuserdets] = useState({})
    const showForm = () => {
        setstyle("registerTextonClick")
        setformDiv(true);
    }
    const handleChange = (e: any) => {

    }

    return (
        <div className='registerContainer'>

            <div className="registerContent">
                <div className={style} onClick={showForm} id="registerTextId"><span className='spanMain'>Register</span><span className='spanShadow'>Register</span></div>
                {
                    formDiv &&
                    <form className='registerForm'>
                        <div className="inputBox">
                            <input type="text" className='inputbox' name="name" onChange={handleChange} required />
                            <span>Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" className='inputbox' name="mob" onChange={handleChange} required />
                            <span>Mobile Number</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" className='inputbox' required />
                            <span>Email ID</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" className='inputbox' required />
                            <span>Enter Password</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" className='inputbox' required />
                            <span>Re-Enter Password</span>
                        </div>
                        <div className='submitButton'>Submit</div>
                    </form>
                }

            </div>
        </div>
    )
}

export default Register