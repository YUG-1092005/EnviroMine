import React from "react";
import "./About.css";

const About = () => {
  return (
    <div class="about-container">
      <table className="about-table">
        <tr>
          <td>
            <h1 className="about-h1">About Us</h1>
          </td>
        </tr>
      </table>

      <div class=".about-section">
        <div className="about-images">
          <img src="/abt-1.jpeg" alt="about-images-1"/>
          <img src="/abt-2.jpeg" alt="about-images-2"/>
        </div>
        <p class="custom-paragraph" style={{marginTop:"1rem"}}>
          We have created a web-based Carbon Emission Monitoring System to
          measure carbon emissions across all phases of mining operations. The
          system includes Carbon Footprint Quantification, emission tracking,
          and transportation. We have established a framework for transparent
          and standardized reporting of emissions.
        </p>

        <div class=".about-section">
          <ul className="about-ul">
            <li>
              <strong>Integrated Emission and Offset Calculation:</strong>{" "}
              Unlike traditional tools that only estimate emissions, our
              solution uniquely combines both emission calculation and carbon
              offset strategies, providing a comprehensive view of environmental
              impact. Users can also calculate emissions on a per capita basis
              to understand individual contributions within the mine.
            </li>
            <li>
              <strong>Data Visualization:</strong> Visualize emission trends
              over time with charts and graphs, aiding in tracking progress
              towards carbon neutrality.
            </li>
            <li>
              <strong>AI Chatbot Integration:</strong> An AI-powered chatbot
              provides real-time assistance, answering queries related to coal
              mining emissions, reduction strategies, and compliance with the
              Ministry of Coal's guidelines.
            </li>
          </ul>
        </div>

        <div class="box">
          <h2 className="about-h2">Future Goals</h2>
          <ul className="about-ul">
            <li>
              <strong>Coal Emission Calculations:</strong> Integrate detailed
              algorithms to calculate emissions from various coal types,
              focusing on factors such as coal quality, burn efficiency, and
              emission control measures.
            </li>
            <li>
              <strong>Coal Factory Enhancements:</strong> Develop modules to
              monitor and optimize emissions specifically from coal factories.
              This includes adding features for factory improvements, predictive
              analytics for emission reduction, and best practices for clean
              coal technology.
            </li>
            <li>
              <strong>User-Friendly Reporting:</strong> Create automated
              reporting tools that provide comprehensive insights into emissions
              data and sustainability metrics, making it easier for stakeholders
              to understand and act on the information.
            </li>
            <li>
              <strong>Mobile Optimization:</strong> Enhance the application for
              mobile devices, ensuring a responsive design and intuitive user
              interface for on-the-go monitoring and management.
            </li>
            <li>
              <strong>User Authentication:</strong> Introduce secure
              authentication and authorization mechanisms to ensure data privacy
              and controlled access to sensitive information.
            </li>
          </ul>
        </div>

        <div class="box">
          <h2 className="about-h2">About Our Carbon Calculator</h2>
          <p class="custom-paragraph">
            A carbon calculator is a tool designed to estimate the amount of
            carbon dioxide (CO2) emissions produced by an individual,
            organization, or activity. It helps users understand their carbon
            footprint, which is a measure of the total greenhouse gases they are
            responsible for emitting, directly or indirectly. The ultimate goal
            of a carbon calculator is to raise awareness about carbon emissions
            and encourage actions to reduce them.
          </p>
          <p class="custom-paragraph">
            Users provide information related to their activities or operations,
            including excavation tools, electric tools, coal amount, reduction
            percentage, hours worked, fuel consumption, and more. The calculator
            then displays individual or total monthly emissions through
            graphical representations, providing insights and recommendations
            for reducing their carbon footprint.
          </p>
          <p class="custom-paragraph">
            By providing personalized insights, actionable recommendations, and
            tools for tracking and reducing their carbon footprint, this
            software can empower individuals to make informed choices and
            contribute to broader environmental sustainability efforts.
          </p>
          <p class="custom-paragraph">
            <strong>More features coming soon....</strong>
          </p>
        </div>

        <div class="box">
          <h2 className="about-h2">Our Mission</h2>
          <p class="custom-paragraph">
            At EnviroMine, our mission is to empower coal mining companies to
            significantly reduce their carbon footprint. We achieve this through
            innovative technology and comprehensive emission tracking solutions.
            Our goal is to guide the industry towards a greener future by
            offering tools that monitor, manage, and cut emissions effectively.
            We integrate renewable energy solutions and advocate for transparent
            reporting. By doing so, we strive to contribute to a more
            sustainable and carbon-neutral mining sector.
          </p>
        </div>

        <div class="box">
          <h2 className="about-h2">Our Values</h2>
          <p class="custom-paragraph">
            At EnviroMine, our core values drive our commitment to a more
            sustainable and ethical approach in the coal mining industry. We
            prioritize sustainability by advocating for practices that minimize
            carbon emissions and integrate renewable energy. Our drive for
            innovation ensures we use cutting-edge technology to provide
            user-friendly solutions for carbon impact reduction. We uphold
            transparency through clear and honest communication, supported by
            our robust reporting tools. Collaboration is key to our approach, as
            we value strong partnerships and teamwork to achieve shared goals in
            carbon reduction. We lead with responsibility, setting an example
            for making the coal mining sector more sustainable. Finally, we are
            dedicated to integrity, maintaining the highest ethical standards to
            ensure trust and reliability in all our solutions..
          </p>
        </div>

        <div class="box">
          <h2 className="about-h2 ">Team Members</h2>
          <div class="team-member">
            <h3 className="about-h3">Yug Nimesh Trivedi</h3>
          </div>
          <div class="team-member">
            <h3 className="about-h3">Vrajkumar Shaileshbhai Parekh</h3>
          </div>
          <div class="team-member">
            <h3 className="about-h3">Vraj Ashokbhai Parekh</h3>
          </div>
          <div class="team-member">
            <h3 className="about-h3">Yash Mayurkumar Soni</h3>
          </div>
          <div class="team-member">
            <h3 className="about-h3">Vrusha Prakashkumar Patel</h3>
          </div>
          <div class="team-member">
            <h3 className="about-h3">Zainab Tahir Padarwala</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
