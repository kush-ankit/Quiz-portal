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

export const useAnswerStore = create((set)=> ({
    Answer: null,
    setAnswer: (Ans) => set((state)=>{ Answer: [...state.Answer, Ans] })
}))