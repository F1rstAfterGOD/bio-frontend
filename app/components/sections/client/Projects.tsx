"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Landing for SaaS Platform",
    type: "Design & Frontend",
    description:
      "Marketing landing page focused on conversion, speed and clear visual hierarchy.",
  },
  {
    title: "Admin Dashboard",
    type: "Frontend Application",
    description:
      "Complex dashboard with data visualization, filters and role-based access.",
  },
  {
    title: "Personal Portfolio",
    type: "Experimental UI",
    description:
      "Minimalistic portfolio exploring typography, motion and interaction.",
  },
];

export default function Projects() {
  return (
    <section className="px-12 pb-40">
      <div className="max-w-6xl">
        <h2 className="font-heading text-2xl tracking-widest mb-20">
          PROJECTS
        </h2>

        <ul className="space-y-20">
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-8">
                <span className="text-sm opacity-40 font-heading">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-heading">
                    {project.title}
                  </h3>

                  <p className="uppercase tracking-widest text-sm opacity-60">
                    {project.type}
                  </p>

                  <p className="max-w-xl text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
