import React from 'react'
import {Link} from 'react-router'
import sahil from'../photo/sahil.png'
import Contact from './Contact'
import project from './Project'
import About from './About'
import Skills from './Skills'



export default function Home() {
  const skillCards = [
    {
      title: 'HTML',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG053fSK6lEaRgkWQJU74L7F6Wh_YMOWsAfQ&s',
    },
    {
      title: 'CSS',
      img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    },
    {
      title: 'JavaScript',
      img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    },
     {
      title: 'Mango db',
      img: 'https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png',
    },
    {
      title: 'React JS',
      img: 'https://miro.medium.com/1*NJSv6DGoKTloI8d8im98zg.png',
    },
  ]

  return (
    <>
    
  <nav className="d-flex justify-content-center gap-5 p-3">

  <Link to="/Home" className="nav-link">
    🏠 Overview
  </Link>

  <Link to="/Skills" className="nav-link">
    ⚡ Expertise
  </Link>

  <Link to="/Project" className="nav-link">
    🚀 My Work
  </Link>

  <Link to="/Contact" className="nav-link">
    📩 Hire Me
  </Link>

  <Link to="/About" className="nav-link">
    👨‍💻 About Me
  </Link>

</nav>
      <div>
        <div >
          <h1 className="text-center mt-3"> Hi, I'm Sahil — Frontend Developer 🚀</h1>
          <div className="d-flex justify-content-center align-items-center mt-3 gap-5">
          <img src={sahil} alt="sahil" className=" m-4 rounded-4  img-fluid"style={{ height: '450px', width: '500px' }} />
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <p className="card-text">
                    <b className="fs-3"> 👋 Hi, I'm Sahil!!</b>
                    <br /> I am a passionate Frontend Developer and BCA student with a strong interest in building modern, responsive, and user-friendly web applications.<br /> who loves building
                    I specialize in creating interactive websites using React.js, 
                    JavaScript, HTML, CSS, Bootstrap, and modern web technologies<br />
                    applications utilizing React, Node.js, Express, and MongoDB.
                    My Philosophy: Write clean, self-documenting code.<br /> When a
                    problem gets tough, I pivot between strategic planning and
                    relentless brute-force problem solving.<br/> The Core Strengths:
                    A strong analytical mindset (sharpened by a deep love for
                    chess), strict<br/> self-discipline, and a team-oriented
                    attitude. I'm currently looking to bring my full-stack
                    capabilities to impactful projects and innovative
                    engineering teams.
                  </p>
                  </div>
          </div>
        </div>
      </div>
      <div className="container my-3 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center mt-5">Skills</h2>

        {/* 3-column layout (responsive) */}
        <div className="row justify-content-center mt-3" style={{ rowGap: '1.5rem' }}>
          {skillCards.map((skill) => (
            <div key={skill.title} className="col-12 col-md-4 d-flex justify-content-center">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{ marginBottom: '20px' }}>{skill.title}</h5>
                  <p className="card-text">
                    <img
                      src={skill.img}
                      style={{ height: '180px', width: '250px' }}
                      className="rounded-3"
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
     <div>
      <div>
        <h2 className="text-center mt-5">My project</h2>
        <div className="d-flex justify-content-center gap-5 mt-3">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title ">E-commerce</h5>
              <p className="card-text">
               <img src="https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90" style={{height: '200px', width:'250px'}} className='rounded-3' />
              </p>
              <p>
                 <a className='text-decoration-none text-black ' href="https://github.com/SAHILDARA07/JAVASCRIPT/tree/main/ECOMMERCE" target="_blank" rel="noopener noreferrer">E-Commerce</a>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Quizz App</h5>
              <p className="card-text">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdxliklr1nU6zupi_lxhsD0YHMM0WYCRr9w&s" style={{height: '200px', width:'250px'}}  alt="" />
              </p>
              <p>
                 <a className='text-decoration-none text-black' href="https://github.com/SAHILDARA07/JAVASCRIPT/tree/main/QUIZ%20APPLICATION" target="_blank" rel="noopener noreferrer">Quizz App</a>
              </p>
            </div>  
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body"> 
            <h5 className="card-title">QUOTE APP</h5>
            <p className="card-text">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/060/380/241/small/the-quote-icon-is-shown-in-a-colorful-circle-flat-png.png" style={{height: '200px', width:'250px'}}  alt="" />
            </p>  
            <p>
               <a className='text-decoration-none text-black' href="https://github.com/SAHILDARA07/JAVASCRIPT/tree/main/QUOTE%20APP" target="_blank" rel="noopener noreferrer">Book Api Store</a>
            </p>
          </div>
        </div>             
      </div>
    </div>
    <div>
      
    </div>
    
    <div>
      
    </div>
    </div>
    <div>
      <section className="container my-3">
  <h1 className='text-center fs-1 text-black fw-bold'>Contact</h1>

      <div className="container col-6">

          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label ">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name here..."
            />
          </div>
          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 text-start fw-bold">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-outline-primary w-100">
              Submit
            </button>
          </div>

      </div>
    </section>
    </div>
    <section className="container-fluid py-5">
      <div className="container d-flex justify-content-center">
        <div
          className="card mb-3 p-4 shadow-lg border-0"
          style={{ maxWidth: 980 }}
        >
          <div className="row g-0 align-items-center justify-content-center d-flex">
           

            <div className="col-md-8 ">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h2 className="card-title fw-bold mb-3">About Me</h2>

                <p className="card-text">
                  <span className="fs-3 fw-bold">
                    Hi, I'm SAAHIL DARA!
                  </span>
                  <br />I am a passionate <strong>Full Stack Developer</strong>{" "}
                  and an enthusiastic <strong>MongoDB Learner</strong> who
                  enjoys building modern, responsive, and user-friendly web
                  applications. I love transforming ideas into real-world
                  digital solutions using technologies like React.js, Node.js,
                  Express.js, and MongoDB.
                </p>

                <p className="card-text">
                  🚀 My focus is on creating clean, scalable, and efficient
                  applications while continuously improving my development
                  skills. I enjoy learning new technologies, solving challenging
                  problems, and writing maintainable code that delivers great
                  user experiences.
                </p>

                <p className="card-text">
                  💡 I believe in continuous learning, teamwork, and innovation.
                  Whether it's developing a full-stack project, optimizing
                  performance, or exploring new backend concepts, I'm always
                  eager to grow as a developer and contribute to impactful
                  projects.
                </p>

                <p className="card-text">
                  🎯 Currently, I'm expanding my expertise in MongoDB, backend
                  architecture, and modern web technologies while building
                  projects that strengthen my problem-solving and development
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="mt-5 py-4 bg-dark text-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="fw-bold">© {new Date().getFullYear()} Sahil Dara</div>
        <div className="d-flex gap-3 mt-3 mt-md-0">
          <a className="text-white text-decoration-none" href="/Project">Projects</a>
          <a className="text-white text-decoration-none" href="/Contact">Contact</a>
          <a className="text-white text-decoration-none" href="/Contact">Info</a>
          <a className="text-white text-decoration-none" href="/Contact">About</a>
        </div>
      </div>
    </footer>

    </>
  )
}