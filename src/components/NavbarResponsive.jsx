// import React, { Suspense } from "react";
// import useWindowDimensions from "../components/useWindowDimensions";

// // Lazy-load to keep your initial bundle small (optional but nice)
// const NavbarMob = React.lazy(() => import("./NavbarMob")); // <768px
// const NavbarTab = React.lazy(() => import("./NavbarTab")); // 768–1023px
// const NavbarDesk = React.lazy(() => import("./Navbar")); // ≥1024px (your existing desktop navbar)

// const BREAKPOINTS = {
//   mobileMax: 767, // <768
//   tabletMax: 1023, // 768–1023
// };

// const NavbarResponsive = ({ forceWidth }) => {
//   const { width } = useWindowDimensions();
//   const w = forceWidth ?? width; // helpful for testing/snapshots

//   let Component;
//   if (w <= BREAKPOINTS.mobileMax) Component = NavbarMob;
//   else if (w <= BREAKPOINTS.tabletMax) Component = NavbarTab;
//   else Component = NavbarDesk;

//   return (
//     <Suspense fallback={null}>
//       <Component />
//     </Suspense>
//   );
// };

// export default NavbarResponsive;
