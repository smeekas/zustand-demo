import { getState, setState } from "../store";
import { useInfo } from "../store/info";

export function callutil() {
    console.log(getState().user)
    getState().setUser("from utils")
    // setState({ user: "from utils" })
}
