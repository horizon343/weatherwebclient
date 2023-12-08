import { useState } from "react"
import { Outlet } from "react-router-dom"
import style from "./Layout.module.scss"
import SearchCity from "../page/searchCity/SearchCity"

export type TOutletContext = {
    setOpen: (value: boolean) => void
}

export default function Layout() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={style.wrapper}>
            <div className={`${style.SearchCityBox} ${isOpen && style.SearchCityOpen}`}>
                <SearchCity onClose={() => setOpen(false)} />
            </div>
            <div className={style.bgBox}>
                <img
                    className={style.bg}
                    src="https://img.goodfon.ru/wallpaper/nbig/7/c0/oleg-magni-by-oleg-magni-tsvet-tsvetok-rastenie-rasteniia-fl.jpg"
                    alt="bg"
                />
            </div>
            <div className={style.wrap}>
                <div className={style.outletBox}>
                    <Outlet context={{ setOpen }} />
                </div>
            </div>
        </div>
    )
}
