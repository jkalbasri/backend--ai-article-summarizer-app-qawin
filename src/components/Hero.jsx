import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="s_logo" className="w-20 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/jkalbasri/backend--ai-article-summarizer-app-qa",
              "_blank"
            )
          }
          className="black_btn"
        >
           <i class="fa-lg fa fa-github" ></i> GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles Using
        <span className="txt_gradient "> AI</span>
      </h1>
      <h2 className="desc">
      QAWIN is an open-source article summarizer, simplifies your reading by transforming lengthy articles into clear, concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
