import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function CounterUp() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="counter">
        <div className="download">
          <h1>
            {counterOn && (
              <CountUp start={0} end={570} duration={4} delay={0} />
            )}
          </h1>
          <span style={{ color: "black" }}>Download</span>
        </div>
        <div className="active__user">
          <h1>
            {counterOn && (
              <CountUp start={0} end={570} duration={4} delay={0} />
            )}
          </h1>
          <span style={{ color: "black" }}>Active User</span>
        </div>
        <div className="positive__feedback">
          <h1>
            {counterOn && (
              <CountUp start={0} end={570} duration={4} delay={0} />
            )}
          </h1>
          <span style={{ color: "black" }}>Positive Feedback</span>
        </div>
        <div className="+rating">
          <h1>
            {counterOn && (
              <CountUp start={0} end={570} duration={4} delay={0} />
            )}
          </h1>
          <span style={{ color: "black" }}>+ Rating</span>
        </div>
      </div>
    </ScrollTrigger>
  );
}
