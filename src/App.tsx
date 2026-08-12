import Navbar from './components/Navbar'
import EditionChrome from './components/EditionChrome'
import PageSheet from './components/PageSheet'
import Hero from './components/Hero'
import ReplaceErp from './components/ReplaceErp'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import { EditionProvider, PAGE_IDS } from './lib/edition'

const pages = [
  { id: PAGE_IDS[0], node: <Hero /> },
  { id: PAGE_IDS[1], node: <ReplaceErp /> },
  { id: PAGE_IDS[2], node: <Services /> },
  { id: PAGE_IDS[3], node: <Pricing /> },
  { id: PAGE_IDS[4], node: <Contact /> },
]

export default function App() {
  return (
    <EditionProvider>
      <div className="newspaper min-h-svh w-full font-sans text-ink">
        <Navbar />
        <EditionChrome />
        <main className="edition-scroll w-full">
          {pages.map((page, index) => (
            <PageSheet key={page.id} id={page.id} index={index}>
              {page.node}
            </PageSheet>
          ))}
        </main>
      </div>
    </EditionProvider>
  )
}
