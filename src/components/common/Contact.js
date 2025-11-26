"use client";

import Image from "next/image";
import ContactImage from "/public/assets/contact-image.png";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { usePostData } from "@/hooks/usePostData";
import { useSelector } from "react-redux";
import { translations } from "@/utils/translations";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const productOptions = [
  "WhatsApp Queuing",
  "Queue Management System",
  "WhatsApp Appointment",
  "WhatsApp Marketing Conversation",
  "Digital Signage Solution",
  "Other",
];

export default function Contact({ data }) {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    products: [],
  });
    const [phone, setPhone] = useState("");


  let language = useSelector((state) => state.language.lang);
  const translate = translations[language == "" ? "en" : language];

  const { post, datas, error, isLoading, isError, isSuccess } = usePostData();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  // Handle checkbox selection
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormValues((prev) => {
      let products = [...prev.products];
      if (checked) products.push(value);
      else products = products.filter((p) => p !== value);
      return { ...prev, products };
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (
      !formValues.fname ||
      !formValues.lname ||
      !formValues.email ||
      !formValues.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      fields: [
        { name: "firstname", value: formValues.fname },
        { name: "lastname", value: formValues.lname },
        { name: "email", value: formValues.email },
        { name: "phone", value: phone },
        { name: "message", value: formValues.message },
        { name: "products", value: formValues.products.join(", ") },
      ],
    };
    console.log(payload);
    post(
      {
        url: "https://api.hsforms.com/submissions/v3/integration/submit/244100998/ccfdc585-4204-4133-81ff-a5653b089f6a",
        payload,
      },
      {
        onSuccess: () => {
          setFormValues({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            message: "",
            products: [],
          });
          setPhone("+1");
          // SUCCESS TOAST
          toast.success("Form has been submitted successfully!");
        },
        onError: (error) => alert("Error: " + error.message),
      }
    );
  };

  return (
    <section className="w-full bg-background pt-16">
      <div className="grid grid-cols-1  gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: Image */}
        <div className="order-2 lg:order-1 h-full">
          {/* <div className="relative h-full overflow-hidden"> */}
          <Image
            src={data?.images?.[0] || ContactImage}
            alt="Contact"
            width={600}
            height={500}
            className="h-full w-full object-fit-cover"
            priority
          />
          {/* </div> */}
        </div>

        {/* Right: Form */}
        <div className="h-full order-1 lg:order-2 flex w-full flex-col justify-center  px-0 lg:px-6">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-medium text-black-two leading-tight mb-4">
              {/* Let’s level up your <br /> brand, together */}
              {translate?.title}
              {/* {translations[language=="" ? "en" : language].title} */}
            </h2>
            <p className="mt-2 text-xl font-normal text-accent">
              {translate?.subtitle || "You can reach us anytime vias"}{" "}
              <a
                href="mailto:sales@wavetec.com"
                className="text-blue underline"
              >
                {translate?.email || "sales@wavetec.comm"}
              </a>
            </p>
          </div>

          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fname"
                  className="mb-1 block text-sm font-medium text-[#414651] dark:text-[#CECFD2]"
                >
                  {translate?.firstname || "First name"}
                  <span className="text-blue">*</span>
                </label>
                <input
                  id="fname"
                  type="text"
                  value={formValues.fname}
                  onChange={handleChange}
                  required
                  placeholder="First name"
                  className="w-full rounded-lg font-normal text-base border border-[#D5D7DA] p-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white placeholder:text-[#717680] dark:placeholder-[#85888E]"
                />
              </div>

              <div>
                <label
                  htmlFor="lname"
                  className="mb-1 block text-sm font-medium text-[#414651] dark:text-[#CECFD2]"
                >
                  {translate?.lastname || "Last name"}
                  <span className="text-blue">*</span>
                </label>
                <input
                  id="lname"
                  type="text"
                  value={formValues.lname}
                  onChange={handleChange}
                  required
                  placeholder="Last name"
                  className="w-full rounded-lg font-normal text-base border border-[#D5D7DA] p-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white placeholder:text-[#717680] dark:placeholder-[#85888E]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-[#414651] dark:text-[#CECFD2]"
              >
                {translate?.emailText || "Email"}
                <span className="text-blue">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className="w-full rounded-lg font-normal text-base border border-[#D5D7DA] p-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white placeholder:text-[#717680] dark:placeholder-[#85888E]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-[#414651] dark:text-[#CECFD2]"
              >
                {translate?.phone || "Phone number"}
              </label>
              {/* <input
                id="phone"
                type="tel"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-lg font-normal text-base border border-[#D5D7DA] p-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white placeholder:text-[#717680] dark:placeholder-[#85888E]"
              /> */}
              <PhoneInput
                id="phone"
                name="phone"
                country={"us"}
                  value={phone}
                   buttonStyle={{
          backgroundColor: '#fff', // country dropdown background
          padding: '0 5px',         // adjust padding
          borderRight: 'none',  
          hover: { backgroundColor: 'red' },
          
        }}
                  
        onChange={(value) => setPhone(value)}
                inputClass="!w-full !h-[48px] !text-base !rounded-lg !border font-normal !bg-transparent !border-[#D5D7DA] dark:!border-[#373A41] dark:!text-white placeholder:text-[#717680] dark:placeholder-[#85888E]"
                buttonClass="!rounded-l-lg !border-[#D5D7DA] !bg-transparent dark:!border-[#373A41] dark:hover:!bg-transparent"
                containerClass="!w-full :hover:!bg-transparent"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-[#414651] dark:text-[#CECFD2]"
              >
                {translate?.message || "Message"}
                <span className="text-blue">*</span>
              </label>
              <textarea
                id="message"
                value={formValues.message}
                onChange={handleChange}
                required
                placeholder="Leave us a message..."
                className="w-full h-28 resize-none rounded-lg font-normal text-base border border-[#D5D7DA] p-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white placeholder:text-[#717680] dark:placeholder-[#85888E]"
              />
            </div>

            <div>
              <label className="mb-4 block text-sm font-medium text-[#414651] dark:text-[#CECFD2]">
                {translate?.products || "Products"}
                <span className="text-blue">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(translate?.productOptions || productOptions).map((option) => (
                  <label
                    key={option}
                    className="inline-flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={formValues.products.includes(option)}
                      onChange={handleCheckbox}
                      className="w-5 h-5 rounded-lg text-blue-600 focus:ring-blue-500 border-[#D5D7DA] dark:border-[#373A41] dark:bg-gray-700"
                    />
                    <span className="text-base font-medium text-[#414651] dark:text-[#CECFD2]">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer mb-7 rounded-md py-3 font-medium text-white btn-primary-color transition"
            >
              {isLoading ? "Submitting..." : translate?.submit || "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
