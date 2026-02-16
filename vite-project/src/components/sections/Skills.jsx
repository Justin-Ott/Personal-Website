// const to easily change all the skill item styles
const skillItems = `flex justify-between mb-4 bg-pink-150 p-4 rounded-xl shadow-md w-fit max-w-xl 
  hover:bg-pink/50 hover:scale-105 transition-transform underline underline-offset-8`;

/** Skills Section listing my skills in languages, environments, and software
 * - Each skill is in a styled box that scales on hover
*/
export default function Skills() {
  return (
    <div className="h-auto flex flex-col items-center justify-center bg-pink-100 p-4 px-8 py-32">
      <h2 className="text-5xl font-bold mb-4">Technical Skills</h2>
      {/* Languages */}
      <h2 className="text-3xl font-bold mb-4">Languages</h2>
      <div className="w-full max-w-xl flex flex-col">
        <div className="flex justify-between mb-4">
          <div className={skillItems}>
            Python
          </div>
          <div className={skillItems}>
            JavaScript
          </div>
          <div className={skillItems}>
            HTML
          </div>
          <div className={skillItems}>
            C
          </div>
          <div className={skillItems}>
            Css
          </div>
        </div>
      </div>
      {/* Environments */}
      <h2 className="text-3xl font-bold mb-4">Environments</h2>
      <div className="w-full max-w-xl flex flex-col">
        <div className="flex justify-between mb-4">
          <div className={skillItems}>
            Pycharm
          </div>
          <div className={skillItems}>
            Visual Studio
          </div>
          <div className={skillItems}>
            Visual Studio Code
          </div>
          <div className={skillItems}>
            Unix
          </div>
        </div>
      </div>
      {/* Software */}
      <h2 className="text-3xl font-bold mb-4">Software</h2>
      <div className="w-full max-w-xl flex flex-col">
        <div className="flex justify-between mb-4">
          <div className={skillItems}>
            Git/GitHub
          </div>
          <div className={skillItems}>
            Docker
          </div>
          <div className={skillItems}>
            Jira
          </div>
          <div className={skillItems}>
            Wireshark
          </div>
          <div className={skillItems}>
            Firebase
          </div>
        </div>
      </div>
      {/* APIs */}
      <h2 className="text-3xl font-bold mb-4">APIs</h2>
      <div className="w-full max-w-xl flex flex-col">
        <div className="flex justify-between mb-4">
          <div className={skillItems}>
            REST API
          </div>
          <div className={skillItems}>
            File upload processing
          </div>
          <div className={skillItems}>
            Asynchronous request handling
          </div>
        </div>
      </div>
      {/* AI */}
      <h2 className="text-3xl font-bold mb-4">AI</h2>
      <div className="w-full max-w-xl flex flex-col">
        <div className="flex justify-between mb-4">
          <div className={skillItems}>
            LLM integration
          </div>
          <div className={skillItems}>
            Prompt engineering
          </div>
          <div className={skillItems}>
            LLM fine-tuning
          </div>
        </div>
      </div>
    </div>
  )
}