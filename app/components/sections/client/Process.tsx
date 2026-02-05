export default function Process() {
  return (
    <section className="relative z-10 mt-32 mb-32">
      {/* Заголовок */}
      <div className="mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Как проходит работа
        </h2>
        <p className="text-white/70">
          Прозрачный и понятный процесс — ты всегда знаешь, на каком этапе проект
        </p>
      </div>

      {/* Этапы */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Этап 1 */}
        <div className="group relative rounded-2xl border border-white/10 p-6 transition hover:border-white/30">
          <div className="absolute -top-4 -left-4 text-6xl font-bold text-white/5">
            01
          </div>

          <h3 className="text-xl font-medium mb-3">
            Анализ и идея
          </h3>

          <p className="text-white/70 leading-relaxed">
            Обсуждаем задачу, цели и аудиторию. Я предлагаю оптимальное решение,
          </p>
        </div>

        {/* Этап 2 */}
        <div className="group relative rounded-2xl border border-white/10 p-6 transition hover:border-white/30">
          <div className="absolute -top-4 -left-4 text-6xl font-bold text-white/5">
            02
          </div>

          <h3 className="text-xl font-medium mb-3">
            Дизайн и UX
          </h3>

          <p className="text-white/70 leading-relaxed">
            Продумываю структуру, анимации и поведение интерфейса.
            Сайт должен быть не просто красивым, а удобным и живым.
          </p>
        </div>
      </div>
    </section>
  );
}
