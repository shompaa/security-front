import React, { useState } from "react";
import { Container } from "../container/container";
import { Button } from "../button/button";

export const SwitchScreen = ({ screens = [], buttonProps = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScreenChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="flex space-x-4">
          {buttonProps?.map(({ title, icon }, index) => (
            <Button
              key={index}
              variant={activeIndex === index ? "primary" : "primary-outlined"}
              onClick={() => handleScreenChange(index)}
              iconActive={activeIndex === index}
              icon={icon}
            >
              {title}
            </Button>
          ))}
        </div>
        {screens[activeIndex]?.component}
      </div>
    </Container>
  );
};
