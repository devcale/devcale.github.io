import React from "react";
import styling from "./ContextualAuthPage.module.css";
import { ProjectMainComponent } from "../../../components/ProjectMain/ProjectMainComponent";
import flowDiagram from "../../../assets/img/projects/contextualauth/flow diagram.png";
import anomalyAlgo from "../../../assets/img/projects/contextualauth/anomaly algorithm.png";
import segmentScreen from "../../../assets/img/projects/contextualauth/segment screen.png";
import testingPage from "../../../assets/img/projects/contextualauth/testing page.png";
import twilioDemo from "../../../assets/img/projects/contextualauth/twilio demo.jpg";

export const ContextualAuthPage = () => {
  return (
    <div>
      <ProjectMainComponent
        title="CONTEXTUAL AUTHENTICATION - AUTHY"
        project="contextualauth"
        categories={[
          "Web Application",
          "Cyber Security",
          "Authentication",
          "Machine Learning",
          "Database Management",
          "Testing",
          "DevOps",
        ]}
        technologies={[
          "Go",
          "Docker",
          "Multi-factor Authentication",
          "Anomaly Detection",
          "AWS DynamoDB",
          "Jest",
          "ReactJS",
          "NestJS",
        ]}
        year="2022"
        role="Software Engineer Intern"
        description="Welcome to the Authy's Contextual Authentication, a groundbreaking project developed during my software engineering internship at Twilio. This innovative endeavor revolutionizes the authentication process by incorporating contextual factors and an anomaly detection algorithm. "
        additional="By leveraging Segment's capabilities and integrating it into Authy's ecosystem, I created a dynamic authentication solution that assesses the risk of login attempts based on the user's behavior, device information, and time intervals between web login and 2FA events. "
        extra="Embrace the future of authentication as we enhance security and user experience through cutting-edge technologies and intelligent risk assessment."
      />

      <div className={styling.gallerySection}>
        <div className={styling.pageSection}>
          <h4 className={styling.pageName}>
            AUTHENTICATION FLOW / CONTEXTUAL RISK ASSESMENT
          </h4>
          <div className={styling.pageContentVert}>
            <div className={styling.pageSmallImgContainer}>
              <img
                className={`${styling.pageImgMed}`}
                src={flowDiagram}
                alt=""
              />
            </div>
            <div className={styling.pageDescriptionMed}>
              The diagram presented here illustrates the seamless and secure
              authentication flow, along with the contextual risk assessment,
              implemented in the project. It provides a visual representation of
              the steps involved in the authentication process, from the user
              inputting their login credentials to the verification of their
              identity through two-factor authentication. Here is an overview of
              each step:
              <div className={styling.orderedListContainer}>
                <ol>
                  <li>
                    The user initiates the authentication process by inputting
                    their login credentials (username and password) into the
                    client's web interface.
                  </li>
                  <li>
                    A JavaScript tracker efficiently captures crucial
                    information from the user's web interface, extracting
                    valuable data related to their session. This information is
                    seamlessly transmitted to Segment, a powerful analytics
                    platform.
                  </li>
                  <li>
                    The Contextual Authentication API, tightly integrated with
                    the Segment platform, receives the transmitted data.
                    Leveraging this contextual information, the API initiates
                    the next steps in the authentication process.
                  </li>
                  <li>
                    The user is prompted to provide a two-factor authentication
                    (2FA) code to further validate their identity.
                  </li>
                  <li>
                    To retrieve the 2FA code, the user unlocks their mobile
                    device and accesses the Authy app. Upon inputting the 2FA
                    code into the web interface, information from the phone is
                    instantly transmitted to the Contextual Authentication API.
                  </li>
                  <li>
                    The contextual authentication system performs a thorough
                    verification process by utilizing an anomaly detection
                    algorithm. This algorithm intelligently assesses the risk
                    associated with the login event, taking into account factors
                    such as time intervals between web login and 2FA events.{" "}
                    <br />
                    <br />
                    This risk assessment provides valuable insights into
                    potential security threats and allows for prompt action to
                    be taken.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className={styling.pageSection}>
          <h4 className={styling.pageName}>SEGMENT USAGE</h4>
          <div className={styling.pageContentVert}>
            <div className={styling.pageSmallImgContainer}>
              <img
                className={`${styling.pageImgMed}`}
                src={segmentScreen}
                alt=""
              />
            </div>
            <div className={styling.pageDescriptionMed}>
              <p>
                Segment plays a pivotal role in the project, serving as a
                powerful analytics platform that seamlessly integrates into the
                authentication system. Its implementation enables the capture
                and processing of vital contextual data, enhancing the overall
                authentication experience.
                <br />
                <br />
                By leveraging Segment's capabilities, the project harnesses the
                insights derived from user interactions on the web interface,
                including login attempts and session data. This rich set of
                information allows for a comprehensive understanding of user
                behavior and aids in making informed decisions during the
                authentication process.
              </p>
            </div>
          </div>
        </div>

        <div className={styling.pageSection}>
          <h4 className={styling.pageName}>E2E TESTING</h4>
          <div className={styling.pageContentVert}>
            <div className={styling.pageSmallImgContainer}>
              <img
                className={`${styling.pageImgMed}`}
                src={testingPage}
                alt=""
              />
            </div>
            <div className={styling.pageDescriptionMed}>
              <p>
                To facilitate end-to-end (E2E) testing of the service, I
                implemented a mock page using React and NestJS, showcasing my
                expertise in both frontend and backend development. This mock
                page served as a powerful tool to simulate user interactions and
                validate the functionality and performance of the service in a
                controlled environment.
                <br />
                <br />
                Leveraging React, I crafted a dynamic and responsive user
                interface that closely resembled the actual service, allowing
                for realistic testing scenarios. In parallel, using NestJS, I
                built a robust backend that seamlessly integrated with the mock
                page, enabling the simulation of various data flows and
                interactions.
                <br />
                <br />
                By implementing this mock page for E2E testing, I demonstrated
                my proficiency in utilizing industry-standard technologies and
                ensuring the reliability and stability of the service throughout
                its development lifecycle.
              </p>
            </div>
          </div>
        </div>

        <div className={styling.pageSection}>
          <h4 className={styling.pageName}>PROJECT DEMO</h4>
          <div className={styling.pageContentVert}>
            <div className={styling.pageSmallImgContainer}>
              <img
                className={`${styling.pageImgMed}`}
                src={twilioDemo}
                alt=""
              />
            </div>
            <div className={styling.pageDescriptionMed}>
              The project demo proved to be an outstanding success, garnering
              praise and admiration from my teammates. The project's ability to
              enhance security without compromising usability was recognized as
              a significant achievement. Their accolades and positive feedback
              served as a testament to my hard work, technical prowess, and
              ability to deliver exceptional results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
