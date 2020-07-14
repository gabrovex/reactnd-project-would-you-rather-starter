export function getFormattedAnswered(question, userId){
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes; 
    const isOptionOneChosen = question.optionOne.votes.includes(userId) 
    return {
        options: [
            {
                votes: optionOneVotes,
                text: question.optionOne.text,
                isChosen: isOptionOneChosen
            },
            {
                votes: optionTwoVotes,
                text: question.optionTwo.text,
                isChosen: !isOptionOneChosen
            },
        ],
        totalVotes
    }
}