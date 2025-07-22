
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-bio">
          Hi! I'm <span className="about-highlight">Nilesh</span>, a passionate developer specializing in building modern, responsive web applications. I love turning ideas into reality using code and am always eager to learn new technologies and improve my skills.
        </p>
        <div className="about-skills">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React, Redux, Next.js</li>
            <li>HTML5, CSS3, Sass</li>
            <li>Node.js, Express</li>
            <li>MongoDB, SQL</li>
            <li>REST APIs, GraphQL</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About