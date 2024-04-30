export const Loading = (
    {
        type
    }:{
        type: string
    }) => {
    return(
        type === "nextQuestion"
        ? <h1>Determining Next Question</h1>
        : type === "generatingQuestions"
        ? <h1>Generating Next Question Set</h1>
        : type === "finalReport"
        ? <h1>Generating Final Career Report</h1>
        : <h1>{`Loading ${type}`}</h1>
    )
}