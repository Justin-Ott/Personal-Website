
import { Link } from "react-router";
import { ProjectData } from "../components/projectFolder/ProjectData";

export default function Projects() {
  return (
    <div className="min-h-screen bg-yellow-100 text-black px-8 py-16">
      <h1 className="text-4xl font-bold mb-1 text-center">
        Projects 
      </h1>
      <h1 className="text-1xl font-bold mb-12 text-center">
        Sizing will change as more projects are added
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectData.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group"
          >
            <div
              className="
                bg-blue-300 rounded-xl p-6
                flex flex-col items-center
                transform transition
                duration-300
                hover:scale-105
                hover:bg-blue-600
              "
            >
              <img
                src={project.icon}
                alt={project.title}
                className="w-20 h-20 mb-4"
              />
              <h2 className="text-xl font-semibold text-center">
                {project.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}