export default function FaqPage() {
  return (
    <>
      <div id="faq">
        <h2>Sık Sorulan Sorular</h2>
        <div className="question">
          <h4>Question 1: How do I enroll in a course?</h4>
          <p>
            Simply browse our course catalog, pick the one you like, and click
            "Enroll". You'll get instant access to all the materials.
          </p>
        </div>

        <div className="question">
          <h4>Question 2: Can I access courses on mobile?</h4>
          <p>
            Absolutely! Our platform is fully responsive — you can learn on your
            phone, tablet, or laptop anytime, anywhere.
          </p>
        </div>

        <div className="question">
          <h4>Question 3: What if I need help during a course?</h4>
          <p>
            We’ve got your back. Visit our Help section or contact us directly.
            Remember, learning is easier when we tackle challenges together.
          </p>
        </div>
      </div>
    </>
  );
}
