import React from "react";
import "../App.css";
import bannerImage from "../assets/banner-image.png"

const Hero = () => {
  return (
    <section id="hero">
      <div className="container col-xxl-8 px-1 py-1">
        <div className="row flex-lg-row-reverse justify-content-center align-items-center py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={bannerImage}
              className="d-block mx-lg-auto img-fluid"
              alt="Hero"
              width="400"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 hero-section">
            <h1 className="display-5 lh-1 mb-3">Sagar</h1>
            <h1 className="display-5 lh-1 mb-3">Panchariya</h1>
            <p><strong>Web Developer and Designer</strong></p>
            <p className="lead">
              Welcome to this portfolio. Passionate about web development and design, 
              specializing in creating sleek, modern websites with a tech-forward approach.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <div className="socialmedia-button">
                {/* Instagram */}
                <button className="button">
                  <a
                    href="https://www.instagram.com/sagar_panchariya_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                      <path
                        clipRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        fillRule="evenodd"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </button>
                {/* WhatsApp */}
                <button className="button" style={{ background: "#25D366" }}>
                  <a
                    href="https://wa.me/9649613344"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        fillRule="evenodd"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </button>
                {/* LinkedIn */}
                <button className="button">
                  <a
                    href="https://in.linkedin.com/in/sagar-panchariya-1a0a73176"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="24"
                      width="24"
                    >
                      <path
                        fill="#ffffff"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                  </a>
                </button>
                {/* YouTube */}
                <button className="button">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                      <path
                        clipRule="evenodd"
                        d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </button>
                {/* GitHub */}
                <button className="button">
                  <a
                    href="https://github.com/jimmy01010011"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-800 dark:text-white"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
