export default function About() {
    return (
      <section className="mb-8">
        <h2 className="text-xl font-bold">about</h2>
        <p className="mt-2">
          I’m currently pursuing a Bachelor of Science in Computer Science with a
          minor in Tech Management at UC Davis. I thrive on learning new skills and
          building innovative products that solve real-world problems. Passionate
          about the startup ecosystem, I have competed in multiple startup
          competitions, winning two championships.
        </p>
        <p className="mt-2">
          Along the way, I’ve also developed skills in video editing, 3D design and
          rendering, and live-streaming study sessions on Twitch.
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