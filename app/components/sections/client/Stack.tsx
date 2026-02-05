import { HtmlIcon, JsIcon, ReactIcon } from "@/app/components/ui/StackIcons";

const stack = [
  {
    name: "HTML",
    icon: <HtmlIcon />,
    description: "Семантика, доступность и правильная структура"
  },
  {
    name: "JavaScript",
    icon: <JsIcon />,
    description: "Интерактив, логика интерфейсов и события"
  },
  {
    name: "React",
    icon: <ReactIcon />,
    description: "Компоненты, состояние и масштабируемость"
  }
];

export default function Stack() {
  return (
    <section className="mt-32">
      <h2 className="text-3xl mb-10">Стек</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stack.map((item) => (
          <div
            key={item.name}
            className="group border border-white/10 rounded-2xl p-5 hover:border-white/30 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <span className="text-lg">{item.name}</span>
            </div>

            <p className="text-sm text-white/60 opacity-0 group-hover:opacity-100 transition">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
