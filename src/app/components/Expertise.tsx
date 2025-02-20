import {
  ActivitySquareIcon,
  BoxIcon,
  LayoutDashboardIcon,
  ActivityIcon,
} from "lucide-react";
import React from "react";
import CardExpertise from "./CardExpertise";

const data = [
  {
    title: "Strategy and Direction",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: BoxIcon,
  },
  {
    title: "Branding & Logo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: ActivityIcon,
  },
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Web Application",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam illo dicta libero aliquam perspiciatis sequi?",
    icon: ActivitySquareIcon,
  },
];

const Expertise = () => {
  return (
    <section className="container m-auto mb-40 px-4 py-16 md:py-24">
      <p className="font-semibold">My skills</p>
      <p className="mt-4 text-5xl font-semibold">My Expertise</p>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Card */}
        {/* {data.map((item, index) => {
          return (
            <CardExpertise
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          );
        })} */}
        {data.map((item, index) => (
          <CardExpertise
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
