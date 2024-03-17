import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
    player: null,
    roomName: null,
    roomEditor: null,
    roomCode: null,
    setPlayer: (player) => set({ player }),
    setRoomName: (roomName) => set({ roomName }),
    setRoomEditor: (roomEditor) => set({ roomEditor }),
    setRoomCode: (roomCode) => set({ roomCode }),
}));

export const useAnswerStore = create((set) => ({
    marks: 0,
    correctAnswer: 0,
    incorrectAnswer: 0,
    totalQuestion: 0,
    setMarks: () => set((state) => ({ marks: state.marks + 5 })),
    setCorrectAnswer: () => set((state) => ({ correctAnswer: state.correctAnswer + 1 })),
    setIncorrectAnswer: () => set((state) => ({ incorrectAnswer: state.incorrectAnswer + 1 })),
    setTotalQuestion: (totalQuestion) => set({ totalQuestion }),
}));