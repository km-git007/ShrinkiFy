import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";
import ShortenPopUp from "./Dashboard/ShortenPopUp"; // Import the Pop-up Component

let desc =
   "Generate short, memorable links with ease using ShrinkiFy’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with ShrinkiFy. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using ShrinkiFy’s intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
   document.title = "ShrinkiFy | Home";
   const navigate = useNavigate();
   const { token } = useStoreContext();
   // console.log("TOKEN FROM LANDING PAGE: " + token);
   const [shortenPopUp, setShortenPopUp] = useState(false); // State to manage the Pop-up

   // const dashBoardNavigateHandler = () => {

   // };

   const dashBoardNavigateHandler = () => {
      if (token || localStorage.getItem("JWT_TOKEN")) {
         navigate("/dashboard");  // User is logged in, go to dashboard
      } else {
         navigate("/login");  // User is not logged in, redirect to login
      }
   };

   const handleCreateShortLink = () => {
      if (token || localStorage.getItem("JWT_TOKEN")) {
         setShortenPopUp(true); // Open the pop-up if logged in
      } else {
         navigate("/login"); // Redirect to login if not logged in
      }
   };

   return (
      <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
         <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
            <div className=" flex-1">
               <motion.h1
                  initial={{ opacity: 0, y: -80 }}
                  whileInView={{
                     opacity: 1,
                     y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
               >
                  Effortless URL Shortening and Sharing.
               </motion.h1>
               <p className="text-slate-700 text-sm my-5">
                  ShrinkiFy is your all-in-one solution for effortless URL shortening and detailed analytics. Instantly transform long, complex links into sleek, easy-to-share URLs with just a click. But that’s not all—our intuitive dashboard gives you valuable insights, allowing you to track the number of clicks, along with the exact date and time of each interaction. Whether you're sharing links for business, social media, or personal use, ShrinkiFy ensures a seamless experience while keeping you informed. Simplify your link management and take control of your sharing with ShrinkiFy today!
               </p>
               <div className="flex items-center gap-3">
                  <motion.button
                     initial={{ opacity: 0, y: 80 }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                     }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     onClick={dashBoardNavigateHandler}
                     className="bg-custom-gradient-3  w-40 text-white rounded-md  py-2"
                  >
                     Manage Links
                  </motion.button>
                  <motion.button
                     initial={{ opacity: 0, y: 80 }}
                     whileInView={{
                        opacity: 1,
                        y: 0,
                     }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     onClick={handleCreateShortLink}
                     className="border-btnColor bg-custom-gradient-4 border w-40 text-white rounded-md  py-2 "
                  >
                     Create Short Link
                  </motion.button>
               </div>
            </div>
            <div className="flex-1 flex   justify-center w-full">
               <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{
                     opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="sm:w-[730px] w-[650px] object-cover rounded-md"
                  src="/images/appPic.png"
                  alt=""
               />

            </div>
         </div>

         {/* Shorten URL Pop-up */}
         <ShortenPopUp open={shortenPopUp} setOpen={setShortenPopUp} />

         <h1 className="text-slate-800 font-extrabold text-center text-7xl mb-20">Shrink. Share. Track. Elevate</h1>

         <div className="sm:pt-12 pt-7">
            <motion.p
               initial={{ opacity: 0, y: 50 }}
               whileInView={{
                  opacity: 1,
                  y: 0,
               }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
            >
               Trusted by Professionals and Top Companies Globally{" "}
            </motion.p>
            <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
               <Card
                  title="Effortless URL Shortening"
                  desc="Create short, shareable links in seconds with our seamless and user-friendly interface. No complications—just quick and hassle-free URL shortening."
               />
               <Card
                  title="In-Depth Link Analytics"
                  desc="Track your link performance with real-time analytics. Monitor clicks, user locations, and referral sources to gain actionable insights and refine your strategies."
               />
               <Card
                  title="Secure and Protected"
                  desc="Your links are safeguarded with top-tier encryption and security measures, ensuring reliability and protection against unauthorized access."
               />
               <Card
                  title="Blazing-Fast Performance"
                  desc="Experience instant redirects and uninterrupted availability with our optimized infrastructure. Your shortened URLs remain accessible anytime, anywhere."
               />
            </div>

         </div>
      </div>
   );
};

export default LandingPage;

