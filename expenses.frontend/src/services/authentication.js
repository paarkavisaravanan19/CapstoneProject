import axios from 'axios';
import {userAuthenticated} from '../app/authenticationSlice';

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,

});

export const SignUp = async (dispatch, crendentials)=>
{
    try{
        const { data } = await axiosInstance.post('/signup', crendentials);
        dispatch(userAuthenticated(data));
    }
    catch{
        console.log('Error');
    }
}

export const SignIn = async (dispatch, credentials) => {
    try{
        const {data} = await axiosInstance.post('/signin', credentials);
        
        dispatch(userAuthenticated(data));
    }
    catch{
        console.log('error');
    }
}

// export const ThirdPartySignIn= async (dispatch, token)=>
// {
//     try{
//         //api call for success in thirdpartsignins
//         const {data}= await axiosInstance.post(`/google?token=${token}`);
//         dispatch(userAuthenticated(data));
//     }
//     catch{
//         console.log('Error!');
//     }
// }