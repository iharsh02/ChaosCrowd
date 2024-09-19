import { create } from "zustand";

interface Blink {
  id: string;
  label: string;
  username: string | null;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  userId: string;
}

type BearState = {
  blink: Blink[];
  defaultBlink: Blink[];
  setBlink: (data: Blink[]) => void;
  setDefaultBlink: (data: Blink[]) => void;
};

const useStore = create<BearState>((set) => ({
  blink: [] as Blink[],
  defaultBlink: [] as Blink[],
  setBlink: (data) => set(() => ({ blink: data })),
  setDefaultBlink: (data) => set(() => ({ defaultBlink: data })),
}));

export default useStore;
