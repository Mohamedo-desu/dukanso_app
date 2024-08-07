import { create } from 'zustand';
import { USERPROPS } from '../types/user';
import { createSelectors } from './createSelectors';

export interface AuthState {
  currentUser: USERPROPS;
}

interface AuthActions {
  updateUser: (user: Partial<AuthState['currentUser']>) => void;
  setCurrentUser: (user: AuthState['currentUser']) => void;
  logOut: () => void;
}

const initialState: AuthState = {
  currentUser: {} as AuthState['currentUser'],
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  ...initialState,
  setCurrentUser: (currentUser) => set({ currentUser }),
  updateUser: (user: Partial<USERPROPS>) =>
    set((state) => ({ currentUser: { ...state.currentUser, ...user } })),
  logOut: () => set(() => initialState),
}));

export const useAuthStoreSelectors = createSelectors(useAuthStore);
