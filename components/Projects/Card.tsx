import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faLink, faTimes } from '@fortawesome/free-solid-svg-icons'
import { IProject } from '../../data'

const Card: React.FC<IProject> = ({
  name,
  image_path,
  category,
  deployed_url,
  description,
  key_techs,
}) => {
  const [showDetail, setShowDetail] = React.useState(false)

  return (
    <div className="flex flex-col items-center justify-center col-span-6 p-2 rounded-lg lg:col-span-3">
      <div className="flex items-center justify-center border-2 border-gray-400 rounded-br-large rounded-tl-large">
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer rounded-br-large rounded-tl-large"
          onClick={() => setShowDetail(true)}
          height={90}
          width={90}
        />
      </div>

      <p className="h-8 my-2 text-center">
        {name} - {category}
      </p>
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-4 rounded-br-large rounded-tl-large">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex items-center justify-center border-2 border-gray-400 rounded-br-large rounded-tl-large">
              <Image
                src={image_path}
                alt={name}
                height={100}
                width={100}
                className="cursor-pointer rounded-br-large rounded-tl-large"
              />
            </div>
            <div className="flex justify-center my-4">
              <a
                href={deployed_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-full"
              >
                <>
                  <FontAwesomeIcon icon={faLink} />
                  <span>Project</span>
                </>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 my-1 bg-gray-200 rounded-br-large rounded-tl-large"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 top-3 right-3 focus:outline-none "
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Card
