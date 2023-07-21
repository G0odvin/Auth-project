import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header/header.component"
import { GlobalFeedPage } from "./modules/feed/pages/global-feed.page"
import { ProfilePage } from "./modules/feed/profile/pages/profile.page"

function App() {

  return (
    <div className="pb-16">
      <Header />
      <Routes >
        <Route path="/" element={<GlobalFeedPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
        <Route path="/:profile/favorites" element={<ProfilePage />} />
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes>
    </div>
  )
}

export default App
