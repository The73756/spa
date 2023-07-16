import * as functions from "./files/functions.js";

import "../scss/style.scss";
import dropdown from "./files/dropdown.js";
import burger from "./files/burger.js";
import spoller from "./files/spoller.js";
import hoverImg from "./files/hover-img.js";
import sliders from "./files/sliders.js";
import { overflowTextMore } from "./files/overflow-text-more.js";
import maps from "./files/maps.js";
import smoothScroll from "./files/smooth-scroll.js";
import tab from "./files/tab.js";
import modal from "./files/modal.js";

functions.isWebp();
functions.mediaAdaptive();

dropdown();
burger();
spoller();
hoverImg();
sliders();
overflowTextMore();
maps();
smoothScroll();
tab();
modal();