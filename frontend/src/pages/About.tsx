import styles from "../styles/About.module.css";
import Reveal from "../components/Reveal";
import picture from "../assets/ProgrammingPicture.png";


const About = () => {
  return (
    <>
    <title>HarmonyHub About</title>
    <Reveal>
      <div className={styles.container}>
        <div className={styles.top}>This is nothing</div>
        <div className={styles.aboutScreen}>
          <h1 className={styles.aboutHeader}>About us</h1>
          <p className={styles.aboutHeaderMoreText}>Some random text. This will be a shorter snippet to go directly under about us.</p>
          <div id="aboutScreen" className={styles.aboutParagraph}>
              <p>
                  Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible.

      In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery. Fact are size cold why had part. If believing or sweetness otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or.

      Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least.
              </p>
          </div>
          <div className={styles.aboutImage}>
            <img src={picture} width="600" height="400"/>
          </div>
        </div>
      </div>
    </Reveal>
    </>
    
  )
}

export default About