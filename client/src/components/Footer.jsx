import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">PropertEase LLC</h2>
            <p className="text-sm">1234 Street Address, Dallas, Texas, 12345</p>
            <p className="text-sm">
              Email: info@company.com | Phone: (123) 456-7890
            </p>
          </div>
          <div className="text-center md:text-right">
            <ul className="list-none">
              {/* <li className="inline-block mx-2">
                <a href="/contact" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li> */}
              <li className="inline-block mx-2">
                <Link to="/policy">
                  <li className="text-center md:text-right">Policy</li>
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link to="/terms">
                  <li className="text-center md:text-right">
                    Terms and Conditions
                  </li>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} PropertEase LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
