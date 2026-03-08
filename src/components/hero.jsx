import Carousel from "./_carousel";
const SCREENSHOTS = [
  "/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg"
]

export default () => (
  <section className="container mx-auto px-6 py-20 text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
      Manage your tasks with <br />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-600">
        effortless precision.
      </span>
    </h1>
    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
      Organize your workflow, collaborate with your team, and hit your deadlines without breaking a sweat. Everything you need, right where you need it.
    </p>
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <a href="https://github.com/RishabhGupta777/task_manager/releases/download/v1.0/app-release.apk" className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 shadow-lg transition transform hover:-translate-y-1">
        Start for Free
      </a>
      <a href="#features" className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg border border-gray-200 hover:bg-gray-50 shadow-sm transition">
        Explore Features
      </a>
    </div>
    
    {/* App Mockup Placeholder */}
    <div className="mt-20">
      <div className="rounded-xl h-auto w-full max-w-5xl mx-auto flex items-center justify-center text-gray-500 overflow-hidden relative">
        <Carousel screenshots={SCREENSHOTS} />
      </div>
    </div>
  </section>
);
