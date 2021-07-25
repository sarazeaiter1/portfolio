import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 md:px-48">
      {/* TODO: add change theme button */}
      <div className="col-span-12 p-4 text-center bg-white md:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="col-span-12 p-4 text-center bg-white md:col-span-9 rounded-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
