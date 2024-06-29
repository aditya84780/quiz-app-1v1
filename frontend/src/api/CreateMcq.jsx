import axios from 'axios'

async function CreateMcq(props) {
    try {
        console.log(`Hello this is id: ${props.id}`)
        if(props.id === '') {
            const response = await axios.post('http://localhost:8080/mcq', props);
            if(response.status === 201) {
                console.log('Question created successfully:', response.data);
            }
            return response;  
        } 
        const response = await axios.put('http://localhost:8080/mcq', props);
            if(response.status === 201) {
                console.log('Question updated successfully:', response.data);
            }
            return response;
    } catch (error) {
        console.error('Error creating question:', error);
    }
}

export default CreateMcq