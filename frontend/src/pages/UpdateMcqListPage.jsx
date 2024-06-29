import McqUpdateForm from "../components/Mcq/McqUpdateForm"

function UpdateMcqList() {
    return(
        <div>
            {/* <div className="creation-type">
            <input type="radio" name="createOrUpdate" id="create" value="Create new question" />
            <input type="radio" name="createOrUpdate" id="update" value="UpdateExistingQuestion" />
            </div> */}
            <McqUpdateForm />
        </div>
    )
}

export default UpdateMcqList