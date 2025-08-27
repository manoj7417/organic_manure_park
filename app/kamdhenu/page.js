"use client";
import { useState, useEffect } from "react";
import { FaHome } from 'react-icons/fa';
import { motion } from "framer-motion";
import Link from "next/link";
import Accordiann from "./Accordiann.jsx"
import {
  Building2,
  Factory,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Tractor,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaChevronDown, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [successMessage, setSuccessMessage] = useState(""); // To show success or error messages
  const [isLoading, setIsLoading] = useState(false);
  const imagesAndNames = [
    { src: "/amritmahal.png", name: "अमृतमहल / Amritmahal" },
    { src: "/Ponwar.png", name: "पोनवार / Ponwar" },
    { src: "/nagori.png", name: "नागौरी / Nagori" },
    { src: "/nimari.png", name: "निमाड़ी / Nimari" },
    { src: "/kenkathaa.png", name: "केनकथा / Kenkathaa" },
    { src: "/khilari.png", name: "खिल्लारी / Khilari" },
    { src: "/dangi.png", name: "डांगी / Dangi" },
    { src: "/malvi.png", name: "मालवी / Malvi" },
    { src: "/malenadu.png", name: "मालेनाडू गिद्दा / Malenadu Gidda" },
    { src: "/javari.png", name: "जावरी / Javari" },
    { src: "/hallikar.png", name: "हल्लीकर / Hallikar" },
    { src: "/ongoel.png", name: "ओंगोल / Ongole" },
    { src: "/kangayam.png", name: "कंगायम / Kangayam" },
    { src: "/umblacheri.png", name: "अम्बलाचेरी / Umblacheri" },
    { src: "/baragur.png", name: "बरगुर / Baragur" },
    { src: "/Kasaragod.png", name: "कासरगोड / Kasaragod" },
    { src: "/hariana.png", name: "हरियाना / Hariana" },
    { src: "/tharparkar.png", name: "थारपारकर / Tharparkar" },
    { src: "/Kankrej.png", name: "कांकरेज / Kankrej" },
    { src: "/deoni.png", name: "देवनी / Deoni" },
    { src: "/lalkandhari.png", name: "लालकंधारी / Lalkandhari" },
    { src: "/gaolao.png", name: "गाओलाओ / Gaolao" },
    { src: "/sahiwal.png", name: "सहिवाल / Sahiwal" },
    { src: "/sindhi.png", name: "सिंधी / Sindhi" },
    { src: "/rathi.png", name: "राठी / Rathi" },
    { src: "/gir.png", name: "गिर / Gir" },
    { src: "/gangitri.png", name: "गंगीत्री / Gangitri" },
    { src: "/venchur.png", name: "वेंचूर / Venchur" },
    { src: "/kerighar.png", name: "केरीघर / Kerighar" },];
  const toggleMenuModal = () => {
    setIsMenuModalOpen(!isMenuModalOpen);
    if (!isMenuModalOpen) {
      setIsVerified(false);
      setOtpSent(false);
      setOtp("");
      setIsButtonDisabled(false); // Re-enable the button when modal reopens
      setSuccessMessage(""); // Clear success message when modal is closed
    }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const sendOtp = async () => {
    try {
      setIsButtonDisabled(true); // Disable the button while sending OTP
      const generateOtp = () =>
        Math.floor(100000 + Math.random() * 900000).toString();
      const generatedOtp = generateOtp();

      await localStorage.setItem("otp", generatedOtp);

      const apiKey = "APIfJCi7asW85127";
      const message = `Dear User, Your OTP for login to MobiDoc app is ${generatedOtp}. Valid for 30 minutes. Please do not share this OTP. Regards, Team IntelGray`;

      const apiUrl = `https://www.bulksmsplans.com/api/send_sms?api_id=${apiKey}&api_password=qI5sERZC&sms_type=OTP&sms_encoding=1&sender=INTLGR&number=${mobileNumber}&message=${message}&template_id=1207164447361211223`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setOtpSent(true);
        setResendCountdown(10); // Set countdown for resend OTP

        let countdownInterval = setInterval(() => {
          setResendCountdown((prev) => {
            if (prev === 1) {
              clearInterval(countdownInterval); // Clear interval when countdown ends
              setIsButtonDisabled(false); // Re-enable button after the countdown
            }
            return prev - 1;
          });
        }, 1000);

        return data;
      } else {
        console.error("Error sending OTP:", response);
        setIsButtonDisabled(false); // Re-enable button on error
      }
    } catch (error) {
      console.error("Error occurred while sending OTP:", error);
      setIsButtonDisabled(false); // Re-enable button on error
    }
  };

  const verifyOtp = () => {
    const storedOtp = localStorage.getItem("otp"); // Get OTP from localStorage
    if (otp === storedOtp) {
      setIsVerified(true);
      alert("OTP Verified Successfully!");
    } else {
      alert("Invalid OTP");
    }
  };

  const sendAppointmentConfirmation = async () => {
    setIsLoading(true);
    if (!email || !name || !mobileNumber || !appointmentTime) {
      alert("Please provide all the required information.");
      return;
    }

    setIsButtonDisabled(true); // Disable button to prevent multiple submissions
    setSuccessMessage(""); // Clear previous success message if any

    const appointmentMessage = `
      Dear ${name},
      Your appointment is confirmed for ${appointmentTime}. Thank you for using our service.
      Regards,
      Team The Agro Village (TAV)
    `;

    const adminMessage = `
      New appointment confirmation:
      Name: ${name}
      Email: ${email}
      Mobile: ${mobileNumber}
      Appointment Time: ${appointmentTime}
    `;

    try {
      const responseUser = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobileNumber,
          appointmentTime
        }),
      });

      if (!responseUser.ok) {
        throw new Error("Error sending email to user.");
      }

      const responseAdmin = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobileNumber,
          appointmentTime
        }),
      });

      if (!responseAdmin.ok) {
        throw new Error("Error sending email to admin.");
      }
      setIsLoading(false);
      setSuccessMessage("Appointment Confirmed. Confirmation emails sent!"); // Show success message
    } catch (error) {
      setIsLoading(false);
      console.error("Error occurred while sending confirmation emails:", error);
      setSuccessMessage("Failed to send confirmation emails."); // Show error message
    } finally {
      setIsButtonDisabled(false); // Re-enable button after the process is complete
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col md:flex-row justify-center items-center min-h-screen  bg-center w-full"

      >
        <div className="w-full md:w-1/2 hidden md:block max-h-screen"><img className="h-screen" src="/cows10.jpg" alt="Cows background" /></div>
        <div className="relative z-20 w-full md:w-1/2  px-8 bg-white  text-center">
          <img src="/cow.png" alt="Cow" className=" h-36 mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-[#43923f] mb-4">PROJECT </h1>

          <h1 className="text-4xl font-bold text-[#c74331] mb-4">KAMDHENU</h1>
          <h1 className="text-2xl font-bold text-[#43923f] mb-4">BY </h1>

          <Link href="/"><img src="/logo.png" alt="Logo" className="h-16 mx-auto" /></Link>
          <p className="text-lg mt-4">
            The Hindu scriptures educate us that the cow is considered a divine form of Goddess that fulfils wishes.<br></br>
            Kamadhenu is also seen as a sacred and benevolent being that symbolizes prosperity, abundance, and the gifts of nature.

          </p>
          <h1 className="text-2xl text-black font-bold  rounded-lg p-4 typewriter-animation">
            Why <br></br><div className="full flex justify-center"><img className="h-24 w-24" src="/you.png" alt="You icon" /></div>Should be part of this Project

          </h1>
          <motion.a href="#about2" className="mb-2">
            <motion.p
              variants={fadeInUp}
              className=" md:inline-block text-md text-white bg-green-500  hover:text-white rounded-lg px-4 py-2 hover:cursor-pointer hover:font-medium"
            >
              Know More
            </motion.p>
          </motion.a>


          <Link
            href="/"
            className="fixed top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-[#43923f] hover:text-white transition"
          >
            <FaHome className="text-2xl text-[#43923f] hover:text-white" /> {/* React Icon */}
          </Link>
        </div>

      </div>
      <section id="about2" className="py-32 bg-gray-50 px-4 md:px-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-1 bg-green-600 mb-8" />
              <h2 className="text-5xl font-light mb-8">
                ABOUT COWS in INDIA
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                There are approximately 37 Types of Cow breeds in India.
                Out of them 5(Five) are known for their miking prowess.<br></br></p>
              <ul>
                <li>•	Sahiwal</li>
                <li>•	Gir</li>
                <li>•	Red Sindhi</li>
                <li>•	Tharparkar</li>
                <li>•	Rathi</li></ul><br></br>
              A few others, such as Kankrej, Ongole and Hariana, belong to dual breeds that have both milch and draught qualities.; ie, they are good plough animals.
              The rest are pure draught breeds.

              <br></br>


              {/* <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Leaf, text: "Sustainable Solutions" },
                    { icon: Factory, text: "Modern Facilities" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm"
                    >
                      <item.icon className="text-green-600 w-6 h-6" />
                      <span className="font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0  rounded-2xl " />
              <img
                src="/gau.png"
                alt="Agricultural Facility"
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center w-full px-4 md:flex-row">
            {/* Swiper Slider */}
            <Swiper
              loop={true}
              freeMode={true}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 }, // Small screens
                480: { slidesPerView: 2, spaceBetween: 15 }, // Medium screens
                768: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
                1024: { slidesPerView: 5, spaceBetween: 30 }, // Large screens
              }}
              modules={[Autoplay, FreeMode]}
              autoplay={{
                delay: 1, // Continuous scrolling
                disableOnInteraction: false, // Pauses autoplay temporarily during interaction
                pauseOnMouseEnter: true, // Pause on hover
              }}
              speed={8000} // Smooth continuous scrolling
              className="mySwiper w-full"
            >
              {imagesAndNames.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center items-center gap-2 ">
                    <div className="text-center flex flex-col justify-center items-center relative gap-2">
                      <div className="relative w-28 h-28">
                        <img
                          src={item.src}
                          alt={item.name}
                          className="w-full h-full object-contain rounded-md mirror-image"
                        />
                      </div>
                      <div>
                        <h3 className="text-md font-bold mt-2">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Accordiann />

          {/* <motion.div className="flex flex-col items-center justify-center pt-4">
             <h3 >Book your Appointment to know more</h3>
        <button
          onClick={toggleMenuModal}
          className="bg-[#43923f] text-white px-6 py-3 mt-2 rounded-full shadow-lg transition duration-300"
        >
          Book Your Appointment
        </button>

        {isMenuModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <div className="bg-white  p-8 rounded-lg shadow-xl max-w-xl w-full relative">
  <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>

  {!isVerified ? (
    <>
      {!otpSent ? (
        <>
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your full name"
              required
            />
            {name === '' && <p className="text-red-500 text-xs mt-2">Full name is required.</p>}
          </div>

       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email address"
              required
            />
            {email && !/\S+@\S+\.\S+/.test(email) && <p className="text-red-500 text-xs mt-2">Please enter a valid email address.</p>}
          </div>

         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your mobile number"
              required
            />
            {mobileNumber && !/^\d{10}$/.test(mobileNumber) && <p className="text-red-500 text-xs mt-2">Please enter a valid 10-digit mobile number.</p>}
          </div>

         
          <button
            onClick={sendOtp}
            disabled={isButtonDisabled || !name || !email || !mobileNumber || !/\S+@\S+\.\S+/.test(email) || !/^\d{10}$/.test(mobileNumber)}
            className={`bg-[#43923f] text-white px-6 py-3 rounded-full w-full ${isButtonDisabled ? "opacity-50" : "hover:bg-[#43923f]"}`}
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter OTP sent to your mobile"
              required
            />
            {otp && otp.length !== 6 && <p className="text-red-500 text-xs mt-2">OTP must be 6 digits.</p>}
          </div>

          
          <button
            onClick={verifyOtp}
            disabled={isButtonDisabled || otp.length !== 6}
            className="bg-[#43923f] text-white px-6 py-3 rounded-full w-full hover:bg-[#43923f]"
          >
            Verify OTP
          </button>
        </>
      )}
    </>
  ) : (
    <>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Appointment Time</label>
        <input
          type="datetime-local"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        {appointmentTime === '' && <p className="text-red-500 text-xs mt-2">Please select an appointment time.</p>}
      </div>

     
     <button
      onClick={sendAppointmentConfirmation}
      disabled={isButtonDisabled || appointmentTime === '' || isLoading}
      className="bg-green-600 text-white px-6 py-3 rounded-full w-full hover:bg-green-700 flex items-center justify-center"
    >
      {isLoading ? (
        <div className="spinner-border animate-spin border-t-2 border-b-2 border-white w-6 h-6 rounded-full"></div>
      ) : (
        'Confirm Appointment'
      )}
    </button>

      {successMessage && (
        <p className="mt-4 text-green-500">{successMessage}</p>
      )}
    </>
  )}

 
  <button
    onClick={toggleMenuModal}
    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
  >
    &times;
  </button>
</div>

          </div>
        )}
        </motion.div> */}
        </div>
      </section>

      {/* <section id="services" className="py-8 bg-white px-4 md:px-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-light mb-6">HOW TO PARTICIPATE</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto" />
            </motion.div>
            <div className="grid md:grid-cols-4 gap-12">
              {[
              {
                  stripeColor: "bg-[#cd7f32]", // Bronze color
                  img: "/bronze.png",
                  title: " GENERAL Participant",
                  price:"Rs 1,180",
                desc: "• Partial Owner for the lifetime of the designated Cow ",
                desc2: "• Be Blessed by 33 Crore Gods ",
                  desc3:"• Receive Certificate as Partial Owner of the Cow ",

                  link: "/",
                },
              {
                   stripeColor: "bg-[#e5e4e2]",
                  img: "/silver.png",
                title: "SILVER Participant",
                  price:"Rs 5,900 ",
                desc: "• Partial Owner for the lifetime of the designated Cow",
                desc2: "• Be Blessed by 33 Crore Gods ",
                desc3: "• Receive Certificate as Partial Owner of the Cow",
                desc4: "• Receive 9% Discount Coupon in accommodation when you stay at our  The Agro Village  ",
                  desc5:"• Applicable for 3 Visits ",

                  link: "/",
              },
                { stripeColor: "bg-[#ffd700]",
                  img: "/gold.png",
                  title: "GOLD Participant",
                  price:"Rs 11,800 ",
                desc: "• Partial Owner for the lifetime of the designated Cow ",



                desc2: "• Be Blessed by 33 Crore Gods ",
                desc3: "• Receive Certificate as Partial Owner of the Cow",
                desc4: "• Receive 18% Discount Coupon in accommodation when you stay at our The Agro Village  ",
                  desc5:"• Applicable for 6 Visits ",

                  link: "/",
              },
              {
                  stripeColor: "bg-[#f8d7da]",
                  img: "/platinumm.png",
                title: "PLATINUM Participant",
                  price:"Rs 25,000 ",
                desc: "• Partial Owner for the lifetime of the designated Cow ",



                desc2: "• Be Blessed by 33 Crore Gods ",
                desc3: "• Receive Certificate as Partial Owner of the Cow",
                desc4: "• Receive 27% % Discount Coupon in accommodation when you stay at our The Agro Village  ",
                  desc5:"• Applicable for 9 Visits ",

                  link: "/",
                },
               

               
              ].map((service, index) => (
                <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  whileHover={{ y: -10 }}
  className="p-8 rounded-xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col"
                >
  <div className=" flex items-center justify-center mb-6">
                   <div className={` w-full h-2 ${service.stripeColor} rounded-t-lg`} />
  </div>
  <h3 className="text-xl font-medium mb-4">{service.title}<br></br>{service.price}</h3>
  <p className="text-gray-600 leading-relaxed mb-4">
    {service.desc}<br></br>{service.desc2}<br></br>{service.desc3}<br></br>{service.desc4}<br></br>{service.desc5}
  </p>
  <a
    href="/comingsoon"
    className="text-green-600 font-medium hover:underline mt-auto"
  >
    Participate Now!
  </a>
</motion.div>

              ))}
            </div>
          </div>
      </section> */}
      <footer className="flex w-full flex-col md:flex-row justify-between items-center p-4 px-2 md:px-20 bg-[#f5f5f5]">
        <div className="w-full md:w-1/2">
          <img src="/logo.png" alt="Logo" className="h-16 mb-4 md:mb-0" />
          <div className="text-sm md:text-md  mx-auto">
            The news is for information purpose only. We do not promote or
            endorse any pertinent issue.
            <br />
            <span className="font-bold">copyright © 2024 The Agro Village (TAV)</span>
            <div className="flex gap-16 items-center  mt-8">
              {/* Image with popup */}
              <div className="relative group bg-[#ffffff99]">
                <img src="/startuin.png" alt="Startup" className="h-16 w-48" />
                <div className="h-[25rem] w-[25rem] fixed hidden group-hover:flex items-center justify-center bg-white border border-gray-200 shadow-lg p-4 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/MAAMMA AGRIBUSINESS PRIVATE LIMITED_page-0001.jpg"
                    alt="Startup Popup"
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>

              {/* Second image with popup */}
              <div className="relative group bg-[#ffffff99]">
                <img src="/msme.png" alt="MSME" className=" h-16 w-48" />
                <div className="h-[25rem] w-[25rem] fixed hidden group-hover:flex items-center justify-center bg-white border border-gray-200 shadow-lg p-4 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/cert_page-0001.jpg"
                    alt="MSME Popup"
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-[2px] h-36 bg-gray-900"></div>

        <div className="flex items-center space-x-6 w-full md:w-1/2 justify-end">
          <div className="w-full text-left md:pl-20">
            <h3 className="text-lg md:text-xl  ">
              Conceptualised and Promoted by
            </h3>
            <h3 className="text-md md:text-lg text-green-700 font-bold">
              MAAMMA AGRIBUSINESS Private Limited
            </h3>

            <p className="mt-1 text-lg md:text-xl ">
              +91- 8080738225 or +91- 8928422800
            </p>

            <p className="mt-1 text-lg md:text-xl ">ma.agripl@gmail.com</p>
            <p className="mt-1 text-lg md:text-xl ">
              enquiry@theagrovillage.com
            </p>
          </div>
          <a href="https://www.facebook.com/people/Agro-Village/61566053081891/">
            <FaFacebook className="h-7 w-7 text-blue-700" />
          </a>
          <a href="https://www.instagram.com/agro__village/">
            <FaInstagram className="h-7 w-7 text-red-700" />
          </a>
          <a href="https://x.com/agro_village_">
            <FaXTwitter className="h-7 w-7 text-blue-900" />
          </a>
        </div>
      </footer>
    </>
  );
}
