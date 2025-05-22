export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-2xl font-bold">What can I help with?</div>
      <div className="grid grid-cols-3 mt-6 gap-8">
        {plugins.map((plugin) => (
          <PluginDisplay
            key={plugin.name}
            icon={plugin.icon}
            name={plugin.name}
          />
        ))}
      </div>
    </section>
  )
}

function PluginDisplay({ icon, name }: { icon: string; name: string }) {
  return (
    <button className="px-3 py-1.5 rounded-2xl flex justify-between items-center gap-3 border-2 border-white">
      <img src={icon} alt="weather" className="w-6 h-6" />
      <p>{name}</p>
    </button>
  )
}

const plugins = [
  {
    icon: "/weather.svg",
    name: "Weather",
  },
  {
    icon: "/calculator.svg",
    name: "Calculate",
  },
  {
    icon: "/light-bulb.svg",
    name: "Definition",
  },
]
