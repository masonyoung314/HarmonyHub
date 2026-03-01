import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";


interface Props {
  children: React.JSX.Element;
  width?: "fit-content" | "100%";
  duration?:  number;
  delay?: number;
}


const Reveal = ({ children, width = "fit-content", duration = 0.7, delay = 0.25 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      mainControls.start("visible");
      // slideControls.start("visible");
    }

  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
      <motion.div
      variants = {{
        hidden: { opacity: 0, y: 75},
        visible: { opacity: 1, y: 0}
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>

      {/* <motion.div
      variants = {{
        hidden: { left: 0},
        visible: { left: "100%"}
      }}
      initial="hidden"
      animate={slideControls}
      transition={{ duration: 0.5, ease: "easeIn" }}
      style={{
        position: "absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: "var(--brand)",
        zIndex: 20
      }}
      /> */}
    </div>
  );
};

export default Reveal