import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const SocialMediaButtons = () => {
  return (
    <>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-purple-800 md:w-full">
        <a href="https://github.com/sarazeaiter1">
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            className="cursor-pointer"
          />
        </a>
        <a href="https://twitter.com/sarazeaiter1">
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            className="cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/in/sarazeaiter1/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            className="cursor-pointer"
          />
        </a>
      </div>
    </>
  )
}
