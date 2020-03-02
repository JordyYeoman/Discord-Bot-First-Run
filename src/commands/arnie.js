const arnieReplies = [
  "You have been targetted for termination 🤖",
  "If it bleeds we can kill it! - Predator",
  "What is the point of being on this Earth if you are going to be like everyone else?",
  "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
  "If you want to turn a vision into reality, you have to give 100% and never stop believing in your dream.",
  "For me life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.",
  "he resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.",
  "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
  "Failure is not an option. Everyone has to succeed.",
  "Just like in bodybuilding, failure is also a necessary experience for growth in our own lives, for if we’re never tested to our limits, how will we know how strong we really are? How will we ever grow?",
  "You have to remember something: Everybody pities the weak; jealousy you have to earn.",
  "I’ll be back! - The Terminator, Terminator 2: Judgment Day, Commando, The Running Man, Twins, Total Recall, Last Action Hero",
  "Hasta la vista, baby! - Terminator 2: Judgment Day",
  "Here’s your Sub-Zero… now plain zero. - The Running Man",
  "Let off some steam. - Commando",
  "Stick around. - Predator",
  "Come with me if you want to live. - Terminator 2: Judgment Day",
  "I’m not into politics, I’m into survival. - The Running Man",
  "What is best in life? To crush your enemies, see them driven before you, and to hear the lamentation of their women! - Conan the Barbarian",
  "I eat Green Berets for breakfast. And right now, I’m very hungry! - Commando"
];

module.exports = async (msg, args) => {
  const i = Math.floor(Math.random() * arnieReplies.length);
  const reply = arnieReplies[i];
  await msg.channel.send(`${msg.author} ${reply}`);
};
