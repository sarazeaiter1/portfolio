import Image from 'next/image'

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 py-5">
      <h1>Hey 👋🏼</h1>
      <h6 className="my-3 text-base font-medium text-justify ">
        I am a{' '}
        <span className="font-semibold">full stack software engineer</span> with
        4 years of full-time experience.
      </h6>
      <h6 className="my-3 text-base font-medium text-justify ">
        I work with startups and amazing teams from different countries:
        Lebanon, USA, Ukraine, UAE and Egypt.
      </h6>
      <h6 className="my-3 text-base font-medium text-justify ">
        During my career, I discovered how much I care about details, and I
        almost never failed a graphic designer while implementing their work. I,
        also, find it joyful to focus for long hours to deliver a new feature or
        fix a hard issue.
      </h6>
      <h6 className="my-3 mt-8 text-base font-semibold text-justify ">
        Focused on:
      </h6>
      <div className="flex space-x-20">
        <ul className="list-disc list-inside">
          <li>Typescript</li>

          <li>React(-Native)</li>

          <li>Node.js</li>
        </ul>

        <ul className="list-disc list-inside">
          <li>Internatiolization</li>

          <li>Firebase</li>

          <li>PostgreSQL</li>
        </ul>
      </div>
      <h6 className="my-3 mt-8 text-base font-semibold text-justify ">
        Other than coding, I am interested in:{' '}
        <span className="font-medium">
          Yoga, Writing, Pets, Mental Health, Human Rights, Hiking and
          Travelling
        </span>
      </h6>
    </div>
  )
}

export default index
