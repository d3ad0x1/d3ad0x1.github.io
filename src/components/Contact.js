export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-[1400px] mx-auto bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-textHeading mb-6">
        Contact
      </h2>
      <p className="text-textMuted mb-4">
        Feel free to reach out via email:{" "}
        <span className="text-primary font-medium">
          nikki.solution@gmail.com
        </span>
      </p>
      <p className="text-textMuted">
        Or connect on social media:
        <span className="text-primary ml-2 font-medium">
          GitHub / LinkedIn
        </span>
      </p>
    </section>
  );
}
