import { Navbar } from "./components/ui/Navbar"
import HeadingSetion from "./components/ui/HeadingSection"
import Content from "./components/ui/content"
import { useState } from "react"
import NewProjectBtn from "./components/NewProjectBtn"
import GetStartedBtn from "./components/GetStartedBtn"
import ViewComponents from "./components/ViewComponents"

function App() {
  const [page, setPage] = useState("home") 
  // "home" | "dashboard" | "getstarted"

  return (
    <div>
      <Navbar
        onNewProject={() => setPage("dashboard")}
        onLogoClick={() => setPage("home")}
      />

      {page === "home" && (
        <>
          <HeadingSetion onGetStarted={() => setPage("getstarted")}  onViewComponents={() => setPage("installation")} />
          <Content />
        </>
      )}

      {page === "dashboard" && <NewProjectBtn />}

      {page === "getstarted" && <GetStartedBtn />}
      {page === "installation" && <ViewComponents />}
    </div>
  )
}

export default App