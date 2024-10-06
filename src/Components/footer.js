import { GiFalconMoon } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";


function Footer() {
      return (

            <>
                  <div className="col align-content-end text-center justify-content-centerw-100 " style={{ backgroundColor: "azure" }}>

                        <h1 className="mb-5 m-3 text-center fs-1 fw-bold " > <GiFalconMoon />Task Manegar</h1>
                        <h2 className="m-5  text-center ">subscribe to our website</h2>
                        <div className="  d-flex justify-content-center align-items-center ">
                              <div className="input-group mb-3 col-md-3 w-50 " >
                                    <input type="text" className="form-control  " placeholder="your email" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <button className="btn " type="button" id="button-addon2" style={{ backgroundColor: "#6b71e0" }}>Subscribe</button>
                              </div>
                        </div>

                        <div className="row fs-4  d-flex justify-content-center align-items-center">
                              <div className="col " >
                                    <h3 className="fs-2">Product</h3>
                                    <a className="text-decoration-none d-block" style={{ color: 'black' }} href="#">Features</a>
                                    <a className="text-decoration-none d-block" style={{ color: 'black' }} href="#">Pricing</a>

                              </div>
                              <div className="col " >
                                    <h3 className="fs-2">Resources</h3>
                                    <a className="text-decoration-none d-block" style={{ color: 'black' }} href="#">Blog</a>
                                    <a className="text-decoration-none d-block" style={{ color: 'black' }} href="#">User guides</a>
                                    <a className="text-decoration-none d-block" style={{ color: ' black' }} href="#">Webinars</a>
                              </div>
                              <div className="col " >
                                    <h3 className="fs-2">Company</h3>
                                    <a className="text-decoration-none d-block" style={{ color: 'black' }} href="#">Contact us</a>
                              </div>

                              <div >

                                    <div className=" col m-3">
                                          <a href="#" className="text-decoration-none d-inline" style={{ color: 'black' }}>  <FaTwitter style={{ color: "#1DA1F2" }} /> </a>

                                          <a href="#" className="text-decoration-none d-inline" style={{ color: 'black' }}> <FaFacebook style={{ color: "#1877F2" }} /> </a>

                                          <a href="#" className="text-decoration-none d-inline" style={{ color: 'black' }}> <IoLogoLinkedin style={{ color: "#0077B5" }} /> </a>

                                          <a href="#" className="text-decoration-none d-inline" style={{ color: 'black' }}> <FaYoutube style={{ color: "#FF0000" }} />  </a>
                                    </div>
                                    <p >
                                          © 2024 Brand. inc <a className="text-decoration-none" style={{ color: 'black' }} href="#"> • Privacy </a> <a className="text-decoration-none" style={{ color: 'black' }} href="#">• Terms </a> <a className="text-decoration-none" style={{ color: 'black' }} href="#">• Sitemap </a>
                                    </p>
                              </div>
                        </div>
                  </div>

            </>
      );
}

export default Footer;