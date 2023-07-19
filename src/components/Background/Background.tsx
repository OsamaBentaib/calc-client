import bg from "./../../assets/bg.jpg";

export default function Background() {
  return (
    <img
      src={bg}
      alt="bg"
      className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
      width="1308"
    />
  );
}
