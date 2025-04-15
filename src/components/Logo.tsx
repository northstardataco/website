import workmark from "../assets/wordmark.svg";

export default function Logo() {
  return (
    <div>
      <a href="/">
        <img src={workmark.src} alt="North Star Data" className="h-4" />
      </a>
    </div>
  );
}
