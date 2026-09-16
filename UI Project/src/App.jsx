import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop",
    description:
      "Build your career with opportunities that match your skills, passion, and professional goals.",
    tag: "Discover",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop",
    description:
      "Connect with talented professionals and discover a workplace where your ideas matter.",
    tag: "Connect",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
    description:
      "Take the next step in your career with meaningful work and exciting new challenges.",
    tag: "Grow",
  },
   {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop",
    description:
      "Turn your ambitions into achievements with the right opportunities and a supportive professional environment.",
    tag: "Achieve",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop",
    description:
      "Unlock your potential and take bold steps toward a successful and fulfilling career.",
    tag: "Elevate",
  },
];

const App = () => {
  return (
    <div>
      <Section1 cards={cards}/>
      <Section2/>
    </div>
  )
}

export default App
