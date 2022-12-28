import  Register  from "../../../components/register/Register"
import { Helmet } from 'react-helmet';
import Heroimage from '../../../components/assets/background.png'
import './register.css'
const RegisterPage =()=>{
    return(
        <div className="bg-register justify-content-center d-flex" style={{backgroundImage: `url(${Heroimage}`, height:'100vh'}}>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div>
                <Register/>
            </div>
        </div>
    )
}
export default RegisterPage