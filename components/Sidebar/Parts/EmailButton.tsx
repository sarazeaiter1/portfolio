import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const EmailButton = () => {
  return (
    <a
      href="mailto:sara.ztr@gmail.com"
      className="flex items-center justify-center px-5 py-2 my-5 mt-10 text-white rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
    >
      <FontAwesomeIcon
        icon={faEnvelope}
        size="xs"
        className="mr-2 cursor-pointer"
      />
      <span>Say hi</span>
    </a>
  )
}
