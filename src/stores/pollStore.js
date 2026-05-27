import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SEED_RESULTS, SEED_TOTAL } from '../data/pollData'

const deepClone = (obj) => JSON.parse(JSON.stringify(obj))

export const usePollStore = create(
  persist(
    (set, get) => ({
      hasVoted: false,
      userAnswers: {},
      results: deepClone(SEED_RESULTS),
      totalVoters: SEED_TOTAL,

      submitVote: (answers) => {
        const current = get().results
        const updated = deepClone(current)

        Object.entries(answers).forEach(([qId, value]) => {
          if (updated[qId] && updated[qId][value] !== undefined) {
            updated[qId][value] += 1
          }
        })

        set({
          hasVoted: true,
          userAnswers: answers,
          results: updated,
          totalVoters: get().totalVoters + 1,
        })
      },

      getPercentages: (qId) => {
        const results = get().results
        const total = get().totalVoters
        if (!results[qId]) return {}

        const out = {}
        Object.entries(results[qId]).forEach(([key, count]) => {
          out[key] = Math.round((count / total) * 100)
        })
        return out
      },
    }),
    {
      name: 'mns-poll-storage',
      partialize: (state) => ({
        hasVoted: state.hasVoted,
        userAnswers: state.userAnswers,
        results: state.results,
        totalVoters: state.totalVoters,
      }),
    }
  )
)
