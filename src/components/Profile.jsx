import profile from "../assets/IMG_8021.jpg"
import { AnimatedText } from "../pages/UserUI/AboutMe";
import { useUser } from "../contexts/UserContext";

const Profile = () => {
  const user = useUser();
  return(
    <div className=" bg-white text-black">
      <section className="flex gap-16 items-stretch md:flex-row flex-col justify-center mx-auto  py-[75px] md:px-20 px-10 max-w-screen-2xl lg:max-w-[1200px]">
        {/* Lazyload image component */}
        <div className="flex-grow md:basis-1/2 md:max-w-none md:flex-shrink max-w-80 ">
          <img src={profile} alt="profile picture" className="rounded-lg w-full h-full  object-cover" />
        </div>
        <div className="flex-grow md:basis-1/2 justify-center flex flex-col gap-4">
          <AnimatedText text={`Meet ${user.profile.username}`} customClassName={"inline font-bold text-3xl"}/>
          <p>
            {user.profile.bio}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Profile;