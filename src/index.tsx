import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "./style/normalize.css"
import "./index.css"
import "./style/style.css"
import App from "./App"
import { store } from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
