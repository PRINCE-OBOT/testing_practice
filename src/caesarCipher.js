const mapAlpToShiftAlp = (alp, shiftAlp) => {
  const map = {};

  for (let i = 0; i < alp.length; i++) {
    map[alp[i]] = shiftAlp[i];
  }

  return map;
};

const encryptStr = (str, map) => {
  let encrypt = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    encrypt += char in map ? map[char] : char;
  }

  return encrypt;
};

const caesarCipher = (str, shift) => {
  const alp = "abcdefghijklmnopqrstuvwxyz";

  const shiftAlp = `${alp.slice(shift)}${alp.slice(0, shift)}`;

  const map = mapAlpToShiftAlp(
    `${alp}${alp.toUpperCase()}`,
    `${shiftAlp}${shiftAlp.toUpperCase()}`
  );

  const encrypt = encryptStr(str, map);

  return encrypt;
};

export default caesarCipher