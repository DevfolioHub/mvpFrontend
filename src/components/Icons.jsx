import github from "../assets/github.png"
import email from "../assets/communication.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

const Icons = () => {

  return (
    <div className="flex gap-4 max-w-48 sm:w-36 sm:gap-2">
      <div>
        <a href="https://github.com/EmmanuelAjibokun">
          <img src={github} alt="github icon" />
        </a>
      </div>
      <div>
        <a href="https://x.com/meet_manny">
          <img src={twitter} alt="twitter icon" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/emmanuel-ajibokun/">
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>
      <div>
        <a href="mailto:emmanuelajibokunedu@gmail.com">
          <img src={email} alt="mail icon" />
        </a>
      </div>
    </div>
  )
}

export default Icons;