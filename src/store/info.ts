import { create } from "zustand";
interface InfoType {
  count: number;
  setCount: (by: number) => void;
}
export const useInfo = create<InfoType>((set, get) => ({
  count: 0,
  setCount: (by) => set({ count: get().count + by }),
}));

export const { getState: getInfo, setState: setInfo } = useInfo;
// setState((state)=>)
