

const api_url = import.meta.env.VITE_API_URL  ? import.meta.env.VITE_API_URL : "http://localhost:5200";

export const getUsers = async ()=>{
    try {
        const response = await fetch(api_url + '/users');
        if (response.ok){
            const data = await response.json();
            return data
        }
        else{
            console.log("bad response")
        }
    } catch (error) {
        console.log(error)
    }
}