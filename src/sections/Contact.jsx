import { Element } from "react-scroll";
import { logos } from "../constants/index.jsx";

const Contact = () => {
  return (
    <section>
      <Element
        name="contact"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center gap-10 max-lg:flex-col">
            <div className="relative flex-1">
              <div className="mb-10">
                <h3 className="h3 text-p4 mb-6">Let&apos;s Build Something Amazing</h3>
                <p className="body-1 text-p3 mb-10 max-w-md">
                  Ready to transform your digital presence? Contact Techode Labs today for a free consultation.
                </p>
              </div>

              <form className="flex flex-col gap-6 max-w-md">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="base-bold text-p4">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full rounded-xl border-2 border-s5 bg-s1 px-5 py-3 text-p4 placeholder-p4/50 focus:border-p1 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="base-bold text-p4">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border-2 border-s5 bg-s1 px-5 py-3 text-p4 placeholder-p4/50 focus:border-p1 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="base-bold text-p4">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl border-2 border-s5 bg-s1 px-5 py-3 text-p4 placeholder-p4/50 focus:border-p1 focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="g4 flex items-center justify-center rounded-xl py-4 text-p1 transition-all hover:brightness-110 active:scale-95"
                >
                  <span className="base-bold uppercase">Send Message</span>
                </button>
              </form>
            </div>

            <div className="flex-1 max-lg:w-full max-lg:mt-10">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6 max-lg:w-full">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen2.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl w-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
export default Contact;
