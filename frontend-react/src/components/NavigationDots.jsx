import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "projects", "skills", "testimonials", "contact"].map((item) => (
        <a className="app__navigation-dot" href={`#${item}`} key={item} aria-label={`Navigate to ${item}`} aria-current={active === item ? "location" : undefined} style={active === item ? { background: "#fb8500" } : {}}>
          <span
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clipPath: "inset(50%)",
              whiteSpace: "nowrap",
              border: 0
            }}
          >
            Navigate to {item}
          </span>
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
