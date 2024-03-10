import { create } from 'zustand'

export const useQuestionStore = create((set) => ({
    question: [],
    getStoreQuestion: async (addre) => {
        const response = await fetch(addre, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        set({ question: await response.json() })
    },
    removeAllQuestion: () => set({ question: [] }),
}));