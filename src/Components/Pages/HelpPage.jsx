import { useState } from "react";
import Typography from "../UI/components/Typography";
import Input from "../UI/components/Input";
import Button from "../UI/components/Button";
import Image from "../UI/components/Image";

export default function HelpPage() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const faqs = [
    {
      q: "How do I create an account?",
      a: "Click the Sign Up button on the top right and fill in your details."
    },
    {
      q: "I forgot my password. What should I do?",
      a: "Use the 'Forgot Password' option on the login page to reset it."
    },
    {
      q: "How can I contact support?",
      a: "You can use the contact form below to send us a message."
    }
  ];

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">

      {/* HEADER */}
      <div className="text-center space-y-4">
        <Typography variant="h1" weight="bold" color="primary">
          Help Center
        </Typography>
        <Typography color="secondary">
          Find answers, guides, and contact support
        </Typography>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
          size="xl"
          shape="rounded"
        />
      </div>

      {/* SEARCH */}
      <div>
        <Typography variant="h3" weight="semibold">
          Search Help
        </Typography>
        <Input
          placeholder="Search your question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          width="full"
        />
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        <Typography variant="h3" weight="semibold">
          Frequently Asked Questions
        </Typography>

        {filteredFaqs.length === 0 && (
          <Typography color="muted">No results found.</Typography>
        )}

        {filteredFaqs.map((faq, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <Typography weight="bold">{faq.q}</Typography>
            <Typography size="sm" color="secondary">
              {faq.a}
            </Typography>
          </div>
        ))}
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <Typography variant="h3" weight="semibold">
          Contact Support
        </Typography>

        <Input label="Your Email" type="email" required width="full" />
        <Input
          label="Your Message"
          required
          width="full"
          as="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button variant="primary" size="md">
          Send Message
        </Button>
      </div>
    </div>
  );
}
