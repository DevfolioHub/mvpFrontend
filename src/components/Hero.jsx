import profileImage from "../assets/profile2.jpg";
import { Icons } from ".";
import worker from "../assets/worker.png";
import ParticlesBackground from "./ParticlesBackground";
import resume from "../assets/MyResume.pdf";
import { useUser } from "../contexts/UserContext";

const Hero = () => {
  const user = useUser();

  return (
    <div className="relative">
      <ParticlesBackground />
      <main
        className="px-10 sm:py-5 md:px-20 py-10 flex md:gap-12 sm:gap-0 items-center md:flex-row flex-col text-black bg-[#E4F3FF] h-screen"
        style={{ height: "calc(100vh - 106px)" }}
      >
        <div className="shrink-[3] flex flex-col gap-4">
          <div>
            <p className="inline">Hello </p>
            <img src={worker} alt="worker icon" width={20} className="inline" />
          </div>
          <h1 className="font-bold md:text-5xl text-3xl sm:text-2xl">
            I&apos;m {user.profile.name}
          </h1>
          <p>{user.profile.pitch}</p>
          {/* Todo: create a component that fetched user's resume */}
          <div>
            <a href={resume} download={"Emmanuel-Ajibokun-Resume.pdf"}>
              <button>
                Get my resume <span>-</span>
              </button>
            </a>
          </div>
          <Icons />
        </div>
        <div className="sm:mt-4">
          <div className="flex inset-0 md:w-[250px] md:h-[250px] w-[200px] h-[200px] rounded-full border-8 border-[#ffffffcf] border-opacity-65 pointer-events-none">
            {/* Todo: stream user's profileImage */}
            <img
              src={profileImage}
              alt="manny's profile image"
              className="w-[250px] rounded-full border-4 border-[#fffdfa]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
