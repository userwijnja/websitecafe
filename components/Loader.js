import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }

  svg {
    width: 25vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
    @media (max-width: 30em) {
      svg {
        width: 50vw;
      }
    }
  }
`;

const pathVariantstr = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 5,
      // yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const pathVariantsrl = {
  hidden: {
    opacity: 0,
    pathLength: 1,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};
const pathVariantsrb = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 0,
      // yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const pathVariantsrr = {
  hidden: {
    opacity: 0,
    pathLength: 2,
  },
  visible: {
    opacity: 1,
    pathLength: 2,

    transition: {
      duration: 1,
      // yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 48 48"
        height="48px"
        viewBox="0 0 48 48"
        width="48px"
        fill="url(#blue-gradient)"
      >
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#FC466B" offset="100%" />
        </linearGradient>
        <g transform="translate(0.000000,48.000000) scale(0.009619,-0.009619)">
          <motion.path
            variants={pathVariantsrb}
            initial="hidden"
            animate="visible"
            d="M2350 4834 c-288 -25 -578 -106 -819 -229 -210 -107 -372 -223 -556
-398 -85 -82 -107 -108 -98 -117 8 -8 24 -10 49 -5 29 5 57 25 113 80 529 510
1282 710 1996 530 363 -91 696 -281 985 -561 49 -48 60 -54 98 -54 24 0 42 5
42 11 0 17 -117 135 -225 226 -312 264 -694 438 -1095 498 -103 15 -401 27
-490 19z"
          />
          <motion.path
            variants={pathVariantstr}
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
            variants={pathVariantsrl}
            initial="hidden"
            animate="visible"
            d="M525 3565 c-92 -195 -158 -429 -185 -658 -14 -116 -14 -397 0 -522
53 -476 282 -939 639 -1295 221 -220 488 -389 789 -499 160 -59 418 -121 441
-106 13 7 2 41 -17 58 -10 8 -69 27 -132 42 -244 59 -451 140 -626 246 -349
211 -634 517 -812 875 -150 300 -222 603 -222 931 0 312 59 597 176 854 24 53
44 106 44 117 0 27 -20 72 -32 72 -5 0 -34 -52 -63 -115z"
          />
          <motion.path
            variants={pathVariantsrr}
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

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1080.000000pt"
        height="414.000000pt"
        viewBox="0 0 1080.000000 414.000000"
        fill="url(#blue-gradient)"
      >
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#FC466B" offset="100%" />
        </linearGradient>
        <g transform="translate(0.000000,414.000000) scale(0.100000,-0.100000)">
          <motion.path
            variants={pathVariantstr}
            initial="hidden"
            animate="visible"
            d="M4060 4005 c-224 -47 -434 -135 -630 -263 -122 -79 -183 -129 -375
-303 -640 -580 -1073 -1206 -1190 -1724 -36 -158 -46 -417 -21 -538 43 -208
161 -412 315 -544 90 -77 257 -163 373 -192 707 -180 1794 271 2834 1176 41
36 64 49 71 42 6 -6 8 -46 5 -104 l-5 -95 40 -40 c35 -34 47 -40 83 -40 56 0
151 50 262 140 113 91 145 93 126 7 -15 -67 12 -128 64 -146 47 -17 129 -13
190 8 90 31 267 113 555 259 241 121 273 135 287 122 13 -13 -16 -78 -251
-555 -408 -832 -533 -1093 -533 -1114 0 -39 62 -60 97 -33 13 10 210 396 477
937 l455 920 94 66 c104 75 204 176 232 235 33 69 32 126 -4 198 -17 35 -31
69 -31 75 0 17 46 106 62 118 9 7 52 8 132 2 66 -4 377 -10 691 -11 623 -3
605 -5 605 53 0 40 -30 67 -82 73 -24 3 -196 8 -383 11 -366 6 -877 24 -884
31 -2 2 52 120 122 263 136 280 150 320 122 351 -22 25 -67 26 -87 3 -9 -10
-85 -156 -169 -324 l-152 -306 -186 4 c-102 2 -328 8 -502 13 -449 14 -721 13
-741 -2 -9 -7 -18 -29 -21 -50 -9 -57 14 -71 126 -75 264 -10 644 -55 827 -99
145 -34 320 -93 327 -110 7 -18 -162 -371 -194 -406 -27 -28 -583 -323 -763
-403 -105 -48 -260 -106 -314 -119 l-29 -7 5 43 c3 26 39 113 92 220 50 103
86 189 86 207 0 33 -33 71 -61 71 -9 0 -88 -71 -176 -158 -210 -210 -413 -372
-449 -358 -8 3 -14 18 -14 33 1 33 55 216 97 329 35 92 30 122 -19 135 -23 6
-36 1 -75 -31 -27 -21 -58 -51 -70 -68 -28 -37 -315 -290 -498 -437 -654 -527
-1358 -873 -1915 -941 -517 -63 -873 87 -1045 441 -61 125 -85 218 -92 356 -7
144 13 277 67 440 151 457 457 901 951 1384 373 364 565 506 822 610 363 146
693 134 848 -32 70 -75 84 -122 83 -283 0 -119 -3 -145 -28 -220 -67 -204
-181 -385 -356 -561 -105 -106 -179 -159 -261 -185 -89 -28 -114 -61 -87 -119
16 -35 45 -40 117 -20 90 26 199 103 327 233 307 310 470 710 414 1013 -34
181 -192 341 -390 394 -30 8 -107 17 -170 20 -96 4 -134 1 -230 -20z"
          />
        </g>
      </svg>
    </Container>
  );
};

export default Loader;
