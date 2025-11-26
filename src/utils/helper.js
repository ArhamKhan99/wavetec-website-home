import { SlugIds } from "./config";

export const decodeAmp = function (str) {
  return str && str.includes("&amp;") ? str.replace(/&amp;/g, "&") : str;
};

export function splitByLineBreaks(str) {
  if (!str) return [];

  return str.split(/\n+/).filter(Boolean);
}
export function makeArray(data) {
  return data
    ?.filter((block) => block.type === "text")
    .reduce((acc, curr, index, arr) => {
      if (index % 2 === 0 && arr[index + 1]) {
        acc.push({
          title: decodeAmp(curr.text),
          description: decodeAmp(arr[index + 1].text),
        });
      }
      return acc;
    }, []);
}
export const formatDataForTypeKiosks = (blocks) => {
  const filtered = blocks.slice(3);
  const texts = filtered.filter((b) => b.type === "text");
  const images = filtered.filter((b) => b.type === "image");
  const buttons = filtered.filter((b) => b.type === "button");

  const grouped = [];
  for (let i = 0; i < texts.length; i += 2) {
    grouped.push({
      title: decodeAmp(texts[i].text),
      description: decodeAmp(texts[i + 1]?.text || ""),
      image: images[grouped.length]?.url || "",
      buttonText: decodeAmp(buttons[grouped.length]?.text || ""),
    });
  }
  return grouped;
};

export function formatDigitalGridSolutions(blocks) {
  if (!Array.isArray(blocks)) return [];

  const texts = blocks.filter((item) => item.type === "text");
  const buttons = blocks.filter((item) => item.type === "button");

  const formatted = [];

  // Group every two text items into one object
  for (let i = 0; i < texts.length; i += 2) {
    formatted.push({
      title: decodeAmp(texts[i]?.text || ""),
      description: decodeAmp(texts[i + 1]?.text || ""),
      button: decodeAmp(buttons[i / 2]?.text || ""),
    });
  }

  return formatted;
}
export function formatCaseStudyBlocks(blocks) {
  if (!Array.isArray(blocks)) return [];

  // step 2️⃣: separate text & image
  const texts = blocks.filter((item) => item.type === "text");
  const images = blocks.filter((item) => item.type === "image");

  const formatted = [];

  // step 3️⃣: group every 3 text items together with an image
  for (let i = 0; i < texts.length; i += 3) {
    formatted.push({
      date: texts[i]?.text || "",
      title: decodeAmp(texts[i + 1]?.text || ""),
      description: decodeAmp(texts[i + 2]?.text || ""),
      image: images[i / 3]?.url || "",
    });
  }

  return formatted;
}

// Products
export const formatDataForBenefits = (blocks) => {
  const texts = blocks.filter((b) => b.type === "text");
  const images = blocks.filter((b) => b.type === "image");

  const grouped = [];
  for (let i = 0; i < texts.length; i += 2) {
    grouped.push({
      title: decodeAmp(texts[i].text),
      description: decodeAmp(texts[i + 1]?.text || ""),
      image: images[grouped.length]?.url || "",
    });
  }
  return grouped;
};

export const formatDataForSliderTestimonials = (blocks) => {
  const texts = blocks.filter((b) => b.type === "text");
  const images = blocks.filter((b) => b.type === "image");

  const grouped = [];
  for (let i = 0; i < texts.length; i += 2) {
    grouped.push({
      description: decodeAmp(texts[i].text),
      title: decodeAmp(texts[i + 1]?.text || ""),
      image: images[grouped.length]?.url || "",
    });
  }
  return grouped;
};

// export function getPageId(slugArray) {
//   let current = SlugIds;
//   for (const part of slugArray) {
//     if (typeof current[part] === "string") return current[part];
//     if (current[part]?.id) current = current[part];
//     else if (current.children?.[part]) current = current.children[part];
//     else return null;
//   }
//   return typeof current === "string" ? current : current.id || null;
// }
// export function getPageId(slugArray = []) {
//   if (!Array.isArray(slugArray) || slugArray.length === 0) return null;

//   let current = SlugIds;

//   for (const part of slugArray) {
//     // If direct string id found
//     if (typeof current[part] === "string") return current[part];

//     // If current has an id and we’re diving into children
//     if (current[part]?.id) {
//       current = current[part];
//       continue;
//     }

//     // If in a children object
//     if (current.children?.[part]) {
//       current = current.children[part];
//       continue;
//     }

//     // Not found
//     return null;
//   }

//   // Return final ID if reached end
//   return typeof current === "string" ? current : current.id || null;
// }

export function getPageId(category, slugArray = []) {
  if (!category || !SlugIds[category]) return null;
  if (!Array.isArray(slugArray) || slugArray.length === 0)
    return SlugIds[category].id || null;

  let current = SlugIds[category];

  for (const part of slugArray) {
    // Direct match (string ID)
    if (typeof current[part] === "string") return current[part];

    // If has id and children
    if (current[part]?.id) {
      current = current[part];
      continue;
    }

    // Inside children
    if (current.children?.[part]) {
      current = current.children[part];
      continue;
    }

    return null; // not found
  }

  return typeof current === "string" ? current : current.id || null;
}

// export function mapApiMenuData(apiData) {
//   const mapSection = (sectionKey, sectionValue) => {
//     const links = [];

//     Object.entries(sectionValue).forEach(([key, value]) => {
//       if (key === "id") return;
//       console.log(key,value)

//       if (typeof value === "string") {
//         links.push({
//           label: key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
//           url: `/page/${value}`,
//         });
//       } else if (typeof value === "object") {
//         const childLinks = value.children
//           ? Object.entries(value.children).map(([childKey, childValue]) => ({
//               label: childKey
//                 .replace(/-/g, " ")
//                 .replace(/\b\w/g, c => c.toUpperCase()),
//               url: `/page/${childValue}`,
//             }))
//           : [];

//         links.push({
//           label: key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
//           url: `/page/${value.id}`,
//           children: childLinks,
//         });
//       }
//     });

//     return {
//       title: sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1),
//       links,
//     };
//   };

//   return Object.entries(apiData).map(([key, value]) =>
//     mapSection(key, value)
//   );
// }
export function mapApiMenuData(apiData) {
  const mapSection = (sectionKey, sectionValue) => {
    const links = [];

    Object.entries(sectionValue).forEach(([key, value]) => {
      if (key === "id") return;

      // CASE 1: Simple link (no children)
      if (typeof value === "string") {
        links.push({
          label: key
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
          url: `/${sectionKey}/${key}`, // ✅ /industries/telecom
        });
      }

      // CASE 2: Object with children
      else if (typeof value === "object") {
        const childLinks = value.children
          ? Object.entries(value.children).map(([childKey, childValue]) => ({
              label: childKey
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase()),
              url: `/${sectionKey}/${key}/${childKey}`, // ✅ /industries/healthcare/pharmacy
            }))
          : [];

        links.push({
          label: key
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
          url: `/${sectionKey}/${key}`, // ✅ /industries/healthcare
          children: childLinks,
        });
      }
    });

    return {
      title: sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1),
      links,
    };
  };

  return Object.entries(apiData).map(([key, value]) => mapSection(key, value));
}
