import React from "react"
import { Router } from "@reach/router"
import LandingPage from "../components/dynamic-pages/LandingPage"

const App = () => (
    <Router basepath="/">
        <LandingPage path="/"/>
    </Router>
)

export default App