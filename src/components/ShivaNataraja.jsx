export default function ShivaNataraja() {
  const text = `
    Shiva Nataraja represents the Lord of Dance in Hindu culture,
    embodying the cosmic rhythm of creation, preservation, and
    destruction. The statue, often depicted in a dynamic pose within a
    circle of flames, portrays Shiva balancing on one foot upon the
    dwarf demon Apasmara, a symbol of ignorance. In one hand, Shiva
    holds a drum, symbolizing creation and the passage of time,
    while another hand bears fire, representing destruction and
    transformation. His other two hands form gestures (mudras) of
    reassurance and liberation. The circle of flames signifies the
    cosmic energy, while his serene face reflects inner tranquility
    amidst the cosmic activity.
  `;

  const words = text.split(/\s+/);

  return (
    <div className="text-gray-300 text-justify leading-relaxed">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mx-0.5 hover:scale-110 hover:text-white transition-transform duration-300 ease-in-out cursor-pointer"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
