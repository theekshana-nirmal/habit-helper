/*
Features Grid (Below Hero)

Tagline: Why You’ll Love This
Bullet 1: 🎉 Zero-Cost Fun | All ideas use stuff you already own.
Bullet 2: 🧒 All Ages Welcome | Perfect for kids, teens, and playful adults.
Bullet 3: ⏱️ Quick Start | Most activities take 10 minutes or less to set up.

*/

import React from "react";
import Card from "../common/Card";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-blue-500 text-white py-32 ">
      <div className="container max-w-7xl flex flex-col items-center text-center">
        <h2 className="text-3xl text-white font-bold mb-20">Why You’ll Love This</h2>
        <div className="container max-w-7xl grid grid-cols-3 gap-4">
          <Card>
            <h2>🎉 Zero-Cost Fun</h2>
            <p>All ideas use stuff you already own.</p>
          </Card>
          <Card>
            <h2>🧒 All Ages Welcome</h2>
            <p>Perfect for kids, teens, and playful adults.</p>
          </Card>
          <Card>
            <h2>⏱️ Quick Start</h2>
            <p>Most activities take 10 minutes or less to set up.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
