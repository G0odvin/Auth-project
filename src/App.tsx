import { Banner } from "./components/banner/banner.component"
import { Header } from "./components/header/header.component"
import { Feed } from "./modules/feed/components/feed/feed.component"

function App() {

  return (
    <div className="pb-16">
      <Header />
      <Banner />
      <Feed />
    </div>
  )
}

export default App
