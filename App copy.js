import React from "react";
import "./style.css";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

// In animation property o animator tag we could give one am=nimation, but inorder to use multiple we had to ue batch(animation1, animation2).
// Also we can make a variable and write the code in it and then canplace that inside object like <Animator animation={ZoomOutScrollOut}> .
const ZoomOutScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(0, -100), Sticky());
// Scrolling effects.

// For scrolling effects <ScrollContainer>, <ScrollPage page={page no.}>, and <Animator> is compulsory.

function App() {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
            <span style={{ fontSize: "30px" }}> Scroll Animation Test</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomOutScrollOut}>
            <span style={{ fontSize: "30px" }}>
              This Text will FadeIn ZoomIn ScrollOut 🧐.
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "30px" }}>
              This will FadeIn Jump and then Fadeout ⛅️.
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(1000, 0)}> Hi Everyone 👋🏻</Animator>
              <Animator animation={MoveIn(-1000, 0)}>
                This was Scroll Animation.
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>By Luv Khubani👨🏻‍💻</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, ZoomAnimation, MoveAnimation,
              StickyAnimation.
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;
