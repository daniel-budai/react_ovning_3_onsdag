import kat from "./images/kat.jpg";
import "./hero.scss";

export default function Hero() {
  return (
    <section className="section-box">
      <img src={kat} alt="kat" />
      <h1>Katt</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        laboriosam quas tenetur obcaecati dolore rerum assumenda maxime! Iusto
        laudantium, facere dolores perspiciatis adipisci consectetur perferendis
        molestiae minima ipsum beatae tenetur?
      </p>
    </section>
  );
}
