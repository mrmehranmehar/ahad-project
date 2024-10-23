function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12  bottom-0 left-0 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p>
              C2tec is dedicated to enhancing coding skills and fostering a community of developers. Our platform offers resources, tutorials, and mentorship to guide you on your coding journey.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links</h3>
            <ul>
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="/Courses" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
     
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <ul>
              <li><a href="https://www.tiktok.com/@aiwork1?_t=8qmanIiaZqz&_r=1" className="hover:text-white">TikTok</a></li>
              <li><a href="https://www.linkedin.com/in/habiba-rao-233b5032b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://github.com/mrmehranmehar" className="hover:text-white">Github</a></li>
              <li><a href="" className="hover:text-white">Portfolio</a></li>
              <li><a href="https://www.instagram.com/itsmehar1409/profilecard/?igsh=bnBhM2llcmpzNW1u" className="hover:text-white">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100044537768659&mibextid=ZbWKwL" className="hover:text-white">FaceBook</a></li>
              </ul>
          </div>
  
         
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:contact@c2tec.com" className="hover:text-white">habibaashrafrao34@gmail.com</a></p>
            <p>Phone: <span className="hover:text-white">0307-2111404</span></p>
          </div>
        </div>
        <p className="flex justify-center p-2">© 2024 C2tec - Master the Craft of Coding.</p>
      </footer>
    );
  }
  
  export default Footer;
  