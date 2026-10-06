import { useState } from "react";
import "./App.css";

// 1. All the page names live in ONE list.
//    To add a page later (Skills, Protocols), add a name here
//    and add a matching <Section /> below.
const pages = ["Home", "Summary", "Experience", "Skills", "Protocols"];

// 2. Reusable buttons. A button only appears if its function is given,
//    so the first page has no Back and the last page has no Explore.
function PageButtons({ goNext, goBack, nextLabel = "Explore" }) {
  return (
    <div className="page-buttons">
      {goBack && (
        <button className="back-btn" onClick={goBack}>
          ← Back
        </button>
      )}
      {goNext && (
        <button className="explore-btn" onClick={goNext}>
          {nextLabel}
        </button>
      )}
    </div>
  );
}

// 3. Navigation pill (only used on the Home page).
//    It shows every page name and highlights the current one.
function Navbar({ current, setCurrent }) {
  return (
    <nav className="navbar">
      {pages.map((name) => (
        <button
          key={name}
          className={current === name ? "nav-item active" : "nav-item"}
          onClick={() => setCurrent(name)}
        >
          {name}
        </button>
      ))}
    </nav>
  );
}

// 4. PAGE 1 - Hero
function Home({ current, setCurrent }) {
  return (
    <section className="card hero">
      <button className="train-btn" onClick={() => setCurrent("Train")}>
       Train me
      </button>

      <div className="hero-text">
        <p className="gold small-title">START CALISTHENICS - 1:1 COACHING FROM ME</p>
        <h1>
          RAGHAV
          <br />
          SHARMA
        </h1>

        <div className="contact">
          <p> <br /> <br /><img className="icon" src="images/mail.jpg" alt="Mail" />ragumaann5@gmail.com</p>
          <p> <br /> <br /><img className="icon" src="images/instagram.jpg" alt="Instagram" /> @ragumaannsharma</p>
          <p><img className="icon" src="images/call.jpg" alt="Call" />+91931569XXXX</p>
          <p><img className="icon" src="images/location.jpg" alt="Location" /> India, New Delhi</p>
        </div>
      </div>

      {/* Put your photo at publicimages/raghav.png */}
      <img className="hero-photo" src="images/raghav.png" alt="Raghav Sharma" />

      <Navbar current={current} setCurrent={setCurrent} />
    </section>
  );
}

// 5. PAGE 2 - Summary
function Summary({ goNext, goBack }) {
  return (
    <section className="card summary">
      <div className="summary-text">
        <h2 className="gold">SUMMARY</h2>
        <p className="gold small-title">Why Calisthenics and not Gym?</p>

        <p>
          <br /> <br />
          Honestly, I don't think there's a need to compare calisthenics and the
          gym. Both have their own purpose and value. But the thing is GYM is
          like having a powerful car and Calisthenics is knowing how to drive it
          — different things, but still connected. I'm not saying calisthenics
          is better; it's simply better for me. If you simply want raw &amp;
          relative strength and overall body control then calisthenics is for
          you.
        </p>
        <p>
          If your priority is building a physique maybe like David Laid, the gym
          might be more suitable. Although you can build a good physique with
          calisthenics as well…It'll just takes more time to build for some
          people whereas by doing gym in a right way you build a decent physique
          fast than by doing calisthenics.
        </p>
        <p>
          Because in Calisthenics our main goal is to learn skills not building
          muscles….you will build it throughout the journey though….but if you
          goal is to learn some crazy skills like Planche, Front Lever,
          Handstand, Muscle Up and other impossible looking skills then go for
          calisthenics offcourse btw you are on the right place.
        </p>
        <br />
        <p>Ultimately, it depends on the person and their goal.</p>
      </div>

      <PageButtons goNext={goNext} goBack={goBack} />
    </section>
  );
}

// 6. PAGE 3 - Experience
function Experience({ goNext, goBack }) {
  return (
    <section className="experience">
      <div className="experience-text">
        <h2>
          My <span className="gold">Experience</span>
        </h2>
        <p>
          I have been practicing calisthenics consistently for the past 1.5 years, and starting calisthenics has been one of the best decisions of my life. Throughout this journey, I've developed strength, body control, mobility, and discipline while learning skills like handstand, handstand push-ups, 90-degree push-ups, front lever, muscle-ups, human flag, and other foundational skills.

Calisthenics has completely changed the way I approach fitness and taught me the value of patience, consistency, and hard work. It has also taught me that progress doesn't happen overnight — every skill requires countless attempts, failures, adjustments, and the willingness to keep going.

Over time, I’ve learned how important proper technique, progressive overload, recovery, and consistency are for long-term progress. More importantly, calisthenics has helped me become more disciplined not just in training, but in other areas of my life as well.

I'm still learning, improving, and pushing my limits every day. I believe there is always another skill to learn, another weakness to improve, and another level to reach. My goal is not just to become stronger myself, but also to share what I've learned and help others start their own calisthenics journey with the right approach.

        </p>
      </div>

      {/* Put your trophy photo at publicimages/trophies.jpg */}
      <img
        className="experience-photo"
        src="images/trophies.jpg"
        alt="Shelves of trophies"
      />

      <PageButtons goNext={goNext} goBack={goBack} />
    </section>
  );
}

// 7. PAGE 4 - Skills
// All the skills live in ONE list. To add a skill later, just add one more
// { ... } here. The page below draws a card for every item automatically.
const skills = [
  {
    name: "Handstand",
    image: "images/handstand.jpg",
    text: "A handstand is more than just balancing upside down. It requires strong elevated shoulders, a tight core, proper body alignment, wrist control, and patience. Every small adjustment teaches you better control. With consistent practice, you build strength, balance, and confidence. Eventually, being upside down starts feeling natural—and completely under your control.",
  },
  {
    name: "L-Sit",
    image: "images/l-sit.jpg",
    text: "The L-sit is a fundamental calisthenics skill that demands core strength, hip-flexor strength, shoulder stability, and compression. Holding your body off the ground with straight legs requires serious control. It builds a strong foundation for advanced skills like the V-sit, handstand, and press to handstand while improving overall body tension.",
  },
  {
    name: "Muscle-Up",
    image: "images/muscle-up.jpg",
    text: "The muscle-up is a powerful calisthenics skill that combines explosive pulling strength, pushing strength, coordination, and technique. Getting from below the bar to above it in one smooth movement requires strong pull-ups, a powerful transition, and solid control. It’s a skill that showcases strength, explosiveness, and body coordination.",
  },
  {
    name: "Front Lever",
    image: "images/front-lever.jpg",
    text: "The front lever is a powerful calisthenics skill that demands incredible pulling strength, core tension, and shoulder control. Holding your body completely horizontal while hanging from a bar requires more than just strong lats. It takes precise technique, progressive strength development, and consistent practice to achieve clean, controlled reps.",
  },
  {
    name: "Planche",
    image: "images/planche.jpg",
    text: "The planche is one of calisthenics’ most demanding skills, requiring exceptional straight-arm strength, shoulder stability, core tension, and body control. Holding your entire body parallel to the ground with only your hands supporting you takes patience and progressive training. It’s a true test of strength, control, and dedication.",
  },
  {
    name: "One Arm Handstand",
    image: "images/one-arm-handstand.jpg",
    text: "The one-arm handstand takes the challenge of balance to another level. It requires exceptional shoulder strength, wrist control, core tension, and precise weight shifting. With one hand supporting your entire body, even the smallest adjustment matters. It’s a skill built through patience, consistency, and complete control over your body.",
  },
];

// One skill row. It receives a skill and shows its name, text and photo.
function SkillCard({ skill }) {
  return (
    <div className="skill-item">
      <div className="skill-text">
        <h3 className="gold">{skill.name}</h3>
        <p>{skill.text}</p>
      </div>
      <img src={skill.image} alt={skill.name} />
    </div>
  );
}

function Skills({ goBack, goNext }) {
  return (
    <section className="card skills">
      <h2 className="skills-title gold">
        High priority calisthenics skills to learn in a sequence
      </h2>

      {/* .map() draws one SkillCard for every item in the skills list */}
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      <p className="skills-note">
        TO LEARN THESE SKILLS I MADE SIMPLE 4 EXERCISES FOR EACH SKILL. JUST
        CLICK ON THE PROTOCOLS BUTTON TO FOLLOW THEM.
      </p>

      <PageButtons goNext={goNext} goBack={goBack} nextLabel="Protocols" />
    </section>
  );
}

// 8. PAGE 5 - Protocols (last page, so only a Back button)
// The link that opens when someone clicks the @ragumaannsharma text at the bottom.
const INSTAGRAM_LINK = "https://www.instagram.com/ragumaannsharma";

// All the protocols live in ONE list: a skill name and its 4 exercises.
// To change an exercise, just edit its text here.
const protocols = [
  {
    skill: "Handstand",
    exercises: [
      { name: "Chest-to-wall handstand holds", note: "line + shoulder endurance" },
      { name: "Toe Pulls & Heel Pulls", note: "balance + overall leg control" },
      { name: "Handstand kick-ups", note: "entry consistency" },
      { name: "Freestanding handstand attempts", note: "actual balance practice" },
    ],
  },
  {
    skill: "L-Sit",
    exercises: [
      { name: "Tuck L-sit hold", note: "foundational compression" },
      { name: "One-leg extended L-sit", note: "progression toward full extension" },
      { name: "L-sit on parallettes", note: "full skill-specific practice" },
      { name: "Compression lifts", note: "hip-flexor + compression strength" },
    ],
  },
  {
    skill: "Muscle-Up",
    exercises: [
      { name: "Explosive chest-to-bar pull-ups", note: "pulling height" },
      { name: "Straight-bar dips", note: "transition + lockout strength" },
      { name: "Band-assisted muscle-ups", note: "learn the movement pattern" },
      { name: "Negative muscle-ups", note: "controlled transition part only" },
    ],
  },
  {
    skill: "Front Lever",
    exercises: [
      { name: "Tuck or your current progression holds", note: "foundational position" },
      { name: "Front lever raises with or without band", note: "dynamic strength through the position" },
      { name: "Inverted Deadlifts", note: "for better hips engagement" },
      { name: "Full Front lever Band Holds", note: "eccentric control" },
    ],
  },
  {
    skill: "Planche",
    exercises: [
      { name: "Planche Leans", note: "straight-arm strength + positioning" },
      { name: "Tuck or your current progression holds", note: "first major progression" },
      { name: "Banded Negatives", note: "for proper upright scapular strength" },
      { name: "Reverse Leg Raises", note: "for better posterior pelvic engagement" },
    ],
  },
  {
    skill: "One-Arm Handstand",
    exercises: [
      { name: "Weight-shift handstands with wall", note: "learn to transfer weight to one arm" },
      { name: "Wall-assisted one-arm handstand", note: "build unilateral strength/control" },
      { name: "Finger-assisted one-arm handstand", note: "progressively reduce assistance" },
      { name: "Freestanding one-arm handstand attempts", note: "specific balance practice" },
    ],
  },
];

// One box with a skill name and its 4 numbered exercises.
function ProtocolCard({ item }) {
  return (
    <div className="protocol-card">
      <h3 className="gold">{item.skill}</h3>
      <ol>
        {item.exercises.map((exercise) => (
          <li key={exercise.name}>
            <strong>{exercise.name}</strong> — {exercise.note}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Protocols({ goBack }) {
  return (
    <section className="card protocols">
      <h2 className="protocols-title gold">
        THE FOUR PILLARS OF LEARNING SKILLS IN CALISTHENICS
      </h2>
      <div className="protocols-arrow">▼</div>

      {/* Photo of the four pillars: publicimages/pillars.jpg */}
      <img
        className="pillars-img"
        src="images/pillars.jpg"
        alt="The four pillars: Skill Specificity, Technique and Alignment, Practice Submaximally, Progressive Overload"
      />

      <h2 className="protocols-sub">The Ultimate 4's for Each Skill.</h2>

      {/* .map() draws one ProtocolCard for every skill in the list */}
      <div className="protocols-grid">
        {protocols.map((item) => (
          <ProtocolCard key={item.skill} item={item} />
        ))}
      </div>

      <div className="protocols-key">
        <p>
          <span className="gold">The key:</span> don't treat all 4 exercises
          equally. For each skill, spend most of your time on the actual
          skill/progression, while the other exercises build the specific
          strength or position needed.
        </p>
        <p>
          For example, for planche: planche lean → tuck planche → advanced tuck
          → straddle/full, rather than endlessly doing generic push exercises.
        </p>
      </div>

      <p className="protocols-follow">
        Follow :{" "}
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          @ragumaannsharma
        </a>
      </p>

      {/* Last page: only a Back button, no Explore */}
      <PageButtons goBack={goBack} />
    </section>
  );
}

// PAGE - Train form (not in the navbar, opened by the "Train me" button)
const FORMSPREE_URL = "https://formspree.io/f/mvkzgoqw";

function TrainForm({ goBack }) {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="card train">
      <form className="train-form" onSubmit={handleSubmit}>
        <h2 className="gold">Train with me</h2>

        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="WhatsApp number" />

        <select name="goal" required defaultValue="">
          <option value="" disabled>Main goal</option>
          <option>Handstand</option>
          <option>L-Sit</option>
          <option>Muscle-Up</option>
          <option>Front Lever</option>
          <option>Planche</option>
          <option>One Arm Handstand</option>
          <option>Other</option>
        </select>

        <select name="level" required defaultValue="">
          <option value="" disabled>Current level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <textarea name="message" rows="4" placeholder="Tell me about yourself" />

        {/* Hidden spam trap: real people never see or fill this */}
        <input
          type="text"
          name="_gotcha"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        <p className="form-privacy">
          I'll only use your details to contact you about coaching.
        </p>

        {status === "done" && (
          <p className="form-ok">Thanks! I'll contact you soon.</p>
        )}
        {status === "error" && (
          <p className="form-err">Something went wrong. Please try again.</p>
        )}
      </form>

      <PageButtons goBack={goBack} />
    </section>
  );
}

// 9. The main App. This is where the "which page?" logic lives.
export default function App() {
  // useState remembers which page is open. Starts on "Home".
  const [current, setCurrent] = useState("Home");

  // Go to the next page in the list (and loop back to the start at the end).
  function goNext() {
    const index = pages.indexOf(current);
    const nextIndex = (index + 1) % pages.length;
    setCurrent(pages[nextIndex]);
  }

  // Go straight to the Home page.
  function goBack() {
    setCurrent("Home");
  }

  return (
    <div className="app">
      {/* Show only the page that matches "current" */}
      {current === "Home" && <Home current={current} setCurrent={setCurrent} />}
      {current === "Summary" && <Summary goNext={goNext} goBack={goBack} />}
      {current === "Experience" && <Experience goNext={goNext} goBack={goBack} />}
      {current === "Skills" && <Skills goNext={goNext} goBack={goBack} />}
      {current === "Protocols" && <Protocols goBack={goBack} />}
      {current === "Train" && <TrainForm goBack={goBack} />}
    </div>
  );
}

