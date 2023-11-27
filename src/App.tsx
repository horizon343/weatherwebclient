import { Routes, Route } from "react-router-dom"
import Layout from "./component/layout/Layout"
import Home from "./component/page/home/Home"

function App() {
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
