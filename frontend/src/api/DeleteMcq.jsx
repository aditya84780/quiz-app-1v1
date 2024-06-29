import axios from 'axios'

async function deleteMcq(id) {
    try {
        const response = await axios.delete('http://localhost:8080/mcq', {data:{id}});
        // console.log(response)
        return response;
    } catch (error) {
        if(response.status === 404) {
            console.log('question not found in database')
        }
        else console.log(error);
        throw error;
    }    
}

export default deleteMcq