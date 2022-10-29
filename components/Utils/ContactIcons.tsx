import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContactIcons = () => {
  return (
    <>
      {/* ;eft */}
      <div className="flex flex-col items-center justify-center w-10 border-cyan fixed z-30 bottom-0 left-10 right-auto">
        <ul className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white  "></ul>
      </div>
      {/* right */}
      <div className="flex flex-col items-center justify-center w-10 border-cyan fixed z-30 bottom-0 right-10 left-auto">
        <ul className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white  "></ul>
      </div>
    </>
  )
}

export default ContactIcons
