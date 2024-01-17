'use client';

import { motion } from "framer-motion";
import {  TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.navPadding} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center"/>
      <TitleText title={(<>Track friends around you and invite them to play together in the same world</>)} textStyles="text-center"/>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]">
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people"
            className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people"
            className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people"
            className="w-full h-full" />
        </div>

        <div className="absolute bottom-44 left-[22%] w-[180px] h-[140px] p-[6px] rounded-2xl bg-[#5d6680] ">

          <img
            src="/planet-02.png"
            alt="cover"
            className="w-full h-full object-cover rounded-2xl " />
          <div className="absolute left-4 h-[20px] bottom-14 flex flex-row  w-full">
            <div className="absolute left-5 w-[28px] h-[28px]  rounded-full bg-[#5d6680]">
              <img src="people-01.png" alt="people"
                className="w-full h-full" />
            </div>

            <div className="absolute left-3 w-[28px] h-[28px]  rounded-full bg-[#5d6680]">
              <img src="people-02.png" alt="people"
                className="w-full h-full" />
            </div>

            <div className="absolute  w-[28px] h-[28px]  rounded-full bg-[#5d6680]">
              <img src="people-03.png" alt="people"
                className="w-full h-full" />
            </div>
            <p className="absolute flex-1 top-0 left-14 font-normal text-[10px] text-white leading-[32px]">+ 264 has joined</p>
          </div>

          <h1 className="absolute bottom-4 left-4  font-semibold text-[16px] leading-[30px] text-white">
            The Upside Down
          </h1>

        </div>

        <div className="absolute top-10 right-[20%] w-[180px] h-[140px] p-[6px] rounded-2xl bg-[#5d6680] ">

          <img
            src="/planet-01.png"
            alt="cover"
            className="w-full h-full object-cover rounded-2xl " />
          <div className="absolute left-4 h-[20px] bottom-14 flex flex-row  w-full">
            <div className="absolute left-5 w-[28px] h-[28px]  rounded-full bg-[#5d6680]">
              <img src="people-01.png" alt="people"
                className="w-full h-full" />
            </div>

            <div className="absolute left-3 w-[28px] h-[28px]  rounded-full bg-[#5d6680]">
              <img src="people-02.png" alt="people"
                className="w-full h-full" />
            </div>

            <div className="absolute  w-[28px] h-[28px]  rounded-full bg-[#5d6680]">
              <img src="people-03.png" alt="people"
                className="w-full h-full" />
            </div>
            <p className="absolute flex-1 top-0 left-14 font-normal text-[10px] text-white leading-[32px]">+ 264 has joined</p>
          </div>

          <h1 className="absolute bottom-4 left-4 font-semibold text-[17px] leading-[30px] text-white">
            Hawkins Labs
          </h1>

        </div>


      </motion.div>
    </motion.div>
  </section>
);

export default World;
