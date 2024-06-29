import axios from 'axios'

async function getMcqs() {
    try {
        const response = await axios.get('http://localhost:8080/mcq/all')
        // console.log(response)
        return response
    } catch (error) {
        console.log('Error fetching MCQs', error)
    }   
}

export default getMcqs