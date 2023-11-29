import { useEffect } from "react";
import agencyStyle from "../styles/Agency.module.css";
import { motion, useAnimation } from "framer-motion";

const FramerMotion = () => {
  const path = process.env.PUBLIC_URL;
  const constrol1 = useAnimation();
  const constrol2 = useAnimation();

  useEffect(() => {
    const imgScroll = () => {
      const scrollY = window.scrollY;
      const scrollHt = document.body.scrollHeight - window.innerHeight;
      const transY1 = (scrollY / scrollHt) * 50;
      const transY2 = (scrollY / scrollHt) * -50;

      constrol1.start({ y: transY1 });
      constrol2.start({ y: transY2 });
    };

    window.addEventListener("scroll", imgScroll);

    return () => {
      window.removeEventListener("scroll", imgScroll);
    };
  }, [constrol1, constrol2]);

  return (
    <section>
      <motion.div
        className={agencyStyle.imgGroup}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <motion.img
          src={`${path}/images/SplashColor.png`}
          alt="SplashColor"
          className={agencyStyle.img3}
          animate={constrol1}
        />
        <motion.img
          src={`${path}/images/CartoonMac.png`}
          alt="MoonsJuice"
          className={agencyStyle.img3}
          animate={constrol2}
        />
      </motion.div>
      <motion.h3
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}>
        Leading digital agency with solid design and development expertise. We
        focus on building Webflow websites.
      </motion.h3>
    </section>
  );
};

export default FramerMotion;
