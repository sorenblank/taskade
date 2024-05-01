import { create } from 'zustand';

export const useStore = create((set) => ({
  loggedIn: false,
  login: () => {
    set({ loggedIn: true });
    localStorage.setItem('loggedIn', 'true');
  },
}));