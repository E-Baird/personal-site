import React, { useEffect, useState } from "react";

export interface IFadeProps {
  style: {
    animation: string;
  };
  onAnimationEnd: () => void;
}

const useFade = (initial: boolean) => {
  const [show, setShow] = useState(initial);
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setIsVisible(false);
    }
  };

  const style = {
    animation: `${show ? "fadeIn" : "fadeOut"} .3s`,
  };

  const fadeProps: IFadeProps = {
    style,
    onAnimationEnd,
  };

  return [isVisible, setShow, fadeProps] as const;
};

export default useFade;
