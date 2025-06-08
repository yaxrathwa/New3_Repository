import React from 'react';
import SubmissionForm from '../scenes/Submission_form';
import BasicCard from './card';
import sakaRadar from '../saka-opta-analyst-radar-1024x896.jpeg';




function Homepage() {
  return (
    <main
      style={{
        background: 'linear-gradient(135deg, #2E7D32 0%, #424242 100%)',
        minHeight: '100vh',
        padding: '0',
        fontFamily: 'Oswald',
        
      }}
    >
      {/* Pitch-line accent */}
      <div
        style={{
          height: 8,
          background: 'repeating-linear-gradient(90deg, #FFD700, #FFD700 20px, transparent 20px, transparent 40px)',
        }}
      />

      {/* Hero Section */}
      <section
        style={{
          maxWidth: 680,
          margin: '40px auto 0 auto',
          background: 'white',
          borderRadius: 18,
          boxShadow: '0 6px 24px rgba(44, 62, 80, 0.08)',
          padding: '36px 32px 24px 32px',
          border: '5px dashed #2E7D32',
          position: 'relative',
        }}
      >
        {/* Goal-net accent */}
        <div
          style={{
            position: 'absolute',
            top: 18,
            right: 28,
            width: 60,
            height: 60,
            background: 'repeating-linear-gradient(135deg, #E0E0E0 0 2px, transparent 2px 12px)',
            opacity: 0.18,
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <h1
          style={{
            fontFamily: "'Montserrat', 'Oswald'",
            color: '#2E7D32',
            fontWeight: 700,
            fontSize: '2.5rem',
            marginBottom: 18,
            display: 'inline-block',
            animation: 'cheerPulse 1.2s infinite alternate',
          }}
          className="cheer-pulse"
        >
          Football Lore – Relive the Greatest Moments
        </h1>
        <p
          style={{
            color: '#424242',
            fontSize: '1.12rem',
            marginBottom: 12,
            fontFamily: 'Roboto, Montserrat',
          }}
        >
          Welcome to FootballLore.com, where unforgettable football stories come alive. Dive into match analyses, legendary moments, and community insights, all in one energetic space.
        </p>
        <p
          style={{
            color: '#424242',
            fontSize: '1.12rem',
            marginBottom: 32,
            fontFamily: 'Roboto, montserrat',
          }}
        >
          Share your own football tales, browse fan contributions, and relive the excitement of the beautiful game through photos, videos, and personal accounts.
        </p>
        
        <div
          style={{
            borderRadius: 12,
            background: '#F5F5F5',
            boxShadow: '0 20px 37px rgba(3, 4, 5, 0.03)',
            padding: 24,
            marginBottom: 16,
            border: '1px solid #FFD700',
          }}
        >
            

          <SubmissionForm />
        
          
        </div>
        <p style={{ color: '#424242', fontSize: '1.12rem', fontFamily: 'Roboto, Montserrat' }}>  
            Football lore is woven from centuries of thrilling matches, legendary players, and unforgettable moments that have shaped the sport’s identity. From its origins in 19th-century England to its global popularity today, football’s history is rich with stories of passion, rivalry, and community. These tales continue to inspire fans and unite people across cultures through a shared love of the game. <br />
            <br />
            Dive into a vibrant community where every fan’s voice matters. At FootballLore, you’ll find in-depth match analysis, personal anecdotes, and a showcase of football’s most memorable moments. Share your stories, connect with fellow enthusiasts, and experience the energy of the game through photos, videos, and insightful commentary. Every visit brings a new chapter in football history to life
        </p>
      </section>
      <section>
        <BasicCard
  a="Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
  b="Pelé"
/>
<BasicCard
  a="In the 1986 World Cup quarter-final against England, Maradona scored two of the most famous goals in football history. After the match, he famously described his first goal—scored with his hand—as:

“A little with the head of Maradona and a little with the hand of God.”"
  b="This moment, forever known as the 'Hand of God' goal, has become one of the most talked-about and iconic stories in football lore, symbolizing both Maradona’s genius and the controversy that can surround the beautiful game."
/><BasicCard
  a={
    <>
      <p>
        The 2006 FIFA World Cup final, played on July 9, 2006, at Berlin’s Olympiastadion, saw Italy and France face off in a dramatic and tightly contested match. The game ended 1-1 after extra time, with Italy ultimately winning 5-3 in a penalty shootout to claim their fourth World Cup title.
      </p>
      <h4>Key Moments:</h4>
      <ul>
        <li><b>Early Goals:</b> France took the lead in the 7th minute when Zinedine Zidane scored a Panenka-style penalty after Florent Malouda was fouled by Marco Materazzi. Italy equalized in the 19th minute with Materazzi heading in from an Andrea Pirlo corner.</li>
        <li><b>First Half:</b> Both teams had chances, with Italy’s Luca Toni hitting the crossbar. The half ended 1-1.</li>
        <li><b>Second Half:</b> France controlled much of the play and had another penalty appeal denied. Italy had a goal disallowed for offside. The match remained deadlocked, leading to extra time.</li>
        <li><b>Extra Time Drama:</b> In the 104th minute, Gianluigi Buffon made a crucial save from Zidane’s header. The defining moment came in the 110th minute when Zidane was sent off for head-butting Materazzi after an exchange of words, marking a controversial end to his illustrious career.</li>
        <li><b>Penalty Shootout:</b> All Italian players scored their penalties, while France’s David Trezeguet hit the crossbar. Fabio Grosso scored the decisive penalty, sealing Italy’s victory 5-3 in the shootout.</li>
      </ul>
      <h4>Tactical Analysis:</h4>
      <ul>
        <li><b>Italy:</b> Marcello Lippi’s Italy combined traditional defensive solidity with newfound attacking flair and tactical flexibility. Andrea Pirlo orchestrated play from midfield, and the team’s resilience was evident throughout the tournament and especially in the final.</li>
        <li><b>France:</b> Led by Zidane, France played with composure and technical ability, controlling possession for large stretches. However, they struggled to break down Italy’s organized defense after the early goal.</li>
      </ul>
      <h4>Legacy:</h4>
      <ul>
        <li>Zidane’s red card became one of the most infamous moments in World Cup history, overshadowing his otherwise brilliant tournament performance (he was awarded the Golden Ball as the tournament’s best player).</li>
        <li>Andrea Pirlo was named Man of the Match for his influential midfield display.</li>
        <li>The match is remembered for its high drama, tactical battle, and the emotional farewell of Zidane from international football.</li>
      </ul>
    </>
  }
  b="2006 World Cup Final Match Analysis"
/><BasicCard
  a={
    <>
      <img src={sakaRadar} alt="Bukayo Saka Radar" width="100%" />
    </>
  }
  b="Bukayo Saka"
/>



      </section>
      
    
       


      

      {/* CSS for micro-animation */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:700|Oswald:700|Roboto:400,500&display=swap');
          .cheer-pulse {
            transition: transform 0.2s;
          }
          .cheer-pulse:hover {
            animation: cheerPulse 0.6s;
          }
          @keyframes cheerPulse {
            0% { transform: scale(1);}
            100% { transform: scale(1.04);}
          }
        `}
      </style>
    </main>
  );

}


 
// At the bottom of your file:
export default Homepage;

