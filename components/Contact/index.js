import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => (
  <section className="contact-area section-padding-100-0">
    <div className="container">
      <div className="row justify-content-between">
        {/*<!-- Contact Content -->*/}
        <div className="col-12 col-lg-5">
          <div className="contact-content mb-100">
            {/*<!-- Section Heading -->*/}
            <div className="section-heading">
              <p>Contact now</p>
              <h2>
                <span>Get In Touch</span> With Us
              </h2>
              <img src={require("../../img/core-img/decor.png")} alt="" />
            </div>
            {/*<!-- Contact Form Area -->*/}
            <div class="contact-form-area">
              <Form>
                <div class="row">
                  <div class="col-lg-6">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                      name="name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="email"
                    />
                  </div>
                  <div class="col-12">
                    <Form.Control
                      type="text"
                      placeholder="Your Subject"
                      className="form-control"
                      name="subject"
                    />
                  </div>
                  <div className="col-12">
                    <Form.Control
                      as="textarea"
                      cols="30"
                      rows="6"
                      placeholder="Your Message"
                    />
                  </div>
                  <div className="col-12">
                    <Button type="submit" className="famie-btn">
                      Send Message
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>

        {/*<!-- Contact Maps -->*/}
        <div className="col-lg-6">
          <div className="contact-maps mb-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47706.780655602306!2d25.050249135824522!3d41.64118200549584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1576834988537!5m2!1sen!2sbg"
              allowfullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
