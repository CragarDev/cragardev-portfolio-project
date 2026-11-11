import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const skillsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      const testimonialOrder = ["Doug Via", "Saurabh Dahal (InstructorRob)", "Chris Cole", "Narciso Lobo"];

      const orderedTestimonials = [...data].sort((a, b) => {
        const aIndex = testimonialOrder.indexOf(a.name);
        const bIndex = testimonialOrder.indexOf(b.name);

        const aRank = aIndex === -1 ? testimonialOrder.length : aIndex;
        const bRank = bIndex === -1 ? testimonialOrder.length : bIndex;

        return aRank - bRank;
      });

      setTestimonials(orderedTestimonials);
      setCurrentIndex(0);
    });

    client.fetch(skillsQuery).then((data) => {
      // console.log('::: brands data :::==>', data)
      setBrands(data);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands-heading">
        <h3>Brands I've Worked With</h3>
        <p>Selected projects completed directly and through producers and agencies.</p>
      </div>
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div key={`brand-${brand._id}`} className={brand.name === "Kearney" ? "app__brand--dark" : ""} whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, type: "tween" }}>
            <img src={urlFor(brand.imgurl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Testimonial, "app__testimonial app__flex"), "testimonials", "app__darkbluebg");
