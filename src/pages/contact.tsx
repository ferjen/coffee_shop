import React from "react";
import NavBar from "~/components/NavBar";

function ContactUs() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen items-center justify-center">
        <div className="max-w-2xl rounded-lg border p-16 shadow-lg">
          <h1 className="mb-2 text-5xl font-bold text-yellow-900">
            Contact Us
          </h1>
          <div className="mb-8 text-xl">
            Feel free to reach out to us with any questions or concerns!
          </div>
          <div className="mb-2 flex">
            <div className="mr-28 text-xl font-medium">Email:</div>
            <div className="text-xl">ferjensteve@gmail.com</div>
          </div>
          <div className="mb-2 flex">
            <div className="mr-20 text-xl font-medium">Location:</div>
            <div className="text-xl ">Lopez Jaena Street Jaro Iloilo City</div>
          </div>
          <div className="mb-2 flex">
            <div className="mr-6 text-xl font-medium">Phone Number:</div>
            <div className="text-xl">09123456789</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
