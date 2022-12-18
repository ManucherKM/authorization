import { Route, Routes } from "react-router"
import Error from "./page/Error/Error"
import Login from "./page/Login/Login"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App