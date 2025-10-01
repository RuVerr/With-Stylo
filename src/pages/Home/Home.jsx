import React from "react";

import WhyWithStylo from "./WhyWithStylo/WhyWithStylo";
import Demo from "./Demo/Demo";
import Developer from "./Developer/Developer";

export default function Home() {
  return (
    <main>
      <WhyWithStylo />
      <Demo />
      <Developer/>
    </main>
  );
}
