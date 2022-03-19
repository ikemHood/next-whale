import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
      <div className="faq">
        <div className="title" data-aos="fade-up">
          <h1>FAQs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            itaque veniam laudantium, quam quas dolor tempora eligendi officia
            sequi. Iusto.
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
  );
};

export default Faq;
