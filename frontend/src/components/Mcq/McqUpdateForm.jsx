import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateMcq from '../../api/CreateMcq';

function McqUpdateForm() {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correctOption, setCorrectOption] = useState('1');
    const [submitted, setSubmitted] = useState(false);
    const [submitTypeUpdate, setSubmitTypeUpdate] = useState(false);
    const [id, setQuestionId] = useState('');

    useEffect(() => {
        console.log("New Question Added")
    },[submitted])

    // useEffect(() => {
    //     console.log("Submit Type Changed")
    // },[submitTypeUpdate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const correctOptionNumber = parseInt(correctOption, 10);
        const options = [
            {
                optionText: option1,
                isCorrect: ((correctOptionNumber===1)?true:false),
            },
            {
                optionText: option2,
                isCorrect: ((correctOptionNumber===2)?true:false),
            },
            {
                optionText: option3,
                isCorrect: ((correctOptionNumber===3)?true:false),
            },
            {
                optionText: option4,
                isCorrect: ((correctOptionNumber===4)?true:false),
            },
            ];

        const data = {
            id,
            question,
            options,
        };

        try {
            const response = await CreateMcq(data);
            if(response.status === 201) {
                setQuestion('');
                setOption1('');
                setOption2('');
                setOption3('');
                setOption4('');
                setCorrectOption('1');
                setSubmitted(true);
            }
            return response;
        } catch (error) {
            throw error;
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                <input type="checkbox" onChange={(e) => setSubmitTypeUpdate(e.target.checked)} />
                    Update Existing Record
                </label>
                {submitTypeUpdate ? <div>
                    <label>Question Id:</label>
                    <input type="text" value={id} onChange={(e) => setQuestionId(e.target.value)} required />
                </div> : <></>}
                <div>
                    <label>Question:</label>
                    <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                </div>
                <div>
                    <label>Option 1:</label>
                    <input type="text" value={option1} onChange={(e) => setOption1(e.target.value)} required />
                </div>
                <div>
                    <label>Option 2:</label>
                    <input type="text" value={option2} onChange={(e) => setOption2(e.target.value)} required />
                </div>
                <div>
                    <label>Option 3:</label>
                    <input type="text" value={option3} onChange={(e) => setOption3(e.target.value)} required />
                </div>
                <div>
                    <label>Option 4:</label>
                    <input type="text" value={option4} onChange={(e) => setOption4(e.target.value)} required />
                </div>
                <div>
                    <label>Correct Option:</label>
                    <select value={correctOption} onChange={(e) => setCorrectOption(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="submission-message">
                {submitted === true ? "Request Submitted":<></>}
            </div>
        </div>
    );
}

export default McqUpdateForm;
