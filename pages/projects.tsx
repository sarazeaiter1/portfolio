import Card from '../components/Projects/Card'
import { projectsData } from '../data'

const projects = () => {
  return (
    <div className="px-5 py-2 overflow-y-scroll">
      <h6 className="my-3 mb-5 text-base font-medium text-justify ">
        I have been part of amazing different teams while working together on
        these projects ⬇️
      </h6>

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projectsData.map((project) => {
          return <Card key={project.deployed_url} {...project} />
        })}
      </div>
    </div>
  )
}

export default projects
