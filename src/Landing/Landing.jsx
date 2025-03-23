import React from "react";
import "./Landing.css";
import wordmark from "../assets/wordmark.png";
import logomark from "../assets/logomark.png";
import RivaraMockUp from "../assets/Rivara.png";
import MockupCopy from "../assets/MockupCopy.png";
import OneKitVideo from "../assets/onekitVideo.mp4";
import { motion } from "framer-motion";
import Founders from "../assets/Dharun & Kishore.png";
import FranchasisUlagam from "../assets/FranchiseUlagam.png";

import Frontend from "../assets/Frontend.jpg";
import Designer from "../assets/Designer.jpg";
import Backend from "../assets/Backend.jpg";
import Writer from "../assets/ContentWriter.jpg";
import Editor from "../assets/VideoEditor.jpg";
import ContentCreater from "../assets/MediaContenter.jpg";
import MarketingConsultant from "../assets/MarketingConsultant.jpg";
import ThreeDArtist from "../assets/3dArtist.jpg";
import CopyWriter from "../assets/CopyWriter.jpg";
//Icons
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { useState, useEffect } from "react";

//components
import MiddlePart from "./MiddlePart";

function Landing() {
  const [scrollPos, setScrollPos] = useState("down");
  let lastPosition = window.scrollY;

  useEffect(() => {
    function handleScrolling() {
      let currentPosition = window.scrollY;

      setScrollPos(currentPosition > lastPosition ? "down" : "top");
      lastPosition = currentPosition;
    }

    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <>
      <div className="index-main-container">
        <header>
          <div className="index-header-images">
            <img src={wordmark} alt="Wordmark" className="wordImage" />
          </div>
        </header>
        <main>
          <section className="index-video-container">
            <video
              src={OneKitVideo}
              autoPlay
              muted
              playsInline
              onCanPlay={() => console.log("Video is loaded and can play!")}
              onError={(e) => console.log("Error loading video", e)}
            ></video>
          </section>

          <section className="index-section-1">
            <div className="index-division-container">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-division-1"
              >
                <h2 className="heavy-text">
                  "Sketching exceptional apps,one pixel at a time"
                </h2>
                <p>
                  Experience the best in class UI/UX Design with our team of
                  experts. We specialize in carefully crafting unique and
                  intuitive app and web user interfaces, ensuring user-friendly
                  and visually appealing digital experiences.
                </p>
              </motion.div>
            </div>
            <div className="index-division-image-1">
              <img src={RivaraMockUp} alt="" className="rivaraMockUp" />
            </div>
          </section>

          <div className="index-division-extra">
            <section className="index-section-2">
              <div className="index-division-img-2">
                <img src={MockupCopy} alt="" className="mockupCopy" />
              </div>
              <div className="index-division-container">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ amount: 0.3 }}
                  className="index-division-2 "
                >
                  <h2>
                    "Maximize the Impact of Your Brand with Strategic Branding
                    Choices"
                  </h2>
                  <p>
                    We specialize in creating professional branding resources,
                    including logos, packaging designs, pitch decks, custom
                    T-shirts, and more to help businesses effectively
                    communicate their brand identity and values to their target
                    audience.
                  </p>
                </motion.div>
              </div>
            </section>
          </div>

          <section className="index-section-3">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ amount: 0.3 }}
              className="index-division-3"
            >
              <h2>Leave the Heavy Lifting to us, watch your brand Thrive</h2>
              <p>
                As your partner in growth, we’re invested in your success just
                as much as you are. Our team of experts will handle all the
                marketing research and strategy development, so you can focus on
                what truly matters—expanding your brand.
              </p>
            </motion.div>
          </section>

          <section className="index-section-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ amount: 0.3 }}
              className="index-division-4"
            >
              <h2>services.</h2>
              <p>
                Discover what we do that sets us apart and elevates us to the
                top of our game
              </p>
            </motion.div>
          </section>
          
          {/* <section className="index-section-middlepart">
            <MiddlePart />
          </section> */}
          
          {/* <section className="index-section-5">
            <div className="index-division-5-1">
              <ul>
                <li>Creative Branding</li>
                <li>Influencer Marketing</li>
                <li>Brand Strategy</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div className="index-division-5-2">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-div-5-2-1"
              >
                <h2>Not just your Ordinary Branding Agency </h2>
                <p>
                  Your brand is your reputation and those small details and
                  trends tend to make a huge impact on eyes, hearts and minds of
                  the people around you. Making people Admire those small
                  details and streaks creates a huge impact on their
                  subconscious minds, which is nothing but magic.And we do that
                  magic for you!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-div-5-2-2"
              >
                <h2>Underrated yet Extensive</h2>
                <p>
                  From using the referral code for an extra 20% discount to
                  getting us to follow a new skin care routine, the influencers
                  got us. Not just us, you too. These people are backed up by
                  loyal audiences who relate themselves with them. So why still
                  underestimate the power of the new age word-of-mouth
                  marketing? Let Grustl be the bridge between the brand and the
                  influencer, so the influencer as well as the brand can skip
                  the tedious process of outreach, building strategies, and
                  running campaigns.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-div-5-2-3"
              >
                <h2>It’s high time to define your brand</h2>
                <p>
                  Questions like what is the meaning of the brand, why does it
                  exist, what is the market volume, how to win over competitors
                  and hence forth must be addressed. Before vaguely coming up
                  with solutions we at Grustl do intense case studies and
                  immense research to full-fill the problem of how the brand
                  wants to be perceived and how the ideal customer perceives the
                  brand.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-div-5-2-4"
              >
                <h2>Borrow the Grustl Brains</h2>
                <p>
                  More than time burnt on designing and planning content, we
                  spend majority of our time on analysing the needs of brands.
                  By just pointing out the North Star brand which is nothing but
                  the brands those are similar to the brand that we want to
                  create or become, we at grustl can obtain insights and
                  concepts to get you there to where you there to where you
                  wanted to be.
                </p>
              </motion.div>
            </div>
          </section> */}

          <section className="index-section-6">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ amount: 0.3 }}
              className="index-division-6"
            >
              <h2>the mancave.</h2>
              <p>meet the incredible team behind onekit</p>
            </motion.div>
            <section className="index-section-6-1">
              <div className="index-division-6-2">
                <img src={Frontend} alt="" />
                <img src={ThreeDArtist} alt="" />
                <img src={Designer} alt="" />
                <img src={ContentCreater} alt="" />
                <img src={Backend} alt="" />
                <img src={Editor} alt="" />
              </div>
              <div className="index-division-6-3">
                <img src={MarketingConsultant} alt="" />
                <img src={CopyWriter} alt="" />
                <img src={Writer} alt="" />
                <img src={ContentCreater} alt="" />
                <img src={Backend} alt="" />
                <img src={Editor} alt="" />
              </div>
            </section>
          </section>

          <section className="index-section-7">
            <div className="index-division-7-1">
              <div className="index-division-header">
                <h2 className="meet">Meet</h2>
                <h2>The Founders</h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
              >
                Sanjeev has a successful entrepreneurial journey of over 5 years
                under his belt. With expertise in scaling startups and building
                strategies for top brands, he joined forces with Prateek who is
                a highly sought-after designer in the country. He is known for
                consistently coming up with innovative and original ideas,
                making him a valuable asset in the creative industry. Sharing a
                common vision and drive for success, the two founded Grustl,
                filling a gap in the market for a creative agency that
                understands the importance of out-of-the-box thinking for
                businesses. Together, they identified a problem in the
                commercial space and came up with a solution.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-division-7-1-1"
              >
                <p>VENTURES BACKING US</p>
                <img
                  src={FranchasisUlagam}
                  alt=""
                  className="franchiseUlagam"
                />
              </motion.div>
            </div>
            <div className="index-division-7-2">
              <img src={Founders} alt="" className="founders" />
            </div>
          </section>

          <section className="index-section-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, ease: "linear" }}
              viewport={{ amount: 0.3 }}
            >
              <p className="join">Join the life at</p>
              <h2>onekit</h2>
            </motion.div>
          </section>

          <section className="index-section-9">
            <div className="index-division-9-1">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="index-division-9-11"
              >
                <div className="index-division-9-1-1">
                  <h2>Content</h2>
                  <h2>Writer</h2>
                  <p>craft</p>
                  <p>engaging content.</p>
                </div>

                <div className="index-division-9-1-2">
                  <p>
                    Content Writer to join our editorial team, ultimately to
                    deliver quality writing pieces that appeal to our audiences,
                    attract customers and boost brand awareness and enrich
                    websites with new blog posts, guides and marketing copy.
                  </p>
                  <button>REACH US</button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: .5, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="index-division-9-12"
              >
                <div className="index-division-9-1-3">
                  <h2>Social Media </h2>
                  <h3>Admin</h3>
                  <p>orchestrate</p>
                  <p>online presence.</p>
                </div>

                <div className="index-division-9-1-4">
                  <p>
                    Talented Social media manager to administer our social media
                    accounts. You will be responsible for creating original text
                    and video content, managing posts and responding to
                    followers.
                  </p>
                  <button>REACH US</button>
                </div>
              </motion.div>
            </div>

            <div className="index-division-9-2">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: .5, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="index-division-9-13"
              >
                <div className="index-division-9-2-1">
                  <h3>Motion Graphic</h3>
                  <h2>Designer</h2>
                  <p>craft mesmerizing</p>
                  <p>moving designs.</p>
                </div>

                <div className="index-division-9-2-2">
                  <p>
                    Motion Graphics Designer who will work closely with the
                    marketing team, video producers and other key stakeholders
                    to brainstorm and create high quality video content that
                    reflect branding priorities.
                  </p>
                  <button>REACH US</button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: .5, ease: "easeInOut" }}
                viewport={{ amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="index-division-9-14"
              >
                <div className="index-division-9-2-3">
                  <h3>Director Of</h3>
                  <h2>Photography</h2>
                  <p>capture</p>
                  <p>top-notch visuals.</p>
                </div>

                <div className="index-division-9-2-4">
                  <p>
                    Skilled and innovative cinematographer to join our team. The
                    cinematographer’s responsibilities include reading scripts
                    and liaising with the director. You should suggest suitable
                    lighting, angles, filters, and techniques to the director,
                    and also work with the processing lab and post-production
                    team.
                  </p>
                  <button>REACH US</button>
                </div>
              </motion.div>
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ amount: 0.3 }}
            className="index-section-10"
          >
            <div className="index-division-10-1">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-division-10-1-1"
              >
                <h2>Reach the</h2>
                <h2>onekit Minds.</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
                className="index-division-10-1-2"
              >
                <p>
                  Thank you for considering onekit for your upcoming call.Please
                  use our calendar to find a convenient time that works for you,
                  and we look forward to connect with you soon.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={scrollPos ? "down" && { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ amount: 0.3 }}
              className="index-division-10-2"
            >
              <button>CONNECT</button>
            </motion.div>
          </motion.section>
        </main>
        <footer className="index-footer">
          <section className="index-footer-section">
            <div className="index-footer-icons-division">
              <BsInstagram />
              <FaTwitter />
              <FiYoutube />
              <FaBehance />
              <FaLinkedinIn />
            </div>
            <div className="index-footer-main-content">
              <p>
                Experience the power of transformative branding with onekit,one
                of world's leading branding agency.Our team of experts will work
                with you to craft a unique and impactful brand identity that
                resonates with the audience and drives business growth.Take the
                first step towards elevating your brand and join us in creating
                meaningful change.
              </p>
            </div>
            <div className="index-footer-copyrights">
              <p>
                Copyright &copy; 2025 onekit creative Inc.All rights reserved.
              </p>
            </div>
            <div className="index-footer-policies">
              <ul>
                <li>onekit originals</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Copyright Policy</li>
              </ul>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default Landing;
