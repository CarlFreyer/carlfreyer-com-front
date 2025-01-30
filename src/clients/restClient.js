const fetchRequest = async (params) => {
    try{
        const response = await fetch(params);
        if(response.ok){
            const responseJson = await response.json()
            return {status: response.status, statusText: response.statusText, json: responseJson}
        }else return {status: response.status, statusText: response.statusText}
    }catch{
        return {status: 500, statusText: "Internal Server Error"}
    }
}

export default {
    fetchRequest
}