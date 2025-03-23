export default function About() {
    return (
      <section id="about" className="mb-8">
        <h2 className="text-xl font-bold">about</h2>
        <p className="mt-2">
          <b>(B.S) Computer Science</b> with a minor in <b>Tech Management</b> at UC Davis
        </p>
        <p className="mt-2">
        enjoy learning new skills and building innovative products that are user centric and solves real world problems.
        </p>
        <p className="mt-2">
          <b>Hobbies:</b> Video Editing, Cool ChatGPT Prompts, 3D-Modeling, Streaming, Badminton
        </p>
        <div className="mt-4 flex space-x-4 text-blue-500 underline">
          <a href="#">resume</a>
          <a href="#">linkedin</a>
          <a href="#">github</a>
          <a href="#">youtube</a>
          <a href="#">twitch</a>
        </div>
      </section>
    );
  }