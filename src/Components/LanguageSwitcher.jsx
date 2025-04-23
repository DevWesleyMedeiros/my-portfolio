// src/Components/LanguageSwitcher.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function LanguageSwitcher() {
//   const navigate = useNavigate();

//   const changeLanguage = (lang) => {
//     if (lang === "United-states") {
//       navigate("/en");
//     } else if (lang === "Spain") {
//       navigate("/es");
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="country-flag">
//       <img
//         id="Brazil"
//         className="flag"
//         src="/flags/br.png"
//         onClick={() => changeLanguage("Brazil")}
//       />
//       <img
//         id="United-states"
//         className="flag"
//         src="/flags/us.png"
//         onClick={() => changeLanguage("United-states")}
//       />
//       <img
//         id="Spain"
//         className="flag"
//         src="/flags/es.png"
//         onClick={() => changeLanguage("Spain")}
//       />
//     </div>
//   );
// }
// Controla a lógica da troca de idiomas
// passar eles para dentro dos componentes English e Spanish