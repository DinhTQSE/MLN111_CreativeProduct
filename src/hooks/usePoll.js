import { useState } from 'react'
import { usePollStore } from '../stores/pollStore'

export function usePoll() {
  const { hasVoted, userAnswers, results, totalVoters, submitVote, getPercentages } =
    usePollStore()

  const [currentAnswers, setCurrentAnswers] = useState({})

  const answerQuestion = (qId, value) => {
    setCurrentAnswers(prev => ({ ...prev, [qId]: value }))
  }

  const canSubmit = (totalQuestions) =>
    Object.keys(currentAnswers).length === totalQuestions

  const submit = (totalQuestions) => {
    if (!canSubmit(totalQuestions)) return false
    submitVote(currentAnswers)
    return true
  }

  return {
    hasVoted,
    userAnswers,
    results,
    totalVoters,
    currentAnswers,
    answerQuestion,
    canSubmit,
    submit,
    getPercentages,
  }
}
