import { create } from 'zustand'
import { useAnswerStore, usePlayerStore } from './playerStore';

export const useQuestionStore = create((set) => ({
    questions: null,
    getStoreQuestion: async (addre) => {
        const response = await fetch(addre, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let questions = await response.json()
        set({ question: questions })
        useAnswerStore.setState({ totalQuestion: questions.length })
    },
    removeAllQuestion: () => set({ question: [] }),
}));