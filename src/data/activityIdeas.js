const activityIdeas = [
  {
    id: 1,
    title: "Build a Cozy Fort",
    intro: "Create your own secret hideaway!",
    description: "Grab blankets, pillows, chairs, and maybe even some fairy lights if you have them! Drape the blankets over chairs or furniture to build walls and a roof. Make the inside super comfy with cushions and your favorite soft things. It’s the perfect spot for reading, telling stories, having a snack, or just enjoying your secret space. Let your imagination run wild!"
  },
  {
    id: 2,
    title: "Indoor Scavenger Hunt",
    intro: "Go on a treasure hunt inside!",
    description: "Create a list of simple things to find around your home (e.g., something red, something soft, a specific book, a funny-shaped leaf from outside brought in earlier). Or, write clues on small pieces of paper that lead from one spot to the next, with a small 'treasure' (like a snack or a fun note) at the end. It’s a great way to get moving and be observant!"
  },
  {
    id: 3,
    title: "Doodle Challenge Fun",
    intro: "Grab a pen and let your imagination flow!",
    description: "You don't need to be an artist! Just take a piece of paper and a pen or pencil. Start with a simple shape – a squiggle, a circle, a square – and turn it into something amazing. Or, challenge yourself to doodle as many different kinds of cats, monsters, or funny faces as you can in 5 minutes. Just relax and have fun making marks!"
  },
  {
    id: 4,
    title: "Learn Simple Origami",
    intro: "Fold paper into cool shapes!",
    description: "All you need is a square piece of paper (printer paper cut into a square works fine!). Look up easy origami instructions online – like how to make a paper airplane, a boat, a simple animal like a dog or cat face, or a fortune teller (cootie catcher). It’s like magic watching the paper transform with just a few folds!"
  },
  {
    id: 5,
    title: "Kitchen Disco Dance Party",
    intro: "Turn up the music and dance!",
    description: "Put on your favorite upbeat playlist – something that makes you want to move! Clear a little space in your kitchen, living room, or bedroom, and just dance! Sing along, jump around, try out silly moves. It doesn't matter how you dance, just let loose and enjoy the music. It's a fantastic mood booster!"
  },
  {
    id: 6,
    title: "Write a Silly Story Together",
    intro: "Create a funny tale, one sentence at a time!",
    description: "Grab a piece of paper. One person starts by writing a funny opening sentence (like \"Once upon a time, a purple squirrel decided to bake a cake...\"). Then, the next person adds the next sentence, making it sillier or taking the story in a weird direction. Keep going back and forth! If you're alone, just keep adding sentences yourself. Read the whole crazy story aloud at the end for a good laugh."
  },
  {
    id: 7,
    title: "Create a Dreamy Reading Nook",
    intro: "Make the perfect cozy spot for books!",
    description: "Find a quiet corner, maybe near a window or by your bed. Pile up some cushions or pillows, grab a soft blanket, and maybe a small lamp if it's dim. Bring your favorite book or magazine. Voilà! You have your very own cozy nook perfect for escaping into a story. Add a drink and a snack for extra comfort."
  },
  {
    id: 8,
    title: "Cloud Gazing from Your Window",
    intro: "Find shapes and stories in the sky!",
    description: "Find a comfy spot near a window where you can see the sky. Watch the clouds drift by. What shapes do you see? Maybe a dragon, a face, a fluffy sheep, or a spaceship? Let your imagination create stories about the shapes you see. It’s surprisingly relaxing and sparks creativity."
  },
  {
    id: 9,
    title: "Indoor Picnic Adventure",
    intro: "Have a picnic without leaving the house!",
    description: "Lay a blanket down on the living room floor. Pack some simple snacks, sandwiches, fruits, and drinks – just like you would for an outdoor picnic. You can even put some pretend ants (raisins?) nearby for fun! Enjoy your meal in this new, fun setting. Play some chill music in the background."
  },
  {
    id: 10,
    title: "Master a Simple Magic Trick",
    intro: "Amaze your family (or yourself!) with magic.",
    description: "Search online for easy magic tricks you can learn with common household items, like coins, cards, or rubber bands. Practice the trick a few times in front of a mirror until you get it right. Then, perform it for others at home, or just enjoy knowing a cool secret!"
  },
  {
    id: 11,
    title: "Try a No-Bake Treat",
    intro: "Make a yummy snack without the oven!",
    description: "Look up simple no-bake recipes online. Things like chocolate rice krispie treats, energy balls made with oats and honey, or a simple fruit and yogurt parfait are great options. They usually require minimal ingredients and are quick to whip up for a tasty reward!"
  },
  {
    id: 12,
    title: "Plan Your Dream Day Out",
    intro: "Imagine and plan a perfect future adventure!",
    description: "Grab paper and pens or use a notes app. Think about what your absolute perfect day out would look like. Where would you go? What would you do? Who would be with you? What would you eat? Write down or draw all the details. It’s fun to dream and gives you something to look forward to!"
  },
  {
    id: 13,
    title: "Organize One Tiny Space",
    intro: "Tidy up just one small spot – instant satisfaction!",
    description: "Pick one small area that feels a bit messy – maybe a single drawer, your pencil holder, a small shelf on your bookcase, or your bedside table. Take everything out, quickly sort through it (keep, toss, relocate), wipe it down, and put things back neatly. It's a quick win that feels surprisingly good!"
  },
  {
    id: 14,
    title: "Journey Through Old Photos",
    intro: "Rediscover memories hidden in photos!",
    description: "Find an old photo album, or scroll through the photos on your phone or computer from past years. Look at the pictures, remember the moments, and maybe share some stories about them with family or friends. It’s a lovely way to feel connected to good times and see how things have changed."
  },
  {
    id: 15,
    title: "Write a Happy Note to Someone",
    intro: "Brighten someone's day with a kind message!",
    description: "Think of someone you appreciate – a family member, a friend, a neighbor. Grab a piece of paper, a card, or even just send a nice text or email. Write a short, simple message telling them something you like about them, thanking them for something, or just saying hello and that you're thinking of them. Spreading kindness feels good!"
  },
  {
    id: 16,
    title: "Explore a New Podcast or Album",
    intro: "Discover new sounds or stories!",
    description: "Open your favorite music or podcast app. Browse through genres you don't usually listen to, or check out the 'recommended for you' section. Pick something new – a podcast episode on an interesting topic, or an album by an artist you've never heard of. Put on headphones, relax, and let yourself be transported somewhere new."
  },
  {
    id: 17,
    title: "Five-Minute Mindfulness Break",
    intro: "Take a quick pause to relax and breathe.",
    description: "Find a quiet place to sit comfortably. Close your eyes or just gaze softly downwards. Take a few slow, deep breaths – in through your nose, out through your mouth. Focus on the feeling of your breath going in and out. Notice any sounds around you without judgment. Just sit quietly for 5 minutes. It's a simple way to reset your mind."
  },
  {
    id: 18,
    title: "Invent a Secret Handshake",
    intro: "Create a cool, unique greeting!",
    description: "Team up with someone at home, or invent one just for yourself! Combine simple moves like high-fives, fist bumps, finger wiggles, snaps, or silly waves. Put them together in a unique sequence. Practice it until it's smooth. Now you have a super-secret way to greet your partner-in-crime (or your reflection!)."
  },
  {
    id: 19,
    title: "Learn 5 Phrases in a New Language",
    intro: "Say hello to the world in a new way!",
    description: "Choose a language you're curious about. Use a free online tool or app (like Google Translate or Duolingo) to learn how to say five basic, useful phrases. Good ones to start with are: \"Hello,\" \"Goodbye,\" \"Thank you,\" \"Yes,\" and \"No.\" Practice saying them out loud! ¡Buena suerte! (Good luck!)"
  },
  {
    id: 20,
    title: "Sock Puppet Show Fun",
    intro: "Bring some socks to life with stories!",
    description: "Find a couple of old (clean!) socks. Put them on your hands – these are your puppets! You can draw faces on them with a marker if you like (ask permission first if they aren't your socks!). Hide behind a sofa or chair and put on a show. Make up funny voices and a simple story. It’s pure, silly fun for any age."
  }
];

export default activityIdeas;