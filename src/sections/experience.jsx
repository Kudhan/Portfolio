import React from "react";
import { TimelineGraph } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "Labmentix · May 2025 – Present",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-neutral-800 dark:text-neutral-200 font-medium">
            Full Stack Developer (React, Node.js) Intern
          </p>
          <p className="mb-6 text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            Deployed multiple real-time projects as part of my internship.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://spreadsheetsph.com/cdn/shop/products/PersonalFinanceTrackerPost.png?v=1706669716"
              alt="Finance Glance Project"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://www.constructionplacements.com/wp-content/uploads/2019/03/project-management.jpg.webp"
              alt="Collab Sphere Project"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://notarypublicunderwriters.com/images/blogs/multiple-document-signers-blog.png"
              alt="Doc Signer Project"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://play-lh.googleusercontent.com/MDRjKWEIHO9cGiWt-tlvOGpAP3x14_89jwAT-nQTS6Fra-gxfakizwJ3NHBTClNGYK4"
              alt="Reddit Clone Project"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "APSSDC · May 2025 – Present",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-neutral-800 dark:text-neutral-200 font-medium">
            Summer Intern - Data Analytics with Python (By APSSDC)
          </p>
          <p className="mb-6 text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            Gained hands-on experience with real-world datasets and Python libraries.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.allaboutai.com/wp-content/uploads/2025/03/AAAI-AI-Keyword-Research-for-Pets-Team-Usage-3-2.webp"
              alt="Web Traffic Analysis"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230510174745/Data-Analysis-with-Python.webp"
              alt="Data Analytics with Python"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXoLmdIPXw5AEhXeGLrPg5FzORp7y5vDdf9tTEgVwi60d7gpnqJ6eK5c6At7oneZjR-8&usqp=CAU"
              alt="Exploratory Data Analysis"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://img-c.udemycdn.com/course/750x422/4729170_1eb1.jpg"
              alt="Python Libraries"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Industrial Training · Dec 2022 – Jun 2023",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg text-neutral-800 dark:text-neutral-200 font-medium">
            Gained first-hand experience in real-time industrial projects and collaboration.
          </p>
          <div className="mb-6 space-y-1">
            {[
              "✅ Industry-level skill development",
              "✅ Real-time project execution",
              "✅ Led a team of 8 members",
              "✅ Achieved 97% project success rate",
              "✅ Improved networking & communication",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm md:text-base text-neutral-700 dark:text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://dezyre.gumlet.io/images/blog/fake-news-detection-project/Fake_News_Detection_Project.png?w=576&dpr=1.3"
              alt="Fake News Detection"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://thetalentgames.com/wp-content/uploads/2024/02/Soft-Skills-_edit.png"
              alt="Soft Skills Training"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240501161048/SQL-Databases.png"
              alt="SQL Database"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://miro.medium.com/v2/resize:fit:602/1*bO6lRwKN8TlPhEbxNTHhAA.png"
              alt="Python with Machine Learning"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip pb-16">
      <TimelineGraph data={data} />
    </div>
  );
}
