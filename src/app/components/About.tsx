export default function About() {
    function ArrowIcon() {
        return (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        )
      }
      
    
    return (
      <>
      <section id="about" className="mb-20">
      </section>
      <section id="about" className="mb-8">
        <h2 className="text-xl font-bold">about</h2>
        <p className=" text-sm  mt-2">
          <b>(B.S) Computer Science</b> with a minor in <b>Tech Management</b> at UC Davis
        </p>
        <p className="text-sm  mt-2">
        enjoy learning new skills and building innovative products that are user centric and solves real world problems.
        </p>
        <p className=" text-sm  mt-2">
          <b>Hobbies:</b> Video Editing, Cool ChatGPT Prompts, 3D-Modeling, Streaming, Badminton
        </p>
        <div className=" text-sm mt-4 flex space-x-4 text-blue-500 underline">
         <ArrowIcon></ArrowIcon><a href="#">resume</a>
          <a href="#">linkedin</a>
          <a href="#">github</a>
          <a href="#">youtube</a>
          <a href="#">twitch</a>
          
        </div>
      </section>
      </>
    );
  }