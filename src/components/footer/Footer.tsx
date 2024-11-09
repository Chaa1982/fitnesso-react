import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="first-floor">
         <div className="img"></div>
        <div className="ul-wrap">
          <ul>
            <li className="title">contact</li>
            <li className="email">contact@fitnesso.com</li>
          </ul>
          <ul>
            <li className="title">Licensing</li>
            <li>Copyright Flow Ninja</li>
            <li>Powered By Webflow</li>
            <li>Licensing</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="title">Explore</li>
            <li>Premium Courses</li>
            <li>Free Courses</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="second-floor">
        <div className="small-logo small-logo1"></div>
        <div className="small-logo small-logo2"></div>
        <div className="small-logo small-logo3"></div>
        <div className="small-logo small-logo4"></div>
        <div className="small-logo small-logo5"></div>
      </div>
    </div>
  );
};
