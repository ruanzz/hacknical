export const MD_COLORS = [
  '#3498db',
  '#2980b9',
  '#2ecc71',
  '#27ae60',
  '#1abc9c',
  '#16a085',
  '#9b59b6',
  '#8e44ad',
  '#34495e',
  '#2c3e50',
  '#f1c40f',
  '#f39c12',
  '#e67e22',
  '#d35400',
  '#e74c3c',
  '#c0392b',
  '#95a5a6',
  '#7f8c8d'
];

export const GREEN_COLORS = [
  'rgba(55, 178, 77, 1)',
  'rgba(55, 178, 77, 0.9)',
  'rgba(55, 178, 77, 0.8)',
  'rgba(55, 178, 77, 0.6)',
  'rgba(55, 178, 77, 0.4)',
  'rgba(55, 178, 77, 0.2)',
  'rgba(55, 178, 77, 0.1)',
];

export const hex2Rgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error('Invaild Hex String');
  }
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
};

export const hex2Rgba = hex =>
  opacity => `rgba(${hex2Rgb(hex)}, ${opacity})`;

export const randomColor = () => {
  const set = new Set();
  const map = new Map();

  const getRamdomColor = (key) => {
    if (map.has(key)) return map.get(key);
    const index = Math.floor(Math.random() * MD_COLORS.length);
    const color = MD_COLORS[index];
    if (set.has(color)) {
      if (set.size === MD_COLORS.length) {
        map.set(key, color);
        return color;
      }
      return getRamdomColor();
    }
    set.add(color);
    map.set(key, color);
    return color;
  };

  return getRamdomColor;
};
