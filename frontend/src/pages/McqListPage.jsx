import McqListItem from "../components/Mcq/McqListItem";
import getMcqs from "../api/GetMcqs";
import { useEffect, useState } from "react";

function McqListPage() {
    const [mcqs, setMcqs] = useState([]);
    useEffect(() => {
        // const data = await getMcqs();
        // setMcqs(data);
        getMcqs().then((mcqs) => setMcqs(mcqs.data))
        .catch((error) => {
            console.error("Error after fetching mcqs:", error)})
    },[])

    const handleDelete = (id) => {
        setMcqs(mcqs.filter(mcq => mcq._id !== id));
    };

    return(
        <div className="mcq-list">
            {mcqs.length > 0 ? mcqs.map((mcq) => (
                <McqListItem 
                    key={mcq._id} 
                    _id={mcq._id} 
                    question={mcq.question} 
                    options={mcq.options} 
                    difficulty={mcq.difficulty} 
                    onDelete={handleDelete} 
                    />)) : <p>No Data Found!</p>}
        </div>
    )
}

export default McqListPage