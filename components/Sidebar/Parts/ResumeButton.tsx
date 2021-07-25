import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export const ResumeButton = () => {
  return (
    <a
      href="/assets/Sara Zeaiter Resume.pdf"
      download="Sara Zeaiter Resume.pdf"
      className="flex items-center justify-center px-2 py-1 my-2 space-x-2 bg-gray-200 rounded-full cursor-pointer"
    >
      <FontAwesomeIcon icon={faDownload} size="xs" />
      <span>Download Resume</span>
    </a>
  )
}
