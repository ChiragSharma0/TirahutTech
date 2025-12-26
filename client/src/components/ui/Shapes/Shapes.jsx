import React from 'react';

// ==========================================
// CONSTANTS & CONFIG
// ==========================================

// Map 't' and 'o' to strong outline colors
const OUTLINE_COLORS = {
  t: "#2DD4BF", // Teal 400
  o: "#FB923C", // Orange 400
};

// Map 't' and 'o' to light fill colors
const FILL_COLORS = {
  t: "#F0FDFA", // Teal 50
  o: "#FFF7ED", // Peach (Orange 50)
};

// Common SVG props to ensure full size and centering
const svgCommon = "w-full h-full overflow-visible pointer-events-none";

// ==========================================
// GROUP 1: GEOMETRIC SHAPES
// ==========================================

// 1. Rounded Square (Outline)
export const ShapeSquareOutline = ({ 
  color = "t", thickness = 4, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <rect 
        x="5" y="5" width="90" height="90" rx="20" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} 
      />
    </svg>
  );
};

// 2. Rounded Square (Filled)
export const ShapeSquareFilled = ({ 
  color = "t", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <rect x="5" y="5" width="90" height="90" rx="20" />
    </svg>
  );
};

// 3. Circle/Blob (Filled)
export const ShapeCircleFilled = ({ 
  color = "o", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <circle cx="50" cy="50" r="45" />
    </svg>
  );
};

// 4. Pentagon (Outline)
export const ShapePentagonOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M50 5 L95 38 L78 90 L22 90 L5 38 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 2: POLYGONS & CHEVRONS
// ==========================================

// 5. Hexagon (Filled)
export const ShapeHexagonFilled = ({ 
  color = "t", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" />
    </svg>
  );
};

// 6. Hexagon (Outline)
export const ShapeHexagonOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <polygon 
        points="50 2, 93 25, 93 75, 50 98, 7 75, 7 25" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 7. Chevron / V-Shape (Filled)
export const ShapeChevronFilled = ({ 
  color = "t", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M0 0 L30 0 L100 50 L30 100 L0 100 L70 50 Z" />
    </svg>
  );
};

// 8. Triangle (Outline)
export const ShapeTriangleOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <polygon 
        points="50 5, 95 90, 5 90" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 3: IRREGULAR SHARDS
// ==========================================

// 9. Shard A (Filled) - 4-Sided
export const ShapeShardAFilled = ({ 
  color = "o", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M10 10 L90 20 L80 90 L20 70 Z" />
    </svg>
  );
};

// 10. Shard A (Outline)
export const ShapeShardAOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M10 10 L90 20 L80 90 L20 70 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 11. Shard B (Filled) - Pointy Triangle
export const ShapeShardBFilled = ({ 
  color = "t", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M0 0 L100 30 L40 100 Z" />
    </svg>
  );
};

// 12. Shard B (Outline)
export const ShapeShardBOutline = ({ 
  color = "t", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M0 0 L100 30 L40 100 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 13. Shard C (Filled) - Complex 5-Sided
export const ShapeShardCFilled = ({ 
  color = "o", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M10 0 L90 10 L100 60 L50 100 L0 80 Z" />
    </svg>
  );
};

// 14. Shard C (Outline)
export const ShapeShardCOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M10 0 L90 10 L100 60 L50 100 L0 80 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 4: ORGANIC & ABSTRACT
// ==========================================

// 15. Organic Bean (Filled)
export const ShapeBeanFilled = ({ 
  color = "t", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M30 50 Q 10 20 50 10 Q 90 0 90 50 Q 90 100 50 90 Q 10 80 30 50 Z" />
    </svg>
  );
};

// 16. Organic Bean (Outline)
export const ShapeBeanOutline = ({ 
  color = "t", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M30 50 Q 10 20 50 10 Q 90 0 90 50 Q 90 100 50 90 Q 10 80 30 50 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 17. Irregular Quad (Filled)
export const ShapeQuadFilled = ({ 
  color = "o", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <polygon points="10,10 90,5 95,90 5,80" />
    </svg>
  );
};

// 18. Irregular Quad (Outline)
export const ShapeQuadOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <polygon 
        points="10,10 90,5 95,90 5,80" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 19. Zigzag (Stroke Only)
export const ShapeZigzag = ({ 
  color = "o", thickness = 3, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M5 50 L20 20 L35 50 L50 20 L65 50 L80 20 L95 50" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 5: LIQUID BLOBS
// ==========================================

// 20. Liquid Blob A (The "Potato") - Filled
export const ShapeBlobAFilled = ({ 
  color = "o", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M40 10 C 70 0, 95 25, 90 55 C 85 85, 60 95, 35 90 C 10 85, 0 60, 10 30 C 15 10, 25 15, 40 10 Z" />
    </svg>
  );
};

// 21. Liquid Blob A - Outline
export const ShapeBlobAOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M40 10 C 70 0, 95 25, 90 55 C 85 85, 60 95, 35 90 C 10 85, 0 60, 10 30 C 15 10, 25 15, 40 10 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 22. Liquid Blob B (The "Peanut") - Filled
export const ShapeBlobBFilled = ({ 
  color = "t", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M30 20 Q 50 5, 70 20 Q 95 40, 80 70 Q 60 95, 40 85 Q 5 70, 20 40 Q 25 30, 30 20 Z" />
    </svg>
  );
};

// 23. Liquid Blob B - Outline
export const ShapeBlobBOutline = ({ 
  color = "t", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M30 20 Q 50 5, 70 20 Q 95 40, 80 70 Q 60 95, 40 85 Q 5 70, 20 40 Q 25 30, 30 20 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 24. The "Splat" (Explosion/Star-like) - Filled
export const ShapeSplatFilled = ({ 
  color = "o", className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M50 20 Q 60 5, 70 25 Q 90 20, 80 40 Q 95 60, 75 70 Q 70 95, 50 80 Q 30 95, 25 70 Q 5 60, 20 40 Q 10 20, 30 25 Q 40 5, 50 20 Z" />
    </svg>
  );
};

// 25. The "Splat" - Outline
export const ShapeSplatOutline = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M50 20 Q 60 5, 70 25 Q 90 20, 80 40 Q 95 60, 75 70 Q 70 95, 50 80 Q 30 95, 25 70 Q 5 60, 20 40 Q 10 20, 30 25 Q 40 5, 50 20 Z" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 26. Hand-Drawn Loop (Stroke Only)
export const ShapeScribbleLoop = ({ 
  color = "t", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M20 40 C 20 10, 80 10, 80 40 C 80 80, 20 80, 20 50 C 20 30, 70 20, 90 60" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 27. Hand-Drawn Squiggle (Stroke Only)
export const ShapeSquiggle = ({ 
  color = "o", thickness = 2, className = "" 
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path 
        d="M10 50 Q 25 20, 40 50 T 70 50 T 95 30" 
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};