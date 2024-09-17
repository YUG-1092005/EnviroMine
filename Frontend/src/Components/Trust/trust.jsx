import React from "react";
import "./trust.css";

const Trust = () => {
  return (
    <div class="trust-container">
      <h1 className="trust-h1">Why Trust Us with Your Sustainability Goals?</h1>

      <h2 className="trust-h2">🔍 Our Expertise</h2>
      <p class="custom-paragraph">
        With our experience in sustainable mining solutions, we ensure accuracy
        and transparency in every calculation. Our operations are for
        environmental management, ensuring compliance with the highest
        international standards.
      </p>

      <h2 className="trust-h2">📊 Real-Time Emission Data</h2>
      <p class="custom-paragraph">
        We provide real-time data on emissions from coal mining, electricity
        usage, and ventilation systems, ensuring that every metric is accurately
        tracked.
      </p>

      <h2 className="trust-h2">🔬 Here's the Proof of It..</h2>
      <p class="custom-paragraph">
        Real-Time Emission DataReal-Time Emission DataReal-Time Emission Data
      </p>

      <h2 className="trust-h2">📈 EnviroMine's Answer..</h2>
      <p class="custom-paragraph">
        Based on the data, EnviroMine has achieved approximately 84% efficiency,
        with an average emission of 63,410.24 units compared to an actual target
        of 75,000 units.
      </p>

      <h2 className="trust-h2">✅ Transparent, Verified Calculations</h2>
      <p class="custom-paragraph">
        Our calculations are backed by industry standards, ensuring that you can
        trust the numbers we provide. Below is a screenshot of our emissions
        calculator in action.
      </p>

      <p class="custom-paragraph" style={{ marginTop: "1rem" }}>
        Here's the proof of it...
      </p>


      <div class="trust-image-container">
        <img src="/data_3.jpeg" alt="Emissions Calculator Screenshot" />
      </div>
      <div class="trust-image-container">
        <img src="/data_2.jpeg" alt="Coal Mining Operation" />
      </div>

      <div class="trust-image-container">
        <img src="/data.jpeg" alt="Coal Mining Operation" />
      </div>

      <p class="custom-paragraph" style={{ marginTop: "1rem" }}>
        Our calculations....
      </p>

      <div class="trust-image-container">
        <img src="/proof_1.png" alt="Emissions Calculator Screenshot" />
      </div>
      <div class="trust-image-container">
        <img src="/proof_2.png" alt="Coal Mining Operation" />
      </div>

      <p class="custom-paragraph" style={{ marginTop: "1rem" }}>
        EnviroMine's solution demonstrates approximately <b>84% accuracy</b>,
        with total emissions estimated at <b>75,000</b> and the result
        calculated to be is around <b>63,410.23.</b>
      </p>

      <h2 className="trust-h2">🔒 Safety and Compliance Standards</h2>
      <p class="custom-paragraph">
        We are committed to ensuring safety in every operation. Our compliance
        with government standards guarantees a secure and environmentally
        responsible mining process.
      </p>

      <h2 className="trust-h2">🌟 Testimonials and Success Stories</h2>
      <p class="trust-testimonial">
        “Thanks to their cutting-edge tracking tools, we were able to reduce our
        CO₂ emissions by 15,000 kg monthly.” – Client A
      </p>
      <p class="trust-testimonial">
        “Their real-time emission monitoring made compliance reporting faster
        and more transparent.” – Client B
      </p>

      <h2 className="trust-h2">🏞 Depicted Coal Mining Operation</h2>
      <p class="trust-custom-paragraph">
        Our innovative technology ensures that every coal mining operation is
        optimized for both safety and environmental impact. Below is a visual of
        one of our active mining sites.
      </p>
    </div>
  );
};

export default Trust;
