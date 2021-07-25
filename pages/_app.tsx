import { Sidebar, Navbar } from '../components/'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex grid justify-center grid-cols-12 gap-6 px-5 my-14 md:px-48">
      {/* TODO: add change theme button */}
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-tl-large rounded-br-large">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light rounded-tl-large rounded-br-large lg:col-span-9">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
