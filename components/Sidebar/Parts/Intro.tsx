import Image from 'next/image'

export const Intro = () => {
  return (
    <>
      <Image
        src="/assets/saraZeaiter.jpeg"
        alt="personal photo"
        width={128}
        height={128}
        className="mx-auto border rounded-full"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span className="text-purple-800 font-zenTokyoZoo">Sara </span>
        Zeaiter
      </h3>
      <p className="px-2 py-1 text-3xl font-zenLoop ">Full Stack Developer</p>
    </>
  )
}
export default Intro
