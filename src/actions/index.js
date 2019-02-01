import axios from 'axios';

import { FETCH_PROFILE, FETCH_PROFILE_FAILURE } from './types';

export async function fetchProfile (profile) { 
    try {        
        const url = `https://api.github.com/users/${profile}`;   
        const request =  await axios.get(url); 
            
        return {
            type: FETCH_PROFILE,
            payload: request
        }
    } catch (err) {
        console.log('error:', err.message);
        return {
            type: FETCH_PROFILE_FAILURE,
            payload: err.message,
            error: true
        }
    }   
}