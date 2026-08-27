import { motion } from "motion/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess(false);
    setError(false);

    // Form se name aur email lena
    const formData = new FormData(form.current);

    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");

    try {
      // EmailJS
      await emailjs.sendForm(
        "service_r1z7mpi",
        "template_ua1nirq",
        form.current,
        {
          publicKey: "2qA136a-WFLTesxxx",
        },
      );

      // Sirf NAME aur EMAIL Local Storage me save honge
      localStorage.setItem(
        "contactUser",
        JSON.stringify({
          name: userName,
          email: userEmail,
        }),
      );

      setSuccess(true);

      // Form clear
      form.current.reset();

      // Success message 4 seconds baad hide
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(true);

      // Error message 4 seconds baad hide
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="section-label">
          <span>04</span>
          CONTACT
        </div>

        <div className="contact-layout">
          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              amount: 0.2,
            }}
          >
            <p className="mini-title">HAVE A PROJECT?</p>

            <h2>
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span>GREAT.</span>
            </h2>

            <p className="contact-description">
              Have an idea or want to work together? Send me a message and let's
              talk.
            </p>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            ref={form}
            className="contact-form"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              amount: 0.2,
            }}
            onSubmit={sendEmail}
          >
            {/* NAME */}
            <label>
              NAME
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
            </label>

            {/* EMAIL */}
            <label>
              EMAIL
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
              />
            </label>

            {/* MESSAGE */}
            <label>
              MESSAGE
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              />
            </label>

            {/* SEND BUTTON */}
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}

              <span>↗</span>
            </button>

            {/* SUCCESS */}
            {success && (
              <p className="success-message">✓ Message sent successfully!</p>
            )}

            {/* ERROR */}
            {error && (
              <p className="error-message">
                ✕ Message failed. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
