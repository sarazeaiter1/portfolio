import {
  Intro,
  EmailButton,
  SocialMediaButtons,
  Location,
  ResumeButton,
} from './Parts'

const Sidebar = () => {
  return (
    <>
      <Intro />
      <ResumeButton />
      <SocialMediaButtons />
      <Location />
      <EmailButton />
    </>
  )
}

export default Sidebar
