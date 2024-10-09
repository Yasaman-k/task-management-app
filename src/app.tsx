import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"

const AppRoot = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
export default AppRoot