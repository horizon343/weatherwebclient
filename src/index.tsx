import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./style/normalize.css"
import "./index.css"
import "./style/style.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
