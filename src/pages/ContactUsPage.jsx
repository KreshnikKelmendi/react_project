import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactUsPage = () => {
    return(
          <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 py-2">
                        <p>Contact us today to learn more about our products. 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Animi veritatis, harum sequi repellendus inventore dignissimos 
                            incidunt iusto! Labore consequatur beatae odit vero earum, hic 
                            doloremque a, maiores, sunt omnis velit!
                            Send us your email inquiries at <b>info@swisswatches.com</b></p>
                    </div>
                    <div className="container-fluid">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="First" />
                        <input type="text" id="name" name="surname" placeholder="Last" />
                    </div>
                    <div className="container-fluid py-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="container-fluid py-2">
                        <label htmlFor="number">Phone:</label>
                        <input type="number" id="number" />
                    </div>
                    <div className="container-fluid py-2">
                        <label htmlFor="textarea">Comment or Message:</label>
                        <textarea id="textarea" name="textarea" rows={3} cols={30}/>
                    </div>
                    <div className="container-fluid py-2">
                        <button className="btn btn-dark">Submit</button>
                    </div>
                    <Footer />
                </div>
            </div>
          </>
    )
}

export default ContactUsPage;