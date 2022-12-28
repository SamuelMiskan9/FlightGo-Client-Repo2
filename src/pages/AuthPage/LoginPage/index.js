import Login  from "../../../components/login/Login"
import { Helmet } from 'react-helmet';
import Heroimage from '../../../components/assets/background.png'
import './login.css'
const LoginPage =()=>{
    return(
        <div className="bg-login justify-content-center d-flex" style={{backgroundImage: `url(${Heroimage}`, height:'100vh'}}>
            <Helmet>
                <title className="">Login Page</title>
            </Helmet>
            <div>
                <Login/>
            </div>
        </div>
    )
}
export default LoginPage