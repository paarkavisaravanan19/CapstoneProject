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
    console.log(credentials);
    try{
        const {data} = await axios.post('/signin', credentials);
        console.log(data);
        
        dispatch(userAuthenticated(data));
    }
    catch{
        console.log('error');
    }
}