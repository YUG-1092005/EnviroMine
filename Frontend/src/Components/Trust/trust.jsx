import React from "react";
import "./trust.css";

const Trust = () => {
  return (
    <div className="trust-container">
      {/* Section Header */}
      <h2 className="section-header">
        🌍 Why Trust Us with Your Sustainability Goals?
      </h2>

      {/* Expertise and Certifications */}
      <section className="section">
        <h3>🔍 Our Expertise</h3>
        <p>
          With our experience in sustainable mining solutions, we ensure
          accuracy and transparency in every calculation. Our operations are for
          environmental management, ensuring compliance with the highest
          international standards.
        </p>
      </section>

      {/* Real-Time Emission Data */}
      <section className="section">
        <h3>📊 Real-Time Emission Data</h3>
        <p>
          We provide real-time data on emissions from coal mining, electricity
          usage, and ventilation systems, ensuring that every metric is
          accurately tracked.
        </p>
        <h3>🔬 Here's the proof of it..</h3>
        <div className="images-container">
          <img src="/data_3.jpeg" alt="Real-Time Emission Data" />
          <img src="/data_2.jpeg" alt="Real-Time Emission Data" />
          <img src="/data.jpeg" alt="Real-Time Emission Data" />
        </div>
        <h3>📈 EnviroMine's answer..</h3>
        <div className="images-container">
          <img src="/proof.png" alt="Real-Time Emission Data" />
          <img src="/proof_a.png" alt="Real-Time Emission Data" />
        </div>
        <i>
          <h4
            style={{ fontWeight: "200", fontSize: "18px", marginTop: "1.2rem" }}
          >
            Based on the data, EnviroMine has achieved approximately{" "}
            <b>84% efficiency</b>, with an average emission of <b>63,410.24 units </b> 
             compared to an actual <b>target of 75,000 units</b>.
          </h4>
        </i>
      </section>

      {/* Transparent Calculations */}
      <section className="section">
        <h3>✅ Transparent, Verified Calculations</h3>
        <p>
          Our calculations are backed by industry standards, ensuring that you
          can trust the numbers we provide. Below is a screenshot of our
          emissions calculator in action.
        </p>
      </section>

      {/* Safety and Compliance Standards */}
      <section className="section">
        <h3>🔒 Safety and Compliance Standards</h3>
        <p>
          We are committed to ensuring safety in every operation. Our compliance
          with government standards guarantees a secure and environmentally
          responsible mining process.
        </p>
      </section>

      <section className="section">
        <h3>🌟 Testimonials and Success Stories</h3>
        <p>
          “Thanks to their cutting-edge tracking tools, we were able to reduce
          our CO₂ emissions by 15,000 kg monthly.” – <strong>Client A</strong>
        </p>
        <p>
          "Their real-time emission monitoring made compliance reporting faster
          and more transparent." – <strong>Client B</strong>
        </p>
      </section>

      {/* Depicted Coal Mining Operation */}
      <section className="section">
        <h3>🏞 Depicted Coal Mining Operation</h3>
        <p>
          Our innovative technology ensures that every coal mining operation is
          optimized for both safety and environmental impact. Below is a visual
          of one of our active mining sites.
        </p>
      </section>
    </div>
  );
};

export default Trust;
