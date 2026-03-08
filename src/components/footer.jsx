export default () => (
  <footer className="bg-gray-950 text-gray-500 py-10 border-t border-gray-800">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold text-gray-300 mb-4 md:mb-0">Task Manager</div>
      <div className="space-x-6 text-sm">
        <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
        <a href="#terms" className="hover:text-white transition">Terms of Service</a>
        <a href="/contact" className="hover:text-white transition">Contact Support</a>
      </div>
    </div>
  </footer>
);