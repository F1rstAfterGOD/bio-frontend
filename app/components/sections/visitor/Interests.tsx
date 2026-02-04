"use client";

const interests = [
  "Dark Souls",
  "Elden Ring",
  "Cyberpunk 2077",
  "CS2",
  "Indie games",
];

export default function Interests() {
  return (
    <section className="px-12 pb-40">
      <div className="max-w-5xl">
        <h2 className="font-heading text-2xl tracking-widest mb-16">
          INTERESTS
        </h2>
        
        <ul className="space-y-6">
          {interests.map((item, index) => (
            <li
              key={item}
              className="text-3xl md:text-4xl font-heading opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="mr-4 text-sm opacity-40">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


