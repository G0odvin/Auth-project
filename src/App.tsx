import { Banner } from "./components/banner/banner.component"
import { Header } from "./components/header/header.component"
import { ArticalList } from "./modules/feed/components/artical-list/artical-list.component"
import { Feed } from "./modules/feed/components/feed/feed.component"

function App() {

  return (
    <>
    <Header />
    <Banner />
    <Feed />
    </>
  )
}

export default App
