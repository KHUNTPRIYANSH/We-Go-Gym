import React from "react";
import "../../styles/Contact.css";
import SecHead from "../../components/SecHead";
const Contact = () => {
  return (
    <section id="cont-sec">
      <div id="sec-hd">
        <div className="ttl">contact</div>
        <div className="ttd">
          <div className="co-info">
            <div className="m-title dark">Location:</div>
            <div className="s-title">
              450 NW Couch Street, Portland, Oregon 97209
            </div>
          </div>
          <div className="co-info">
            <div className="m-title dark">Email us:</div>
            <div className="s-title">name@email.com</div>
          </div>
          <div className="co-info">
            <div className="m-title dark">Call us:</div>
            <div className="s-title">+ (123) 1800-567-8990</div>
          </div>
        </div>
        <div id="cor-a" className="hd-arr">
          <img src="./imgs/3.png" alt="" />
        </div>
      </div>
      {/* <div id="con-frm">
        <form action="">
          <div id="fm-title">Send us a message:</div>
          <div id="fm-r1">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="example@gmail.com" />
            <input type="text" placeholder="Enter subject here" />
          </div>
          <textarea name="msg" id="fm-msg" cols="30" rows="10"></textarea>
          <div>
            <img src="./imgs/b-arr.png" alt="" />
            Join Now
          </div>
        </form>
      </div> */}
      <div></div>
      <iframe
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=22.30416898352206,%2070.80021655568423+(rajkot)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7392.273796254203!2d70.809366!3d22.303095!5m3!1i1224!2i568!4f23.1!9m3!9m1!1s2x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!9e0!3m2!2sen!2sin!4v179496543017!9m2!1sen!2sin" //maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=22.30416898352206,%2070.80021655568423+(rajkot)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47905.40423981137!2d70.78358679777494!3d22.29763554817173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1679496345466!5m2!1sen!2sin"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13405.72973415212!2d70.79628958185052!3d22.28200416505744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1679389812376!5m2!1sen!2sus"
        width="100%"
        height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
