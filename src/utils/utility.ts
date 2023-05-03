import { getState, setState } from "../store";
import { useInfo } from "../store/info";

export function callutil() {
    console.log(getState().user)
    setState({ user: "from utils" })
    // console.log();
}
