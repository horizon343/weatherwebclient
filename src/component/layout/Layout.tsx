import { Outlet } from "react-router-dom"
import style from "./Layout.module.scss"

export default function Layout() {
    return (
        <div className={style.wrapper}>
            <div className={style.bgBox}>
                <img
                    className={style.bg}
                    src="https://img.goodfon.ru/wallpaper/nbig/7/c0/oleg-magni-by-oleg-magni-tsvet-tsvetok-rastenie-rasteniia-fl.jpg"
                    alt="bg"
                />
            </div>
            <div className={style.wrap}>
                <div className={style.outletBox}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
