import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./component/layout/Layout"
import Home from "./component/page/home/Home"
import { useAppDispatch } from "./hook/redux.hook"
import { getWeatherByDaysTC } from "./redux/reducers/weatherByDays.reducer"
import { getWeatherByHoursTC } from "./redux/reducers/weatherByHours.reducer"

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getWeatherByDaysTC("екатеринбург"))
        dispatch(getWeatherByHoursTC("екатеринбург"))
    })

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<Home />}
                />
            </Route>
        </Routes>
    )
}

export default App
