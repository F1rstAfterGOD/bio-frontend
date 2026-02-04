"use client";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "HTML / CSS",
  "SQL",
  "PHP",
];

export default function Stack() {
  return (
    <section className="px-12 pb-32">
      <div className="max-w-6xl">
        <h2 className="font-heading text-2xl tracking-widest mb-16">
          STACK
        </h2>

        <ul className="space-y-6">
          {stack.map((tech) => (
            <li
              key={tech}
              className="group flex items-center text-4xl md:text-5xl font-heading transition-opacity duration-300 hover:opacity-100 opacity-60"
            >
              <span className="w-12 text-sm opacity-40">
                {String(stack.indexOf(tech) + 1).padStart(2, "0")}
              </span>

              <span className="relative">
                {tech}
                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
