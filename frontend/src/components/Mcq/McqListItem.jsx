import './McqListItem.css'
import deleteMcq from '../../api/DeleteMcq'

function McqListItem({ _id, question, options, difficulty, onDelete }) {

    const handleDelete = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        if (!isConfirmed) return;

        deleteMcq(_id)
        .then((res) => {
            if(res.status === 204) {
                onDelete(_id);
                console.log(`Question ${_id} deleted`);
            }
        })
        .catch((error) => console.log(error))
    }
    return(
        <div className="mcq-wrapper">
            <p className='questionId'>Question Id = {_id}</p>
            <p className="question">{question}</p>
            <p className="difficulty"><strong>level: {difficulty}</strong></p>
            <div className="options">
                <ul>
                    {options.map((option) => <li key={option._id}>{option.optionText}</li>)}
                </ul>
                <p>Correct Answer: {options.map((option) => <span key={option._id}>{option.isCorrect?option.optionText:<></>}</span>)}</p>
            </div>
            <button className='deleteButton' onClick= {handleDelete}>Delete</button> 
        </div>
    )
}

export default McqListItem