import {
  faMapMarkedAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Location = () => {
  return (
    <div
      className="py-4 mt-5 bg-gray-200"
      style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
    >
      <div className="flex items-center justify-center space-x-2">
        <FontAwesomeIcon icon={faMapMarkedAlt} size="sm" />
        <span>Beirut, Lebanon</span>
      </div>
      <p className="my-2 ">sara.ztr@gmail.com</p>
    </div>
  )
}
