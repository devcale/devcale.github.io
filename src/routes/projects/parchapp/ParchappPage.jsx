import React from "react";
import styling from "./ParchappPage.module.css";
import { ProjectMainComponent } from "../../../components/ProjectMain/ProjectMainComponent";

export const ParchappPage = () => {
  return (
    <div>
      <ProjectMainComponent
        title="PARCHAPP"
        project="parchapp"
        categories={[
          "Mobile App Development",
          "User Experience Design",
          "Software Architecture",
          "Design Thinking",
          "Value Proposition",
          "UI/UX Design",
          "Performance Optimization",
          "Mobile Security",
        ]}
        technologies={["Flutter", "Dart", "Android Studio", "Firebase"]}
        year="2022"
        description="ParchApp is a mobile app developed using Flutter and Dart for my mobile app design and development course.  "
        additional="Through this project, I applied Design Thinking philosophy, Mobile App life cycle, UX/UI, Value proposition, and Architecture concepts to develop an app that allows users to make plans with their friend groups, see the location of their friends, assign budgets for each plan, get suggestions, and more. I also learned about architectures and patterns for mobile applications, local and external storage, eventual connectivity management, and best practices for performance, which I applied to optimize the architecture of the app for mobile operating systems."
        extra="The result was a seamless app with a user-friendly interface and optimal performance, reflecting my skills in mobile app development and my ability to apply these skills to create innovative solutions."
      />
    </div>
  );
};
