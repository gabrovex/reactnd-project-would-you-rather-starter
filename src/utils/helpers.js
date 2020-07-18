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

export function getUserScore(user){
    return {
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.keys(user.answers).length,
        questionCount: user.questions.length,
        totalScore: Object.keys(user.answers).length + user.questions.length
    }
}