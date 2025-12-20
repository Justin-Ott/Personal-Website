export default function Aboutme() {
  return (
    <div className="h-auto flex flex-col items-center justify-center bg-green-100 p-4 px-8 py-32"
    // Background gif that I thought about using
    // style={{ backgroundImage: 'url(/LegoLoop.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-5xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        I am a senior computer science student at GVSU who is passionate about software development,
        interested in networking, and enjoys building interactive web applications.
      </p>
    </div>
  )
}