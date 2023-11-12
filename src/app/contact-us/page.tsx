import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactUs() {
  return (
    <div className="p-4 max-w-3xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill the form below</p>
      <ContactForm />
    </div>
  );
}