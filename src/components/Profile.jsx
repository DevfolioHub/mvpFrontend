import profile from "../assets/IMG_8021.jpg"
import { AnimatedText } from "../pages/AboutMe";

const Profile = () => {
  return(
    <div className=" bg-white text-black">
      <section className="flex gap-16 items-stretch md:flex-row flex-col justify-center mx-auto  py-[75px] md:px-20 px-10 max-w-screen-2xl lg:max-w-[1200px]">
        <div className="flex-grow md:basis-1/2 md:max-w-none md:flex-shrink max-w-80 ">
          <img src={profile} alt="profile picture" className="rounded-lg w-full h-full  object-cover" />
        </div>
        <div className="flex-grow md:basis-1/2 justify-center flex flex-col gap-4">
          <AnimatedText text={"Meet Manny."} customClassName={"inline font-bold text-3xl"}/>
          <p>
          I am a Frontend Engineer with two years of experience, based in Lagos, Nigeria. Most of my last five years were spent in Akure for my tertiary education. My ability to grasp concepts quickly has led me to dabble in other areas of tech, such as machine learning and AI.
          </p>
          <p>
            Over the past years, I have taken online courses and dedicated my time to building projects that nourish my understanding of various concepts and reinforce my knowledge.
          </p>
          <p>
            When I&apos;m not coding, you can often find me watching anime or reading the Bible, as my communion with God has become a crucial part of my life. I also have an everlasting love for YouTube content. After all, it is the platform that has helped me connect most with activities I love, from watching anime spoilers (lol) to listening to sermons from my favorite ministers, to watching self-help motivation videos, and those that help me become a better engineer.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Profile;