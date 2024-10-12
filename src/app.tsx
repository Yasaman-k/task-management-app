import { Route, Routes } from "react-router-dom"
import Layout from "./layouts"
import Page404 from './pages/404'
import Home from "./pages/home"
import AddTask from './pages/task/add'
import EditTask from './pages/task/edit'

const AppRoot = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/tasks/add" element={<AddTask />} />
                <Route path="/tasks/edit/:id" element={<EditTask />} />
                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    )
}
export default AppRoot