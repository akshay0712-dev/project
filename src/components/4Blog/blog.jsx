import React, { useState } from "react";
import Post from "./blogsApi";

const Blog = () => {
  const topics = {
    All: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    economy: [9, 11, 12],
    health: [2, 5, 8, 12],
    tech: [1, 3, 4, 6, 11, 13, 14],
    sports: [4],
    future: [2, 3, 6, 12, 13],
    education: [5, 9, 12],
    sustainable: [7, 10],
  };
  
    const [topic, setTopic] = useState(topics.All);

  const toggleTopics = (topicName) => {
    setTopic(topics[topicName]);
  };

  const setBlog = (id) => {
    setTopic([id])
  }

  return (
    <>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 right-0 mt-8 md:mr-7 mx-auto w-[90vw] md:w-[60vw] ">
        {Object.keys(topics).map((topicList) => {
          return (
            <div key={topicList} className="group md:relative">
              <div
                className="font-normal text-lg capitalize cursor-pointer bg-slate-600 py-1 px-5 border border-white rounded-lg text-white topicList"
                onClick={(e) => toggleTopics(topicList)}
              >
                {topicList}
              </div>
              <div className={`absolute z-10 px-5 right-5 md:right-0 py-3 hidden group-hover:block  bg-slate-500 rounded-lg text-white max-w-[90vw] md:max-w-[50vw] `} >
                <div className="bg-slate-500 text-white font-bold text-xl uppercase">{topicList}</div>
                {topics[topicList].map((index) => {
                    return(
                        <div key={index}
                        className="text-sm md:text-base bg-slate-500 overflow-hidden text-nowrap text-ellipsis pt-2 hover:scale-105 hover:font-semibold cursor-pointer"
                        onClick={() => setBlog(index)}
                        dangerouslySetInnerHTML={{ __html: "⁘ "+Post[index - 1].title }}
                      ></div>
                    )
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="">
        {topic.map((index) => {
          return (
            <div key={Post[index - 1].id} className="md:my-5  p-6">
              <div
                className="text-center py-3 text-xl md:text-2xl font-bold"
                dangerouslySetInnerHTML={{ __html: Post[index - 1].title }}
              ></div>
              <div
                className="text-base font-medium"
                dangerouslySetInnerHTML={{
                  __html: Post[index - 1].content[0].mainHead,
                }}
              ></div>
              {Post[index - 1].content[0].subhead.map((head2) => {
                return (
                  <div key={head2.heading} className="">
                    <div
                      className="text-lg md:text-xl font-bold pt-5 pb-1"
                      dangerouslySetInnerHTML={{ __html: head2.heading }}
                    ></div>
                    <ol className="list-[number] pl-6 pb-5">
                      {head2.body.map((body2) => {
                        return (
                          <li
                            key={body2}
                            className=""
                            dangerouslySetInnerHTML={{ __html: body2 }}
                          ></li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })}
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: Post[index - 1].content[0].footer,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
