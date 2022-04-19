import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 5;

  width: 100%;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 0, // 0
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 2, // 2
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 48 48"
          height="48px"
          viewBox="0 0 48 48"
          width="48px"
          fill="#fff"
        >
          <g transform="translate(0.000000,48.000000) scale(0.009619,-0.009619)">
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M2350 4834 c-288 -25 -578 -106 -819 -229 -210 -107 -372 -223 -556
-398 -85 -82 -107 -108 -98 -117 8 -8 24 -10 49 -5 29 5 57 25 113 80 529 510
1282 710 1996 530 363 -91 696 -281 985 -561 49 -48 60 -54 98 -54 24 0 42 5
42 11 0 17 -117 135 -225 226 -312 264 -694 438 -1095 498 -103 15 -401 27
-490 19z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M580 4000 c-8 -5 157 -339 1359 -2750 586 -1175 589 -1180 598 -1180
5 0 69 125 145 278 75 152 303 615 508 1027 204 413 482 975 618 1250 136 275
345 696 464 935 119 239 215 437 213 439 -7 6 -3896 7 -3905 1z m2477 -90
c839 0 1273 -3 1273 -10 0 -16 -403 -837 -1242 -2530 -182 -366 -344 -693
-360 -727 -17 -35 -34 -63 -39 -63 -4 0 -10 19 -13 43 -12 93 -58 511 -92 832
-19 187 -37 341 -38 343 -2 1 -6 -24 -9 -55 -4 -32 -32 -254 -62 -493 -31
-239 -62 -486 -70 -549 -7 -62 -17 -117 -22 -122 -10 -10 -37 44 -1015 2010
-383 769 -647 1310 -643 1319 5 14 64 15 532 9 289 -4 1099 -7 1800 -7z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M525 3565 c-92 -195 -158 -429 -185 -658 -14 -116 -14 -397 0 -522
53 -476 282 -939 639 -1295 221 -220 488 -389 789 -499 160 -59 418 -121 441
-106 13 7 2 41 -17 58 -10 8 -69 27 -132 42 -244 59 -451 140 -626 246 -349
211 -634 517 -812 875 -150 300 -222 603 -222 931 0 312 59 597 176 854 24 53
44 106 44 117 0 27 -20 72 -32 72 -5 0 -34 -52 -63 -115z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M4442 3620 c-26 -42 -27 -52 -7 -90 65 -125 146 -407 171 -589 18
-138 18 -457 -1 -586 -70 -491 -317 -953 -686 -1283 -267 -239 -548 -387 -909
-477 -107 -27 -140 -47 -140 -86 0 -25 22 -25 150 6 152 37 248 70 400 139
166 76 242 120 390 227 101 73 310 267 381 354 303 370 475 792 509 1250 28
366 -42 760 -189 1070 l-48 100 -21 -35z"
            />
          </g>
        </svg>

        <Text variants={textVariants} initial="hidden" animate="visible">
          Welcome
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
