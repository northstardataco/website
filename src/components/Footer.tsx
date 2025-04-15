const linkGroups = [
  {
    header: "Community",
    links: [
      {
        text: "YouTube",
        href: "https://www.youtube.com/@northstardata",
      },
      {
        text: "X/Twitter",
        href: "https://x.com/northstardataco",
      },
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/company/northstardata",
      },
      {
        text: "GitHub",
        href: "https://github.com/northstardataco",
      },
    ],
  },
  /*{
    header: "Legal",
    links: [
      {
        text: "Terms",
        href: "/terms",
      },
      {
        text: "Privacy",
        href: "/privacy",
      },
    ],
  },*/
];

export default function Footer() {
  return (
    <footer className="flex justify-between text-slate-500 text-sm">
      <div className="flex flex-col justify-between">
        <p className="text-black text-base">
          Data engineering and analytics
          <br />
          for a simple monthly fee
        </p>
        <p>&copy; {new Date().getFullYear()} North Star Data</p>
      </div>
      <div className="flex gap-6 text-right">
        {linkGroups.map((linkGroup) => (
          <div key={linkGroup.header} className="flex flex-col gap-1">
            <p className="text-black">{linkGroup.header}</p>
            {linkGroup.links.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target="_blank"
                className="hover:underline"
                rel="noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
