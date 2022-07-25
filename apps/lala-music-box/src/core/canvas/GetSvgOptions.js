export default function GetSvgOptions() {
  const vw = window.innerWidth;

  if (vw < 1024) {
    return {
      size: 120,
      gap: 16
    };
  } else if (vw < 1441) {
    return {
      size: 180,
      gap: 16
    };
  } else {
    return {
      size: 200,
      gap: 20
    };
  }
}
