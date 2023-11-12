"use client";
import { useCreateContact } from "@/utils/api/ApiUtils";
import { AxiosError } from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

enum ContactFieldTypes {
  name = "name",
  email = "email",
  message = "message",
}

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useState<ContactFormProps>(initialFormValues);
  const { isError, isLoading, mutate, data } = useMutation({
    mutationFn: useCreateContact,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOnChange = (value: string, type: ContactFieldTypes) => {
    setContact((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutate({
      name: contact.name,
      email: contact.email,
      message: contact.message,
    });
    if (isLoading) {
      setContact(initialFormValues);
    }
  };

  useEffect(() => {
    if (data) {
      setErrorMessage(data.message);
    }
    if (isError) {
      setErrorMessage("Something went wrong!");
    }
  }, [data, isError]);

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={contact.name}
            onChange={(e) =>
              handleOnChange(e.target.value, ContactFieldTypes.name)
            }
            type="text"
            id="fullName"
            placeholder="Viraj Lakshitha"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={contact.email}
            onChange={(e) =>
              handleOnChange(e.target.value, ContactFieldTypes.email)
            }
            type="text"
            id="email"
            placeholder="viraj@example.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            value={contact.message}
            onChange={(e) =>
              handleOnChange(e.target.value, ContactFieldTypes.message)
            }
            className="h-32"
            id="message"
            placeholder="Type your message here..."
          />
        </div>

        <button
          className="bg-green-700 font-bold text-white p-3"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
      {isError ||
        (errorMessage && (
          <div className="flex bg-slate-100 flex-col">
            <div className="text-red-600 px-5 py-2">Error: {errorMessage}</div>
          </div>
        ))}
    </>
  );
}
