import { useOutletContext } from "react-router-dom"
import { TOutletContext } from "../component/layout/Layout"

export const useAppOutletContext = () => {
    return useOutletContext<TOutletContext>()
}
