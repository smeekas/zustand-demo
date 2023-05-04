import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface useTransType {
  coords: Array<number>;
  setCoords: (newCoords: [number, number]) => void;
}

const useTrans = create<useTransType,[["zustand/subscribeWithSelector",never]]>(
    subscribeWithSelector((set) => {
  return {
    coords: [0, 0],
    setCoords: (newCoords) => set({ coords: newCoords }),
  };
}));
export default useTrans;