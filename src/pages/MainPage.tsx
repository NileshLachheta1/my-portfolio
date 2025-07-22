import Home from './Home';

const MainPage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about" style={{minHeight: '60vh', padding: '4rem 0', background: '#f7fafd'}}>
        <div className="container">
          <h2>About Me</h2>
          <p>I'm Nilesh, a passionate developer with experience in building modern web applications. [Add more about yourself here]</p>
        </div>
      </section>
      <section id="projects" style={{minHeight: '60vh', padding: '4rem 0'}}>
        <div className="container">
          <h2>Projects</h2>
          <p>Here are some of my projects. [List or showcase your projects here]</p>
        </div>
      </section>
      <section id="Resume" style={{minHeight: '60vh', padding: '4rem 0', background: '#f7fafd'}}>
        <div className="container">
          <h2>Resume</h2>
          <p>Download or view my resume. [Add your resume or a download link here]</p>
        </div>
      </section>
      <section id="contact" style={{minHeight: '60vh', padding: '4rem 0'}}>
        <div className="container">
          <h2>Contact</h2>
          <p>Get in touch with me. [Add a contact form or your contact details here]</p>
        </div>
      </section>
    </div>
  );
};

export default MainPage; 