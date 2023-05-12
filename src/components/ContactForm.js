import "./ContactFormStyles.css"

function ContactForm() {
    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form action="/">
                <input type="text" placeholder="Type your name" />
                <input type="email" placeholder="Type your e-mail" />
                <input type="text" placeholder="Type your Subject" />
                <textarea type="text" placeholder="Type Your message" rows="4" />
                <button>Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm