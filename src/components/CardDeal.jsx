import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} ml-10`}>
        Themes for Hackathon<br className="sm:block hidden"/>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-10`}>
        Smart Agriculture<br></br>
        Healthcare<br></br>
        Renerwable Energy<br></br>
        Accessibility , Ecommerce and cybersecurity<br></br>
        Digitizing Selp Help groups
      </p>

      <Button styles={`mt-10 ml-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={"/card.png"} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;