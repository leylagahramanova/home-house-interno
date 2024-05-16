"use client"
import React, { useState } from 'react';
import { TypeCategory, categories } from './questions';
import './Question.css';

import Image from "next/image";
const Question: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<{ categoryId: number | null; questionId: number | null }>({
    categoryId: null,
    questionId: null,
  });

  const toggleQuestion = (categoryId: number, questionId: number) => {
    if (activeQuestion.categoryId === categoryId && activeQuestion.questionId === questionId) {
      setActiveQuestion({ categoryId: null, questionId: null });
    } else {
      setActiveQuestion({ categoryId, questionId });
    }
  };

  return (
    <div className="faq">
      <div className="frequenters">
        <div className="frequenters2">
          {categories.map((category, index) => (
            <div key={category.id} className="frequent">
              {index % 2 === 0 ? (
                <>
                  <div className="category">
                    <h3>{category.category}</h3>
                  </div>
                  <div className="faqs">
                  
                    <div className="rectangles">
                      {category.questions.map((question) => (
                        <div
                          key={question.id}
                          className="rectangle"
                          onClick={() => toggleQuestion(category.id, question.id)}
                        >
                          <div className="qa">
                            <div className="question">
                              <h4 style={{ color: activeQuestion.categoryId === category.id && activeQuestion.questionId === question.id ? '#CDA274' : '#292F36' }}>
                                {question.question}
                              </h4>
                            </div>
                            {activeQuestion.categoryId === category.id && activeQuestion.questionId === question.id && (
                              <div className="answer">
                                <p>{question.answer}</p>
                              </div>
                            )}
                          </div>
                          <div className={`arrow ${activeQuestion.questionId === question.id ? 'activearrow' : ''}`} />
                        </div>
                      ))}
                    </div>
                    <div className="frequenters-image">
                      <Image src={category.image} alt={`${category.category} Image`} />
                    </div>
                  </div>
                </>
              ) :  
               <>
              <div className="category">
                <h3>{category.category}</h3>
              </div>
              <div className="faqs">
                <div className="frequenters-image">
                  <Image src={category.image} alt={`${category.category} Image`} />
                </div>
                <div className="rectangles">
                  {category.questions.map((question) => (
                    <div
                      key={question.id}
                      className="rectangle"
                      onClick={() => toggleQuestion(category.id, question.id)}
                    >
                      <div className="qa">
                        <div className="question">
                          <h4 style={{ color: activeQuestion.categoryId === category.id && activeQuestion.questionId === question.id ? '#CDA274' : '#292F36' }}>
                            {question.question}
                          </h4>
                        </div>
                        {activeQuestion.categoryId === category.id && activeQuestion.questionId === question.id && (
                          <div className="answer">
                            <p>{question.answer}</p>
                          </div>
                        )}
                      </div>
                      <div className={`arrow ${activeQuestion.questionId === question.id ? 'activearrow' : ''}`} />
                    </div>
                  ))}
                </div>
              </div>
            </>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
