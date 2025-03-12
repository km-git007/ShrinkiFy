// import React from "react";
// import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
// const AboutPage = () => {
//    return (
//       <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
//          <div className="bg-white w-full sm:py-10 py-8  ">
//             <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic  mb-3">
//                About ShrinkiFy
//             </h1>
//             <p className="text-gray-700 text-sm  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
//                ShrinkiFy is your all-in-one solution for effortless URL shortening and detailed analytics. Instantly transform long, complex links into sleek, easy-to-share URLs with just a click. But that’s not all—our intuitive dashboard gives you valuable insights, allowing you to track the number of clicks, along with the exact date and time of each interaction. Whether you're sharing links for business, social media, or personal use, ShrinkiFy ensures a seamless experience while keeping you informed. Simplify your link management and take control of your sharing with ShrinkiFy today!
//             </p>
//             <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
//                <div className="flex items-start">
//                   <FaLink className="text-blue-500 text-3xl mr-4" />
//                   <div>
//                      <h2 className="sm:text-2xl font-bold text-slate-800">
//                         Simple URL Shortening
//                      </h2>
//                      <p className="text-gray-600">
//                         Experience the ease of creating short, memorable URLs in just a
//                         few clicks. Our intuitive interface and quick setup process
//                         ensure you can start shortening URLs without any hassle.
//                      </p>
//                   </div>
//                </div>
//                <div className="flex items-start">
//                   <FaShareAlt className="text-green-500 text-3xl mr-4" />
//                   <div>
//                      <h2 className="sm:text-2xl font-bold text-slate-800">
//                         Powerful Analytics
//                      </h2>
//                      <p className="text-gray-600">
//                         Gain insights into your link performance with our comprehensive
//                         analytics dashboard. Track clicks, geographical data, and
//                         referral sources to optimize your marketing strategies.
//                      </p>
//                   </div>
//                </div>
//                <div className="flex items-start">
//                   <FaEdit className="text-purple-500 text-3xl mr-4" />
//                   <div>
//                      <h2 className="sm:text-2xl font-bold text-slate-800">
//                         Enhanced Security
//                      </h2>
//                      <p className="text-gray-600">
//                         Rest assured with our robust security measures. All shortened
//                         URLs are protected with advanced encryption, ensuring your data
//                         remains safe and secure.
//                      </p>
//                   </div>
//                </div>
//                <div className="flex items-start">
//                   <FaChartLine className="text-red-500 text-3xl mr-4" />
//                   <div>
//                      <h2 className="sm:text-2xl font-bold text-slate-800">
//                         Fast and Reliable
//                      </h2>
//                      <p className="text-gray-600">
//                         Enjoy lightning-fast redirects and high uptime with our reliable
//                         infrastructure. Your shortened URLs will always be available and
//                         responsive, ensuring a seamless experience for your users.
//                      </p>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default AboutPage;

import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
   document.title = "ShrinkiFy | About";

   return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gray-50 px-4">
         <div className="bg-white shadow-xl rounded-lg p-8 max-w-screen-md w-full">
            <h1 className="text-center text-4xl text-slate-800 font-bold italic mb-6">
               About ShrinkiFy
            </h1>
            <p className="text-gray-700 text-center text-sm leading-relaxed mb-8">
               ShrinkiFy is your all-in-one solution for effortless URL shortening and detailed analytics.
               Instantly transform long, complex links into sleek, easy-to-share URLs with just a click.
               Our intuitive dashboard gives you valuable insights, tracking clicks along with exact date and time of each interaction.
               Whether for business, social media, or personal use, ShrinkiFy ensures a seamless experience while keeping you informed.
            </p>

            <div className="space-y-6">
               {/* Feature 1 */}
               <div className="flex items-start gap-4">
                  <FaLink className="text-blue-500 text-3xl" />
                  <div>
                     <h2 className="text-xl font-bold text-slate-800">Simple URL Shortening</h2>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        Create short, memorable URLs in just a few clicks. Our intuitive interface ensures a hassle-free experience.
                     </p>
                  </div>
               </div>

               {/* Feature 2 */}
               <div className="flex items-start gap-4">
                  <FaShareAlt className="text-green-500 text-3xl" />
                  <div>
                     <h2 className="text-xl font-bold text-slate-800">Powerful Analytics</h2>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        Gain insights into your link performance with our analytics dashboard. Track clicks, geographical data, and referral sources.
                     </p>
                  </div>
               </div>

               {/* Feature 3 */}
               <div className="flex items-start gap-4">
                  <FaEdit className="text-purple-500 text-3xl" />
                  <div>
                     <h2 className="text-xl font-bold text-slate-800">Enhanced Security</h2>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        Your data remains safe with our advanced encryption and security measures for all shortened URLs.
                     </p>
                  </div>
               </div>

               {/* Feature 4 */}
               <div className="flex items-start gap-4">
                  <FaChartLine className="text-red-500 text-3xl" />
                  <div>
                     <h2 className="text-xl font-bold text-slate-800">Fast and Reliable</h2>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        Enjoy lightning-fast redirects with our reliable infrastructure, ensuring high uptime and responsiveness.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutPage;
