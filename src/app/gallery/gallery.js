"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { AnimatePresence } from "framer-motion";
// import "../App.css";
import "./Gallery-Grid.css";

function Gallery() {
  const container = {
    animate: {
      opacity: 1,
      x: "0rem",
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.35,
      },
    },
  };
  const FadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, type: "tween" },
    },
  };
  return (
    <>
      <motion.section
        variants={container}
        initial={{ opacity: 0, x: "2rem" }}
        animate={"animate"}
        exit={{ opacity: 0, x: "2rem" }}
        transition={{ duration: 0.5 }}
        className="Gallery "
      >
        <div className="grid-1 grid">
          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/fries.jpg"
              alt="Fries"
            />
          </div>
          <div className="col-span-1 row-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/grill.jpg"
              alt="Grill"
            />
          </div>
          <div className="col-span-1">
            {" "}
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/chicken-stew.jpg"
              alt="Chicken Stew"
            />
          </div>

          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/egusi-soup.jpg"
              alt="egusi soup"
            />
          </div>
          <div className="col-span-1 grd-srt-3-4">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/noodle&rice.jpg"
              alt="noodle and rice"
            />
          </div>
        </div>

        <div className="grid-2 grid">
          <div className="grid-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/noodle-2.jpg"
              alt="Noodle"
            />
          </div>
          <div className="grid-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/ofeakwu-rice.jpg"
              alt="ofeakwu Rice"
            />
          </div>
          <div className="grid-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/noodle-1.jpg"
              alt="Noodle"
            />
          </div>
        </div>

        <div className="grid-3 grid">
          <div className="col-span-1">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/chicken&fries.jpg"
              alt="Chicken and Fries"
            />
          </div>
          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/jollof-goatMeat-rice.jpg"
              alt="Jollof Goat meat"
            />
          </div>
          <div className="col-span-2">
            <motion.img
              variants={FadeIn}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src="/images/assets/yam&fried-egg.jpg"
              alt="Yam and fried egg"
            />
          </div>
        </div>
      </motion.section>
      <div className="xxlarge-text center">Thanks For Viewing</div>
    </>
  );
}
export default Gallery;
