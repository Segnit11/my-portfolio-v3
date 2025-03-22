export default function Experience() {
    return (
      <section className="mb-8">
        <h2 className="text-xl font-bold">experience</h2>
        <div className="mt-4 space-y-4">
          {Array(4).fill({ company: "UC Davis Health", title: "Software Engineer Intern", duration: "10/2023 - 03/2024" }).map((job, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src="/avatar.png" alt="Company Logo" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-bold">{job.company}</h3>
                <p className="text-sm text-gray-600">{job.title}</p>
              </div>
              <span className="ml-auto text-sm">{job.duration}</span>
            </div>
          ))}
        </div>
      </section>
    ); }