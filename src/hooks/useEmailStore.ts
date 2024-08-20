import { create } from "zustand";

export interface ModalStoreInterface {
  email: string;
  setEmail: (email: string) => void;
}

const useEmailStore = create<ModalStoreInterface>((set) => ({
  email: "",
  setEmail: (email: string) => set({ email }),
}));

export default useEmailStore;
