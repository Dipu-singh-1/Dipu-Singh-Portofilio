import { Linkedin, Github, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 " style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 gap-0 relative ">
        <div>
          <h3 className="font-semibold mb-4">Dipu Singh</h3>
          <div className="text-sm">
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="hover:underline">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Skills</h3>
          <div className="text-sm">
            <ul>
              <li className="mb-2">
                <a href="#web-development" className="hover:underline">Web Development</a>
              </li>
              <li className="mb-2">
                <a href="#machine-learning" className="hover:underline">Machine Learning</a>
              </li>
              <li className="mb-2">
                <a href="#data-science" className="hover:underline">Data Science</a>
              </li>
              <li className="mb-2">
                <a href="#cloud" className="hover:underline">Cloud Computing</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Vertical Line */}
        {/* <svg className="w-1 h-full static left-1/2 transform -translate-x-1/2 top-0 z-1 0" viewBox="0 0 2 100">
          <line x1="1" y1="5" x2="1" y2="95" stroke="gray" stroke-width="0.5" />
        </svg> */}

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <div className="text-sm">
            <ul>
              <li className="mb-2">
                <a href="#tutorials" className="hover:underline">Tutorials</a>
              </li>
              <li className="mb-2">
                <a href="#tools" className="hover:underline">Tools</a>
              </li>
              <li className="mb-2">
                <a href="#books" className="hover:underline">Books</a>
              </li>
              <li className="mb-2">
                <a href="#communities" className="hover:underline">Communities</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Learn</h3>
          <div className="text-sm">
            <ul>
              <li className="mb-2">
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#videos" className="hover:underline">Videos</a>
              </li>
              <li className="mb-2">
                <a href="#webinars" className="hover:underline">Webinars</a>
              </li>
              <li className="mb-2">
                <a href="#newsletter" className="hover:underline">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mx-12 border-gray-500" />

      <div className="container mx-auto text-center mt-2">
        <div className="flex justify-center space-x-6 text-sm gap-10 text-gray-500">
          <p className="mb-4 text-gray-500">&copy; 2024 Dipu Singh</p>
          <a href="#" className="hover:underline ">English</a>
          <a href="#" className="hover:underline">Terms & Privacy</a>
          <div className="flex gap-2">
            <a href="#" className="hover:text-gray-400"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-gray-400"><Github size={24} /></a>
            <a href="#" className="hover:text-gray-400"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-400"><Youtube size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
