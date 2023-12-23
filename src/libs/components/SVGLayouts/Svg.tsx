export default function Svg({ path, color }: { path: string; color: string }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill={color} fillRule="evenodd" clipRule="evenodd"></path>
    </svg>
  );
}
