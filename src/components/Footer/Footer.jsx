import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
        <p>© 2022 | GymTube</p>
       
        <p>
          Made with{" "}
          <span className="odd-color-text">
            <i className="fas fa-code" />
          </span>{" "}
          by Sumit Kr Singh
        </p>
        </div>
        <ul className="nav-icon-center">
          <li class-items-text="">
            <a href="https://www.linkedin.com/in/sumit-kr-singh-a94b56228/">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
          <li class-items-text="">
            <a href="https://twitter.com/sumitsi79994403">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li class-items-text="">
            <a href="https://github.com/sumitk-singh">
              <i className="fa-brands fa-github" />
            </a>
          </li>
        </ul>
       
      </footer>
    </>
  )
}

export default Footer;