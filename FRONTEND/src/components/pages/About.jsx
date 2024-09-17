import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Cosmic Canvas is a cutting-edge blogging platform designed to empower creators, 
        writers, and thinkers to share their ideas with the world. It features a user-friendly
        interface that makes it easy for users of all skill levels to create and manage their blogs.
        With customizable themes, advanced editing tools, and built-in SEO optimization, Cosmic 
        Canvas ensures that your content not only looks great but also reaches a wider audience.
        The platform also offers robust community engagement features, allowing readers to interact
        with your content through comments, likes, and shares, fostering a vibrant community around your blog.
        </p>
        <p>
        In addition to its creative tools, Cosmic Canvas provides a secure and reliable environment for your content. 
        The platform prioritizes security with robust encryption and regular backups, ensuring your data is always safe.
        An analytics dashboard offers detailed insights into your blog’s performance, helping you track
        visitor statistics and engagement metrics. Whether you’re a seasoned blogger or just starting, 
        Cosmic Canvas supports your journey by providing a space where your creativity can flourish and reach
        a global audience.
        </p>
        
      </div>
    </article>
  );
};

export default About;