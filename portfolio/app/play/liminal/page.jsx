"use client"
import React, { useState, useEffect, useRef } from "react";
import Context from "../../_components/Context";
import CoverYAML from "../../_components/CoverYAML";
import Challenges from "../../_components/Challenges";
import Callout from "../../_components/Callout";
import Solution from "../../_components/Solution";
import ImageGrid1 from "../../_components/ImageGrid1";
import ImageGrid2 from "../../_components/ImageGrid2";
import ImageGrid3 from "../../_components/ImageGrid3";

import "../../_components/greyBGLines.css";

export default function Liminal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const componentRefs = [useRef(null), useRef(null), useRef(null)];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    componentRefs.forEach((ref, index) => {
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current;
        console.log(index);
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveIndex(index);
          
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <main className=" h-fit block grid-background">
      <div className="m-5">
        <Context
          text1="A realm where the very essence of self and time finds itself in flux."
          text2="Blurb about what lunar gala is, what web does within creative team, & what my role is within this team."
        />
        <CoverYAML />
        <Context
          text1="'LIMINAL'"
          text2="We define Liminality as a captivating interlude, where the boundaries of reality blur and reconfigure. It is a passage where the soul's chrysalis unfurls, and the harmonious transition from the familiar to the enigmatic."
        />

        {/* Scene */}
        <Challenges
          activeIndex={activeIndex}
          index={0}
          ref={componentRefs[0]}
        />
      </div>
      {/* CALLOUT HAS MARGIN 0, others use a wrapper div with m-5 */}
      <Callout
        className="m-0"
        text="WHAT FORM LANGUAGE CREATES A LIMINAL SPACE?"
      />

      <Solution>
        <ImageGrid1 img="IMAG0009.JPG" img2="fav-color.png" />
      </Solution>

      <div className="m-5">
        <Challenges
          activeIndex={activeIndex}
          index={1}
          ref={componentRefs[1]}
        />
      </div>
      <Callout
        className="m-0"
        text="LIMINALITY STARTS WITH THE FOUNDATION—ITS SITE ARCHITECTURE."
      />
      <div className="m-5">
        <Solution>
          <ImageGrid2 img="lg-site-diagram-labels-lowOpacity.png" />
        </Solution>
        <Challenges
          activeIndex={activeIndex}
          index={2}
          ref={componentRefs[2]}
        />
      </div>
      {/* How might current interaction design techniques evoke feelings of temporality? */}
      <Callout
        className="m-0"
        text="HOW MIGHT CURRENT INTERACTION DESIGN TECHNIQUES EVOKE FEELINGS OF TEMPORALITY?"
      />
      <div className="m-5">
        <ImageGrid3 img="lg-gif-compressed.gif" />
      </div>
    </main>
  );
}
