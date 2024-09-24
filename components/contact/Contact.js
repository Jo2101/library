//imports, styles, components
import Head from "next/head";

export default function ContactPage({ fields }) {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white overflow-hidden md:flex">
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3375489434513!2d-73.94063118459436!3d40.68877697933467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25af0c3f5b773%3A0x8177e4a283c7b74d!2s750%20Lexington%20Ave%2C%20Brooklyn%2C%20NY%2011221%2C%20USA!5e0!3m2!1sen!2sin!4v1641209958312!5m2!1sen!2sin"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <form className="space-y-6">
              {fields.map((field, index) => {
                if (field.type === "textarea") {
                  return (
                    <div key={index}>
                      <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows="4"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      ></textarea>
                    </div>
                  );
                } else {
                  return (
                    <div key={index}>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                  );
                }
              })}
              <div>
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-gray-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Default props
ContactPage.defaultProps = {
  fields: [
    {
      type: "text",
      name: "name",
      placeholder: "Full Name",
      required: true,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email Address",
      required: true,
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Subject",
      required: true,
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Phone (Optional)",
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Message",
      required: true,
    },
  ],
};
