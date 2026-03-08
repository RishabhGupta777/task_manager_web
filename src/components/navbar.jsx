export default () => (
  <nav className="container mx-auto p-6 flex justify-between items-center">
    <a href = "/" className="text-2xl font-bold text-purple-600 tracking-tight">Task Manager</a>
    <div className="space-x-6 hidden md:flex font-medium text-gray-600">
      <a href="#features" className="hover:text-purple-600 transition">Features</a>
      <a href="/contact" className="hover:text-purple-600 transition">Contact Us</a>
    </div>
    <a href="https://github.com/RishabhGupta777/task_manager/releases/download/v1.0/app-release.apk" className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition shadow-md hover:shadow-lg">
      Get Started
    </a>
  </nav>
);
