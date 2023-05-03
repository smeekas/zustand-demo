import { create } from "zustand";
import { persist } from "zustand/middleware";
interface InfoType {
    count: number,
    setCount: (by: number) => void
}
export const useInfo = create<InfoType, [["zustand/persist", never]]>(
    persist((set, get) => ({
        count: 0,
        setCount: (by) => set({ count: get().count + by })
    }), {
        name: "count"
    })
)

export const { getState: getInfo, setState: setInfo } = useInfo;
// setState((state)=>)
