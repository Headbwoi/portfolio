import type { NextPage } from "next"
import { ContactItems, HeadSection, PageTitle } from "../components"

const ContactMe: NextPage = () => {
  return (
    <>
      <HeadSection page="Contact" title="Portfolio - Contact Page" />
      <main className="relative font-pop  min-h-screen flex items-center justify-center  w-full bg-body overflow-x-hidden py-16 ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0">
          <PageTitle page="Contact" addon="Me" />
          <section className="pt-10 lg:pt-20 pb-14">
            <ContactItems />
          </section>
        </div>
      </main>
    </>
  )
}

export default ContactMe
