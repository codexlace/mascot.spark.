    const subjectData = {
      blob: ["Blob mascot", "one uneven oval blob", "simple squishy shapes", ["Mochi Blob", "Pocket Puff", "Wobble Bean"]],
      food: ["Food mascot", "one rounded food shape", "face placement", ["Toast Buddy", "Berry Bop", "Dumpling Dot"]],
      object: ["Object character", "one object silhouette", "object-to-character design", ["Button Bean", "Tiny Paint Tube", "Key Charm"]],
      icon: ["Icon mascot", "one clean emblem shape", "icon readability", ["Spark Badge", "Moon Tile", "Gem Dot"]],
      letter: ["Letter mascot", "one chunky letter", "letter construction", ["Letter Bean", "Curly M Mascot", "Alphabet Sprite"]],
      number: ["Number mascot", "one chunky number shape", "readable symbol character", ["Zero Bean", "Curly Two Buddy", "Seven Sprite"]],
      mask: ["Mask mascot", "one rounded mask shape", "symmetry and expression", ["Soft Chaos Mask", "Moon Mask", "Button-Eye Mask"]],
      plant: ["Plant mascot", "one leaf, sprout, or plant shape", "organic softness", ["Leaf Bean", "Sprout Dot", "Moss Buddy"]],
      flower: ["Flower mascot", "one flower head or petal cluster", "petal grouping", ["Bloom Bean", "Petal Dot", "Tiny Daisy Pal"]],
      star: ["Star / moon mascot", "one moon, star, or comet shape", "celestial silhouette", ["Moon Dot", "Starry Bean", "Tiny Comet"]],
      potion: ["Potion bottle mascot", "one rounded bottle shape", "object clarity", ["Potion Pip", "Bottle Bop", "Tiny Elixir"]],
      bug: ["Tiny bug mascot", "one oval bug body", "small repeated shapes", ["Button Beetle", "Moth Dot", "Tiny Flutter"]],
      cloud: ["Cloud / weather mascot", "one puffy cloud or weather shape", "soft edges", ["Cloud Puff", "Rainy Bean", "Storm Dot"]],
      gem: ["Gem / charm mascot", "one diamond or charm shape", "faceted simplicity", ["Gem Sprite", "Crystal Dot", "Tiny Relic"]],
      stationery: ["Pencil / stationery mascot", "one stationery silhouette", "creative object identity", ["Pencil Pip", "Eraser Bean", "Marker Dot"]],
      candy: ["Candy mascot", "one candy wrapper, gummy, or lollipop shape", "plush candy surfaces", ["Gummy Dot", "Taffy Bean", "Candy Button"]],
      toy: ["Toy mascot", "one plush toy body", "soft toy proportions", ["Plush Button", "Stuffie Dot", "Pocket Doll"]],
      sticker: ["Sticker mascot", "one sticker-like shape", "bold silhouette readability", ["Sticker Spark", "Peel Dot", "Glossy Badge Bean"]],
      badge: ["Badge / emblem mascot", "one badge, crest, or ribbon shape", "emblem clarity", ["Badge Bloom", "Crest Bean", "Ribbon Dot"]],
      tool: ["Creative tool mascot", "one brush, pen, palette, or tool shape", "creative tool identity", ["Brush Buddy", "Pen Nib Pip", "Palette Dot"]],
      book: ["Book / notebook mascot", "one book or page shape", "folded paper simplicity", ["Notebook Nib", "Book Bean", "Page Sprite"]],
      ghost: ["Ghost mascot", "one soft ghost sheet shape", "soft spooky silhouette", ["Ghost Bean", "Sheet Sprite", "Tiny Boo Buddy"]],
      creature: ["Tiny creature mascot", "one simple creature body", "invented creature design", ["Pocket Gremlin", "Nub Creature", "Soft Monster Dot"]],
      household: ["Household object mascot", "one simple household object", "everyday object character", ["Lamp Dot", "Mug Bean", "Pillow Pal"]],
      drink: ["Drink mascot", "one cup, bottle, or juice box shape", "container clarity", ["Tea Cup Dot", "Soda Bean", "Juice Box Pal"]],

      fruit: ["Fruit mascot", "one fruit body shape", "round edible character design", ["Peach Pip", "Apple Dot", "Citrus Bean"]],
      vegetable: ["Vegetable mascot", "one vegetable body shape", "organic object character", ["Carrot Pip", "Radish Dot", "Mushroom Sprout"]],
      dessert: ["Dessert mascot", "one dessert silhouette", "sweet treat character design", ["Pudding Dot", "Cake Bean", "Cookie Charm"]],
      breakfast: ["Breakfast mascot", "one breakfast food shape", "cozy food character", ["Pancake Puff", "Eggy Dot", "Waffle Bean"]],
      sauce: ["Sauce / condiment mascot", "one bottle, jar, or packet shape", "container personality", ["Ketchup Pip", "Honey Dot", "Jam Jar Buddy"]],
      shell: ["Shell mascot", "one shell or beach trinket shape", "soft beach object design", ["Shell Bean", "Pearl Dot", "Tiny Conch"]],
      aquatic: ["Aquatic mascot", "one fish, droplet, or sea-creature shape", "water-soft silhouette", ["Bubble Fish", "Droplet Dot", "Tiny Jelly"]],
      robot: ["Tiny robot mascot", "one rounded mechanical body", "cute machine design", ["Bolt Bean", "Robo Dot", "Tiny Circuit"]],
      device: ["Device mascot", "one phone, tablet, or tiny screen shape", "tech object character", ["Pixel Pal", "Tiny Tablet", "Screen Bean"]],
      clothing: ["Clothing mascot", "one clothing item silhouette", "soft fabric character", ["Sock Gremlin", "Mittens Dot", "Tiny Hoodie"]],
      accessory: ["Accessory mascot", "one wearable accessory shape", "fashion object personality", ["Bow Bean", "Charm Clip", "Tiny Locket"]],
      music: ["Music mascot", "one musical object or note shape", "sound-symbol character", ["Note Dot", "Tiny Tambourine", "Chord Bean"]],
      artSupply: ["Art supply mascot", "one art supply shape", "creative studio character", ["Crayon Dot", "Paint Pot", "Ink Bean"]],
      magicObject: ["Magic object mascot", "one wand, crystal, scroll, or charm shape", "mystic object design", ["Wand Wisp", "Scroll Bean", "Rune Dot"]],
      celestialObject: ["Celestial object mascot", "one planet, cloud moon, or star object", "sky-symbol character", ["Planet Pip", "Comet Bean", "Orbit Dot"]],
      plushKeychain: ["Plush keychain mascot", "one tiny hanging plush shape", "keychain character design", ["Keychain Puff", "Clip Bean", "Charm Plush"]],
      tinyMonster: ["Tiny monster mascot", "one small monster body", "soft creature attitude", ["Fang Puff", "Nub Goblin", "Tiny Howl"]],
      zodiac: ["Zodiac mascot", "one zodiac-symbol-inspired body", "symbolic character design", ["Aries Puff", "Moon Sign Dot", "Star Chart Bean"]],
      emoji: ["Emoji mascot", "one simple expression-ball body", "face-first character design", ["Mood Dot", "Emoji Bean", "Tiny Reaction"]],
      package: ["Package mascot", "one box, mailer, or wrapped shape", "parcel character design", ["Parcel Pip", "Box Bean", "Tiny Mailer"]],
      furniture: ["Furniture mascot", "one furniture silhouette", "home object character", ["Chair Dot", "Lampy Bean", "Tiny Table"]],
      garden: ["Garden mascot", "one garden object or nature shape", "outdoor cozy character", ["Watering Can Dot", "Seed Packet", "Garden Bean"]],
      weatherIcon: ["Weather icon mascot", "one weather-symbol shape", "forecast icon character", ["Thunder Dot", "Snow Puff", "Sunny Bean"]],
      abstractShape: ["Abstract shape mascot", "one invented soft abstract shape", "shape-language practice", ["Blob Glyph", "Loop Dot", "Wiggle Bean"]],
      circleBadge: ["Circle badge mascot", "one clean circular badge shape", "centered shape readability", ["Orbit Button", "Roundy Spark", "Halo Dot"]],
      squircleTile: ["Squircle tile mascot", "one soft squircle app-tile shape", "soft corner control", ["Tile Puff", "Soft App Bean", "Squish Icon"]],
      roundedTriangle: ["Rounded triangle mascot", "one rounded triangle wedge shape", "point-softening and balance", ["Tri Puff", "Lucky Wedge", "Soft Peak"]],
      diamondTile: ["Diamond tile mascot", "one rounded diamond badge", "angled symmetry", ["Gem Crest", "Diamond Dot", "Tilt Bean"]],
      heartBadge: ["Heart badge mascot", "one plump heart-like badge shape", "heart silhouette clarity", ["Hearty Loop", "Sweet Crest", "Cupid Bean"]],
      crescentDrop: ["Crescent drop mascot", "one crescent-moon droplet shape", "moon-curve shape control", ["Moon Drip", "Crescent Pip", "Night Drop"]],
      cloverGlyph: ["Clover glyph mascot", "one four-lobed clover glyph shape", "multi-lobe balance", ["Clover Pop", "Lucky Puff", "Petal Node"]],
      pillCapsule: ["Pill capsule mascot", "one capsule or lozenge shape", "capsule proportions", ["Capsule Pop", "Jelly Cap", "Lozenge Bean"]],
      starburstSeal: ["Starburst seal mascot", "one burst-edged sticker seal", "spiky but cute edges", ["Burst Button", "Star Seal", "Spark Ruffle"]],
      archTile: ["Arch tile mascot", "one arch-window or shrine-top tile shape", "arched silhouette control", ["Archie Tile", "Window Puff", "Shrine Dot"]],
      ribbonLoop: ["Ribbon loop mascot", "one looped ribbon / bow-loop badge", "looped silhouette design", ["Loopie Crest", "Ribbon Bean", "Bow Knot Dot"]],
      pebbleStack: ["Pebble stack mascot", "one stacked pebble / blob cluster shape", "asymmetric balance", ["Pebble Pile", "Stack Dot", "Smooth Cluster"]],
      logoMark: ["Logo mark mascot", "one brand-mark shape", "brandable mascot silhouette", ["Mark Dot", "Logo Bean", "Crestling"]]
    };

    const emotions = {
      shy: ["Shy", "low dot eyes, blush cheeks, tiny curved mouth", "hands tucked close to the body", "Do not place the face too high."],
      happy: ["Happy", "bright dot eyes, lifted smile, small sparkle cheek", "tiny raised arms", "Keep the smile small and readable."],
      sleepy: ["Sleepy", "closed curved eyes, tiny yawn mouth, droopy posture", "small pillow-like cheek", "One sleepy cue is enough."],
      grumpy: ["Grumpy-cute", "flat brows, dot eyes, tiny frown", "round body to keep it cute", "Do not make the shapes too sharp."],
      spooky: ["Spooky-sweet", "uneven eyes, tiny fang, nervous smile", "soft ghostly glow", "Sweet first, spooky second."],
      sassy: ["Sassy-soft", "half-lidded eyes, tiny side-smile, one raised brow", "confident tilt", "Keep the body soft."],
      nervous: ["Nervous-cute", "uneven eyes, tiny worried mouth, small blush dots", "hands close to body", "One worry mark is enough."],
      proud: ["Proud-tiny", "bright eyes, confident tiny smile, lifted brow", "small cape or upright pose", "Pride can be shown with one tilt."],
      dreamy: ["Dreamy-sad", "soft sleepy eyes, tiny smile, relaxed cheeks", "moon or floating sparkle", "Use one dreamy symbol."],
      mischievous: ["Mischievous-sweet", "one raised brow, dot eyes, crooked tiny smile", "small fang or tilted accessory", "Keep it playful, not mean."],
      dramatic: ["Dramatic-soft", "large shiny eyes, tiny frown or O mouth", "one tear or cape", "One clear gesture is enough."],
      calm: ["Calm-glowy", "soft closed eyes, peaceful smile", "small leaf or halo", "Avoid loud accessories."],
      confused: ["Confused-cute", "one big eye, one small eye, tiny O mouth", "question mark charm", "Tilt one thing only."],
      angryTiny: ["Tiny-angry", "tiny angry brows, dot eyes, very small frown", "soft round body", "Tiny-angry works best on plush shapes."],
      sadHopeful: ["Sad-hopeful", "soft sad eyes, tiny hopeful smile, one glow mark", "warm cheek sparkle", "Do not overdo tears."],
      hauntedHappy: ["Haunted-happy", "happy smile with slightly uneven eyes", "ghostly glow", "Keep the smile readable."],
      braveScared: ["Brave-scared", "wide eyes, determined brows, tiny tense mouth", "small cape", "Show bravery with one lifted edge."],
      jealousCute: ["Jealous-cute", "side-eye dots, tiny pout, raised brow", "small heart or crossed arms", "Keep it plush, not mean."],
      chaoticSoft: ["Chaotic-soft", "uneven eyes, excited little grin, tilted head", "one crooked accessory", "One crooked detail is enough."],
      lonelySparkly: ["Lonely-sparkly", "small low eyes, tiny mouth, one bright sparkle", "extra space around the face", "The empty space is part of the mood."],
      bashfulProud: ["Bashful-proud", "blush cheeks, proud tiny smile, shy eyes", "tiny badge or sparkle", "Keep the proud detail small."],
      gloomySweet: ["Gloomy-sweet", "droopy eyes, soft little smile, low brows", "raindrop or cloud mark", "Keep one sweet color."],
      feralCute: ["Feral-cute", "tiny fang, wide eyes, chaotic small grin", "one tuft or claw mark", "Still use simple shapes."],
      meltyHappy: ["Melty-happy", "smiling eyes, tiny open smile, droopy cheeks", "one melting edge", "One droop reads better."],
      softSuspicious: ["Soft-suspicious", "half-lidded eyes, tiny side mouth, raised brow", "slight body tilt", "One suspicious cue is enough."],

      embarrassedBrave: ["Embarrassed-brave", "blush cheeks, determined brows, tiny nervous smile", "small cape or upright pose", "Keep the bravery small and readable."],
      sleepyMischief: ["Sleepy-mischievous", "sleepy eyes, tiny crooked grin, soft brow", "one tilted accessory", "Do not add too much chaos."],
      anxiousProud: ["Anxious-proud", "wide eyes, proud smile, tense brows", "tiny badge or sparkle", "Show both feelings with face, not extra props."],
      hopefulGrumpy: ["Hopeful-grumpy", "flat brows, small frown, bright cheek sparkle", "one hopeful glow mark", "Keep the glow tiny."],
      bashfulChaotic: ["Bashful-chaotic", "blush, uneven eyes, tiny grin", "crooked bow or patch", "One chaotic detail is enough."],
      smugCute: ["Smug-cute", "half-lidded eyes, tiny smirk, raised brow", "small shine or crown", "Avoid making the expression mean."],
      timidMagical: ["Timid-magical", "small worried eyes, tiny smile, sparkle freckles", "soft wand or glow", "Use gentle magic, not clutter."],
      dramaticSleepy: ["Dramatic-sleepy", "closed eyes, dramatic tiny frown, droopy pose", "little tear or moon mark", "Keep the drama simple."],
      woundedSparkly: ["Wounded-sparkly", "soft sad eyes, bandage mark, tiny hopeful sparkle", "small bandage detail", "Do not overdo injury details."],
      overexcitedSoft: ["Overexcited-soft", "wide eyes, open smile, blushy cheeks", "tiny raised arms", "Keep limbs tiny."],
      suspiciousHappy: ["Suspicious-happy", "side-eye with tiny smile", "tilted head", "One side-eye is enough."],
      gloomyGlam: ["Gloomy-glam", "droopy eyes, glossy shine, tiny pout", "small luxe sparkle", "Do not make the palette too dark."],
      lonelyBrave: ["Lonely-brave", "small low eyes, determined brow, tiny smile", "mini cape or glow", "Leave some empty space."],
      tenderFeral: ["Tender-feral", "wide eyes, tiny fang, soft blush", "one messy tuft", "Keep feral details rounded."],
      eerieCalm: ["Eerie-calm", "closed peaceful eyes, faint spooky smile", "halo or ghost glow", "Do not make it scary."],
      gigglyNervous: ["Giggly-nervous", "uneven eyes, tiny nervous laugh", "sweat drop or blush", "Keep the mouth small."],
      softVillain: ["Soft-villain", "tiny smirk, angled brows, plush body", "small cape or crown", "Villain cue should be cute, not harsh."],
      rainyHopeful: ["Rainy-hopeful", "sad eyes, tiny smile, raindrop bead", "soft blue accent", "Use one rain detail."],
      cursedAdorable: ["Cursed-adorable", "mismatched eyes, tiny smile, cute patch", "soft spooky mark", "Do not add horror details."],
      delightedShy: ["Delighted-shy", "bright eyes, tiny hidden smile, blush", "hands tucked in", "Make delight small and sweet."],
      seriousTiny: ["Serious-tiny", "straight brows, tiny line mouth, round body", "simple badge or mark", "Serious does not mean complex."]
    };

    const lessonSizes = {
      micro: ["Micro: 5 minute warm-up", [["One big shape", "Draw only the body shape.", "No details yet."], ["Low face", "Add two eyes below center and one mouth.", "High faces feel less cute."], ["Tiny finish", "Add one limb pair or one twist.", "Stop small."]]],
      tiny: ["Tiny: 10 minute sketch", [["Block shape", "Draw one readable base shape.", "Do not scratch over lines."], ["Place face", "Eyes below center, mouth close under.", "Face placement matters."], ["Tiny limbs", "Use simple curves or ovals.", "Keep limbs small."], ["Color", "Flat color, one shadow, one highlight.", "Do not over-render."]]],
      normal: ["Normal: beginner lesson", [["Ghost shape", "Lightly draw the base like a sticker silhouette.", "Avoid details early."], ["Center guide", "Add vertical guide and low face line.", "Guides are not cheating."], ["Eyes first", "Place eyes before the mouth.", "Eye spacing changes personality."], ["Mouth test", "Try three mouths, choose one.", "Do not marry the first mouth."], ["Limbs", "Add tiny arms or feet.", "Keep them secondary."], ["Clean line", "Lower sketch opacity and redraw.", "Undo messy strokes."], ["Color pass", "Base color, one shadow, one highlight.", "Stop early."]]],
      slow: ["Slow: explain every move", [["Warm-up", "Draw the base shape three times.", "Training hand, not masterpiece."], ["Final base", "Pick the friendliest base and enlarge it.", "Bigger is easier."], ["Guides", "Vertical center and low face line.", "Placement over detail."], ["Eye test", "Try dots, sleepy curves, uneven eyes.", "Test before final."], ["Mouth test", "Try smile, frown, O mouth.", "Small mouths carry emotion."], ["Limbs", "C-curves and oval feet only.", "Simple limbs improve faster."], ["Accessory limit", "One accessory only.", "One good detail beats five."], ["Clean", "New layer, slow line pass.", "Keep some charm."], ["Color", "Base, shadow, highlight.", "Stopping is skill."]]],
      study: ["Study: repeat + improve", [["Version 1", "Draw body, face, limbs only.", "Baseline first."], ["Version 2", "Improve only face placement.", "Change one thing."], ["Version 3", "Improve only silhouette.", "Silhouette matters."], ["Pick winner", "Circle clearest version.", "Clarity wins."], ["Final polish", "One shadow, one highlight, one twist.", "Stop before noise."]]],
      iconSheet: ["Icon sheet: 4 tiny versions", [["Four boxes", "Draw four tiny icon squares.", "Small prevents detail overload."], ["A plain", "Body and face only.", "Test idea."], ["B emotion", "Stronger expression.", "Change face only."], ["C twist", "Add one accessory.", "Keep readable."], ["D sticker", "Thicker outline, fewer details.", "Bold shape."], ["Choose", "Redraw clearest version larger.", "Clarity wins."]]],
      polish: ["Polish: clean final pass", [["Silhouette", "Zoom out and simplify edge.", "Remove clutter."], ["Line", "Redraw with confident lines.", "Do not trace every wobble."], ["Face balance", "Move eyes/mouth slightly.", "Small changes matter."], ["Color", "Base, shadow, highlight.", "Avoid too many colors."], ["Final charm", "One detail if still readable.", "Decoration is optional."]]],
      oneShape: ["One-shape-only drill", [["Choose shape", "Use one body shape only.", "No combined forms."], ["Alive face", "Low face and one mouth.", "No limbs yet."], ["Tiny limbs", "Two curves or two ovals.", "Keep small."], ["One mark", "Sparkle, stitch, blush, patch.", "One mark only."]]],
      expressionSheet: ["Expression sheet: 4 faces", [["Four copies", "Same body four times.", "Do not redesign."], ["Happy", "Dots and tiny smile.", "Small mouth."], ["Grumpy-cute", "Flat brows and tiny frown.", "Round body."], ["Spooky-sweet", "Uneven eye or fang.", "Not too spooky."], ["Confused", "One big eye, one small eye.", "Face only."], ["Pick", "Redraw strongest expression larger.", "Fast read wins."]]],
      silhouetteDrill: ["Silhouette drill", [["Three bodies", "Draw three silhouettes, no faces.", "No details."], ["Zoom out", "Pick clearest body.", "Details do not save weak shapes."], ["Face last", "Add simple face to best silhouette.", "Keep body."], ["Sticker-safe", "Thicken/simplify edge.", "Strong outer shape."]]],
      accessoryDrill: ["Accessory control drill", [["Plain mascot", "Body, face, limbs only.", "No decoration."], ["Test three", "Bow, patch, sparkle beside it.", "Test off-body."], ["Choose one", "Attach only strongest accessory.", "Avoid noise."], ["Balance", "Do not cover face.", "Face leads emotion."]]],
      colorPass: ["Color pass practice", [["Base", "Fill one main color.", "No shading yet."], ["Accent", "One cheek/accent color.", "Avoid rainbow overload."], ["Shadow", "One clipped shadow.", "One light direction."], ["Highlight", "One shine spot.", "Stop early."]]],
      dailyQuest: ["Daily mascot quest", [["Warm-up", "Draw round, squishy, angular shapes.", "No details."], ["Main", "Use selected subject/emotion/twist.", "Big shape first."], ["Remix", "Change one expression.", "One change only."], ["Name", "Name by mood.", "Names help memory."], ["Note", "Write what improved.", "Reflect small."]]]
    };

    const twists = {
      none: ["No extra twist", "no extra decoration", "Skip decoration this time.", ""],
      sparkle: ["One sparkle", "one little sparkle", "Add one tiny sparkle near the cheek.", '<path class="feature" d="M380 130 L388 150 L408 158 L388 166 L380 186 L372 166 L352 158 L372 150 Z"></path>'],
      hat: ["Tiny hat", "a tiny hat", "Add a tiny hat; do not cover the face.", '<path class="feature" d="M220 130 L300 130 L285 95 L235 95 Z M210 132 L310 132"></path>'],
      patch: ["Cute patch", "a cute patch", "Add one patch shape on the side.", '<rect class="feature" x="330" y="315" width="45" height="38" rx="10"></rect>'],
      charm: ["Mini charm tag", "a mini charm tag", "Hang a tiny charm from one side.", '<path class="feature" d="M370 335 Q400 365 390 395"></path><path class="feature" d="M390 395 L410 415 L390 435 L370 415 Z"></path>'],
      freckle: ["Dot freckles", "dot freckles", "Add tiny cheek dots.", '<circle class="solid" cx="195" cy="305" r="4"></circle><circle class="solid" cx="207" cy="318" r="4"></circle><circle class="solid" cx="320" cy="305" r="4"></circle><circle class="solid" cx="332" cy="318" r="4"></circle>'],
      bow: ["Tiny bow", "a tiny bow", "Add a bow on one side.", '<path class="feature" d="M198 135 L230 155 L198 175 Z M262 135 L230 155 L262 175 Z"></path>'],
      halo: ["Soft halo", "a soft halo", "Float a halo above the mascot.", '<ellipse class="feature" cx="260" cy="92" rx="58" ry="16"></ellipse>'],
      fang: ["Tiny fang", "a tiny fang", "Add one tiny fang.", '<path class="feature" d="M263 315 L270 332 L277 315"></path>'],
      glow: ["Glow mark", "a glow mark", "Add one soft glow dash.", '<path class="feature" d="M118 190 Q96 176 82 152 M405 190 Q426 174 440 150"></path>'],
      ribbon: ["Little ribbon tail", "a little ribbon tail", "Add a small ribbon behind one side.", '<path class="feature" d="M355 350 L425 382 L380 404 L425 435 L350 405"></path>'],
      stitches: ["Simple stitches", "simple stitches", "Add three stitch marks.", '<path class="feature" d="M154 230 L176 242 M148 275 L172 282 M154 318 L176 310"></path>'],
      leaf: ["Tiny leaf", "a tiny leaf", "Add one leaf sprout.", '<path class="feature" d="M260 132 C260 102 292 94 312 112 C288 118 272 128 260 132 Z"></path>'],
      starCheek: ["Star cheek", "a star cheek", "Add one star cheek.", '<path class="feature" d="M202 295 L207 306 L219 310 L207 314 L202 326 L197 314 L185 310 L197 306 Z"></path>'],
      button: ["Button cheek", "a button cheek", "Add one button cheek.", '<circle class="feature" cx="203" cy="305" r="16"></circle><circle class="solid" cx="198" cy="303" r="3"></circle><circle class="solid" cx="208" cy="307" r="3"></circle>'],
      teardrop: ["Tiny teardrop", "a tiny teardrop", "Add one teardrop.", '<path class="feature" d="M320 278 C335 295 335 312 320 318 C305 312 305 295 320 278 Z"></path>'],
      bandage: ["Tiny bandage", "a tiny bandage", "Add a small bandage.", '<rect class="feature" x="330" y="285" width="55" height="24" rx="10"></rect><path class="feature" d="M350 292 L365 307 M365 292 L350 307"></path>'],
      crown: ["Tiny crown", "a tiny crown", "Add a three-point crown.", '<path class="feature" d="M220 135 L240 100 L260 135 L280 100 L300 135 Z"></path>'],
      cape: ["Mini cape", "a mini cape", "Add one small cape behind one side.", '<path class="feature" d="M165 245 C110 285 125 370 190 390"></path>'],
      wings: ["Little wings", "little wings", "Add tiny wing curves.", '<path class="feature" d="M150 270 C100 230 92 310 142 320 M370 270 C420 230 428 310 378 320"></path>'],
      antenna: ["Antennae", "antennae", "Add two antenna curves.", '<path class="feature" d="M230 145 Q210 100 180 95 M290 145 Q310 100 340 95"></path>'],
      question: ["Question mark charm", "a question mark charm", "Add a tiny question charm.", '<path class="feature" d="M365 225 C385 205 420 218 410 248 C405 264 385 267 385 285"></path><circle class="solid" cx="385" cy="310" r="6"></circle>'],
      moon: ["Moon mark", "a moon mark", "Add one crescent mark.", '<path class="feature" d="M350 292 C330 280 330 330 350 318 C338 312 338 298 350 292 Z"></path>'],
      heart: ["Heart patch", "a heart patch", "Add one heart patch.", '<path class="feature" d="M205 292 C190 275 165 292 180 315 L205 340 L230 315 C245 292 220 275 205 292 Z"></path>'],
      glasses: ["Round glasses", "round glasses", "Add round glasses.", '<circle class="feature" cx="225" cy="265" r="25"></circle><circle class="feature" cx="295" cy="265" r="25"></circle><path class="feature" d="M250 265 L270 265"></path>'],
      scarf: ["Tiny scarf", "a tiny scarf", "Add a scarf band.", '<path class="feature" d="M195 338 L325 338 M285 338 L330 380"></path>'],
      paint: ["Paint drip", "a paint drip", "Add one rounded paint drip.", '<path class="feature" d="M330 160 C345 195 325 210 338 240 C358 215 365 185 350 160"></path>'],
      shine: ["Glossy shine spot", "a glossy shine spot", "Add one oval shine.", '<ellipse class="feature" cx="210" cy="190" rx="28" ry="12" transform="rotate(-25 210 190)"></ellipse>'],
      thread: ["Holographic thread stitch", "a holographic thread stitch", "Add a dashed edge stitch.", '<path class="feature" d="M155 210 L175 225 M150 250 L175 260 M155 292 L178 292 M165 330 L185 315"></path>'],
      raindrop: ["Raindrop bead", "a raindrop bead", "Add one raindrop bead.", '<path class="feature" d="M385 220 C405 248 405 275 385 285 C365 275 365 248 385 220 Z"></path>'],
      sprout: ["Sprout tuft", "a sprout tuft", "Add a sprout tuft.", '<path class="feature" d="M260 145 L260 105 M260 112 C235 90 210 108 220 130 M260 112 C285 90 310 108 300 130"></path>'],
      zipper: ["Tiny zipper", "a tiny zipper", "Add a short zipper line on one side.", '<path class="feature" d="M350 220 L350 315 M340 235 L360 235 M340 255 L360 255 M340 275 L360 275 M340 295 L360 295"></path>'],
      safetyPin: ["Safety pin", "a safety pin", "Add one tiny safety pin detail.", '<path class="feature" d="M350 230 C390 230 390 285 350 285 C320 285 320 245 350 245 M350 245 L380 275"></path>'],
      bell: ["Little bell", "a little bell", "Add a small bell charm.", '<path class="feature" d="M365 350 C365 320 405 320 405 350 L415 380 L355 380 Z"></path><circle class="solid" cx="385" cy="390" r="6"></circle>'],
      flowerPin: ["Flower pin", "a flower pin", "Add one small flower pin.", '<circle class="feature" cx="360" cy="275" r="10"></circle><circle class="feature" cx="345" cy="275" r="9"></circle><circle class="feature" cx="375" cy="275" r="9"></circle><circle class="feature" cx="360" cy="260" r="9"></circle><circle class="feature" cx="360" cy="290" r="9"></circle>'],
      brokenHeart: ["Broken heart patch", "a broken heart patch", "Add a tiny broken heart patch.", '<path class="feature" d="M205 292 C190 275 165 292 180 315 L205 340 L230 315 C245 292 220 275 205 292 Z M205 292 L195 310 L212 320 L202 340"></path>'],
      gumdropShine: ["Gumdrop shine", "a gumdrop shine", "Add a fat candy shine spot.", '<ellipse class="feature" cx="220" cy="190" rx="35" ry="14" transform="rotate(-25 220 190)"></ellipse><ellipse class="feature" cx="190" cy="220" rx="16" ry="7" transform="rotate(-25 190 220)"></ellipse>'],
      ghostWisp: ["Ghost wisp", "a ghost wisp", "Add one tiny floating ghost wisp.", '<path class="feature" d="M390 175 C370 150 405 125 420 155 C435 185 390 190 405 220"></path>'],
      threadLoop: ["Thread loop", "a thread loop", "Add a loose thread loop.", '<path class="feature" d="M150 235 C100 210 100 280 150 260 C190 245 170 210 140 220"></path>'],
      tinyBoots: ["Tiny boots", "tiny boots", "Add two tiny boot shapes at the bottom.", '<path class="feature" d="M175 420 L220 420 L220 445 L165 445 Z M300 420 L345 420 L355 445 L300 445 Z"></path>'],
      oneMitten: ["One mitten", "one mitten", "Add one mitten hand.", '<path class="feature" d="M115 300 C90 275 110 245 140 265 C155 285 145 315 115 300 Z"></path>'],
      blanket: ["Sleepy blanket", "a sleepy blanket", "Add a small blanket fold.", '<path class="feature" d="M155 350 C220 325 300 375 365 345 L365 405 L155 405 Z"></path>'],
      peelCorner: ["Sticker peel corner", "a sticker peel corner", "Add a small peeled corner.", '<path class="feature" d="M335 160 L390 160 L390 215 C365 190 350 175 335 160 Z"></path>'],
      waxSeal: ["Wax seal", "a wax seal", "Add a tiny wax seal stamp.", '<circle class="feature" cx="355" cy="315" r="24"></circle><path class="feature" d="M345 315 L365 315 M355 305 L355 325"></path>'],
      crescentBrow: ["Crescent brow", "a crescent brow", "Add one crescent eyebrow accent.", '<path class="feature" d="M205 225 C225 205 255 215 265 235"></path>'],
      mismatchedButtons: ["Mismatched buttons", "mismatched buttons", "Add two different button details.", '<circle class="feature" cx="205" cy="305" r="14"></circle><rect class="feature" x="315" y="292" width="28" height="28" rx="8"></rect>'],
      tinyBackpack: ["Tiny backpack", "a tiny backpack", "Add a small backpack shape behind one side.", '<path class="feature" d="M145 230 L95 250 L95 350 L145 365"></path><path class="feature" d="M105 270 L135 270"></path>'],
      bowtie: ["Bowtie", "a bowtie", "Add a tiny bowtie under the mouth.", '<path class="feature" d="M230 330 L260 345 L230 360 Z M290 330 L260 345 L290 360 Z"></path>'],
      floatingStar: ["Floating mini star", "a floating mini star", "Add a tiny floating star.", '<path class="feature" d="M105 150 L112 170 L134 170 L116 182 L123 204 L105 190 L87 204 L94 182 L76 170 L98 170 Z"></path>'],
      blushStripe: ["Blush stripes", "blush stripes", "Add two small cheek stripes.", '<path class="feature" d="M180 300 L205 292 M315 292 L340 300"></path>'],
      tinySatchel: ["Tiny satchel", "a tiny satchel", "Add a little side bag.", '<path class="feature" d="M370 320 L425 325 L420 385 L365 380 Z M380 320 C385 290 410 292 415 325"></path>']

    };


    const limbStyles = {
      nubs: {
        label: "Tiny nubs",
        phrase: "tiny rounded nub limbs",
        guide: "Place four tiny rounded nubs close to the body. Keep them smaller than the face.",
        svg: '<ellipse class="feature" cx="145" cy="312" rx="26" ry="18"></ellipse><ellipse class="feature" cx="375" cy="312" rx="26" ry="18"></ellipse><ellipse class="feature" cx="218" cy="420" rx="22" ry="15"></ellipse><ellipse class="feature" cx="302" cy="420" rx="22" ry="15"></ellipse>',
        overlay: '<ellipse class="guide" cx="145" cy="312" rx="30" ry="22"></ellipse><ellipse class="guide" cx="375" cy="312" rx="30" ry="22"></ellipse><ellipse class="guide" cx="218" cy="420" rx="26" ry="18"></ellipse><ellipse class="guide" cx="302" cy="420" rx="26" ry="18"></ellipse>'
      },
      beanArms: {
        label: "Bean arms",
        phrase: "soft bean-shaped arms",
        guide: "Use short bean arms that hug the sides.",
        svg: '<path class="feature" d="M152 290 C112 292 100 335 135 350 C168 360 174 313 152 290 Z"></path><path class="feature" d="M368 290 C408 292 420 335 385 350 C352 360 346 313 368 290 Z"></path>',
        overlay: '<path class="guide" d="M150 288 C112 296 104 336 136 350"></path><path class="guide" d="M370 288 C408 296 416 336 384 350"></path>'
      },
      noodleArms: {
        label: "Noodle arms",
        phrase: "loose noodle arms",
        guide: "Draw two simple curved noodle arms. Keep the curve readable.",
        svg: '<path class="feature" d="M155 292 C110 300 105 350 132 374"></path><path class="feature" d="M365 292 C410 300 415 350 388 374"></path>',
        overlay: '<path class="guide" d="M155 292 C110 300 105 350 132 374"></path><path class="guide" d="M365 292 C410 300 415 350 388 374"></path>'
      },
      tuckedHands: {
        label: "Tucked hands",
        phrase: "hands tucked close to the body",
        guide: "Tuck both hands just inside the lower body edge.",
        svg: '<path class="feature" d="M190 330 Q210 350 230 332"></path><path class="feature" d="M290 332 Q310 350 330 330"></path>',
        overlay: '<circle class="guide" cx="210" cy="336" r="24"></circle><circle class="guide" cx="310" cy="336" r="24"></circle>'
      },
      raisedArms: {
        label: "Raised arms",
        phrase: "small raised arms",
        guide: "Lift both arms, but keep them short and rounded.",
        svg: '<path class="feature" d="M165 260 Q130 220 105 240"></path><path class="feature" d="M355 260 Q390 220 415 240"></path>',
        overlay: '<path class="guide" d="M165 260 Q130 220 105 240"></path><path class="guide" d="M355 260 Q390 220 415 240"></path>'
      },
      shyPaws: {
        label: "Shy paws",
        phrase: "tiny shy paws near the cheeks",
        guide: "Place tiny paws near the face to make the pose shy.",
        svg: '<ellipse class="feature" cx="192" cy="305" rx="18" ry="14"></ellipse><ellipse class="feature" cx="328" cy="305" rx="18" ry="14"></ellipse>',
        overlay: '<ellipse class="guide" cx="192" cy="305" rx="22" ry="18"></ellipse><ellipse class="guide" cx="328" cy="305" rx="22" ry="18"></ellipse>'
      },
      mittenHands: {
        label: "Mitten hands",
        phrase: "rounded mitten hands",
        guide: "Use two soft mitten shapes. Avoid finger detail.",
        svg: '<path class="feature" d="M145 298 C118 272 92 298 108 330 C124 354 162 340 145 298 Z"></path><path class="feature" d="M375 298 C402 272 428 298 412 330 C396 354 358 340 375 298 Z"></path>',
        overlay: '<path class="guide" d="M145 298 C118 272 92 298 108 330 C124 354 162 340 145 298 Z"></path><path class="guide" d="M375 298 C402 272 428 298 412 330 C396 354 358 340 375 298 Z"></path>'
      },
      ovalFeet: {
        label: "Oval feet",
        phrase: "two simple oval feet",
        guide: "Only add two oval feet at the base.",
        svg: '<ellipse class="feature" cx="210" cy="425" rx="35" ry="18"></ellipse><ellipse class="feature" cx="310" cy="425" rx="35" ry="18"></ellipse>',
        overlay: '<ellipse class="guide" cx="210" cy="425" rx="39" ry="22"></ellipse><ellipse class="guide" cx="310" cy="425" rx="39" ry="22"></ellipse>'
      },
      stubbyLegs: {
        label: "Stubby legs",
        phrase: "two stubby little legs",
        guide: "Attach two stubby legs under the body.",
        svg: '<path class="feature" d="M205 390 L230 390 L228 440 L198 440 Z"></path><path class="feature" d="M290 390 L315 390 L322 440 L292 440 Z"></path>',
        overlay: '<path class="guide" d="M205 390 L230 390 L228 440 L198 440 Z"></path><path class="guide" d="M290 390 L315 390 L322 440 L292 440 Z"></path>'
      },
      tinyBoots: {
        label: "Tiny boots",
        phrase: "tiny boot-shaped feet",
        guide: "Block in two boot feet with flat bottoms.",
        svg: '<path class="feature" d="M190 405 L230 405 L230 435 L178 435 Z"></path><path class="feature" d="M290 405 L330 405 L342 435 L290 435 Z"></path>',
        overlay: '<path class="guide" d="M190 405 L230 405 L230 435 L178 435 Z"></path><path class="guide" d="M290 405 L330 405 L342 435 L290 435 Z"></path>'
      },
      floatingHands: {
        label: "Floating hands",
        phrase: "detached floating hands",
        guide: "Float the hands just off the sides. Do not connect them.",
        svg: '<ellipse class="feature" cx="112" cy="310" rx="20" ry="16"></ellipse><ellipse class="feature" cx="408" cy="310" rx="20" ry="16"></ellipse>',
        overlay: '<ellipse class="guide" cx="112" cy="310" rx="24" ry="20"></ellipse><ellipse class="guide" cx="408" cy="310" rx="24" ry="20"></ellipse>'
      },
      wingArms: {
        label: "Wing arms",
        phrase: "small wing-like arms",
        guide: "Use wing curves on both sides, like soft little flaps.",
        svg: '<path class="feature" d="M150 285 C100 245 92 322 145 335"></path><path class="feature" d="M370 285 C420 245 428 322 375 335"></path>',
        overlay: '<path class="guide" d="M150 285 C100 245 92 322 145 335"></path><path class="guide" d="M370 285 C420 245 428 322 375 335"></path>'
      },
      finArms: {
        label: "Fin arms",
        phrase: "small fin-shaped side limbs",
        guide: "Use triangular rounded fins on the sides.",
        svg: '<path class="feature" d="M150 300 L92 270 L112 345 Z"></path><path class="feature" d="M370 300 L428 270 L408 345 Z"></path>',
        overlay: '<path class="guide" d="M150 300 L92 270 L112 345 Z"></path><path class="guide" d="M370 300 L428 270 L408 345 Z"></path>'
      },
      leafArms: {
        label: "Leaf arms",
        phrase: "leaf-shaped arms",
        guide: "Shape each arm like a tiny leaf.",
        svg: '<path class="feature" d="M152 300 C105 275 95 330 145 342 C124 325 126 308 152 300 Z"></path><path class="feature" d="M368 300 C415 275 425 330 375 342 C396 325 394 308 368 300 Z"></path>',
        overlay: '<path class="guide" d="M152 300 C105 275 95 330 145 342"></path><path class="guide" d="M368 300 C415 275 425 330 375 342"></path>'
      },
      vineArms: {
        label: "Vine arms",
        phrase: "curly vine arms",
        guide: "Use one curl per side. More curls will clutter the mascot.",
        svg: '<path class="feature" d="M155 300 C110 290 105 350 140 350 C162 350 158 325 140 330"></path><path class="feature" d="M365 300 C410 290 415 350 380 350 C358 350 362 325 380 330"></path>',
        overlay: '<path class="guide" d="M155 300 C110 290 105 350 140 350 C162 350 158 325 140 330"></path><path class="guide" d="M365 300 C410 290 415 350 380 350 C358 350 362 325 380 330"></path>'
      },
      stickArms: {
        label: "Stick arms",
        phrase: "simple stick arms",
        guide: "Use two clean stick lines. Keep the ends rounded in the final art.",
        svg: '<path class="feature" d="M155 300 L105 335"></path><path class="feature" d="M365 300 L415 335"></path>',
        overlay: '<path class="guide" d="M155 300 L105 335"></path><path class="guide" d="M365 300 L415 335"></path>'
      },
      noodleLegs: {
        label: "Noodle legs",
        phrase: "loose noodle legs",
        guide: "Use two soft dangling leg curves.",
        svg: '<path class="feature" d="M220 392 Q198 425 210 455"></path><path class="feature" d="M300 392 Q322 425 310 455"></path>',
        overlay: '<path class="guide" d="M220 392 Q198 425 210 455"></path><path class="guide" d="M300 392 Q322 425 310 455"></path>'
      },
      pegLegs: {
        label: "Peg legs",
        phrase: "tiny peg legs",
        guide: "Use two short peg legs with clear spacing.",
        svg: '<rect class="feature" x="206" y="392" width="28" height="52" rx="14"></rect><rect class="feature" x="286" y="392" width="28" height="52" rx="14"></rect>',
        overlay: '<rect class="guide" x="206" y="392" width="28" height="52" rx="14"></rect><rect class="guide" x="286" y="392" width="28" height="52" rx="14"></rect>'
      },
      dotFeet: {
        label: "Dot feet",
        phrase: "small dot feet",
        guide: "Put two dot feet under the body. This is the cleanest icon-safe option.",
        svg: '<circle class="feature" cx="215" cy="425" r="16"></circle><circle class="feature" cx="305" cy="425" r="16"></circle>',
        overlay: '<circle class="guide" cx="215" cy="425" r="20"></circle><circle class="guide" cx="305" cy="425" r="20"></circle>'
      },
      oneFootOut: {
        label: "One foot out",
        phrase: "one foot stepping out",
        guide: "Keep one foot tucked and one foot stepping outward.",
        svg: '<ellipse class="feature" cx="215" cy="423" rx="22" ry="16"></ellipse><ellipse class="feature" cx="330" cy="420" rx="40" ry="17"></ellipse>',
        overlay: '<ellipse class="guide" cx="215" cy="423" rx="26" ry="20"></ellipse><ellipse class="guide" cx="330" cy="420" rx="44" ry="21"></ellipse>'
      },
      sittingFeet: {
        label: "Sitting feet",
        phrase: "feet turned outward",
        guide: "Turn both feet outward for a seated mascot pose.",
        svg: '<ellipse class="feature" cx="200" cy="418" rx="38" ry="18" transform="rotate(-15 200 418)"></ellipse><ellipse class="feature" cx="320" cy="418" rx="38" ry="18" transform="rotate(15 320 418)"></ellipse>',
        overlay: '<ellipse class="guide" cx="200" cy="418" rx="42" ry="22" transform="rotate(-15 200 418)"></ellipse><ellipse class="guide" cx="320" cy="418" rx="42" ry="22" transform="rotate(15 320 418)"></ellipse>'
      },
      pawsAndFeet: {
        label: "Paws + feet",
        phrase: "tiny paws and tiny feet",
        guide: "Use two little paws and two little feet, all very small.",
        svg: '<ellipse class="feature" cx="158" cy="315" rx="20" ry="14"></ellipse><ellipse class="feature" cx="362" cy="315" rx="20" ry="14"></ellipse><ellipse class="feature" cx="220" cy="422" rx="24" ry="15"></ellipse><ellipse class="feature" cx="300" cy="422" rx="24" ry="15"></ellipse>',
        overlay: '<ellipse class="guide" cx="158" cy="315" rx="24" ry="18"></ellipse><ellipse class="guide" cx="362" cy="315" rx="24" ry="18"></ellipse><ellipse class="guide" cx="220" cy="422" rx="28" ry="19"></ellipse><ellipse class="guide" cx="300" cy="422" rx="28" ry="19"></ellipse>'
      },
      sleeveHands: {
        label: "Sleeve hands",
        phrase: "hands inside soft sleeves",
        guide: "Draw sleeve flaps instead of detailed hands.",
        svg: '<path class="feature" d="M155 300 L110 325 L150 350 Z"></path><path class="feature" d="M365 300 L410 325 L370 350 Z"></path>',
        overlay: '<path class="guide" d="M155 300 L110 325 L150 350 Z"></path><path class="guide" d="M365 300 L410 325 L370 350 Z"></path>'
      },
      scarfArms: {
        label: "Scarf arms",
        phrase: "ribbon-like scarf arms",
        guide: "Let the arms read like soft ribbon ends.",
        svg: '<path class="feature" d="M155 315 C115 335 110 370 150 382"></path><path class="feature" d="M365 315 C405 335 410 370 370 382"></path>',
        overlay: '<path class="guide" d="M155 315 C115 335 110 370 150 382"></path><path class="guide" d="M365 315 C405 335 410 370 370 382"></path>'
      },
      tentacleArms: {
        label: "Tentacle arms",
        phrase: "two soft tentacle arms",
        guide: "Use gentle tentacle curves, not many extra limbs.",
        svg: '<path class="feature" d="M155 315 C110 335 120 390 165 370"></path><path class="feature" d="M365 315 C410 335 400 390 355 370"></path>',
        overlay: '<path class="guide" d="M155 315 C110 335 120 390 165 370"></path><path class="guide" d="M365 315 C410 335 400 390 355 370"></path>'
      },
      shadowOnly: {
        label: "No limbs, shadow only",
        phrase: "no visible limbs, only a contact shadow",
        guide: "Skip limbs completely and use a contact shadow to ground the mascot.",
        svg: '<path class="feature" d="M178 430 C225 450 298 450 342 430"></path>',
        overlay: '<path class="guide" d="M178 430 C225 450 298 450 342 430"></path>'
      },
      noLimbs: {
        label: "No limbs",
        phrase: "no visible limbs",
        guide: "Do not draw limbs. Let the face and silhouette carry the character.",
        svg: '',
        overlay: '<text class="label" x="156" y="438">No limbs: silhouette + face only.</text>'
      },
      sideTabs: {
        label: "Side tabs",
        phrase: "tiny side-tab limbs",
        guide: "Attach flat rounded tabs to both sides.",
        svg: '<rect class="feature" x="104" y="288" width="58" height="42" rx="21"></rect><rect class="feature" x="358" y="288" width="58" height="42" rx="21"></rect>',
        overlay: '<rect class="guide" x="104" y="288" width="58" height="42" rx="21"></rect><rect class="guide" x="358" y="288" width="58" height="42" rx="21"></rect>'
      },
      lowHands: {
        label: "Low hands",
        phrase: "hands low on the body",
        guide: "Place the hands low so the face stays clean.",
        svg: '<ellipse class="feature" cx="185" cy="350" rx="22" ry="16"></ellipse><ellipse class="feature" cx="335" cy="350" rx="22" ry="16"></ellipse>',
        overlay: '<ellipse class="guide" cx="185" cy="350" rx="26" ry="20"></ellipse><ellipse class="guide" cx="335" cy="350" rx="26" ry="20"></ellipse>'
      },
      oneWave: {
        label: "One wave",
        phrase: "one waving arm",
        guide: "Use one waving arm and one tiny balancing hand.",
        svg: '<path class="feature" d="M155 300 Q115 260 92 280"></path><ellipse class="feature" cx="364" cy="320" rx="20" ry="14"></ellipse>',
        overlay: '<path class="guide" d="M155 300 Q115 260 92 280"></path><ellipse class="guide" cx="364" cy="320" rx="24" ry="18"></ellipse>'
      },
      onePoint: {
        label: "One pointing arm",
        phrase: "one tiny pointing arm",
        guide: "Point with one short arm. Keep the opposite side simple.",
        svg: '<path class="feature" d="M365 300 L430 282"></path><ellipse class="feature" cx="156" cy="322" rx="18" ry="13"></ellipse>',
        overlay: '<path class="guide" d="M365 300 L430 282"></path><ellipse class="guide" cx="156" cy="322" rx="22" ry="17"></ellipse>'
      },
      crossedArms: {
        label: "Crossed arms",
        phrase: "tiny crossed arms",
        guide: "Cross two short lines over the lower face/body zone.",
        svg: '<path class="feature" d="M210 335 L310 365"></path><path class="feature" d="M310 335 L210 365"></path>',
        overlay: '<path class="guide" d="M210 335 L310 365"></path><path class="guide" d="M310 335 L210 365"></path>'
      },
      pocketHands: {
        label: "Pocket hands",
        phrase: "hands hidden like pockets",
        guide: "Use two small pocket arcs. The hands are implied, not drawn.",
        svg: '<path class="feature" d="M180 330 Q205 350 230 330"></path><path class="feature" d="M290 330 Q315 350 340 330"></path>',
        overlay: '<path class="guide" d="M180 330 Q205 350 230 330"></path><path class="guide" d="M290 330 Q315 350 340 330"></path>'
      },
      danglingFeet: {
        label: "Dangling feet",
        phrase: "tiny dangling feet",
        guide: "Hang two tiny feet from the lower body.",
        svg: '<ellipse class="feature" cx="220" cy="445" rx="18" ry="26"></ellipse><ellipse class="feature" cx="300" cy="445" rx="18" ry="26"></ellipse>',
        overlay: '<ellipse class="guide" cx="220" cy="445" rx="22" ry="30"></ellipse><ellipse class="guide" cx="300" cy="445" rx="22" ry="30"></ellipse>'
      },
      chunkyShoes: {
        label: "Chunky shoes",
        phrase: "small chunky shoes",
        guide: "Use chunky shoes only if the body is simple.",
        svg: '<path class="feature" d="M190 418 L238 418 L245 442 L178 442 Z"></path><path class="feature" d="M282 418 L330 418 L342 442 L275 442 Z"></path>',
        overlay: '<path class="guide" d="M190 418 L238 418 L245 442 L178 442 Z"></path><path class="guide" d="M282 418 L330 418 L342 442 L275 442 Z"></path>'
      },
      tinyClaws: {
        label: "Tiny claws",
        phrase: "tiny soft claw hands",
        guide: "Use two tiny claw marks per side. Keep them cute, not sharp.",
        svg: '<path class="feature" d="M145 310 L112 300 M145 325 L112 335"></path><path class="feature" d="M375 310 L408 300 M375 325 L408 335"></path>',
        overlay: '<path class="guide" d="M145 310 L112 300 M145 325 L112 335"></path><path class="guide" d="M375 310 L408 300 M375 325 L408 335"></path>'
      },
      plushSeams: {
        label: "Plush seam limbs",
        phrase: "stitched plush seam limbs",
        guide: "Use seam-like limb marks instead of full arms.",
        svg: '<path class="feature" d="M155 310 Q125 330 150 355"></path><path class="feature" d="M365 310 Q395 330 370 355"></path><path class="feature" d="M142 326 L154 338 M378 326 L366 338"></path>',
        overlay: '<path class="guide" d="M155 310 Q125 330 150 355"></path><path class="guide" d="M365 310 Q395 330 370 355"></path>'
      },
      starHands: {
        label: "Star hands",
        phrase: "tiny star-shaped hands",
        guide: "Use tiny star hands only with a very simple body.",
        svg: '<path class="feature" d="M112 300 L118 314 L133 315 L121 324 L126 340 L112 330 L98 340 L103 324 L91 315 L106 314 Z"></path><path class="feature" d="M408 300 L414 314 L429 315 L417 324 L422 340 L408 330 L394 340 L399 324 L387 315 L402 314 Z"></path>',
        overlay: '<path class="guide" d="M112 300 L118 314 L133 315 L121 324 L126 340 L112 330 L98 340 L103 324 L91 315 L106 314 Z"></path><path class="guide" d="M408 300 L414 314 L429 315 L417 324 L422 340 L408 330 L394 340 L399 324 L387 315 L402 314 Z"></path>'
      },
      ghostWiggle: {
        label: "Ghost wiggle base",
        phrase: "ghost wiggle bottom instead of limbs",
        guide: "Replace limbs with a wavy ghost-like lower edge cue.",
        svg: '<path class="feature" d="M178 402 L210 430 L242 402 L274 430 L306 402 L342 430"></path>',
        overlay: '<path class="guide" d="M178 402 L210 430 L242 402 L274 430 L306 402 L342 430"></path>'
      },
      accessoryHold: {
        label: "Holding accessory",
        phrase: "tiny hands holding the twist",
        guide: "Place small hands as if holding the tiny twist. Do not cover the face.",
        svg: '<ellipse class="feature" cx="200" cy="352" rx="18" ry="13"></ellipse><ellipse class="feature" cx="320" cy="352" rx="18" ry="13"></ellipse><path class="guide" d="M200 352 Q260 382 320 352"></path>',
        overlay: '<ellipse class="guide" cx="200" cy="352" rx="22" ry="17"></ellipse><ellipse class="guide" cx="320" cy="352" rx="22" ry="17"></ellipse><path class="guide" d="M200 352 Q260 382 320 352"></path>'
      }
    };

    function getSelectedLimbStyleKey() {
      return document.getElementById("limbStyle")?.value || "nubs";
    }

    function getLimbStyle(key = getSelectedLimbStyleKey()) {
      return limbStyles[key] || limbStyles.nubs;
    }


    const twistAmounts = {
      one: ["One twist", "Use the selected twist only."],
      two: ["Two twists", "Use the selected twist plus one compatible accent."],
      three: ["Three twists", "Use the selected twist plus two tiny accents."],
      surpriseMix: ["Surprise mix", "Let the app choose one to three compatible twists."]
    };

    const extraTwists = {
      tinyEarring: ["Tiny earring", "a tiny earring", "Hang one small ring or bead from the side.", '<circle class="feature" cx="392" cy="285" r="12"></circle><circle class="feature" cx="392" cy="285" r="5"></circle>'],
      jellyDrip: ["Jelly drip", "a jelly drip", "Add one soft rounded drip from the bottom edge.", '<path class="feature" d="M300 390 C315 420 300 445 282 430 C270 415 284 402 300 390 Z"></path>'],
      tinyKey: ["Tiny key", "a tiny key", "Hang a small key charm from one side.", '<circle class="feature" cx="390" cy="365" r="12"></circle><path class="feature" d="M390 377 L390 425 M390 410 L410 410 M390 425 L405 425"></path>'],
      barcodeStripe: ["Barcode stripe", "barcode stripes", "Add a few skinny vertical stripes on one side.", '<path class="feature" d="M350 235 L350 320 M362 235 L362 305 M374 235 L374 330 M386 235 L386 300"></path>'],
      tinyEnvelope: ["Tiny envelope", "a tiny envelope", "Add a small envelope patch.", '<rect class="feature" x="330" y="315" width="58" height="38" rx="6"></rect><path class="feature" d="M330 318 L359 344 L388 318"></path>'],
      constellationDots: ["Constellation dots", "constellation dots", "Add three tiny connected star dots.", '<circle class="solid" cx="355" cy="180" r="5"></circle><circle class="solid" cx="385" cy="205" r="4"></circle><circle class="solid" cx="410" cy="170" r="4"></circle><path class="feature" d="M355 180 L385 205 L410 170"></path>'],
      tinyLace: ["Tiny lace edge", "a tiny lace edge", "Add a scalloped lace strip along one edge.", '<path class="feature" d="M150 250 Q162 270 174 250 Q186 270 198 250 Q210 270 222 250"></path>'],
      candyWrapperEnds: ["Candy wrapper ends", "candy wrapper ends", "Add small wrapper fins to the sides.", '<path class="feature" d="M140 260 L95 235 L105 285 Z M380 260 L425 235 L415 285 Z"></path>'],
      sleepyBubble: ["Sleepy bubble", "a sleepy bubble", "Add one floating sleep bubble.", '<circle class="feature" cx="390" cy="150" r="20"></circle><circle class="feature" cx="420" cy="120" r="10"></circle>'],
      tinyUmbrella: ["Tiny umbrella", "a tiny umbrella", "Add a little umbrella cap above one side.", '<path class="feature" d="M335 160 Q385 115 435 160 Z"></path><path class="feature" d="M385 160 L385 230 Q385 245 400 240"></path>'],
      stitchedSmilePatch: ["Stitched smile patch", "a stitched smile patch", "Add a patch with a stitched mini smile.", '<rect class="feature" x="320" y="290" width="64" height="46" rx="14"></rect><path class="feature" d="M338 314 Q352 326 366 314"></path><path class="feature" d="M334 300 L345 308 M370 300 L359 308"></path>'],
      tinyNameTag: ["Tiny name tag", "a tiny name tag", "Add a small rounded name tag.", '<rect class="feature" x="330" y="345" width="70" height="34" rx="12"></rect><path class="feature" d="M348 362 L382 362"></path>'],
      littleHorns: ["Little horns", "little horns", "Add two tiny soft horns.", '<path class="feature" d="M205 155 L190 105 L235 142 Z M315 155 L330 105 L285 142 Z"></path>'],
      floatingCrownSpark: ["Crown spark", "a crown spark", "Add one floating royal sparkle.", '<path class="feature" d="M390 125 L398 145 L420 150 L400 160 L392 182 L384 160 L362 150 L382 145 Z"></path>'],
      tinyPocket: ["Tiny pocket", "a tiny pocket", "Add a small pocket patch.", '<path class="feature" d="M330 305 L390 305 L382 355 Q360 370 338 355 Z"></path>'],
      pearlChain: ["Pearl chain", "a pearl chain", "Add three bead dots along a curve.", '<circle class="feature" cx="185" cy="345" r="8"></circle><circle class="feature" cx="205" cy="360" r="8"></circle><circle class="feature" cx="230" cy="368" r="8"></circle>'],
      littleMask: ["Little mask mark", "a little mask mark", "Add a soft mask mark around the eyes.", '<path class="feature" d="M190 250 Q260 220 330 250 Q310 290 260 286 Q210 290 190 250 Z"></path>'],
      tinyPawPrint: ["Tiny paw print", "a tiny paw print", "Add one tiny paw-print patch.", '<circle class="solid" cx="358" cy="320" r="7"></circle><circle class="solid" cx="344" cy="304" r="4"></circle><circle class="solid" cx="358" cy="298" r="4"></circle><circle class="solid" cx="372" cy="304" r="4"></circle>'],
      cometTail: ["Comet tail", "a comet tail", "Add a small streaking comet tail.", '<path class="feature" d="M370 160 Q420 135 455 105 M372 175 Q420 168 455 150"></path><circle class="feature" cx="360" cy="170" r="14"></circle>'],
      tinyLantern: ["Tiny lantern", "a tiny lantern", "Hang a little lantern from one side.", '<path class="feature" d="M385 320 Q410 340 405 365"></path><rect class="feature" x="382" y="365" width="44" height="54" rx="12"></rect><path class="feature" d="M392 378 L416 378 M392 405 L416 405"></path>'],
      ribbonTag: ["Ribbon tag", "a ribbon tag", "Add a little ribbon tag at the bottom.", '<path class="feature" d="M245 395 L275 395 L275 455 L260 438 L245 455 Z"></path>'],
      tinyBook: ["Tiny book", "a tiny book", "Add a tiny open-book charm.", '<path class="feature" d="M330 335 Q360 318 390 335 L390 385 Q360 370 330 385 Z"></path><line class="feature" x1="360" y1="325" x2="360" y2="375"></line>'],
      softSpikes: ["Soft spikes", "soft spikes", "Add a few rounded back spikes.", '<path class="feature" d="M375 210 Q420 225 382 250 Q430 270 382 292 Q420 318 372 330"></path>'],
      tinyMushroomCap: ["Mushroom cap", "a mushroom cap", "Add a tiny mushroom cap detail.", '<path class="feature" d="M220 145 Q260 95 300 145 Z"></path><circle class="solid" cx="245" cy="132" r="5"></circle><circle class="solid" cx="275" cy="125" r="5"></circle>'],
      yarnBall: ["Yarn ball", "a yarn ball", "Add a little yarn ball charm.", '<circle class="feature" cx="390" cy="365" r="24"></circle><path class="feature" d="M372 360 Q390 348 408 360 M370 375 Q392 388 410 372 M390 341 Q382 365 390 389"></path>'],
      tinyTeacup: ["Tiny teacup", "a tiny teacup", "Add a little teacup charm.", '<path class="feature" d="M340 335 L392 335 L386 380 Q366 392 346 380 Z"></path><path class="feature" d="M392 348 Q420 350 405 372"></path>'],
      magicRune: ["Magic rune", "a magic rune", "Add one simple rune mark.", '<circle class="feature" cx="360" cy="300" r="28"></circle><path class="feature" d="M360 276 L360 324 M342 314 L378 286"></path>'],
      cloudTuft: ["Cloud tuft", "a cloud tuft", "Add a small puff cluster on top.", '<circle class="feature" cx="235" cy="135" r="18"></circle><circle class="feature" cx="260" cy="122" r="24"></circle><circle class="feature" cx="290" cy="138" r="18"></circle>'],
      tinyFlag: ["Tiny flag", "a tiny flag", "Add a tiny flag on a short pole.", '<line class="feature" x1="355" y1="125" x2="355" y2="210"></line><path class="feature" d="M355 130 L420 145 L355 165 Z"></path>'],
      pinwheel: ["Pinwheel", "a pinwheel", "Add a tiny pinwheel charm.", '<circle class="solid" cx="385" cy="205" r="5"></circle><path class="feature" d="M385 205 L360 180 L385 185 L410 180 L390 205 L410 230 L385 225 L360 230 Z"></path>'],
      tinyBandana: ["Tiny bandana", "a tiny bandana", "Add a small bandana triangle.", '<path class="feature" d="M195 340 L325 340 L260 405 Z"></path><path class="feature" d="M230 340 L220 370 M290 340 L300 370"></path>'],
      stickerGloss: ["Sticker gloss", "a sticker gloss", "Add a glossy sticker corner highlight.", '<path class="feature" d="M330 150 Q385 150 395 205 Q360 175 330 150 Z"></path>'],
      tinyCompass: ["Tiny compass", "a tiny compass", "Add a small compass charm.", '<circle class="feature" cx="365" cy="325" r="28"></circle><path class="feature" d="M365 300 L375 325 L365 350 L355 325 Z"></path>'],
      littleBowBack: ["Back bow", "a back bow", "Add a bow peeking behind the body.", '<path class="feature" d="M145 275 L95 245 L105 310 Z M145 275 L95 310 L105 245 Z"></path><circle class="feature" cx="145" cy="275" r="9"></circle>'],
      tinyPatchSet: ["Patch set", "two tiny patches", "Add two small mismatched patches.", '<rect class="feature" x="330" y="285" width="38" height="30" rx="8"></rect><circle class="feature" cx="200" cy="350" r="18"></circle>'],
      sparkleTrail: ["Sparkle trail", "a sparkle trail", "Add three little sparkles in a gentle curve.", '<path class="feature" d="M370 145 L375 158 L388 163 L375 168 L370 181 L365 168 L352 163 L365 158 Z M405 198 L410 210 L422 215 L410 220 L405 232 L400 220 L388 215 L400 210 Z M345 222 L350 232 L360 236 L350 240 L345 250 L340 240 L330 236 L340 232 Z"></path>'],
      tinyCandle: ["Tiny candle", "a tiny candle", "Add one tiny candle detail.", '<rect class="feature" x="350" y="305" width="26" height="62" rx="8"></rect><path class="feature" d="M363 295 C350 280 366 265 368 248 C388 272 382 292 363 295 Z"></path>'],
      tinyRibbonPiercing: ["Ribbon piercing", "a ribbon piercing", "Add a little ribbon loop through one side.", '<circle class="feature" cx="385" cy="270" r="16"></circle><path class="feature" d="M385 286 L365 326 L385 314 L405 326 Z"></path>'],
      paintSplatter: ["Tiny paint splatter", "tiny paint splatter", "Add a few tiny paint drops.", '<circle class="solid" cx="360" cy="210" r="7"></circle><circle class="solid" cx="385" cy="225" r="4"></circle><circle class="solid" cx="345" cy="235" r="4"></circle><circle class="solid" cx="372" cy="245" r="3"></circle>'],
      littlePlanetRing: ["Planet ring", "a little planet ring", "Add a small orbit ring around one side mark.", '<circle class="feature" cx="365" cy="285" r="22"></circle><ellipse class="feature" cx="365" cy="285" rx="42" ry="13" transform="rotate(-20 365 285)"></ellipse>']
    };

    Object.assign(twists, extraTwists);

    const palettes = {
      auto: { label: "Auto", colors: [] },
      gummyHalo: { label: "Gummy Halo Morning", colors: ["#F27BA6", "#FFB7D0", "#FFF7FB", "#8EDAF7", "#D7C4F4"] },
      rainthread: { label: "Rainthread Veil", colors: ["#B97195", "#8FA79D", "#8EBFD2", "#F3F0F2", "#BFAFD0", "#6F6870"] },
      bleedingHope: { label: "Bleeding Hope Afterglow", colors: ["#140F18", "#221928", "#E785B3", "#74D6F7", "#C9526E", "#F8F2F8", "#7D62A8"] },
      gummySky: { label: "Mushy Gummybear Sky", colors: ["#FF8FBA", "#FFD1E5", "#AEE7FF", "#FFF5C8", "#BDA7FF"] },
      rainGrass: { label: "Clouded Raindrop Grass", colors: ["#DCE8E5", "#9DC8B2", "#8EDAF7", "#F7F6FB", "#7D6D79", "#CDE7D8"] },
      cutGrin: { label: "Cut-Grin Candy", colors: ["#F25787", "#352733", "#FFF7FB", "#FFD166", "#8EDAF7"] },
      holoThread: { label: "Holographic Thread", colors: ["#D7C4F4", "#8EDAF7", "#F27BA6", "#FDEEF5", "#9DC8B2", "#FFFFFF"] },
      bleedingBeauty: { label: "Bleeding Beauty", colors: ["#D95A72", "#F27BA6", "#FFF7FB", "#7D62A8", "#140F18", "#F8F2F8"] },
      ghostCandy: { label: "Ghost Candy", colors: ["#F8F2F8", "#B8A9B8", "#74D6F7", "#E785B3", "#221928", "#7D62A8"] },
      blackberry: { label: "Blackberry Lilac Luxe", colors: ["#140F18", "#2D2333", "#B97195", "#D7C4F4", "#F8F2F8", "#C9A8FF", "#74D6F7"] },
      strawberry: { label: "Strawberry Pistachio", colors: ["#FFB7D0", "#F27BA6", "#CDE7D8", "#9DC8B2", "#FFF7E8"] },
      storm: { label: "Storm Cloud Soft", colors: ["#2D3A4A", "#8EBFD2", "#DDDDE2", "#F3F0F2", "#FFE8A3", "#6F6870"] },
      luxury: { label: "Tiny Luxury Mascot", colors: ["#140F18", "#F8F2F8", "#E785B3", "#D6B96A", "#7D62A8"] },
      beach: { label: "Beach Trinket", colors: ["#8EDAF7", "#FDEEF5", "#F3D9B1", "#9DC8B2", "#FFF7FB", "#B97195"] }
    };

    const flavors = {
      "": "No flavor modifier",
      gummy: "with gummy-soft edges",
      rain: "with rainwashed softness",
      stitched: "with stitched details",
      hope: "with a hopeful glow",
      haunted: "with tiny haunted sweetness",
      plush: "with plush toy softness",
      sticker: "with sticker-like clarity",
      holo: "with holographic thread accents",
      candy: "with candy shine",
      cloudy: "with cloudy pastel mood",
      bandage: "with soft bandage details",
      moon: "with a moonlit sparkle",
      story: "with vintage storybook charm",
      eerie: "with slightly eerie cuteness",
      autumn: "with cozy autumn softness",
      glossy: "with glossy app-icon polish",
      bedtime: "with sleepy bedtime softness",
      chaos: "with cheerful chaos energy"
    };

    const blueprintOptions = {
      autoSubject: "Auto subject guide",
      classic: "Classic construction",
      bodyFirst: "Body-first tracing",
      faceMap: "Face placement map",
      limbMap: "Tiny limb map",
      stickerSafe: "Sticker-safe boundary",
      symmetry: "Symmetry helper",
      iconGrid: "Icon grid helper",
      expressionZones: "Expression zones",
      accessoryZone: "Accessory-safe zone",
      shadowMap: "Simple shadow map",
      fourPanel: "Four-step panel guide",
      worksheet: "Printable worksheet layout",
      plushBody: "Plush body guide",
      fruitSlice: "Fruit body guide",
      potionBottle: "Potion bottle guide",
      cloudPuff: "Cloud puff guide",
      robotGrid: "Robot grid guide",
      ghostDrape: "Ghost drape guide",
      gemFacet: "Gem facet guide",
      letterBuild: "Letter build guide",
      numberBuild: "Number build guide",
      badgeEmblem: "Badge emblem guide",
      weatherSymbol: "Weather symbol guide",
      shellSpiral: "Shell curve guide",
      aquaticFin: "Aquatic fin guide",
      deviceScreen: "Device screen guide",
      clothingFold: "Clothing fold guide",
      musicStem: "Music stem guide",
      wandArc: "Magic object guide",
      orbitRing: "Celestial orbit guide",
      packageFold: "Package fold guide",
      furnitureBuild: "Furniture build guide",
      gardenPot: "Garden pot guide",
      creatureHorn: "Creature horn guide",
      logoAxis: "Logo axis guide"
    };

    const drawOrders = {
      simple: ["Simple order", [
        ["Body", "Draw the one big shape.", "Do not draw eyes yet.", "Guide / rough sketch layer"],
        ["Guide", "Add a vertical center and low face line.", "Do not decorate the guide.", "Same sketch layer"],
        ["Face", "Place eyes first, then mouth.", "Do not add limbs until face works.", "Face test layer"],
        ["Limbs", "Add tiny arms or feet with simple curves.", "Do not make them large.", "Limb sketch layer"],
        ["Polish", "Clean line, flat color, one shadow, one shine.", "Do not over-render.", "Line / color / shadow layers"]
      ]],
      extraGuided: ["Extra guided: draw this first", [
        ["Body only", "Spend one minute on the outer silhouette.", "No face, no limbs, no twist.", "Rough shape layer"],
        ["Best body", "Redraw the body once and pick the clearer version.", "Do not keep both versions.", "Second sketch layer"],
        ["Face map", "Draw a low face box and place eyes inside it.", "Do not place the face high.", "Guide layer"],
        ["Expression", "Try two mouths next to the mascot before choosing.", "Do not settle instantly.", "Face test layer"],
        ["Attach", "Add tiny limbs and one twist after the face works.", "Do not cover the face.", "Detail layer"],
        ["Clean", "Lower sketch opacity and redraw slowly.", "Do not trace every wobble.", "Clean line layer"]
      ]],
      traceThenHide: ["Trace then hide guide", [
        ["Screenshot", "Screenshot or save the blueprint.", "Do not redraw from memory yet.", "Photo import"],
        ["Import", "Place it in Procreate and set opacity to 20–30%.", "Do not draw on the guide layer.", "Guide layer"],
        ["Trace body", "Trace only the outer shape first.", "Do not trace details yet.", "Sketch layer above"],
        ["Trace face", "Add face and limbs on the sketch layer.", "Do not over-copy the guide.", "Sketch layer"],
        ["Hide guide", "Turn off the guide and check readability.", "Do not color before checking.", "Layer visibility check"],
        ["Finish", "Clean line, color, shadow, highlight.", "Stop after one shadow.", "Final layers"]
      ]],
      iconFirst: ["Icon-first order", [
        ["Icon box", "Draw inside a small square.", "Do not use the whole canvas.", "Icon boundary layer"],
        ["Silhouette", "Make the outside shape readable at tiny size.", "No facial details yet.", "Rough icon layer"],
        ["Face", "Add the simplest possible face.", "Do not add tiny eyelashes or clutter.", "Face layer"],
        ["Remove", "Delete anything that disappears when zoomed out.", "Do not protect weak details.", "Cleanup pass"],
        ["Enlarge", "Redraw the winning tiny icon bigger.", "Do not enlarge a cluttered version.", "Final sketch layer"]
      ]],
      worksheet: ["Worksheet order", [
        ["Box 1", "Draw body only.", "No face.", "Worksheet box 1"],
        ["Box 2", "Draw body plus face guide.", "No decoration.", "Worksheet box 2"],
        ["Box 3", "Add eyes, mouth, limbs.", "One expression only.", "Worksheet box 3"],
        ["Box 4", "Add one tiny twist.", "No second accessory.", "Worksheet box 4"],
        ["Final", "Redraw the clean version larger.", "Do not skip the redraw.", "Final layer"]
      ]]
    };

    const aiModes = {
      simplify: "Make it easier",
      explain: "Explain like I am brand new",
      variation: "Give a similar variation",
      stepByStep: "Break into smaller steps",
      mistakes: "Tell me what mistakes to avoid",
      procreateLayers: "Focus on Procreate layers",
      blueprint: "Make the blueprint clearer",
      critique: "Critique my idea gently",
      cozyPlus: "Make it more creative but still easy",
      practiceDrill: "Turn it into a practice drill",
      drawAlong: "Make it a draw-along script",
      fixAwkward: "Help fix awkward proportions",
      expressionCoach: "Coach the expression only",
      silhouetteCoach: "Coach the silhouette only",
      colorCoach: "Suggest beginner-friendly colors",
      makeWorksheet: "Make it feel like a worksheet"
    };


    const shadeStyles = {
      softPlush: "Soft Plush",
      stickerShine: "Sticker Shine",
      gummyGloss: "Gummy Gloss",
      painterlySoft: "Painterly Soft",
      flatIcon: "Flat Icon",
      spookyGlow: "Spooky Glow",
      velvetShadow: "Velvet Shadow",
      rainyMist: "Rainy Mist"
    };

    const lightDirections = {
      topLeft: "Top Left",
      topRight: "Top Right",
      frontSoft: "Front Soft",
      underGlow: "Under Glow",
      backRim: "Back Rim Light"
    };

    const shadeIntensities = {
      tinyShade: "Tiny Shade",
      softShade: "Soft Shade",
      fullCute: "Full Cute Polish",
      iconPolish: "Icon Polish",
      atmospheric: "Atmospheric"
    };

    const shadeOutputTypes = {
      stepByStep: "Step-by-step",
      mapOnly: "Map only",
      layersOnly: "Procreate layers"
    };

    const styleRecipes = [
      "Soft sticker: rounded line, one blush mark, one pale shadow.",
      "Tiny app icon: big silhouette, simple face, no tiny details.",
      "Storybook doodle: slightly wobbly outline, warm color, tiny sparkle.",
      "Plush toy: round corners, small face, soft shadow under the body.",
      "Badge mascot: strong outside shape, centered face, one symbol.",
      "Rainthread plush: muted surface, misty edge, tiny stitched accent.",
      "Gummy halo: candy shine, soft outline, hopeful glow."
    ];

    const quests = ["Zoom out. Can you still tell what it is?", "Use only one accessory. Make it count.", "Redraw the body shape once, then pick the better one.", "Try three mouths before choosing.", "Hide the sketch layer and check the silhouette."];
    const praises = ["Messy first sketch allowed. Clean line comes later.", "Readable beats perfect.", "Move the face lower before redrawing everything.", "Tiny arms are powerful. Avoid noodle chaos.", "Stop after one shadow. Future you can over-render later."];
    const remixIdeas = ["Change the mouth only.", "Move the eyes lower.", "Tilt the body but keep the face straight.", "Swap only the accessory.", "Make a tiny icon version with fewer lines."];

    function populateSelect(id, data, selected) {
      const el = document.getElementById(id);
      if (!el || !data) return;
      el.innerHTML = Object.entries(data).map(([value, label]) => {
        const text = Array.isArray(label) ? label[0] : (label && label.label ? label.label : label);
        return `<option value="${value}" ${value === selected ? "selected" : ""}>${text}</option>`;
      }).join("");
      if (selected && Object.prototype.hasOwnProperty.call(data, selected)) {
        el.value = selected;
      } else {
        const first = Object.keys(data)[0];
        if (first) el.value = first;
      }
    }


    function renderPalettePreview() {
      const selected = document.getElementById("paletteMood")?.value || "auto";
      const preview = document.getElementById("palettePreview");
      if (!preview) return;

      const entries = Object.entries(palettes).filter(([key]) => key !== "auto");
      const selectedPalette = palettes[selected];

      preview.innerHTML = entries.map(([key, value]) => {
        const dots = value.colors.map(color =>
          `<span class="palette-dot" style="background-color:${color};" aria-label="${value.label} swatch"></span>`
        ).join("");

        const strip = value.colors.map(color =>
          `<span style="background-color:${color};"></span>`
        ).join("");

        return `
          <div class="palette-card ${key === selected ? "active" : ""}" onclick="selectPalette('${key}')" role="button" tabindex="0">
            <span class="palette-title">${value.label}</span>
            <div class="palette-dots">${dots}</div>
            <div class="palette-strip">${strip}</div>
            <span class="palette-count">${value.colors.length} visible color swatches</span>
          </div>
        `;
      }).join("");

      if (selectedPalette && selectedPalette.colors && selectedPalette.colors.length) {
        preview.insertAdjacentHTML("afterbegin", `
          <div class="palette-selected-note" style="grid-column:1 / -1;">
            Selected palette: <strong>${selectedPalette.label}</strong>. The color dots and strip below show the actual palette colors.
          </div>
        `);
      }
    }

    function selectPalette(key) {
      const el = document.getElementById("paletteMood");
      if (!el) return;
      el.value = key;
      renderPalettePreview();
      renderEmotionLab();
      newLesson();
    }

    function bootSelects() {
      populateSelect("subjectPack", subjectPacks, "all");
      populateSelect("lessonType", subjectData, "blob");
      populateSelect("skillFocus", skillFocuses, "auto");
      populateSelect("surpriseType", surpriseTypes, "softBeginner");
      populateSelect("sessionTimer", sessionTimers, "none");
      populateSelect("emotion", emotions, "happy");
      populateSelect("level", lessonSizes, "normal");
      populateSelect("funTwist", twists, "sparkle");
      populateSelect("twistAmount", twistAmounts, "one");
      populateSelect("limbStyle", limbStyles, "nubs");
      populateSelect("ideaPreset", flavors, "");
      populateSelect("paletteMood", palettes, "gummyHalo");
      renderPalettePreview();
      populateSelect("blueprintStyle", blueprintOptions, "autoSubject");
      populateSelect("drawOrderMode", drawOrders, "simple");
      populateSelect("aiStyle", aiModes, "simplify");
      populateSelect("shadeStyle", shadeStyles, "softPlush");
      populateSelect("lightDirection", lightDirections, "topLeft");
      populateSelect("shadeIntensity", shadeIntensities, "tinyShade");
      populateSelect("shadeOutputType", shadeOutputTypes, "stepByStep");
      populateSelect("lightingType", lightingTypeMap, "auto");
      populateSelect("materialFeel", materialRecipeMap, "auto");
      populateSelect("shadowStrength", shadowStrengthMap, "soft");
      populateSelect("shadingGoal", {
        beginnerSimple: ["Beginner simple", "One easy shadow and one highlight."],
        stickerPolish: ["Sticker polish", "Clean sticker shadow and gloss."],
        softPlush: ["Soft plush", "Soft toy-style shading."],
        glossyIcon: ["Glossy icon", "Small-icon shine and readable contrast."],
        strangeGlam: ["Strange glam", "Neon, pearl, holographic, or dramatic glam shading."],
        spookyCute: ["Spooky cute", "Moon, candle, or underlight without losing cuteness."]
      }, "beginnerSimple");
    }

    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }


    function getSelectedTwistAmount() {
      return document.getElementById("twistAmount")?.value || "one";
    }

    function getAllDrawableTwistKeys() {
      return Object.keys(twists).filter(key => key !== "none" && twists[key] && twists[key][3]);
    }

    function getTwistCountForAmount(amount) {
      if (amount === "two") return 2;
      if (amount === "three") return 3;
      if (amount === "surpriseMix") return 1 + Math.floor(Math.random() * 3);
      return 1;
    }

    function uniqueTwistKeys(primary, count) {
      if (!primary || primary === "none") return [];
      const available = getAllDrawableTwistKeys().filter(key => key !== primary);
      const result = [primary];

      while (result.length < count && available.length) {
        const index = Math.floor(Math.random() * available.length);
        result.push(available.splice(index, 1)[0]);
      }

      if (!result.length && primary === "none") return [];
      return result.slice(0, count);
    }

    function resolveTwistSet(primary, amount) {
      const requested = getTwistCountForAmount(amount);
      return uniqueTwistKeys(primary, requested);
    }

    function getTwistSetName(keys) {
      if (!keys || !keys.length) return "No extra twist";
      return keys.map(key => twists[key]?.[0] || key).join(" + ");
    }

    function getTwistSetPhrase(keys) {
      if (!keys || !keys.length) return "no extra decoration";
      return keys.map(key => twists[key]?.[1] || key).join(", ");
    }

    function getTwistSetSvg(keys) {
      return (keys || []).map(key => twists[key]?.[3] || "").join("");
    }

    function getTwistSetBlueprintOverlay(keys) {
      return (keys || []).map(key => getTwistBlueprintGuide(key).overlay || "").join("");
    }

    function getTwistSetBlueprintLabel(keys) {
      if (!keys || !keys.length) return "Twist guide: none selected.";
      if (keys.length === 1) return getTwistBlueprintGuide(keys[0]).label;
      return `Twist set guide: place ${keys.length} small accents in separate zones; do not stack them over the face.`;
    }

    function getTwistSetBadge(keys) {
      if (!keys || !keys.length) return "Twist blueprint: none selected";
      const supported = keys.every(key => twistBlueprintBadge(key).includes("supported") || TWIST_BLUEPRINT_PASS_1.includes(key));
      return supported ? "Twist blueprint: full current set supported" : "Twist blueprint: mixed/fallback guide";
    }


    function status(msg, kind = "") {
      const box = document.getElementById("status");
      box.textContent = msg;
      box.className = "status show " + kind;
    }

    function themeLabel(mode) {
      if (mode === "light") return "Theme: Light";
      if (mode === "neutral") return "Theme: Neutral";
      return "Theme: Dark";
    }

    function setTheme(mode) {
      document.documentElement.setAttribute("data-theme", mode);
      localStorage.setItem("mascotSparkTheme", mode);
      document.getElementById("themeBtn").textContent = themeLabel(mode);
      document.querySelector('meta[name="theme-color"]').setAttribute("content", mode === "light" ? "#F27BA6" : mode === "neutral" ? "#B97195" : "#E785B3");
    }

    function toggleTheme() {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current === "light" ? "neutral" : current === "neutral" ? "dark" : "light");
    }

    function loadTheme() {
      const saved = localStorage.getItem("mascotSparkTheme") || "light";
      setTheme(["light", "neutral", "dark"].includes(saved) ? saved : "light");
    }

    function setMotionStyle(style) {
      const safe = ["minimal", "soft", "playful", "magical"].includes(style) ? style : "soft";
      document.documentElement.setAttribute("data-motion-style", safe);
      localStorage.setItem("mascotSparkMotionStyle", safe);
      const select = document.getElementById("motionStyle");
      if (select) select.value = safe;
      requestAnimationFrame(updateTabIndicator);
    }

    function loadMotionStyle() {
      setMotionStyle(localStorage.getItem("mascotSparkMotionStyle") || "soft");
    }

    function updateTabIndicator() {
      const wrap = document.querySelector(".tab-buttons");
      const active = document.querySelector(".tab-btn.active");
      if (!wrap || !active) return;
      const wrapBox = wrap.getBoundingClientRect();
      const box = active.getBoundingClientRect();
      wrap.style.setProperty("--tab-indicator-width", `${box.width}px`);
      wrap.style.setProperty("--tab-indicator-height", `${box.height}px`);
      wrap.style.setProperty("--tab-indicator-x", `${box.left - wrapBox.left}px`);
      wrap.style.setProperty("--tab-indicator-y", `${box.top - wrapBox.top}px`);
      wrap.style.setProperty("--tab-indicator-opacity", "1");
    }

    function showTab(tabId) {
      document.querySelectorAll(".tab-panel").forEach(p => {
        const active = p.id === tabId;
        p.classList.toggle("active", active);
        if (active) {
          p.style.animation = "none";
          p.offsetHeight;
          p.style.animation = "";
        }
      });
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
      requestAnimationFrame(updateTabIndicator);
    }

    function randomSelect(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const start = el.options[0] && el.options[0].value === "" ? 1 : 0;
      el.selectedIndex = Math.floor(Math.random() * (el.options.length - start)) + start;
    }

    function surpriseMe() {
      smartSurprise();
    }

    function makeBody(type) {
      if (type === "food") return '<path class="shape" d="M155 205 C155 145 200 115 260 115 C320 115 365 145 365 205 L365 380 L155 380 Z"></path>';
      if (type === "object") return '<rect class="shape" x="165" y="135" width="190" height="270" rx="38"></rect>';
      if (type === "icon" || type === "badge" || type === "sticker") return '<path class="shape" d="M260 105 L375 170 L375 330 L260 405 L145 330 L145 170 Z"></path>';
      if (type === "letter") return '<path class="shape" d="M205 400 L250 135 L305 135 L355 400 L305 400 L295 340 L215 340 L205 400 Z M228 285 L282 285 L255 190 Z"></path>';
      if (type === "number") return '<path class="shape" d="M220 160 C250 115 340 130 345 195 C350 245 295 270 260 300 L345 300 L345 380 L175 380 C180 310 275 285 280 220 C283 190 245 185 225 215 Z"></path>';
      if (type === "mask") return '<path class="shape" d="M145 198 C154 120 229 102 260 132 C292 102 366 120 375 198 C390 305 328 390 260 405 C192 390 130 305 145 198 Z"></path>';
      if (type === "plant") return '<path class="shape" d="M260 125 C320 145 350 215 315 285 C292 332 250 375 210 405 C198 350 168 290 182 230 C195 170 225 142 260 125 Z"></path>';
      if (type === "flower") return '<circle class="shape" cx="260" cy="270" r="70"></circle><ellipse class="shape" cx="260" cy="155" rx="45" ry="75"></ellipse><ellipse class="shape" cx="260" cy="385" rx="45" ry="75"></ellipse><ellipse class="shape" cx="145" cy="270" rx="75" ry="45"></ellipse><ellipse class="shape" cx="375" cy="270" rx="75" ry="45"></ellipse>';
      if (type === "star") return '<path class="shape" d="M260 100 L302 206 L415 215 L328 288 L355 400 L260 338 L165 400 L192 288 L105 215 L218 206 Z"></path>';
      if (type === "potion") return '<path class="shape" d="M225 105 L295 105 L295 165 C340 185 365 238 350 310 C338 370 300 408 260 408 C220 408 182 370 170 310 C155 238 180 185 225 165 Z"></path>';
      if (type === "bug") return '<ellipse class="shape" cx="260" cy="285" rx="120" ry="150"></ellipse><path class="feature" d="M220 140 Q205 102 170 92 M300 140 Q315 102 350 92"></path>';
      if (type === "cloud") return '<path class="shape" d="M145 305 C105 300 95 245 135 225 C145 175 205 160 235 190 C265 145 340 160 350 220 C400 225 420 300 360 320 L165 320 C158 320 151 315 145 305 Z"></path>';
      if (type === "gem") return '<path class="shape" d="M185 150 L335 150 L390 235 L260 410 L130 235 Z"></path><path class="guide" d="M185 150 L260 410 L335 150 M130 235 L390 235"></path>';
      if (type === "stationery" || type === "tool") return '<path class="shape" d="M210 115 L310 115 L310 355 L260 425 L210 355 Z"></path>';
      if (type === "candy") return '<rect class="shape" x="180" y="190" width="160" height="140" rx="55"></rect><path class="shape" d="M180 230 L105 190 L130 270 L105 350 L180 310"></path><path class="shape" d="M340 230 L415 190 L390 270 L415 350 L340 310"></path>';
      if (type === "toy") return '<path class="shape" d="M185 180 C185 120 245 115 260 160 C275 115 335 120 335 180 L335 350 C335 410 185 410 185 350 Z"></path>';
      if (type === "book") return '<path class="shape" d="M145 150 L260 130 L375 150 L375 390 L260 370 L145 390 Z"></path><path class="guide" d="M260 130 L260 370"></path>';
      if (type === "ghost") return '<path class="shape" d="M150 390 L150 210 C150 140 210 105 260 105 C310 105 370 140 370 210 L370 390 L325 360 L285 390 L245 360 L205 390 L170 360 Z"></path>';
      if (type === "creature") return '<path class="shape" d="M160 250 C130 170 205 115 260 150 C315 115 390 170 360 250 C395 315 335 405 260 385 C185 405 125 315 160 250 Z"></path>';
      if (type === "household" || type === "drink" || type === "sauce") return '<path class="shape" d="M185 160 L335 160 L350 360 C350 405 170 405 170 360 Z"></path>';
      if (type === "fruit" || type === "vegetable" || type === "dessert" || type === "breakfast") return '<path class="shape" d="M165 250 C165 165 220 125 270 145 C335 125 380 190 360 270 C340 360 280 405 220 385 C170 368 145 310 165 250 Z"></path>';
      if (type === "shell" || type === "aquatic") return '<path class="shape" d="M135 300 C165 180 275 120 390 190 C345 230 330 310 370 380 C275 405 180 380 135 300 Z"></path>';
      if (type === "robot" || type === "device") return '<rect class="shape" x="165" y="145" width="190" height="235" rx="35"></rect><path class="feature" d="M225 145 L215 105 M295 145 L305 105"></path>';
      if (type === "clothing" || type === "accessory") return '<path class="shape" d="M180 160 C220 125 300 125 340 160 L370 350 C330 405 190 405 150 350 Z"></path>';
      if (type === "music") return '<path class="shape" d="M240 120 L320 105 L320 330 C320 380 240 390 230 340 C220 295 275 285 295 315 L295 160 L240 170 Z"></path>';
      if (type === "artSupply") return '<path class="shape" d="M210 110 L310 110 L300 350 L260 425 L220 350 Z"></path>';
      if (type === "magicObject") return '<path class="shape" d="M180 390 L330 125 M330 125 L350 160 M330 125 L295 130"></path><circle class="shape" cx="180" cy="390" r="50"></circle>';
      if (type === "celestialObject") return '<circle class="shape" cx="260" cy="265" r="130"></circle><path class="guide" d="M140 300 C220 220 330 220 405 300"></path>';
      if (type === "plushKeychain") return '<path class="shape" d="M185 180 C185 120 245 115 260 160 C275 115 335 120 335 180 L335 350 C335 410 185 410 185 350 Z"></path><circle class="feature" cx="260" cy="105" r="28"></circle>';
      if (type === "tinyMonster") return '<path class="shape" d="M160 250 C130 170 205 115 260 150 C315 115 390 170 360 250 C395 315 335 405 260 385 C185 405 125 315 160 250 Z"></path><path class="feature" d="M220 150 L205 105 M300 150 L315 105"></path>';
      if (type === "circleBadge") return '<circle class="shape" cx="260" cy="265" r="136"></circle>';
      if (type === "squircleTile") return '<path class="shape" d="M175 145 C175 125 190 110 210 110 L310 110 C330 110 345 125 345 145 L345 345 C345 365 330 380 310 380 L210 380 C190 380 175 365 175 345 Z"></path>';
      if (type === "roundedTriangle") return '<path class="shape" d="M260 118 C276 118 288 126 296 140 L378 302 C392 328 374 360 344 360 L176 360 C146 360 128 328 142 302 L224 140 C232 126 244 118 260 118 Z"></path>';
      if (type === "diamondTile") return '<path class="shape" d="M260 108 L374 222 Q392 240 374 258 L260 372 L146 258 Q128 240 146 222 Z"></path>';
      if (type === "heartBadge") return '<path class="shape" d="M260 395 L182 318 C126 262 134 178 198 160 C228 152 248 164 260 182 C272 164 292 152 322 160 C386 178 394 262 338 318 Z"></path>';
      if (type === "crescentDrop") return '<path class="shape" d="M314 120 C222 136 163 220 182 306 C196 370 250 408 310 404 C250 382 212 330 212 270 C212 210 248 160 314 120 Z"></path><path class="guide" d="M312 148 C262 172 234 217 234 268 C234 316 258 354 302 378"></path>';
      if (type === "cloverGlyph") return '<circle class="shape" cx="220" cy="210" r="62"></circle><circle class="shape" cx="300" cy="210" r="62"></circle><circle class="shape" cx="220" cy="290" r="62"></circle><circle class="shape" cx="300" cy="290" r="62"></circle>';
      if (type === "pillCapsule") return '<rect class="shape" x="145" y="180" width="230" height="170" rx="85"></rect><line class="guide" x1="260" y1="180" x2="260" y2="350"></line>';
      if (type === "starburstSeal") return '<path class="shape" d="M260 110 L294 148 L344 136 L352 186 L402 202 L380 248 L410 292 L366 320 L370 372 L318 370 L286 410 L246 374 L198 390 L182 342 L132 328 L148 280 L118 238 L156 208 L150 158 L202 162 L232 118 Z"></path>';
      if (type === "archTile") return '<path class="shape" d="M170 370 L170 236 C170 162 212 118 260 118 C308 118 350 162 350 236 L350 370 Z"></path>';
      if (type === "ribbonLoop") return '<path class="shape" d="M164 214 C164 160 220 140 260 188 C300 140 356 160 356 214 C356 258 322 286 286 290 L330 382 L260 338 L190 382 L234 290 C198 286 164 258 164 214 Z"></path>';
      if (type === "pebbleStack") return '<ellipse class="shape" cx="224" cy="310" rx="102" ry="78"></ellipse><ellipse class="shape" cx="296" cy="244" rx="84" ry="66"></ellipse><ellipse class="shape" cx="212" cy="216" rx="62" ry="52"></ellipse>';
      if (type === "zodiac" || type === "emoji" || type === "abstractShape" || type === "logoMark") return '<path class="shape" d="M160 205 C160 130 230 100 285 125 C348 153 384 218 363 292 C345 356 288 398 218 380 C153 363 124 298 160 205 Z"></path>';
      if (type === "package") return '<path class="shape" d="M150 180 L260 120 L370 180 L370 360 L260 420 L150 360 Z"></path><path class="guide" d="M150 180 L260 240 L370 180 M260 240 L260 420"></path>';
      if (type === "furniture") return '<path class="shape" d="M175 170 L345 170 L345 300 L315 300 L315 400 L285 400 L285 300 L235 300 L235 400 L205 400 L205 300 L175 300 Z"></path>';
      if (type === "garden") return '<path class="shape" d="M180 180 L340 180 L320 390 L200 390 Z"></path><path class="feature" d="M210 150 C230 110 270 120 260 180 M300 150 C330 120 350 150 320 180"></path>';
      if (type === "weatherIcon") return '<path class="shape" d="M145 305 C105 300 95 245 135 225 C145 175 205 160 235 190 C265 145 340 160 350 220 C400 225 420 300 360 320 L165 320 C158 320 151 315 145 305 Z"></path><path class="feature" d="M250 335 L220 410 L275 370 L245 450"></path>';
      return '<path class="shape" d="M160 205 C160 130 230 100 285 125 C348 153 384 218 363 292 C345 356 288 398 218 380 C153 363 124 298 160 205 Z"></path>';
    }


    const EMOTION_BLUEPRINT_PASS_1 = [
      "shy",
      "happy",
      "sleepy",
      "grumpy",
      "spooky",
      "sassy",
      "nervous",
      "proud",
      "dreamy",
      "mischievous",
      "dramatic",
      "calm",
      "confused",
      "angryTiny",
      "sadHopeful",
      "delightedShy",
      "gloomySweet",
      "softSuspicious",
      "hauntedHappy",
      "chaoticSoft",
      "bashfulProud",
      "braveScared",
      "jealousCute",
      "lonelySparkly",
      "feralCute",
      "meltyHappy",
      "embarrassedBrave",
      "sleepyMischief",
      "anxiousProud",
      "hopefulGrumpy",
      "bashfulChaotic",
      "smugCute",
      "timidMagical",
      "dramaticSleepy",
      "woundedSparkly",
      "overexcitedSoft",
      "suspiciousHappy",
      "gloomyGlam",
      "lonelyBrave",
      "tenderFeral",
      "eerieCalm",
      "gigglyNervous",
      "softVillain",
      "rainyHopeful",
      "cursedAdorable",
      "seriousTiny",
    ];

    function getEmotionBlueprintGuide(emotion) {
      const guides = {
        shy: {
          overlay: '<ellipse class="guide" cx="260" cy="285" rx="88" ry="58"></ellipse><path class="guide" d="M205 318 Q190 340 170 350 M315 318 Q330 340 350 350"></path>',
          label: "Shy guide: low face, tucked-in tiny arms, blush zone close to eyes."
        },
        happy: {
          overlay: '<path class="guide" d="M195 250 Q225 225 255 250 M265 250 Q295 225 325 250"></path><path class="guide" d="M210 325 Q260 365 310 325"></path>',
          label: "Happy guide: lifted eyes, clear smile arc, open cheerful spacing."
        },
        sleepy: {
          overlay: '<path class="guide" d="M198 258 Q225 278 252 258 M268 258 Q295 278 322 258"></path><path class="guide" d="M245 315 Q260 328 275 315"></path><line class="guide" x1="330" y1="195" x2="370" y2="165"></line>',
          label: "Sleepy guide: closed eyes, droopy mouth, soft downward rhythm."
        },
        grumpy: {
          overlay: '<path class="guide" d="M196 235 L248 258 M324 235 L272 258"></path><path class="guide" d="M238 326 Q260 308 282 326"></path>',
          label: "Grumpy-cute guide: angled brows + tiny frown, but keep body round."
        },
        spooky: {
          overlay: '<circle class="guide" cx="222" cy="260" r="24"></circle><path class="guide" d="M282 238 L322 278 M322 238 L282 278"></path><path class="guide" d="M248 320 Q260 336 272 320 M266 326 L272 344"></path>',
          label: "Spooky-sweet guide: one uneven eye, one spooky mark, tiny fang."
        },
        sassy: {
          overlay: '<path class="guide" d="M196 252 L248 252 M274 252 L326 242"></path><path class="guide" d="M242 320 Q270 336 292 305"></path>',
          label: "Sassy-soft guide: half-lids, side smile, slight face asymmetry."
        },
        nervous: {
          overlay: '<circle class="guide" cx="222" cy="264" r="16"></circle><circle class="guide" cx="300" cy="268" r="10"></circle><path class="guide" d="M246 318 Q260 308 274 318"></path><path class="guide" d="M332 230 Q350 250 338 270"></path>',
          label: "Nervous-cute guide: uneven eyes, tiny worried mouth, one sweat/blush cue."
        },
        proud: {
          overlay: '<path class="guide" d="M205 245 Q225 232 245 245 M275 245 Q295 232 315 245"></path><path class="guide" d="M242 315 Q260 330 282 315"></path><path class="guide" d="M260 390 L260 420"></path>',
          label: "Proud-tiny guide: lifted eyes, confident small smile, upright center."
        },
        dreamy: {
          overlay: '<path class="guide" d="M200 258 Q225 278 250 258 M270 258 Q295 278 320 258"></path><circle class="guide" cx="370" cy="190" r="22"></circle><path class="guide" d="M252 318 Q260 324 268 318"></path>',
          label: "Dreamy-sad guide: soft closed eyes, tiny mouth, floating moon/spark cue."
        },
        mischievous: {
          overlay: '<path class="guide" d="M198 245 L248 255 M274 255 Q300 238 326 248"></path><path class="guide" d="M244 316 Q265 336 290 310"></path><path class="guide" d="M270 320 L276 338"></path>',
          label: "Mischievous-sweet guide: one raised brow, crooked smile, tiny fang optional."
        },
        dramatic: {
          overlay: '<circle class="guide" cx="222" cy="260" r="26"></circle><circle class="guide" cx="298" cy="260" r="26"></circle><path class="guide" d="M252 322 Q260 340 268 322"></path><path class="guide" d="M330 288 Q350 318 330 342"></path>',
          label: "Dramatic-soft guide: bigger eyes, small O/frown mouth, one tear cue."
        },
        calm: {
          overlay: '<path class="guide" d="M200 260 Q225 275 250 260 M270 260 Q295 275 320 260"></path><path class="guide" d="M245 318 Q260 330 275 318"></path><ellipse class="guide" cx="260" cy="210" rx="78" ry="24"></ellipse>',
          label: "Calm-glowy guide: closed peaceful eyes, small smile, soft halo zone."
        },
        confused: {
          overlay: '<circle class="guide" cx="220" cy="260" r="24"></circle><circle class="guide" cx="304" cy="268" r="12"></circle><circle class="guide" cx="260" cy="318" r="13"></circle><path class="guide" d="M360 200 C390 175 420 195 405 225 C397 242 378 242 378 260"></path>',
          label: "Confused-cute guide: one big eye, one small eye, O mouth, question cue."
        },
        angryTiny: {
          overlay: '<path class="guide" d="M198 238 L248 262 M322 238 L272 262"></path><path class="guide" d="M244 324 Q260 312 276 324"></path><circle class="guide" cx="260" cy="270" r="96"></circle>',
          label: "Tiny-angry guide: angry brows, very small frown, keep the round cute body."
        },
        sadHopeful: {
          overlay: '<path class="guide" d="M198 252 Q224 240 250 260 M270 260 Q296 240 322 252"></path><path class="guide" d="M246 322 Q260 314 274 322"></path><path class="guide" d="M365 210 L374 232 L396 240 L374 248 L365 270 L356 248 L334 240 L356 232 Z"></path>',
          label: "Sad-hopeful guide: soft sad eyes, tiny restrained mouth, one hopeful glow mark."
        },
        delightedShy: {
          overlay: '<path class="guide" d="M198 252 Q225 232 252 252 M268 252 Q295 232 322 252"></path><path class="guide" d="M242 320 Q260 344 278 320"></path><path class="guide" d="M206 318 Q190 336 176 346 M314 318 Q330 336 344 346"></path>',
          label: "Delighted-shy guide: happy lifted eyes, tucked tiny mouth, inward bashful arms."
        },
        gloomySweet: {
          overlay: '<path class="guide" d="M198 262 Q224 246 250 264 M270 264 Q296 246 322 262"></path><path class="guide" d="M244 324 Q260 318 276 324"></path><path class="guide" d="M360 208 Q378 228 365 248"></path>',
          label: "Gloomy-sweet guide: soft sad eyes, tiny kind mouth, one droop cue only."
        },
        softSuspicious: {
          overlay: '<path class="guide" d="M198 250 L248 254 M276 258 Q302 244 326 250"></path><path class="guide" d="M244 320 Q262 334 286 312"></path>',
          label: "Soft-suspicious guide: one flatter eye, one lifted eye, small side-smile."
        },
        hauntedHappy: {
          overlay: '<circle class="guide" cx="222" cy="260" r="20"></circle><path class="guide" d="M284 240 L320 280 M320 240 L284 280"></path><path class="guide" d="M210 324 Q260 360 310 324"></path>',
          label: "Haunted-happy guide: spooky eye mismatch with a clear cheerful smile."
        },
        chaoticSoft: {
          overlay: '<circle class="guide" cx="224" cy="260" r="22"></circle><path class="guide" d="M282 250 Q302 232 324 254"></path><path class="guide" d="M242 322 Q265 346 292 314"></path><path class="guide" d="M352 188 L382 202 L364 224"></path>',
          label: "Chaotic-soft guide: uneven face rhythm, but keep the overall body cuddly."
        },
        excited: {
          overlay: '<circle class="guide" cx="222" cy="260" r="18"></circle><circle class="guide" cx="300" cy="260" r="18"></circle><path class="guide" d="M220 322 Q260 368 300 322"></path>',
          label: "Excited guide: bright wide eyes and a big smile arc."
        },
        curious: {
          overlay: '<circle class="guide" cx="220" cy="260" r="16"></circle><circle class="guide" cx="300" cy="266" r="24"></circle><circle class="guide" cx="260" cy="320" r="11"></circle>',
          label: "Curious guide: one slightly larger eye and a tiny O-mouth."
        },
        surprised: {
          overlay: '<circle class="guide" cx="220" cy="260" r="22"></circle><circle class="guide" cx="300" cy="260" r="22"></circle><circle class="guide" cx="260" cy="324" r="15"></circle>',
          label: "Surprised guide: round eyes, round mouth, simple lifted spacing."
        },
        embarrassed: {
          overlay: '<path class="guide" d="M202 260 Q226 278 250 260 M270 260 Q294 278 318 260"></path><path class="guide" d="M246 322 Q260 330 274 322"></path><path class="guide" d="M190 304 Q202 314 214 304 M306 304 Q318 314 330 304"></path>',
          label: "Embarrassed guide: shy closed eyes, tiny mouth, blush zones near cheeks."
        },
        determined: {
          overlay: '<path class="guide" d="M198 244 L248 256 M272 256 L322 244"></path><path class="guide" d="M242 320 Q260 330 278 320"></path>',
          label: "Determined guide: focused angled brows and a small firm mouth."
        },
        cozy: {
          overlay: '<path class="guide" d="M202 260 Q226 276 250 260 M270 260 Q294 276 318 260"></path><path class="guide" d="M244 320 Q260 334 276 320"></path><ellipse class="guide" cx="260" cy="210" rx="86" ry="28"></ellipse>',
          label: "Cozy guide: peaceful closed eyes, small smile, warm halo or blanket vibe."
        },
        sicklyCute: {
          overlay: '<path class="guide" d="M202 260 Q226 278 250 260 M270 260 Q294 278 318 260"></path><path class="guide" d="M244 324 Q260 314 276 324"></path><path class="guide" d="M340 210 L376 210"></path>',
          label: "Sickly-cute guide: tired eyes, tiny downturned mouth, one thermometer or bandage zone."
        },
        bashfulProud: {
          overlay: '<path class="guide" d="M202 252 Q226 238 250 252 M270 252 Q294 238 318 252"></path><path class="guide" d="M244 320 Q260 338 282 318"></path><path class="guide" d="M210 320 Q194 338 178 348"></path>',
          label: "Bashful-proud guide: lifted eyes, small confident smile, one tucked side cue."
        },
        worriedHopeful: {
          overlay: '<circle class="guide" cx="220" cy="264" r="15"></circle><circle class="guide" cx="300" cy="268" r="11"></circle><path class="guide" d="M246 322 Q260 314 274 322"></path><path class="guide" d="M365 210 L374 232 L396 240 L374 248 L365 270 L356 248 L334 240 L356 232 Z"></path>',
          label: "Worried-hopeful guide: worried small eyes, tiny unsure mouth, one hopeful star cue."
        },
        silly: {
          overlay: '<circle class="guide" cx="224" cy="260" r="18"></circle><path class="guide" d="M286 248 Q304 236 322 258"></path><path class="guide" d="M236 324 Q260 346 288 312"></path><path class="guide" d="M258 326 L272 344"></path>',
          label: "Silly guide: uneven playful eyes and a goofy crooked mouth."

        },
        bashfulChaotic: {
          overlay: '<path class="guide" d="M202 254 Q225 240 248 256 M272 252 Q296 238 320 258"></path><path class="guide" d="M242 322 Q260 344 286 316"></path><path class="guide" d="M210 320 Q190 340 174 352 M338 202 L372 214 L350 238"></path>',
          label: "Bashful-chaotic guide: shy lifted eyes, crooked smile, one chaotic accent only."
        },
        smugCute: {
          overlay: '<path class="guide" d="M198 252 L248 252 M274 256 Q298 242 322 248"></path><path class="guide" d="M242 320 Q268 336 292 312"></path>',
          label: "Smug-cute guide: flat confident eye, one lifted brow, tiny smug side-mouth."
        },
        timidMagical: {
          overlay: '<path class="guide" d="M202 260 Q226 278 250 260 M270 260 Q294 278 318 260"></path><path class="guide" d="M246 322 Q260 330 274 322"></path><path class="guide" d="M365 208 L374 230 L396 238 L374 246 L365 268 L356 246 L334 238 L356 230 Z"></path>',
          label: "Timid-magical guide: shy closed eyes, tiny mouth, one magical star cue."
        },
        dramaticSleepy: {
          overlay: '<path class="guide" d="M196 258 Q224 282 252 258 M268 258 Q296 282 324 258"></path><path class="guide" d="M244 324 Q260 346 276 324"></path><path class="guide" d="M330 286 Q352 314 334 344"></path>',
          label: "Dramatic-sleepy guide: sleepy lids with one dramatic droop or tear curve."
        },
        woundedSparkly: {
          overlay: '<path class="guide" d="M202 262 Q226 278 250 262 M270 262 Q294 278 318 262"></path><path class="guide" d="M246 324 Q260 316 274 324"></path><path class="guide" d="M334 212 L372 212"></path><path class="guide" d="M365 242 L374 260 L394 268 L374 276 L365 294 L356 276 L336 268 L356 260 Z"></path>',
          label: "Wounded-sparkly guide: tired kind eyes, one small hurt mark, one sparkle of resilience."
        },
        overexcitedSoft: {
          overlay: '<circle class="guide" cx="220" cy="260" r="20"></circle><circle class="guide" cx="300" cy="260" r="20"></circle><path class="guide" d="M216 322 Q260 372 304 322"></path><path class="guide" d="M170 300 Q188 286 202 302 M318 302 Q332 286 350 300"></path>',
          label: "Overexcited-soft guide: big cheerful eyes and mouth, but keep limbs soft and rounded."
        },
        suspiciousHappy: {
          overlay: '<path class="guide" d="M198 250 L248 254 M274 254 Q300 240 324 250"></path><path class="guide" d="M220 324 Q260 352 300 324"></path>',
          label: "Suspicious-happy guide: one questioning eye with a still-readable happy smile."
        },
        gloomyGlam: {
          overlay: '<path class="guide" d="M198 262 Q224 246 250 264 M270 264 Q296 246 322 262"></path><path class="guide" d="M244 324 Q260 318 276 324"></path><path class="guide" d="M206 214 Q232 194 260 208 Q288 194 314 214"></path>',
          label: "Gloomy-glam guide: droopy sweet eyes, tiny mouth, elegant brow or lash silhouette."
        },
        lonelyBrave: {
          overlay: '<path class="guide" d="M202 260 Q226 276 250 264 M270 264 Q294 248 318 260"></path><path class="guide" d="M246 324 Q260 316 274 324"></path><path class="guide" d="M260 388 L260 420"></path>',
          label: "Lonely-brave guide: soft low eyes, small brave mouth, centered upright posture."
        },
        tenderFeral: {
          overlay: '<circle class="guide" cx="222" cy="260" r="18"></circle><path class="guide" d="M286 248 Q304 236 322 256"></path><path class="guide" d="M240 324 Q262 346 288 314"></path><path class="guide" d="M258 324 L272 342"></path>',
          label: "Tender-feral guide: one sweet eye, one wild eye, tiny fang or crooked grin."
        },
        eerieCalm: {
          overlay: '<path class="guide" d="M202 260 Q226 276 250 260 M270 260 Q294 276 318 260"></path><path class="guide" d="M246 320 Q260 332 274 320"></path><ellipse class="guide" cx="260" cy="206" rx="84" ry="24"></ellipse><path class="guide" d="M352 210 Q380 236 352 262"></path>',
          label: "Eerie-calm guide: peaceful closed eyes with one strange floating cue."
        },
        gigglyNervous: {
          overlay: '<circle class="guide" cx="222" cy="264" r="15"></circle><circle class="guide" cx="300" cy="268" r="10"></circle><path class="guide" d="M238 322 Q260 346 286 320"></path><path class="guide" d="M332 228 Q350 248 338 268"></path>',
          label: "Giggly-nervous guide: worried uneven eyes with a tiny giggle-smile."
        },
        softVillain: {
          overlay: '<path class="guide" d="M198 250 L248 254 M276 254 Q302 240 326 248"></path><path class="guide" d="M242 322 Q266 338 292 312"></path><path class="guide" d="M205 214 Q232 200 260 210 Q288 200 316 214"></path>',
          label: "Soft-villain guide: sly eyes and a small cunning mouth, still plush not harsh."
        },
        rainyHopeful: {
          overlay: '<path class="guide" d="M200 262 Q226 246 252 264 M268 264 Q294 246 320 262"></path><path class="guide" d="M246 324 Q260 316 274 324"></path><path class="guide" d="M356 202 Q344 222 356 242 Q368 222 356 202"></path><path class="guide" d="M385 210 L394 232 L416 240 L394 248 L385 270 L376 248 L354 240 L376 232 Z"></path>',
          label: "Rainy-hopeful guide: sad-soft eyes, a tiny hopeful mouth, raindrop plus one star cue."
        },
        cursedAdorable: {
          overlay: '<circle class="guide" cx="222" cy="260" r="20"></circle><path class="guide" d="M284 240 L320 280 M320 240 L284 280"></path><path class="guide" d="M244 324 Q264 340 286 320"></path><path class="guide" d="M352 206 Q376 190 392 212 Q372 224 366 244"></path>',
          label: "Cursed-adorable guide: spooky mismatch face, but keep the mouth tiny and cute."
        },
        seriousTiny: {
          overlay: '<path class="guide" d="M200 250 L248 252 M272 252 L320 250"></path><path class="guide" d="M246 320 Q260 326 274 320"></path><circle class="guide" cx="260" cy="272" r="92"></circle>',
          label: "Serious-tiny guide: level eyes, very small firm mouth, extra emphasis on tiny scale."
        }
      };

      return guides[emotion] || {
        overlay: '<ellipse class="guide" cx="260" cy="285" rx="95" ry="68"></ellipse>',
        label: "Emotion guide coming next pass: keep the face low and readable."
      };
    }

    function emotionBlueprintBadge(emotion) {
      const supported = EMOTION_BLUEPRINT_PASS_1.includes(emotion);
      return supported ? "Emotion blueprint: full current set supported" : "Emotion blueprint: fallback guide";
    }

    function makeFace(emotion) {
      if (emotion === "sleepy" || emotion === "calm" || emotion === "dreamy") return ['<path class="feature" d="M207 258 Q225 270 243 258"></path><path class="feature" d="M277 258 Q295 270 313 258"></path>', '<path class="feature" d="M246 308 Q260 318 274 308"></path>'];
      if (emotion === "grumpy" || emotion === "angryTiny") return ['<path class="feature" d="M207 248 L245 260"></path><path class="feature" d="M313 248 L275 260"></path>', '<path class="feature" d="M246 315 Q260 305 274 315"></path>'];
      if (emotion === "spooky" || emotion === "hauntedHappy" || emotion === "feralCute") return ['<circle class="solid" cx="222" cy="260" r="9"></circle><path class="feature" d="M285 250 L310 275 M310 250 L285 275"></path>', '<path class="feature" d="M244 306 Q260 320 276 306 M265 315 L270 330"></path>'];
      if (emotion === "confused" || emotion === "braveScared") return ['<circle class="solid" cx="220" cy="260" r="14"></circle><circle class="solid" cx="302" cy="265" r="7"></circle>', '<circle class="feature" cx="260" cy="312" r="8"></circle>'];
      if (emotion === "sassy" || emotion === "softSuspicious" || emotion === "jealousCute") return ['<path class="feature" d="M205 258 L242 258"></path><path class="feature" d="M278 258 L315 252"></path>', '<path class="feature" d="M248 312 Q268 322 282 304"></path>'];
      if (emotion === "dramatic" || emotion === "sadHopeful" || emotion === "lonelySparkly") return ['<circle class="feature" cx="225" cy="260" r="18"></circle><circle class="feature" cx="295" cy="260" r="18"></circle><circle class="solid" cx="232" cy="252" r="5"></circle><circle class="solid" cx="302" cy="252" r="5"></circle>', '<circle class="feature" cx="260" cy="315" r="10"></circle>'];
      return ['<circle class="solid" cx="225" cy="265" r="10"></circle><circle class="solid" cx="295" cy="265" r="10"></circle>', '<path class="feature" d="M245 306 Q260 318 275 306"></path>'];
    }


    function getSubjectGuide(type) {
      if (["blob"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="272" rx="126" ry="152"></ellipse><path class="guide" d="M176 352 C210 372 310 372 344 352"></path>',
          note: "Build one soft jelly body first, then add the face low."
        };
      }
      if (["food"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="275" rx="120" ry="142"></ellipse><path class="guide" d="M185 200 Q260 150 335 200"></path>',
          note: "Start with a simple food body, then add one clear edible cue."
        };
      }
      if (["object"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="168" y="145" width="184" height="240" rx="38"></rect><line class="guide" x1="260" y1="145" x2="260" y2="385"></line>',
          note: "Use a clean object silhouette first, then add the face and limbs."
        };
      }
      if (["mask"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M165 190 C200 150 320 150 355 190 C350 295 318 352 260 382 C202 352 170 295 165 190 Z"></path><line class="guide" x1="165" y1="245" x2="355" y2="245"></line>',
          note: "Keep the mask silhouette centered and balanced before adding facial symbols."
        };
      }
      if (["flower"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="260" r="48"></circle><circle class="guide" cx="260" cy="175" r="52"></circle><circle class="guide" cx="336" cy="228" r="52"></circle><circle class="guide" cx="308" cy="320" r="52"></circle><circle class="guide" cx="212" cy="320" r="52"></circle><circle class="guide" cx="184" cy="228" r="52"></circle>',
          note: "Place the flower center first, then build a few readable petals around it."
        };
      }
      if (["star"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 128 L292 220 L390 220 L310 276 L340 372 L260 314 L180 372 L210 276 L130 220 L228 220 Z"></path>',
          note: "Use the big five-point star silhouette first; keep the face small inside it."
        };
      }
      if (["bug"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="288" rx="86" ry="118"></ellipse><line class="guide" x1="260" y1="170" x2="260" y2="406"></line><path class="guide" d="M216 170 L190 130 M304 170 L330 130"></path>',
          note: "Build the rounded bug body, center line, and antennae before tiny details."
        };
      }
      if (["stationery"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="182" y="130" width="156" height="270" rx="24"></rect><path class="guide" d="M182 176 L338 176"></path><line class="guide" x1="260" y1="130" x2="260" y2="400"></line>',
          note: "Use the paper or tool frame first, then place the face low and simple."
        };
      }
      if (["candy"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="265" rx="86" ry="104"></ellipse><path class="guide" d="M174 250 L126 224 L126 308 L174 282"></path><path class="guide" d="M346 250 L394 224 L394 308 L346 282"></path>',
          note: "Center the sweet body first, then add wrapper or candy cues."
        };
      }
      if (["toy"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="260" rx="108" ry="124"></ellipse><circle class="guide" cx="214" cy="176" r="28"></circle><circle class="guide" cx="306" cy="176" r="28"></circle>',
          note: "Use a plushy toy body first, then one toy-defining part like ears or seams."
        };
      }
      if (["tool"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="260" y1="126" x2="260" y2="390"></line><rect class="guide" x="224" y="284" width="72" height="122" rx="20"></rect><path class="guide" d="M195 170 L325 170"></path>',
          note: "Build the handle or main axis first, then the tool head."
        };
      }
      if (["household"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="176" y="152" width="168" height="230" rx="32"></rect><line class="guide" x1="260" y1="152" x2="260" y2="382"></line><line class="guide" x1="176" y1="220" x2="344" y2="220"></line>',
          note: "Keep the home-object silhouette readable before character details."
        };
      }
      if (["drink"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M200 148 L320 148 L304 386 L216 386 Z"></path><line class="guide" x1="200" y1="186" x2="320" y2="186"></line><path class="guide" d="M260 90 L260 148"></path>',
          note: "Cup or bottle shape first, liquid zone second, face third."
        };
      }
      if (["sauce"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M224 118 L296 118 L312 176 L312 382 L208 382 L208 176 Z"></path><line class="guide" x1="208" y1="176" x2="312" y2="176"></line>',
          note: "Use a squeeze bottle or jar body first, then the flavor cue."
        };
      }
      if (["artSupply"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="220" y1="130" x2="320" y2="350"></line><path class="guide" d="M320 350 L336 388 L298 372 Z"></path><path class="guide" d="M220 130 L198 158 L236 166 Z"></path>',
          note: "Use a strong pencil or brush axis first, then add the cute face."
        };
      }
      if (["plushKeychain"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="278" rx="106" ry="126"></ellipse><circle class="guide" cx="260" cy="118" r="34"></circle><line class="guide" x1="260" y1="152" x2="260" y2="170"></line>',
          note: "Build the plush charm body first, then add the hanging loop up top."
        };
      }
      if (["fruit", "vegetable", "dessert", "breakfast"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="265" r="118"></circle><path class="guide" d="M260 150 C245 125 255 110 280 100"></path>',
          note: "Round body first, then one food-identifying cue."
        };
      }
      if (["shell"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M170 330 C210 190 300 160 365 220"></path><path class="guide" d="M190 340 C225 245 290 225 342 262"></path><path class="guide" d="M210 350 C240 285 286 278 325 305"></path>',
          note: "Use layered shell arcs instead of one flat outline."
        };
      }
      if (["aquatic"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M165 292 C220 212 320 212 373 260"></path><path class="guide" d="M258 250 C275 205 320 198 350 215"></path><path class="guide" d="M270 315 C300 325 325 345 342 372"></path>',
          note: "Fishy flow first, then a tail or fin cue."
        };
      }
      if (["robot", "device"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="172" y="152" width="176" height="228" rx="30"></rect><line class="guide" x1="260" y1="152" x2="260" y2="380"></line><line class="guide" x1="172" y1="230" x2="348" y2="230"></line>',
          note: "Keep the frame clean and aligned before adding the face."
        };
      }
      if (["clothing", "accessory"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M190 165 C225 140 295 140 330 165"></path><path class="guide" d="M180 195 L340 195"></path><path class="guide" d="M210 330 C235 350 285 350 310 330"></path>',
          note: "Build the wearable silhouette, then add the character face low."
        };
      }
      if (["music"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="292" y1="118" x2="292" y2="330"></line><ellipse class="guide" cx="250" cy="342" rx="42" ry="30"></ellipse>',
          note: "Start with the note stem, then add the note body."
        };
      }
      if (["magicObject"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M180 390 L325 145"></path><circle class="guide" cx="180" cy="390" r="42"></circle><path class="guide" d="M325 145 C350 145 362 165 352 190"></path>',
          note: "Use a simple wand or relic axis before adding charm details."
        };
      }
      if (["celestialObject"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="265" r="118"></circle><ellipse class="guide" cx="260" cy="265" rx="170" ry="56"></ellipse>',
          note: "Large planet/moon body first, orbit cue second."
        };
      }
      if (["package"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M150 180 L260 120 L370 180 L260 240 Z"></path><line class="guide" x1="260" y1="240" x2="260" y2="420"></line>',
          note: "Keep the box fold readable before the face and limbs."
        };
      }
      if (["furniture"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="175" y1="300" x2="345" y2="300"></line><line class="guide" x1="210" y1="300" x2="210" y2="402"></line><line class="guide" x1="310" y1="300" x2="310" y2="402"></line>',
          note: "Use a seat/top line first, then place the legs."
        };
      }
      if (["garden", "plant"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="185" y="188" width="150" height="198" rx="10"></rect><path class="guide" d="M215 160 C235 120 275 120 260 180 M300 160 C320 130 340 150 318 182"></path>',
          note: "Use pot/leaf landmarks so the plant read stays clear."
        };
      }
      if (["creature", "tinyMonster"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M208 160 L190 112 M312 160 L330 112"></path><ellipse class="guide" cx="260" cy="268" rx="126" ry="132"></ellipse>',
          note: "Keep the body round and let the horns or tuft be only accents."
        };
      }
      if (["circleBadge"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="265" r="138"></circle><line class="guide" x1="122" y1="265" x2="398" y2="265"></line><line class="guide" x1="260" y1="127" x2="260" y2="403"></line>',
          note: "Start with a true circle. Keep the face centered and the details inside the safe ring."
        };
      }
      if (["squircleTile"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="168" y="112" width="184" height="268" rx="54"></rect><line class="guide" x1="168" y1="246" x2="352" y2="246"></line>',
          note: "Build the squircle from a soft box, not from a plain circle."
        };
      }
      if (["roundedTriangle"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 120 L374 332 L146 332 Z"></path><circle class="guide" cx="260" cy="262" r="88"></circle>',
          note: "Place a simple triangle first, then soften every corner so it stays cute."
        };
      }
      if (["diamondTile"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 110 L382 232 L260 354 L138 232 Z"></path><line class="guide" x1="138" y1="232" x2="382" y2="232"></line>',
          note: "Use one centered diamond and keep the top and side angles balanced."
        };
      }
      if (["heartBadge"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="220" cy="204" r="54"></circle><circle class="guide" cx="300" cy="204" r="54"></circle><path class="guide" d="M170 224 L260 364 L350 224"></path>',
          note: "Build the heart from two top circles and one pointed lower drop."
        };
      }
      if (["crescentDrop"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="272" cy="264" r="126"></circle><circle class="guide" cx="314" cy="250" r="108"></circle>',
          note: "Draw the outer moon curve first, then carve the inner crescent out of it."
        };
      }
      if (["cloverGlyph"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="220" cy="210" r="62"></circle><circle class="guide" cx="300" cy="210" r="62"></circle><circle class="guide" cx="220" cy="290" r="62"></circle><circle class="guide" cx="300" cy="290" r="62"></circle>',
          note: "Keep the four lobes even enough to read as a clover, but still soft."
        };
      }
      if (["pillCapsule"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="144" y="180" width="232" height="170" rx="85"></rect><line class="guide" x1="260" y1="180" x2="260" y2="350"></line>',
          note: "Use one capsule body and split it cleanly down the middle."
        };
      }
      if (["starburstSeal"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="260" r="128"></circle><path class="guide" d="M260 132 L286 162 L326 154 L332 194 L372 206 L354 244 L380 280 L344 304 L348 346 L306 344 L280 378 L246 348 L208 362 L194 324 L154 312 L166 274 L142 238 L172 214 L168 172 L208 176 L234 138 Z"></path>',
          note: "Keep the burst points chunky and limited so the seal stays readable."
        };
      }
      if (["archTile"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="172" y="118" width="176" height="252" rx="18"></rect><path class="guide" d="M172 236 C172 162 214 118 260 118 C306 118 348 162 348 236"></path>',
          note: "Think arch-top window: flat sides, rounded top, stable base."
        };
      }
      if (["ribbonLoop"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="214" cy="222" r="52"></circle><circle class="guide" cx="306" cy="222" r="52"></circle><path class="guide" d="M238 262 L194 380 M282 262 L326 380"></path>',
          note: "Start with two soft loops, then drop the ribbon tails underneath."
        };
      }
      if (["pebbleStack"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="224" cy="310" rx="102" ry="78"></ellipse><ellipse class="guide" cx="296" cy="244" rx="84" ry="66"></ellipse><ellipse class="guide" cx="212" cy="216" rx="62" ry="52"></ellipse>',
          note: "Stack two or three pebble shapes with overlap so it reads more specific than a blob."
        };
      }
      if (["logoMark", "abstractShape", "zodiac", "emoji"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="260" y1="110" x2="260" y2="405"></line><line class="guide" x1="135" y1="265" x2="385" y2="265"></line>',
          note: "Use a strong axis so the symbol still reads after adding personality."
        };
      }
      if (["badge", "icon", "sticker"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 115 L360 175 L360 325 L260 385 L160 325 L160 175 Z"></path>',
          note: "Center the emblem and keep key details away from the edges."
        };
      }
      if (["book"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="260" y1="132" x2="260" y2="370"></line><line class="guide" x1="145" y1="185" x2="375" y2="185"></line>',
          note: "Spine first, page shape second."
        };
      }
      if (["ghost"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="150" y1="210" x2="370" y2="210"></line><path class="guide" d="M150 390 L180 360 L215 390 L245 360 L285 390 L325 360 L370 390"></path>',
          note: "Top dome first, wavy drape second."
        };
      }
      if (["cloud", "weatherIcon"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="195" cy="250" r="55"></circle><circle class="guide" cx="260" cy="220" r="70"></circle><circle class="guide" cx="330" cy="250" r="55"></circle>',
          note: "Build from puffs, not one flat cloud edge."
        };
      }
      if (["potion"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="218" y="100" width="84" height="70" rx="12"></rect><ellipse class="guide" cx="260" cy="285" rx="105" ry="135"></ellipse>',
          note: "Bottle neck first, rounded body second."
        };
      }
      if (["gem"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M185 150 L260 235 L335 150 M130 235 L260 235 L390 235"></path>',
          note: "Use only a few facet lines so the gem stays readable."
        };
      }
      if (["letter"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="165" y="120" width="190" height="285" rx="25"></rect>',
          note: "Keep the letter readable before adding the face."
        };
      }
      if (["number"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="175" y="140" width="170" height="240" rx="25"></rect>',
          note: "Keep the number readable before adding the face."
        };
      }
      return {
        overlay: '<ellipse class="guide" cx="260" cy="265" rx="145" ry="180"></ellipse>',
        note: "Trace the big body shape first, then place the face low."
      };
    }

    function getStageGuides(type, stage) {
      const common = {
        body: '',
        guide: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>',
        face: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>',
        limbs: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>',
        final: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>'
      };
      const subject = getSubjectGuide(type).overlay || '';
      if (stage === "body") return '';
      return common[stage] + subject;
    }

    function makeBlueprint(type, emotion, twist, style, twistSet = null) {
      const body = makeBody(type);
      const [eyes, mouth] = makeFace(emotion);
      const activeTwistSet = twistSet || [twist].filter(Boolean);
      const twistSvg = getTwistSetSvg(activeTwistSet);
      const limb = getLimbStyle();
      const limbSvg = limb.svg || "";
      const limbGuide = limb.overlay || "";
      const variant = getBlueprintVariant();
      const subjectGuide = getSubjectGuide(type);
      const emotionGuide = getEmotionBlueprintGuide(emotion);
      const twistGuide = {
        overlay: getTwistSetBlueprintOverlay(activeTwistSet),
        label: getTwistSetBlueprintLabel(activeTwistSet)
      };
      let overlay = style === "autoSubject" ? `${subjectGuide.overlay}<text class="label" x="35" y="535">Auto subject guide: ${subjectGuide.note}</text>` : "";
      if (style === "bodyFirst") overlay = '<text class="label" x="35" y="535">Body-first: trace only the outside shape before adding face.</text>';
      if (style === "faceMap") overlay = '<rect class="guide" x="185" y="235" width="150" height="105" rx="35"></rect><text class="label" x="35" y="535">Face map: keep eyes and mouth inside this soft box.</text>';
      if (style === "limbMap") overlay = '<circle class="guide" cx="145" cy="300" r="35"></circle><circle class="guide" cx="375" cy="300" r="35"></circle><circle class="guide" cx="215" cy="410" r="28"></circle><circle class="guide" cx="305" cy="410" r="28"></circle>';
      if (style === "stickerSafe") overlay = '<rect class="guide" x="110" y="90" width="300" height="360" rx="75"></rect><text class="label" x="35" y="535">Sticker-safe: keep key details inside the rounded boundary.</text>';
      if (style === "symmetry") overlay = '<line class="guide" x1="210" y1="100" x2="210" y2="445"></line><line class="guide" x1="310" y1="100" x2="310" y2="445"></line>';
      if (style === "iconGrid") overlay = '<rect class="guide" x="120" y="120" width="280" height="280" rx="60"></rect><line class="guide" x1="260" y1="120" x2="260" y2="400"></line><line class="guide" x1="120" y1="260" x2="400" y2="260"></line>';
      if (style === "expressionZones") overlay = '<ellipse class="guide" cx="260" cy="280" rx="95" ry="70"></ellipse><text class="label" x="35" y="535">Expression zone: only adjust the face inside this oval.</text>';
      if (style === "accessoryZone") overlay = '<rect class="guide" x="320" y="90" width="95" height="130" rx="30"></rect><text class="label" x="35" y="535">Accessory zone: keep decoration away from the face.</text>';
      if (style === "shadowMap") overlay = '<path class="guide" d="M165 360 C220 415 315 415 365 360"></path><text class="label" x="35" y="535">Shadow map: put one shadow under the lower body.</text>';
      if (style === "fourPanel") overlay = '<line class="guide" x1="260" y1="70" x2="260" y2="460"></line><line class="guide" x1="90" y1="265" x2="430" y2="265"></line><text class="label" x="35" y="535">Four panels: body, face, limbs, final polish.</text>';
      if (style === "worksheet") overlay = '<rect class="guide" x="80" y="80" width="360" height="400" rx="35"></rect><text class="label" x="35" y="535">Worksheet mode: trace, redraw, then hide the guide.</text>';
      if (style === "plushBody") overlay = '<circle class="guide" cx="205" cy="175" r="42"></circle><circle class="guide" cx="315" cy="175" r="42"></circle><text class="label" x="35" y="535">Plush body: keep ears/head bumps soft and round.</text>';
      if (style === "fruitSlice") overlay = '<circle class="guide" cx="260" cy="265" r="118"></circle><path class="guide" d="M260 147 L260 383 M158 210 L362 320 M158 320 L362 210"></path><text class="label" x="35" y="535">Fruit guide: think juicy round body + simple slice lines.</text>';
      if (style === "potionBottle") overlay = '<rect class="guide" x="218" y="100" width="84" height="70" rx="12"></rect><ellipse class="guide" cx="260" cy="285" rx="105" ry="135"></ellipse><text class="label" x="35" y="535">Potion guide: neck first, bottle body second.</text>';
      if (style === "cloudPuff") overlay = '<circle class="guide" cx="195" cy="250" r="55"></circle><circle class="guide" cx="260" cy="220" r="70"></circle><circle class="guide" cx="330" cy="250" r="55"></circle><text class="label" x="35" y="535">Cloud guide: build the body from overlapping puffs.</text>';
      if (style === "robotGrid") overlay = '<rect class="guide" x="165" y="145" width="190" height="235" rx="35"></rect><line class="guide" x1="165" y1="225" x2="355" y2="225"></line><line class="guide" x1="260" y1="145" x2="260" y2="380"></line><text class="label" x="35" y="535">Robot guide: use a cleaner grid and keep corners rounded.</text>';
      if (style === "ghostDrape") overlay = '<line class="guide" x1="150" y1="210" x2="370" y2="210"></line><path class="guide" d="M150 390 L180 360 L215 390 L245 360 L285 390 L325 360 L370 390"></path><text class="label" x="35" y="535">Ghost guide: top is soft, bottom is draped and wavy.</text>';
      if (style === "gemFacet") overlay = '<path class="guide" d="M185 150 L260 235 L335 150 M130 235 L260 235 L390 235"></path><text class="label" x="35" y="535">Gem guide: use a few clean facet lines only.</text>';
      if (style === "letterBuild") overlay = '<rect class="guide" x="165" y="120" width="190" height="285" rx="25"></rect><text class="label" x="35" y="535">Letter guide: build the mascot from chunky letter strokes.</text>';
      if (style === "numberBuild") overlay = '<rect class="guide" x="175" y="140" width="170" height="240" rx="25"></rect><text class="label" x="35" y="535">Number guide: keep the number readable before adding a face.</text>';
      if (style === "badgeEmblem") overlay = '<path class="guide" d="M260 115 L360 175 L360 325 L260 385 L160 325 L160 175 Z"></path><text class="label" x="35" y="535">Badge guide: strong centered emblem shape first.</text>';
      if (style === "weatherSymbol") overlay = '<circle class="guide" cx="260" cy="230" r="55"></circle><path class="guide" d="M245 290 L220 360 L275 325 L250 400"></path><text class="label" x="35" y="535">Weather guide: one symbol body + one forecast accent.</text>';
      if (style === "shellSpiral") overlay = '<path class="guide" d="M170 330 C210 190 300 160 365 220"></path><path class="guide" d="M190 340 C225 245 290 225 342 262"></path><path class="guide" d="M210 350 C240 285 286 278 325 305"></path><text class="label" x="35" y="535">Shell guide: use layered shell arcs, not random rib lines.</text>';
      if (style === "aquaticFin") overlay = '<path class="guide" d="M165 292 C220 212 320 212 373 260"></path><path class="guide" d="M258 250 C275 205 320 198 350 215"></path><path class="guide" d="M270 315 C300 325 325 345 342 372"></path><text class="label" x="35" y="535">Aquatic guide: long body flow first, fin accents second.</text>';
      if (style === "deviceScreen") overlay = '<rect class="guide" x="182" y="160" width="156" height="205" rx="22"></rect><circle class="guide" cx="260" cy="180" r="4"></circle><text class="label" x="35" y="535">Device guide: frame first, screen inner area second.</text>';
      if (style === "clothingFold") overlay = '<path class="guide" d="M190 165 C225 140 295 140 330 165"></path><line class="guide" x1="180" y1="195" x2="340" y2="195"></line><path class="guide" d="M210 330 C235 350 285 350 310 330"></path><text class="label" x="35" y="535">Clothing guide: neckline first, body fall second.</text>';
      if (style === "musicStem") overlay = '<line class="guide" x1="292" y1="118" x2="292" y2="330"></line><ellipse class="guide" cx="250" cy="342" rx="42" ry="30"></ellipse><text class="label" x="35" y="535">Music guide: stem first, note head second.</text>';
      if (style === "wandArc") overlay = '<path class="guide" d="M180 390 L325 145"></path><circle class="guide" cx="180" cy="390" r="42"></circle><path class="guide" d="M325 145 C350 145 362 165 352 190"></path><text class="label" x="35" y="535">Magic guide: use one main relic axis and one charm cue.</text>';
      if (style === "orbitRing") overlay = '<circle class="guide" cx="260" cy="265" r="118"></circle><ellipse class="guide" cx="260" cy="265" rx="170" ry="56"></ellipse><text class="label" x="35" y="535">Orbit guide: sphere first, orbit ring second.</text>';
      if (style === "packageFold") overlay = '<path class="guide" d="M150 180 L260 120 L370 180 L260 240 Z"></path><line class="guide" x1="260" y1="240" x2="260" y2="420"></line><text class="label" x="35" y="535">Package guide: top flap first, body folds second.</text>';
      if (style === "furnitureBuild") overlay = '<line class="guide" x1="175" y1="300" x2="345" y2="300"></line><line class="guide" x1="210" y1="300" x2="210" y2="402"></line><line class="guide" x1="310" y1="300" x2="310" y2="402"></line><text class="label" x="35" y="535">Furniture guide: seat or top plane first, then support legs.</text>';
      if (style === "gardenPot") overlay = '<rect class="guide" x="185" y="188" width="150" height="198" rx="10"></rect><path class="guide" d="M215 160 C235 120 275 120 260 180 M300 160 C320 130 340 150 318 182"></path><text class="label" x="35" y="535">Garden guide: container first, leaf or sprout cues second.</text>';
      if (style === "creatureHorn") overlay = '<path class="guide" d="M208 160 L190 112 M312 160 L330 112"></path><ellipse class="guide" cx="260" cy="268" rx="126" ry="132"></ellipse><text class="label" x="35" y="535">Creature guide: round body first, horn/tuft accents second.</text>';
      if (style === "logoAxis") overlay = '<line class="guide" x1="260" y1="110" x2="260" y2="405"></line><line class="guide" x1="135" y1="265" x2="385" y2="265"></line><text class="label" x="35" y="535">Logo axis: use strong vertical and horizontal balance lines.</text>';

      return `
        <text class="label" x="24" y="32">TRACE ORDER: 1 body → 2 guide → 3 eyes → 4 mouth → 5 limbs/twist</text>
        <line class="guide" x1="260" y1="82" x2="260" y2="440"></line>
        <line class="guide" x1="130" y1="275" x2="390" y2="275"></line>
        ${style === "autoSubject" ? '' : '<ellipse class="guide" cx="260" cy="265" rx="145" ry="180"></ellipse>'}
        ${body}
        ${wrapBlueprintLayer(limbSvg, "body")}
        ${eyes}
        ${mouth}
        ${emotionGuide.overlay}
        ${twistGuide.overlay}
        ${limbGuide}
        ${twistSvg}
        ${overlay}
        <text class="label" x="35" y="486">${emotionGuide.label}</text>
        <text class="label" x="35" y="510">${twistGuide.label}</text>
        <text class="label" x="35" y="532">Limb guide: ${limb.label} — ${limb.guide}</text>
        <text class="label" x="35" y="556">Import into Procreate, lower opacity, draw on a new layer.</text>
      `;
    }


    function miniBlueprintSvg(type, emotion, twist, stage, twistSet = null) {
      const body = makeBody(type);
      const face = makeFace(emotion);
      const eyes = face[0];
      const mouth = face[1];
      const activeTwistSet = twistSet || [twist].filter(Boolean);
      const twistSvg = getTwistSetSvg(activeTwistSet);
      const limb = getLimbStyle();
      const limbSvg = limb.svg || "";
      const limbGuide = limb.overlay || "";
      const emotionGuide = getEmotionBlueprintGuide(emotion);
      const twistGuide = {
        overlay: getTwistSetBlueprintOverlay(activeTwistSet),
        label: getTwistSetBlueprintLabel(activeTwistSet)
      };

      const guides = getStageGuides(type, stage);

      const limbs = limbSvg;

      let content = "";
      if (stage === "body") content = `${body}`;
      if (stage === "guide") content = `${guides}${body}`;
      if (stage === "face") content = `${guides}${body}${eyes}${mouth}${emotionGuide.overlay}`;
      if (stage === "limbs") content = `${guides}${body}${limbGuide}${limbs}${eyes}${mouth}${emotionGuide.overlay}`;
      if (stage === "final") content = `${guides}${limbGuide}${wrapBlueprintLayer(body + limbs, "body")}${wrapBlueprintLayer(eyes + mouth, "face")}${wrapBlueprintLayer(emotionGuide.overlay, "emotion")}${wrapBlueprintLayer(twistGuide.overlay + twistSvg, "twist")}<path class="guide" d="M165 360 C220 415 315 415 365 360"></path>`;

      return `<svg viewBox="0 0 520 520" aria-hidden="true">${content}</svg>`;
    }

    function renderTraceStepPanels(data) {
      const steps = [
        ["1. Body only", "body"],
        ["2. Guide lines", "guide"],
        ["3. Face placement", "face"],
        ["4. Limb style", "limbs"],
        ["5. Twist + polish", "final"]
      ];

      document.getElementById("traceStepPanels").innerHTML = steps.map(([label, stage]) => `
        <div class="trace-panel">
          <strong>${label}</strong>
          ${miniBlueprintSvg(data.type, data.emotion, data.twist, stage, data.twistSet)}
        </div>
      `).join("");
    }

    function phaseLayerName(index) {
      const names = [
        "Rough shape layer",
        "Guide layer",
        "Face test layer",
        "Detail sketch layer",
        "Clean line layer",
        "Flat color layer",
        "Shadow/highlight layer",
        "Final check"
      ];
      return names[index] || "Practice layer";
    }

    function phaseCanvasLook(index) {
      const looks = [
        "You should only see a simple outer shape.",
        "You should see light guide lines, not finished details.",
        "You should see the expression starting to read.",
        "You should see tiny limbs/details attached lightly.",
        "You should see clean confident lines.",
        "You should see flat readable color.",
        "You should see one shadow and one highlight.",
        "You should see a mascot that still reads when zoomed out."
      ];
      return looks[index] || "You should see one clear improvement.";
    }

    function copyLessonText() {
      const title = document.getElementById("title").textContent;
      const goal = document.getElementById("goal").textContent;
      const phases = Array.from(document.querySelectorAll(".phase")).map((p, i) => `${i + 1}. ${p.innerText}`).join("\n\n");
      const text = `${title}\n\n${goal}\n\n${phases}`;
      navigator.clipboard?.writeText(text).then(() => {
        status("Lesson text copied.", "ok");
      }).catch(() => {
        status("Copy failed. You can still select and copy manually.", "bad");
      });
    }




    function setViewMode(mode) {
      const simple = mode === "simple";
      document.body.classList.toggle("simple-mode", simple);
      localStorage.setItem("mascotSparkViewMode", simple ? "simple" : "advanced");
      const btn = document.getElementById("viewModeBtn");
      if (btn) btn.textContent = simple ? "Advanced mode" : "Simple mode";

      const activeAdvancedPanel = document.querySelector(".tab-panel.active[data-advanced-only='true']");
      if (simple && activeAdvancedPanel) showTab("tab-lesson");
    }

    function toggleViewMode() {
      const current = localStorage.getItem("mascotSparkViewMode") || "advanced";
      setViewMode(current === "simple" ? "advanced" : "simple");
    }

    function loadViewMode() {
      setViewMode(localStorage.getItem("mascotSparkViewMode") || "advanced");
    }

    function getPaletteRoles(palette) {
      const colors = (palette && palette.colors) ? palette.colors : [];
      if (!colors.length) return [];
      return [
        { role: "Body", color: colors[0], tip: "main mascot shape" },
        { role: "Accent", color: colors[1] || colors[0], tip: "twist or cheeks" },
        { role: "Soft fill", color: colors[2] || colors[0], tip: "secondary area" },
        { role: "Shadow", color: colors[colors.length - 2] || colors[1] || colors[0], tip: "one small shadow" },
        { role: "Highlight", color: colors[colors.length - 1] || colors[0], tip: "shine spot only" }
      ];
    }

    function renderPaletteRoleGuide(paletteKey) {
      const palette = palettes[paletteKey] || palettes.auto;
      const box = document.getElementById("paletteRoleGuide");
      if (!box) return;

      const roles = getPaletteRoles(palette);
      if (!roles.length) {
        box.innerHTML = '<div class="compact-help">Auto palette: choose 1 body color, 1 accent, 1 shadow, and 1 highlight.</div>';
        return;
      }

      box.innerHTML = roles.map(item => `
        <div class="palette-role">
          <div class="palette-role-color" style="background:${item.color}"></div>
          <div class="palette-role-body">
            <strong>${item.role}</strong>
            <span>${item.tip}</span>
          </div>
        </div>
      `).join("");
    }

    function exportWorksheet() {
      const title = document.getElementById("title")?.textContent || "Mascot Spark Worksheet";
      const meta = document.getElementById("meta")?.textContent || "";
      const goal = document.getElementById("goal")?.textContent || "";
      const palette = document.getElementById("lessonPaletteName")?.textContent || "";
      const drawFirst = Array.from(document.querySelectorAll("#drawFirstPanels .draw-card")).map((card, i) => `${i + 1}. ${card.innerText}`).join("\\n\\n");
      const phases = Array.from(document.querySelectorAll("#phases .phase")).map((phase, i) => `${i + 1}. ${phase.innerText}`).join("\\n\\n");
      const checks = Array.from(document.querySelectorAll("#checks .check")).map((check, i) => `${i + 1}. ${check.innerText}`).join("\\n");
      const remix = `One change: ${document.getElementById("remixOne")?.textContent || ""}\\nSecond version: ${document.getElementById("remixTwo")?.textContent || ""}`;

      const worksheet = [
        "MASCOT SPARK WORKSHEET",
        "=======================",
        "",
        title,
        meta,
        "",
        "GOAL",
        goal,
        "",
        "PALETTE",
        palette,
        "",
        "PRACTICE INTELLIGENCE",
        skill,
        "",
        "MASCOT ANATOMY",
        anatomy,
        "",
        "SUBJECT MINI-RULES",
        rules,
        "",
        "VERSION 2 CHALLENGE",
        version2,
        "",
        "DRAW THIS FIRST",
        drawFirst,
        "",
        "STEP-BY-STEP PHASES",
        phases,
        "",
        "CHECKLIST",
        checks,
        "",
        "VERSION 2 CHALLENGE",
        remix,
        "",
        "REDRAW REFLECTION",
        document.getElementById("redrawReflection")?.value || "",
        "",
        "REFLECTION",
        "What improved?",
        "",
        "What would I redraw?",
        ""
      ].join("\\n");

      const blob = new Blob([worksheet], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const safeTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "mascot-spark";
      a.href = url;
      a.download = `${safeTitle}-worksheet.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      status("Worksheet exported locally as a text file.", "ok");
    }





    function updateTodayPractice(data) {
      const title = document.getElementById("todayPracticeTitle");
      const goal = document.getElementById("todayPracticeGoal");
      const subject = document.getElementById("todaySubject");
      const skill = document.getElementById("todaySkill");
      const next = document.getElementById("todayNext");

      if (!data) return;
      const skillLabel = skillFocusData?.[data.skillFocus]?.title || "Practice";
      if (title) title.textContent = `${data.subjectName || "Mascot"} · ${skillLabel}`;
      if (goal) goal.textContent = `Goal: ${data.goal || "Follow the guided step mode."}`;
      if (subject) subject.textContent = `Subject: ${data.subjectName || "—"}`;
      if (skill) skill.textContent = `Skill: ${skillLabel}`;
      if (next) next.textContent = `Next: ${data.phases?.[0]?.[0] || "Start Step 1"}`;
    }

    function inlineBlueprintExportStyles(clone) {
      const classRules = {
        guide: {
          stroke: "rgba(255,255,255,.58)",
          "stroke-width": "2",
          "stroke-dasharray": "7 8",
          fill: "none",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        shape: {
          stroke: "#ffffff",
          "stroke-width": "5",
          fill: "#ffffff",
          "fill-opacity": ".055",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        feature: {
          stroke: "#ffffff",
          "stroke-width": "5",
          fill: "none",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        solid: {
          fill: "#ffffff",
          stroke: "none"
        },
        label: {
          fill: "rgba(255,255,255,.88)",
          "font-size": "13",
          "font-weight": "850",
          "font-family": "Arial, sans-serif"
        },
        "shade-zone-label": {
          fill: "#DCEEFF",
          "font-size": "11",
          "font-weight": "850",
          "font-family": "Arial, sans-serif"
        }
      };

      clone.querySelectorAll("*").forEach(node => {
        const classes = Array.from(node.classList || []);
        classes.forEach(cls => {
          const rule = classRules[cls];
          if (!rule) return;
          Object.entries(rule).forEach(([attr, value]) => {
            if (!node.hasAttribute(attr)) node.setAttribute(attr, value);
          });
        });

        const tag = node.tagName ? node.tagName.toLowerCase() : "";
        const drawingTag = ["path", "line", "polyline"].includes(tag);
        if (drawingTag && !node.hasAttribute("fill") && !node.hasAttribute("stroke")) {
          node.setAttribute("fill", "none");
          node.setAttribute("stroke", "#ffffff");
          node.setAttribute("stroke-width", "4");
          node.setAttribute("stroke-linecap", "round");
          node.setAttribute("stroke-linejoin", "round");
        }
      });
    }

    function svgElementToString(svg, transparent = false) {
      if (!svg) return "";
      const clone = svg.cloneNode(true);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      clone.setAttribute("width", "1600");
      clone.setAttribute("height", "1600");
      clone.setAttribute("viewBox", clone.getAttribute("viewBox") || "0 0 520 560");

      inlineBlueprintExportStyles(clone);

      const viewBox = (clone.getAttribute("viewBox") || "0 0 520 560").split(/\s+/).map(Number);
      const x = Number.isFinite(viewBox[0]) ? viewBox[0] : 0;
      const y = Number.isFinite(viewBox[1]) ? viewBox[1] : 0;
      const w = Number.isFinite(viewBox[2]) ? viewBox[2] : 520;
      const h = Number.isFinite(viewBox[3]) ? viewBox[3] : 560;

      if (!transparent) {
        const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bg.setAttribute("x", String(x));
        bg.setAttribute("y", String(y));
        bg.setAttribute("width", String(w));
        bg.setAttribute("height", String(h));
        bg.setAttribute("fill", "#173b63");
        clone.insertBefore(bg, clone.firstChild);
      }

      return `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(clone)}`;
    }


    async function downloadCurrentBlueprintPng() {
      const svg = document.getElementById("blueprintSvg");
      if (!svg) {
        status("No blueprint found to export.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, "mascot-spark-blueprint.png");
    }

    function downloadBlueprintPng() {
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) {
        status("Open Blueprint Studio first.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, `mascot-spark-blueprint-${blueprintStudioStage || "final"}.png`);
    }

    function setModalOpen(id, open) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.toggle("open", open);
      modal.setAttribute("aria-hidden", open ? "false" : "true");
    }


    let beginnerFlowIndex = 0;
    let blueprintLabelsHidden = false;

    const beginnerFlowSteps = [
      { title: "Pick", body: "Generate or choose a mascot lesson. Do not edit every option first." },
      { title: "Blueprint", body: "Open the Trace Guide and study the largest shape before drawing." },
      { title: "Body", body: "Draw the outside silhouette only. No face yet." },
      { title: "Face", body: "Place the face low and keep the mouth tiny." },
      { title: "Twist", body: "Add one tiny twist using its placement guide." },
      { title: "Shade", body: "Use Shade Lab: one shadow, one shine, stop early." },
      { title: "Save", body: "Save to Stash, then redraw one focused Version 2." }
    ];

    function renderBeginnerFlow(data = currentLessonData) {
      const title = document.getElementById("flowTitle");
      const goal = document.getElementById("flowGoal");
      const steps = document.getElementById("flowSteps");
      const currentTitle = document.getElementById("flowCurrentTitle");
      const currentBody = document.getElementById("flowCurrentBody");

      if (title && data) title.textContent = `${data.subjectName || "Mascot"} Flow`;
      if (goal && data) goal.textContent = data.goal || "Follow one step at a time.";
      if (steps) {
        steps.innerHTML = beginnerFlowSteps.map((step, i) => `
          <button class="flow-step ${i === beginnerFlowIndex ? "active" : ""}" onclick="setFlowStep(${i})">
            <strong>${i + 1}. ${step.title}</strong>
            <span>${step.body}</span>
          </button>
        `).join("");
      }

      const active = beginnerFlowSteps[beginnerFlowIndex] || beginnerFlowSteps[0];
      if (currentTitle) currentTitle.textContent = active.title;
      if (currentBody) currentBody.textContent = active.body;
    }

    function setFlowStep(index) {
      beginnerFlowIndex = Math.max(0, Math.min(beginnerFlowSteps.length - 1, index));
      renderBeginnerFlow();
      if (beginnerFlowIndex === 1) showTab("tab-blueprint");
      if (beginnerFlowIndex === 5) showTab("tab-shade");
      status(`Flow step ${beginnerFlowIndex + 1}: ${beginnerFlowSteps[beginnerFlowIndex].title}`, "ok");
    }

    function nextFlowStep() {
      setFlowStep(beginnerFlowIndex + 1);
    }

    function previousFlowStep() {
      setFlowStep(beginnerFlowIndex - 1);
    }

    function startBeginnerFlow() {
      beginnerFlowIndex = 0;
      showTab("tab-flow");
      renderBeginnerFlow();
      status("Beginner Flow started.", "ok");
    }

    function renderVisualStepCards(data = currentLessonData) {
      const box = document.getElementById("visualStepCards");
      if (!box || !data) return;

      const stages = [
        ["body", "Body only", "Trace the largest readable silhouette first."],
        ["guide", "Construction guide", "Use the subject guide to understand the form."],
        ["face", "Face placement", "Place eyes low and keep expression simple."],
        ["limbs", "Limbs and twist", "Add tiny limbs and the twist placement guide."],
        ["final", "Clean mascot", "Finish with one clear outline and one main detail."]
      ];

      box.innerHTML = stages.map(([stage, title, copy]) => `
        <article class="visual-step-card">
          ${miniBlueprintSvg(data.type, data.emotion, data.twist, stage, data.twistSet)}
          <strong>${title}</strong>
          <p>${copy}</p>
        </article>
      `).join("");
    }

    function getLockedIds() {
      return {
        subject: document.getElementById("lockSubject")?.checked,
        emotion: document.getElementById("lockEmotion")?.checked,
        twist: document.getElementById("lockTwist")?.checked,
        palette: document.getElementById("lockPalette")?.checked,
        blueprint: document.getElementById("lockBlueprint")?.checked,
        skill: document.getElementById("lockSkill")?.checked
      };
    }

    function randomizeIfUnlocked(id, locked) {
      if (!locked) randomFromOptions(id);
    }

    function generateSimilar() {
      if (!currentLessonData) {
        newLesson(true);
        return;
      }

      const locked = getLockedIds();
      const keepSubjectPack = document.getElementById("subjectPack")?.value || "all";
      filterSubjectsByPack(keepSubjectPack);

      randomizeIfUnlocked("lessonType", locked.subject);
      randomizeIfUnlocked("emotion", locked.emotion);
      randomizeIfUnlocked("funTwist", locked.twist);
      if (!locked.twist) randomFromOptions("twistAmount");
      randomFromOptions("limbStyle");
      randomizeIfUnlocked("paletteMood", locked.palette);
      randomizeIfUnlocked("blueprintStyle", locked.blueprint);
      randomizeIfUnlocked("skillFocus", locked.skill);

      // Keep general learning shape stable.
      setSelect("creativeMode", document.getElementById("creativeMode")?.value || "cozy");
      setSelect("level", document.getElementById("level")?.value || "tiny");

      newLesson(true);
      status("Generated a similar lesson with unlocked details changed.", "ok");
    }

    function updateStashDashboard(items = getStash()) {
      const box = document.getElementById("stashDashboard");
      if (!box) return;
      const total = items.length;
      const drawn = items.filter(x => x.status === "drawn").length;
      const redrawn = items.filter(x => x.status === "redrawn").length;
      const favorites = items.filter(x => x.favorite).length;
      box.innerHTML = `
        <div class="stash-stat"><strong>${total}</strong><span>Saved</span></div>
        <div class="stash-stat"><strong>${drawn}</strong><span>Drawn</span></div>
        <div class="stash-stat"><strong>${redrawn}</strong><span>Redrawn</span></div>
        <div class="stash-stat"><strong>${favorites}</strong><span>Favorites</span></div>
        <div class="practice-suggestion-card">Practice suggestion<span>${getPracticeDashboardSuggestion(items)}</span></div>
      `;
    }

    function svgStringToPngBlob(svgString, width = 1600, height = 1600, transparent = false) {
      return new Promise((resolve, reject) => {
        const encoded = encodeURIComponent(svgString)
          .replace(/'/g, "%27")
          .replace(/"/g, "%22");
        const url = `data:image/svg+xml;charset=utf-8,${encoded}`;
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d", { alpha: true });

          ctx.clearRect(0, 0, width, height);

          if (!transparent) {
            ctx.fillStyle = "#173b63";
            ctx.fillRect(0, 0, width, height);
          }

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(blob => {
            if (blob) resolve(blob);
            else reject(new Error("Could not create PNG blob."));
          }, "image/png");
        };

        img.onerror = () => reject(new Error("Could not render SVG as PNG."));

        img.src = url;
      });
    }

    async function downloadSvgElementAsPng(svg, filename, transparent = false) {
      try {
        const svgString = svgElementToString(svg, transparent);
        const blob = await svgStringToPngBlob(svgString, 1600, 1600, transparent);
        downloadBlob(blob, filename);
        status(transparent ? "Transparent PNG exported." : "PNG exported.", "ok");
      } catch (error) {
        status(error.message || "PNG export failed.", "bad");
      }
    }

    function downloadCurrentBlueprintTransparentPng() {
      const svg = document.getElementById("blueprintSvg");
      if (!svg) {
        status("No blueprint found to export.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, "mascot-spark-blueprint-transparent.png", true);
    }

    function downloadBlueprintTransparentPng() {
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) {
        status("Open Blueprint Studio first.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, `mascot-spark-blueprint-${blueprintStudioStage || "final"}-transparent.png`, true);
    }

    function toggleBlueprintLabels() {
      blueprintLabelsHidden = !blueprintLabelsHidden;
      const svg = document.getElementById("blueprintStudioSvg");
      if (svg) svg.classList.toggle("hide-blueprint-labels", blueprintLabelsHidden);
      const main = document.getElementById("blueprintSvg");
      if (main) main.classList.toggle("hide-blueprint-labels", blueprintLabelsHidden);
      status(blueprintLabelsHidden ? "Blueprint labels hidden." : "Blueprint labels shown.", "ok");
    }


    function currentLessonForExport() {
      const data = currentLessonData || {};
      const ctx = typeof getCurrentCoachContext === "function" ? getCurrentCoachContext() : {};
      const shade = typeof getCurrentShadeContext === "function" ? getCurrentShadeContext() : {};
      return { data, ctx, shade };
    }

    function generateImagePrompt() {
      const { data, ctx, shade } = currentLessonForExport();
      const palette = ctx.palette || {};
      const paletteText = palette.colors && palette.colors.length
        ? `${palette.label}: ${palette.colors.join(", ")}`
        : (palette.label || "soft mascot palette");

      const prompt = [
        `A beginner-friendly mascot character concept of a ${data.subjectName || ctx.subject?.[0] || "cute mascot"}.`,
        `Emotion: ${data.emotionName || ctx.emotion?.[0] || "cute expressive"}.`,
        `Tiny twist/accessory: ${data.twistName || ctx.twistSetName || ctx.twist?.[0] || "one small charming detail"}.`,
        `Shape language: ${data.subjectBase || "simple rounded body"}, low face placement, readable silhouette, cute icon-friendly proportions.`,
        `Palette: ${paletteText}.`,
        `Shading: ${shade.shadeStyle || "soft plush shading"}, light from ${shade.lightDirection || "top left"}, simple shadow and one clean highlight.`,
        `Style: clean Procreate-friendly mascot design, rounded forms, soft sticker clarity, gentle texture, no complex background.`,
        `Beginner drawing reference only: clear construction, simple face, one main accessory, no clutter.`
      ].join(" ");

      const box = document.getElementById("imagePromptOutput");
      if (box) box.value = prompt;
      status("AI image prompt generated.", "ok");
      showTab("tab-review");
    }

    async function copyImagePrompt() {
      const box = document.getElementById("imagePromptOutput");
      if (!box || !box.value.trim()) generateImagePrompt();
      try {
        await navigator.clipboard.writeText(document.getElementById("imagePromptOutput").value);
        status("Image prompt copied.", "ok");
      } catch {
        status("Copy failed. Select the prompt text and copy manually.", "bad");
      }
    }

    function generateCritiquePrep() {
      const { data } = currentLessonForExport();
      const subject = data.subjectName || "subject";
      const emotion = data.emotionName || "emotion";
      const twist = data.twistName || "tiny twist";
      const skill = data.skillFocus ? (skillFocusData[data.skillFocus]?.title || data.skillFocus) : "current skill";

      const sections = [
        {
          heading: "First check",
          items: [
            `Can you still tell it is a ${subject}?`,
            "Does the silhouette read when zoomed out?",
            "Is the face slightly below center?",
            `Does the expression clearly show ${emotion}?`
          ]
        },
        {
          heading: "Twist check",
          items: [
            `Does the ${twist} support the mascot instead of covering the face?`,
            "Is the twist smaller than the main body?",
            "Would the mascot still work if the twist was removed?"
          ]
        },
        {
          heading: "Shading check",
          items: [
            "Is there one clear main shadow?",
            "Is there one clear highlight?",
            "Did you avoid shading every edge?",
            "Does the color still feel clean, not muddy?"
          ]
        },
        {
          heading: "Version 2 fix",
          items: [
            `Redraw only the part related to ${skill}.`,
            "Make one change, not five.",
            "Compare Version 1 and Version 2 before judging yourself."
          ]
        }
      ];

      const box = document.getElementById("critiquePrepOutput");
      if (box) {
        box.innerHTML = sections.map(section => `
          <section>
            <h4>${section.heading}</h4>
            <ul>${section.items.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
        `).join("");
      }
      showTab("tab-review");
      status("Critique checklist generated.", "ok");
    }

    function collectFullBackupData() {
      const keys = [
        "mascotSparkStash",
        "mascotSparkPracticeMemory",
        "mascotSparkRedrawTracker",
        "mascotSparkApiKey",
        "mascotSparkModel",
        "mascotSparkFocusMode",
        "mascotSparkViewMode",
        "mascotSparkTheme"
      ];

      const storage = {};
      keys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value !== null) storage[key] = value;
      });

      return {
        app: "Mascot Spark",
        version: APP_VERSION || "V30",
        exportedAt: new Date().toISOString(),
        storage
      };
    }

    function exportFullBackup() {
      const backup = collectFullBackupData();
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      downloadBlob(blob, `mascot-spark-full-backup-${backup.version || "v30"}.json`);
      const box = document.getElementById("backupStatus");
      if (box) box.textContent = "Full backup exported.";
      status("Full app backup exported.", "ok");
    }

    async function importFullBackup(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const backup = JSON.parse(text);
        if (!backup || backup.app !== "Mascot Spark" || !backup.storage) {
          throw new Error("This does not look like a Mascot Spark backup.");
        }

        Object.entries(backup.storage).forEach(([key, value]) => {
          if (typeof value === "string") localStorage.setItem(key, value);
        });

        const box = document.getElementById("backupStatus");
        if (box) box.textContent = `Imported backup from ${backup.exportedAt || "unknown date"}. Reloading...`;
        status("Backup imported. Reloading app.", "ok");
        setTimeout(() => location.reload(), 700);
      } catch (error) {
        const box = document.getElementById("backupStatus");
        if (box) box.textContent = error.message || "Import failed.";
        status(error.message || "Import failed.", "bad");
      } finally {
        event.target.value = "";
      }
    }


    const blueprintVariants = {
      simple: "Simple",
      cute: "Cute",
      icon: "Icon",
      plush: "Plush",
      dynamic: "Dynamic"
    };

    const blueprintLayerState = {
      body: true,
      face: true,
      emotion: true,
      twist: true
    };

    function getBlueprintVariant() {
      return document.getElementById("blueprintVariant")?.value || "simple";
    }

    function wrapBlueprintLayer(svg, layerName) {
      return `<g class="bp-${layerName}">${svg || ""}</g>`;
    }

    function applyBlueprintVariantOverlay(type, variant) {
      const label = blueprintVariants[variant] || "Simple";
      const overlays = {
        simple: '<rect class="guide bp-variant" x="138" y="112" width="244" height="312" rx="34"></rect>',
        cute: '<ellipse class="guide bp-variant" cx="260" cy="270" rx="142" ry="170"></ellipse><path class="guide bp-variant" d="M175 350 Q260 412 345 350"></path>',
        icon: '<rect class="guide bp-variant" x="132" y="132" width="256" height="256" rx="56"></rect><circle class="guide bp-variant" cx="260" cy="260" r="132"></circle>',
        plush: '<ellipse class="guide bp-variant" cx="260" cy="282" rx="136" ry="158"></ellipse><path class="guide bp-variant" d="M190 380 Q260 430 330 380"></path><path class="guide bp-variant" d="M165 240 Q140 285 165 330"></path><path class="guide bp-variant" d="M355 240 Q380 285 355 330"></path>',
        dynamic: '<path class="guide bp-variant" d="M166 360 C210 250 292 160 374 180"></path><line class="guide bp-variant" x1="168" y1="386" x2="378" y2="142"></line>'
      };
      return `${overlays[variant] || overlays.simple}<text class="label" x="35" y="462">Blueprint personality: ${label}</text>`;
    }

    function applyBlueprintLayerClasses() {
      const targets = [document.getElementById("blueprintSvg"), document.getElementById("blueprintStudioSvg")].filter(Boolean);
      targets.forEach(svg => {
        Object.entries(blueprintLayerState).forEach(([key, visible]) => {
          svg.classList.toggle(`blueprint-layer-hidden-${key}`, !visible);
        });
      });
    }

    function toggleBlueprintLayer(layer) {
      if (!(layer in blueprintLayerState)) return;
      blueprintLayerState[layer] = !blueprintLayerState[layer];
      applyBlueprintLayerClasses();
      status(`${layer} layer ${blueprintLayerState[layer] ? "shown" : "hidden"}.`, "ok");
    }

    function getPracticeDashboardSuggestion(items = getStash()) {
      if (!items.length) {
        return "Save a few lessons to unlock practice suggestions.";
      }
      const drawn = items.filter(x => x.status === "drawn" || x.status === "redrawn").length;
      const redrawn = items.filter(x => x.status === "redrawn").length;
      const favorites = items.filter(x => x.favorite).length;
      if (drawn === 0) return "Pick one saved lesson and mark it drawn. Do not wait for a perfect prompt.";
      if (redrawn === 0) return "Try one Version 2 redraw. Redrawing is where the learning starts.";
      if (favorites > drawn / 2) return "You are collecting strong prompts. Now convert one favorite into a finished drawing.";
      return "Good rhythm. Next: practice the least comfortable skill focus for one short session.";
    }

    function downloadShadeMapTransparentPng() {
      const svg = document.getElementById("shadeMapSvg");
      if (!svg) return;
      downloadSvgElementAsPng(svg, "mascot-spark-shading-map-transparent.png", true);
    }

    const subjectPacks = {
      all: "All subjects",
      snack: "Snack Pack",
      object: "Object Pack",
      magic: "Magic Pack",
      softMonster: "Soft Monster Pack",
      logo: "Logo Pack",
      shape: "Shape Pack",
      nature: "Nature Pack",
      tech: "Tech Pack",
      cozyHome: "Cozy Home Pack"
    };

    const subjectPackMap = {
      all: [],
      snack: ["food", "fruit", "vegetable", "dessert", "breakfast", "candy", "drink", "sauce"],
      object: ["object", "stationery", "household", "package", "device", "book", "tool", "artSupply"],
      magic: ["potion", "gem", "magicObject", "celestialObject", "star", "zodiac"],
      softMonster: ["ghost", "creature", "tinyMonster", "plushKeychain", "toy"],
      logo: ["icon", "sticker", "badge", "logoMark", "emoji", "abstractShape", "circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack"],
      shape: ["abstractShape", "circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack", "logoMark", "badge", "icon", "sticker"],
      nature: ["plant", "flower", "garden", "cloud", "weatherIcon", "bug", "shell", "aquatic"],
      tech: ["robot", "device", "icon", "logoMark"],
      cozyHome: ["household", "furniture", "book", "drink", "clothing", "accessory"]
    };

    const surpriseTypes = {
      softBeginner: "Soft Beginner",
      weirdCute: "Weird Cute",
      spookySweet: "Spooky-Sweet",
      iconReady: "Icon-Ready",
      paletteFirst: "Palette-First",
      blueprintFirst: "Blueprint-First",
      skillDrill: "Skill Drill",
      chaosButton: "Chaos Button"
    };

    const sessionTimers = {
      none: "No timer",
      five: "5 minute sketch",
      ten: "10 minute lesson",
      twenty: "20 minute session"
    };

    const timerPlans = {
      none: "No timer selected. Follow the guided steps at your own pace.",
      five: "5 min: 1m body, 1m face, 1m limbs/twist, 1m clean line, 1m color note.",
      ten: "10 min: 2m body, 2m face, 2m limbs/twist, 2m clean line, 2m color pass.",
      twenty: "20 min: 4m body tests, 4m face/expression, 4m limbs/twist, 4m clean line, 4m color/polish."
    };

    let timerRemaining = 0;
    let timerInitial = 0;
    let timerInterval = null;

    function filterSubjectsByPack(packKey) {
      const lessonSelect = document.getElementById("lessonType");
      if (!lessonSelect) return;

      const allowed = subjectPackMap[packKey] || [];
      const current = lessonSelect.value;

      lessonSelect.innerHTML = Object.entries(subjectData)
        .filter(([key]) => allowed.length === 0 || allowed.includes(key))
        .map(([value, label]) => `<option value="${value}">${label[0]}</option>`)
        .join("");

      if (current && Array.from(lessonSelect.options).some(o => o.value === current)) {
        lessonSelect.value = current;
      }
    }

    function randomFromOptions(id) {
      const el = document.getElementById(id);
      if (!el || !el.options.length) return null;
      const index = Math.floor(Math.random() * el.options.length);
      el.selectedIndex = index;
      return el.value;
    }

    function chooseSubjectFromPack(pack) {
      filterSubjectsByPack(pack);
      return randomFromOptions("lessonType");
    }

    function smartSurprise() {
      const surpriseType = document.getElementById("surpriseType")?.value || "softBeginner";
      const locked = getLockedIds();

      if (!locked.subject) {
        randomFromOptions("subjectPack");
        filterSubjectsByPack(document.getElementById("subjectPack")?.value || "all");
        randomFromOptions("lessonType");
      }

      randomizeIfUnlocked("emotion", locked.emotion);
      randomizeIfUnlocked("funTwist", locked.twist);
      if (!locked.twist) randomFromOptions("twistAmount");
      randomFromOptions("limbStyle");
      randomizeIfUnlocked("paletteMood", locked.palette);
      randomizeIfUnlocked("blueprintStyle", locked.blueprint);
      randomizeIfUnlocked("skillFocus", locked.skill);

      [
        "level",
        "creativeMode",
        "drawOrderMode",
        "ideaPreset",
        "aiStyle",
        "shadeStyle",
        "lightDirection",
        "shadeIntensity",
        "shadeOutputType"
      ].forEach(id => randomFromOptions(id));

      if (surpriseType === "softBeginner") {
        setSelect("creativeMode", "cozy");
        setSelect("level", "tiny");
        if (!locked.blueprint) setSelect("blueprintStyle", "autoSubject");
      }

      if (surpriseType === "spookySweet") {
        if (!locked.subject) chooseSubjectFromPack("softMonster");
        if (!locked.blueprint) setSelect("blueprintStyle", "autoSubject");
        setSelect("shadeStyle", "spookyGlow");
      }

      if (surpriseType === "iconReady") {
        if (!locked.subject) chooseSubjectFromPack("logo");
        if (!locked.skill) setSelect("skillFocus", "iconReadability");
        if (!locked.blueprint) setSelect("blueprintStyle", "iconGrid");
        setSelect("shadeStyle", "flatIcon");
      }

      if (surpriseType === "paletteFirst" && !locked.palette) {
        randomFromOptions("paletteMood");
        if (!locked.skill) setSelect("skillFocus", "paletteControl");
      }

      if (surpriseType === "blueprintFirst" && !locked.blueprint) {
        randomFromOptions("blueprintStyle");
      }

      if (surpriseType === "skillDrill") {
        if (!locked.skill) randomFromOptions("skillFocus");
        setSelect("level", "study");
      }

      if (surpriseType === "chaosButton") {
        setSelect("creativeMode", "remix");
        if (!locked.blueprint) randomFromOptions("blueprintStyle");
        if (!locked.palette) randomFromOptions("paletteMood");
      }

      // Final freshening, still respecting locks.
      randomizeIfUnlocked("emotion", locked.emotion);
      randomizeIfUnlocked("funTwist", locked.twist);
      if (!locked.twist) randomFromOptions("twistAmount");
      randomFromOptions("limbStyle");

      document.getElementById("customIdea").value = "";
      renderPalettePreview();
      setupTimerFromSelect?.();
      newLesson(true);
      status(`Surprise randomized with locks respected: ${surpriseTypes[surpriseType] || "Surprise"}.`, "ok");
    }

    function setSelect(id, value) {
      const el = document.getElementById(id);
      if (!el) return;
      if (Array.from(el.options).some(o => o.value === value)) el.value = value;
    }

    function makeItMore(mode) {
      if (mode === "cuter") {
        setSelect("emotion", "delightedShy");
        setSelect("funTwist", "blushStripe");
        setSelect("blueprintStyle", "faceMap");
      }
      if (mode === "spookier") {
        setSelect("emotion", "spooky");
        setSelect("funTwist", "ghostWisp");
        setSelect("blueprintStyle", "ghostDrape");
      }
      if (mode === "simpler") {
        setSelect("level", "micro");
        setSelect("creativeMode", "cozy");
        setSelect("skillFocus", "shapeControl");
        setSelect("blueprintStyle", "bodyFirst");
        setSelect("funTwist", "none");
      }
      if (mode === "icon") {
        setSelect("skillFocus", "iconReadability");
        setSelect("blueprintStyle", "iconGrid");
        setSelect("level", "iconSheet");
      }
      if (mode === "plush") {
        setSelect("blueprintStyle", "plushBody");
        setSelect("funTwist", "button");
        setSelect("skillFocus", "shapeControl");
      }
      if (mode === "chaos") {
        setSelect("creativeMode", "remix");
        setSelect("emotion", "chaoticSoft");
        setSelect("funTwist", "mismatchedButtons");
      }

      newLesson();
      status(`Adjusted: ${mode.replace(/([A-Z])/g, " $1").toLowerCase()}.`, "ok");
    }

    function updateTimerDisplay() {
      const box = document.getElementById("timerDisplay");
      if (!box) return;
      if (!timerInitial) {
        box.textContent = "--:--";
        return;
      }
      const min = Math.floor(timerRemaining / 60);
      const sec = timerRemaining % 60;
      box.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    }

    function setupTimerFromSelect() {
      const key = document.getElementById("sessionTimer")?.value || "none";
      const label = document.getElementById("timerLabel");
      const plan = document.getElementById("timerPlan");
      const seconds = key === "five" ? 300 : key === "ten" ? 600 : key === "twenty" ? 1200 : 0;
      timerInitial = seconds;
      timerRemaining = seconds;
      if (label) label.textContent = sessionTimers[key] || "No timer";
      if (plan) plan.textContent = timerPlans[key] || timerPlans.none;
      updateTimerDisplay();
    }

    function startSessionTimer() {
      if (!timerInitial) setupTimerFromSelect();
      if (!timerInitial) {
        status("Choose a timer first.", "bad");
        return;
      }
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timerRemaining = Math.max(0, timerRemaining - 1);
        updateTimerDisplay();
        if (timerRemaining <= 0) {
          clearInterval(timerInterval);
          status("Timer complete. Stop, review, or draw Version 2.", "ok");
        }
      }, 1000);
      status("Timer started.", "ok");
    }

    function pauseSessionTimer() {
      clearInterval(timerInterval);
      status("Timer paused.", "ok");
    }

    function resetSessionTimer() {
      clearInterval(timerInterval);
      setupTimerFromSelect();
      status("Timer reset.", "ok");
    }

    function markRedrawStage(stage) {
      const key = "mascotSparkRedrawTracker";
      const tracker = JSON.parse(localStorage.getItem(key) || "{}");
      tracker[stage] = new Date().toLocaleString();
      localStorage.setItem(key, JSON.stringify(tracker));
      status(stage === "v1" ? "Version 1 marked as drawn." : "Version 2 marked as drawn.", "ok");
    }

    function saveRedrawReflection() {
      const value = document.getElementById("redrawReflection")?.value.trim() || "";
      const tracker = JSON.parse(localStorage.getItem("mascotSparkRedrawTracker") || "{}");
      tracker.reflection = value;
      tracker.updated = new Date().toLocaleString();
      localStorage.setItem("mascotSparkRedrawTracker", JSON.stringify(tracker));
      status("Redraw reflection saved locally.", "ok");
    }

    function updatePracticeMemory() {
      const memory = JSON.parse(localStorage.getItem("mascotSparkPracticeMemory") || "[]");
      const subject = document.getElementById("lessonType")?.value || "";
      const skill = document.getElementById("skillFocus")?.value || "auto";
      const emotion = document.getElementById("emotion")?.value || "";
      memory.unshift({ subject, skill, emotion, date: Date.now() });
      const trimmed = memory.slice(0, 8);
      localStorage.setItem("mascotSparkPracticeMemory", JSON.stringify(trimmed));

      const box = document.getElementById("practiceMemoryCard");
      if (!box) return;

      const skillCounts = trimmed.reduce((acc, item) => {
        acc[item.skill] = (acc[item.skill] || 0) + 1;
        return acc;
      }, {});
      const topSkill = Object.entries(skillCounts).sort((a, b) => b[1] - a[1])[0];
      const suggestion = topSkill && topSkill[1] >= 2
        ? `You practiced ${skillFocuses[topSkill[0]] || topSkill[0]} a few times. Try a different skill focus next for balance.`
        : "Keep generating lessons. After a few, Mascot Spark will suggest what to practice next.";

      box.textContent = suggestion;
    }

    const APP_VERSION = "V53";
    const APP_CACHE_NAME = "mascot-spark-v53";

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[char]));
    }

    function getCurrentLessonSnapshot() {
      const c = typeof getCurrentCoachContext === "function" ? getCurrentCoachContext() : null;
      return {
        id: Date.now().toString(36),
        title: document.getElementById("title")?.textContent || "Mascot Lesson",
        meta: document.getElementById("meta")?.textContent || "",
        goal: document.getElementById("goal")?.textContent || "",
        subject: c?.subject?.[0] || "",
        emotion: c?.emotion?.[0] || "",
        twist: c?.twist?.[0] || "",
        palette: c?.palette?.label || "Auto",
        blueprint: c?.blueprint || "",
        lesson: c?.lesson?.[0] || "",
        skillFocus: document.getElementById("skillFocusCard")?.innerText || "",
        anatomy: document.getElementById("anatomyCard")?.innerText || "",
        rules: document.getElementById("subjectRulesCard")?.innerText || "",
        version2: document.getElementById("version2Card")?.innerText || "",
        date: new Date().toLocaleString(),
        status: "not-drawn",
        favorite: false,
        note: ""
      };
    }

    function getStash() {
      try {
        return JSON.parse(localStorage.getItem("mascotSparkStash") || "[]");
      } catch {
        return [];
      }
    }

    function setStash(items) {
      localStorage.setItem("mascotSparkStash", JSON.stringify(items));
      renderStash();
    }

    function saveCurrentLessonToStash() {
      const stash = getStash();
      const item = getCurrentLessonSnapshot();
      stash.unshift(item);
      setStash(stash);
      showTab("tab-stash");
      status("Lesson saved to Stash.", "ok");
    }

    function updateStashItem(id, changes) {
      const stash = getStash().map(item => item.id === id ? { ...item, ...changes } : item);
      setStash(stash);
    }

    function deleteStashItem(id) {
      const stash = getStash().filter(item => item.id !== id);
      setStash(stash);
    }

    function renderStash() {
      const grid = document.getElementById("stashGrid");
      if (!grid) return;

      const filter = document.getElementById("stashFilter")?.value || "all";
      const search = (document.getElementById("stashSearch")?.value || "").toLowerCase().trim();
      const sort = document.getElementById("stashSort")?.value || "newest";
      let stash = getStash();
      updateStashDashboard(stash);

      if (filter === "favorite") stash = stash.filter(item => item.favorite);
      else if (filter !== "all") stash = stash.filter(item => item.status === filter);

      if (search) {
        stash = stash.filter(item => [
          item.title,
          item.subject,
          item.emotion,
          item.twist,
          item.palette,
          item.blueprint,
          item.note
        ].join(" ").toLowerCase().includes(search));
      }

      if (sort === "oldest") stash = stash.slice().reverse();
      if (sort === "favorites") stash = stash.slice().sort((a, b) => Number(b.favorite) - Number(a.favorite));

      if (!stash.length) {
        grid.innerHTML = `<div class="compact-help">No saved lessons here yet. Generate a mascot lesson, then tap “Save current lesson.”</div>`;
        return;
      }

      grid.innerHTML = stash.map(item => `
        <article class="stash-card">
          <h4>${escapeHtml(item.title)}</h4>
          <div class="stash-meta">
            ${escapeHtml(item.subject)} · ${escapeHtml(item.emotion)} · ${escapeHtml(item.twist)}<br>
            ${escapeHtml(item.palette)} · ${escapeHtml(item.blueprint)}<br>
            ${escapeHtml(item.date)}
          </div>

          <select onchange="updateStashItem('${item.id}', { status: this.value })">
            <option value="not-drawn" ${item.status === "not-drawn" ? "selected" : ""}>Not drawn</option>
            <option value="drawn" ${item.status === "drawn" ? "selected" : ""}>Drawn</option>
            <option value="redrawn" ${item.status === "redrawn" ? "selected" : ""}>Redrawn</option>
          </select>

          <textarea class="stash-note" placeholder="Reflection note..." oninput="updateStashItem('${item.id}', { note: this.value })">${escapeHtml(item.note || "")}</textarea>

          <div class="stash-actions">
            <button onclick="updateStashItem('${item.id}', { favorite: ${!item.favorite} })">${item.favorite ? "Unfavorite" : "Favorite"}</button>
            <button onclick="downloadStashWorksheet('${item.id}')">Worksheet</button>
            <button onclick="deleteStashItem('${item.id}')">Delete</button>
          </div>
        </article>
      `).join("");
    }

    function clearStash() {
      if (!confirm("Clear all saved Mascot Stash lessons in this browser?")) return;
      setStash([]);
      status("Stash cleared.", "ok");
    }

    function exportStashJson() {
      const blob = new Blob([JSON.stringify(getStash(), null, 2)], { type: "application/json" });
      downloadBlob(blob, "mascot-spark-stash.json");
      status("Stash JSON exported.", "ok");
    }

    function downloadBlob(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    function worksheetHtmlFromItem(item, includeCurrentBlueprint = false) {
      const swatches = Array.from(document.querySelectorAll("#lessonPaletteSwatches .lesson-palette-swatch"))
        .map(s => `<span class="swatch" style="${s.getAttribute("style") || ""}"></span>`)
        .join("");
      const currentBlueprint = includeCurrentBlueprint ? document.getElementById("blueprintSvg")?.outerHTML || "" : "";

      return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${escapeHtml(item.title)} — Mascot Spark Worksheet</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; padding: 28px; line-height: 1.45; color: #2f2a30; background: #fff7fb; }
  h1 { margin: 0 0 6px; font-size: 34px; }
  .meta { color: #7D6D79; font-weight: 700; margin-bottom: 18px; }
  section { border: 1px solid #D7C4F4; background: #FDEEF5; border-radius: 18px; padding: 16px; margin: 14px 0; }
  h2 { margin: 0 0 8px; font-size: 15px; text-transform: uppercase; letter-spacing: .08em; color: #7D6D79; }
  .swatches { display: flex; gap: 8px; flex-wrap: wrap; }
  .swatch { width: 30px; height: 30px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,.15); }
  svg { width: 100%; max-height: 600px; background: #173b63; border-radius: 18px; }
  pre { white-space: pre-wrap; font-family: inherit; margin: 0; }
  .reflection { min-height: 120px; border: 1px dashed #BFAFD0; border-radius: 14px; background: white; }
</style>
</head>
<body>
<h1>${escapeHtml(item.title)}</h1>
<div class="meta">${escapeHtml(item.meta)}<br>${escapeHtml(item.date || "")}</div>
<section><h2>Goal</h2><p>${escapeHtml(item.goal)}</p></section>
<section><h2>Practice Intelligence</h2><pre>${escapeHtml(item.skillFocus || "")}</pre></section>
<section><h2>Mascot Anatomy</h2><pre>${escapeHtml(item.anatomy || "")}</pre></section>
<section><h2>Subject Rules</h2><pre>${escapeHtml(item.rules || "")}</pre></section>
<section><h2>Version 2 Challenge</h2><pre>${escapeHtml(item.version2 || "")}</pre></section>
<section><h2>Palette</h2><p>${escapeHtml(item.palette)}</p><div class="swatches">${swatches}</div></section>
${currentBlueprint ? `<section><h2>Blueprint</h2>${currentBlueprint}</section>` : ""}
<section><h2>Reflection</h2><div class="reflection"></div></section>
</body>
</html>`;
    }

    function exportHtmlWorksheet() {
      const item = getCurrentLessonSnapshot();
      const htmlDoc = worksheetHtmlFromItem(item, true);
      const safe = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "mascot-spark";
      downloadBlob(new Blob([htmlDoc], { type: "text/html;charset=utf-8" }), `${safe}-worksheet.html`);
      status("HTML worksheet exported locally.", "ok");
    }

    function downloadStashWorksheet(id) {
      const item = getStash().find(x => x.id === id);
      if (!item) return;
      const htmlDoc = worksheetHtmlFromItem(item, false);
      const safe = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "mascot-spark";
      downloadBlob(new Blob([htmlDoc], { type: "text/html;charset=utf-8" }), `${safe}-worksheet.html`);
    }

    let blueprintStudioStage = "final";

    function openBlueprintStudio() {
      setModalOpen("blueprintStudio", true);
      setBlueprintStudioStage(blueprintStudioStage || "final");
    }

    function closeBlueprintStudio() {
      setModalOpen("blueprintStudio", false);
    }

    function extractSvgInner(svgString) {
      const start = svgString.indexOf(">");
      const end = svgString.lastIndexOf("</svg>");
      if (start === -1 || end === -1) return "";
      return svgString.slice(start + 1, end);
    }

    function setBlueprintStudioStage(stage) {
      blueprintStudioStage = stage;
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) return;
      const type = document.getElementById("lessonType")?.value || "blob";
      const emotion = document.getElementById("emotion")?.value || "happy";
      const twist = document.getElementById("funTwist")?.value || "none";
      if (stage === "final") {
        svg.innerHTML = makeBlueprint(type, emotion, twist, document.getElementById("blueprintStyle")?.value || "autoSubject");
      } else if (stage === "shade") {
        renderShadeMap();
        svg.innerHTML = document.getElementById("shadeMapSvg")?.innerHTML || "";
      } else {
        svg.innerHTML = extractSvgInner(miniBlueprintSvg(type, emotion, twist, stage));
      }
      svg.classList.toggle("hide-blueprint-labels", blueprintLabelsHidden);
      applyBlueprintLayerClasses();
    }

    function downloadBlueprintSvg() {
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) return;
      const doc = svgElementToString(svg, false);
      downloadBlob(new Blob([doc], { type: "image/svg+xml;charset=utf-8" }), "mascot-spark-blueprint.svg");
      status("Blueprint SVG exported.", "ok");
    }

    function showVersionTools() {
      setModalOpen("versionTools", true);
    }

    function closeVersionTools() {
      setModalOpen("versionTools", false);
    }

    function clearLocalAppData() {
      if (!confirm("Reset all local Mascot Spark data in this browser? Export your stash first if needed.")) return;
      localStorage.clear();
      status("Local data cleared. Reloading...", "ok");
      setTimeout(() => location.reload(), 500);
    }

    async function clearServiceWorkerCaches() {
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(key => caches.delete(key)));
      }
      status("Browser cache storage cleared for this app. Reloading...", "ok");
      setTimeout(() => location.reload(), 500);
    }


    function emotionSvgFace(config) {
      const label = config.label || "emotion";
      const fill = config.fill || "#FFD7E8";
      const eye = config.eye || "dot";
      const mouth = config.mouth || "smile";
      const accent = config.accent || "sparkle";
      const ghost = ["spooky-sweet", "hauntedHappy"].includes(config.key);
      const safeLabel = String(label).toLowerCase();
      const base = ghost
        ? `<path d="M12 35c0-15 9-25 20-25s20 10 20 25v16c0 2-2.3 3.2-4 2l-4-3-4 3-4-3-4 3-4-3-4 3-4-3-4 3c-1.7 1.2-4-.1-4-2z" fill="${fill}"/>`
        : `<circle cx="32" cy="32" r="26" fill="${fill}"/>`;
      const eyes = {
        happy:`<path d="M19 29c2.5-4 7.5-4 10 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/><path d="M35 29c2.5-4 7.5-4 10 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/>`,
        sleepy:`<path d="M20 31c3 2 6 2 9 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/><path d="M36 31c3 2 6 2 9 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        dot:`<circle cx="24" cy="32" r="3.4" fill="#33243A"/><circle cx="40" cy="32" r="3.4" fill="#33243A"/>`,
        wide:`<circle cx="24" cy="31" r="4.8" fill="#33243A"/><circle cx="40" cy="31" r="4.8" fill="#33243A"/><circle cx="25.5" cy="29.5" r="1.2" fill="#fff"/><circle cx="41.5" cy="29.5" r="1.2" fill="#fff"/>`,
        wink:`<circle cx="24" cy="32" r="3.4" fill="#33243A"/><path d="M37 32c2.5-1.8 5.4-1.8 8 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        star:`<path d="M19 29l4-6 4 6" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 29l4-6 4 6" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
        half:`<path d="M20 33h9" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/><path d="M36 33h9" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/>`,
        xeye:`<circle cx="24" cy="32" r="4" fill="#33243A"/><path d="M37 28l8 8M45 28l-8 8" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        animal:`<circle cx="24" cy="35" r="3.2" fill="#5A3025"/><circle cx="40" cy="35" r="3.2" fill="#5A3025"/><path d="M31 38l1.5 2 1.5-2z" fill="#5A3025"/>`
      }[eye] || `<circle cx="24" cy="32" r="3.4" fill="#33243A"/><circle cx="40" cy="32" r="3.4" fill="#33243A"/>`;
      const mouths = {
        smile:`<path d="M24 41c5 6 12 6 17 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/>`,
        tiny:`<path d="M29 42c2 1.5 5 1.5 7 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        frown:`<path d="M27 44c3-3 7-3 10 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        line:`<path d="M27 43h10" stroke="#33243A" stroke-width="3.2" stroke-linecap="round"/>`,
        o:`<circle cx="32" cy="43" r="4.5" fill="none" stroke="#33243A" stroke-width="3"/>`,
        smirk:`<path d="M27 43c5 3 10 2 14-2" fill="none" stroke="#33243A" stroke-width="3.3" stroke-linecap="round"/>`,
        tongue:`<path d="M24 43c5 5 12 5 17 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/><path d="M35 44c0 6 5 8 8 4" fill="#FF7CA8" stroke="#33243A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`
      }[mouth] || `<path d="M29 42c2 1.5 5 1.5 7 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`;
      const accents = {
        sparkle:`<path d="M48 15l2 4 4 .6-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4-.6z" fill="#FFF6A8"/>`,
        sweat:`<path d="M48 24c4 4 3 9-1 12-4-3-5-8 1-12z" fill="#68B7FF"/>`,
        crown:`<path d="M21 19l4-7 7 6 7-6 4 7z" fill="#FFE16A" stroke="#B78522" stroke-width="2" stroke-linejoin="round"/>`,
        question:`<path d="M50 13c3 0 5 2 5 5 0 3-3 4-5 6" fill="none" stroke="#6C63FF" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="28" r="1.7" fill="#6C63FF"/>`,
        z:`<path d="M47 13h8l-8 8h8" fill="none" stroke="#6B7FC7" stroke-width="3" stroke-linejoin="round"/>`,
        tear:`<path d="M45 34c4 5 2 10-2 12-4-2-5-7 2-12z" fill="#7DB9FF" opacity=".9"/>`,
        cloud:`<path d="M14 20c3-5 10-7 15-3 2-4 8-4 11 0 5-2 9 1 10 6H14z" fill="#F6F1FF" opacity=".9"/>`,
        bandage:`<path d="M17 20h15v7H17z" fill="#FFF4F7" stroke="#C76984" stroke-width="2" stroke-linejoin="round"/><path d="M24.5 21v5M22 23.5h5" stroke="#C76984" stroke-width="2" stroke-linecap="round"/>`,
        ears:`<path d="M16 19l8-8 5 11z" fill="${fill}" stroke="#5A3025" stroke-width="2.5" stroke-linejoin="round"/><path d="M48 19l-8-8-5 11z" fill="${fill}" stroke="#5A3025" stroke-width="2.5" stroke-linejoin="round"/>`,
        glow:`<circle cx="32" cy="12" r="2.2" fill="#FFF7B8"/><circle cx="17" cy="19" r="1.8" fill="#FFF7B8"/><circle cx="48" cy="20" r="1.8" fill="#FFF7B8"/><circle cx="14" cy="34" r="1.6" fill="#FFF7B8"/><circle cx="50" cy="35" r="1.6" fill="#FFF7B8"/>`,
        anger:`<path d="M14 19l3-5 2 5 5 2-5 2-2 5-3-5-5-2z" fill="#FF6B6B"/>`
      }[accent] || "";
      const blush = `<ellipse cx="18" cy="39" rx="5" ry="3.2" fill="#FF8FB8" opacity=".55"/><ellipse cx="46" cy="39" rx="5" ry="3.2" fill="#FF8FB8" opacity=".55"/>`;
      return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${safeLabel} emotion">${accent === "ears" ? accents : ""}${base}${eyes}${mouth}${blush}${accent !== "ears" ? accents : ""}</svg>`;
    }

    const emotionSeedData = [{"key": "happy", "label": "Happy", "family": "simple/core", "fill": "#FFE680", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Happy eye design: dot", "browStyle": "Happy brow logic: soft or minimal", "mouthStyle": "Happy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Happy accent: sparkle", "posture": "Happy posture: centered/expressive", "vibe": "Happy — simple/core emotional atmosphere", "differenceRule": "Happy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Happy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Happy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sleepy", "label": "Sleepy", "family": "simple/core", "fill": "#C7D8FF", "eye": "sleepy", "mouth": "smile", "accent": "z", "faceHeight": "low", "eyeStyle": "Sleepy eye design: sleepy", "browStyle": "Sleepy brow logic: soft or minimal", "mouthStyle": "Sleepy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Sleepy accent: z", "posture": "Sleepy posture: tucked/low", "vibe": "Sleepy — simple/core emotional atmosphere", "differenceRule": "Sleepy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sleepy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sleepy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "excited", "label": "Excited", "family": "simple/core", "fill": "#FFE066", "eye": "star", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Excited eye design: star", "browStyle": "Excited brow logic: arched/lifted", "mouthStyle": "Excited mouth design: smile", "blushStyle": "small soft blush", "accentText": "Excited accent: sparkle", "posture": "Excited posture: lifted/bouncy", "vibe": "Excited — simple/core emotional atmosphere", "differenceRule": "Excited has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Excited by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Excited: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "curious", "label": "Curious", "family": "simple/core", "fill": "#BFE8FF", "eye": "wide", "mouth": "smile", "accent": "question", "faceHeight": "middle", "eyeStyle": "Curious eye design: wide", "browStyle": "Curious brow logic: arched/lifted", "mouthStyle": "Curious mouth design: smile", "blushStyle": "small soft blush", "accentText": "Curious accent: question", "posture": "Curious posture: centered/expressive", "vibe": "Curious — simple/core emotional atmosphere", "differenceRule": "Curious has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Curious by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Curious: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "surprised", "label": "Surprised", "family": "simple/core", "fill": "#FFD6A5", "eye": "wide", "mouth": "o", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Surprised eye design: wide", "browStyle": "Surprised brow logic: arched/lifted", "mouthStyle": "Surprised mouth design: o", "blushStyle": "small soft blush", "accentText": "Surprised accent: sparkle", "posture": "Surprised posture: centered/expressive", "vibe": "Surprised — simple/core emotional atmosphere", "differenceRule": "Surprised has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Surprised by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Surprised: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "embarrassed", "label": "Embarrassed", "family": "simple/core", "fill": "#FFC6C7", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Embarrassed eye design: dot", "browStyle": "Embarrassed brow logic: soft or minimal", "mouthStyle": "Embarrassed mouth design: smile", "blushStyle": "wide blush", "accentText": "Embarrassed accent: sparkle", "posture": "Embarrassed posture: centered/expressive", "vibe": "Embarrassed — simple/core emotional atmosphere", "differenceRule": "Embarrassed has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Embarrassed by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Embarrassed: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "determined", "label": "Determined", "family": "simple/core", "fill": "#FFCF8A", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Determined eye design: dot", "browStyle": "Determined brow logic: soft or minimal", "mouthStyle": "Determined mouth design: smile", "blushStyle": "small soft blush", "accentText": "Determined accent: sparkle", "posture": "Determined posture: centered/expressive", "vibe": "Determined — simple/core emotional atmosphere", "differenceRule": "Determined has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Determined by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Determined: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "cozy", "label": "Cozy", "family": "simple/core", "fill": "#FFD8A8", "eye": "sleepy", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Cozy eye design: sleepy", "browStyle": "Cozy brow logic: soft or minimal", "mouthStyle": "Cozy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Cozy accent: sparkle", "posture": "Cozy posture: centered/expressive", "vibe": "Cozy — simple/core emotional atmosphere", "differenceRule": "Cozy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Cozy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Cozy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "silly", "label": "Silly", "family": "simple/core", "fill": "#BFF7D2", "eye": "wink", "mouth": "tongue", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Silly eye design: wink", "browStyle": "Silly brow logic: soft or minimal", "mouthStyle": "Silly mouth design: tongue", "blushStyle": "small soft blush", "accentText": "Silly accent: sparkle", "posture": "Silly posture: centered/expressive", "vibe": "Silly — simple/core emotional atmosphere", "differenceRule": "Silly has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Silly by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Silly: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "shy", "label": "Shy", "family": "cute mixed", "fill": "#FFD7E8", "eye": "wink", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Shy eye design: wink", "browStyle": "Shy brow logic: soft or minimal", "mouthStyle": "Shy mouth design: smile", "blushStyle": "wide blush", "accentText": "Shy accent: sparkle", "posture": "Shy posture: tucked/low", "vibe": "Shy — cute mixed emotional atmosphere", "differenceRule": "Shy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Shy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Shy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "grumpy-cute", "label": "Grumpy Cute", "family": "cute mixed", "fill": "#FFC2A6", "eye": "dot", "mouth": "frown", "accent": "anger", "faceHeight": "middle", "eyeStyle": "Grumpy Cute eye design: dot", "browStyle": "Grumpy Cute brow logic: soft or minimal", "mouthStyle": "Grumpy Cute mouth design: frown", "blushStyle": "small soft blush", "accentText": "Grumpy Cute accent: anger", "posture": "Grumpy Cute posture: centered/expressive", "vibe": "Grumpy Cute — cute mixed emotional atmosphere", "differenceRule": "Grumpy Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Grumpy Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Grumpy Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "nervous-cute", "label": "Nervous Cute", "family": "cute mixed", "fill": "#CFF7EF", "eye": "wide", "mouth": "smile", "accent": "sweat", "faceHeight": "middle", "eyeStyle": "Nervous Cute eye design: wide", "browStyle": "Nervous Cute brow logic: arched/lifted", "mouthStyle": "Nervous Cute mouth design: smile", "blushStyle": "small soft blush", "accentText": "Nervous Cute accent: sweat", "posture": "Nervous Cute posture: centered/expressive", "vibe": "Nervous Cute — cute mixed emotional atmosphere", "differenceRule": "Nervous Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Nervous Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Nervous Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "proud-tiny", "label": "Proud Tiny", "family": "cute mixed", "fill": "#FFD1A8", "eye": "dot", "mouth": "smile", "accent": "crown", "faceHeight": "low", "eyeStyle": "Proud Tiny eye design: dot", "browStyle": "Proud Tiny brow logic: soft or minimal", "mouthStyle": "Proud Tiny mouth design: smile", "blushStyle": "small soft blush", "accentText": "Proud Tiny accent: crown", "posture": "Proud Tiny posture: centered/expressive", "vibe": "Proud Tiny — cute mixed emotional atmosphere", "differenceRule": "Proud Tiny has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Proud Tiny by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Proud Tiny: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "confused-cute", "label": "Confused Cute", "family": "cute mixed", "fill": "#FFE3A8", "eye": "dot", "mouth": "smile", "accent": "question", "faceHeight": "middle", "eyeStyle": "Confused Cute eye design: dot", "browStyle": "Confused Cute brow logic: soft or minimal", "mouthStyle": "Confused Cute mouth design: smile", "blushStyle": "small soft blush", "accentText": "Confused Cute accent: question", "posture": "Confused Cute posture: centered/expressive", "vibe": "Confused Cute — cute mixed emotional atmosphere", "differenceRule": "Confused Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Confused Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Confused Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "tiny-angry", "label": "Tiny Angry", "family": "cute mixed", "fill": "#FFB5A8", "eye": "dot", "mouth": "frown", "accent": "anger", "faceHeight": "low", "eyeStyle": "Tiny Angry eye design: dot", "browStyle": "Tiny Angry brow logic: soft or minimal", "mouthStyle": "Tiny Angry mouth design: frown", "blushStyle": "small soft blush", "accentText": "Tiny Angry accent: anger", "posture": "Tiny Angry posture: centered/expressive", "vibe": "Tiny Angry — cute mixed emotional atmosphere", "differenceRule": "Tiny Angry has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Tiny Angry by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Tiny Angry: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "smugCute", "label": "Smug Cute", "family": "cute mixed", "fill": "#F7C8FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Smug Cute eye design: half", "browStyle": "Smug Cute brow logic: soft or minimal", "mouthStyle": "Smug Cute mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Smug Cute accent: sparkle", "posture": "Smug Cute posture: centered/expressive", "vibe": "Smug Cute — cute mixed emotional atmosphere", "differenceRule": "Smug Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Smug Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Smug Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "bashfulProud", "label": "Bashful Proud", "family": "cute mixed", "fill": "#FFD0B8", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Bashful Proud eye design: dot", "browStyle": "Bashful Proud brow logic: soft or minimal", "mouthStyle": "Bashful Proud mouth design: smile", "blushStyle": "wide blush", "accentText": "Bashful Proud accent: sparkle", "posture": "Bashful Proud posture: centered/expressive", "vibe": "Bashful Proud — cute mixed emotional atmosphere", "differenceRule": "Bashful Proud has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Bashful Proud by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Bashful Proud: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "gigglyNervous", "label": "Giggly Nervous", "family": "cute mixed", "fill": "#FFE0B8", "eye": "wide", "mouth": "smile", "accent": "sweat", "faceHeight": "middle", "eyeStyle": "Giggly Nervous eye design: wide", "browStyle": "Giggly Nervous brow logic: arched/lifted", "mouthStyle": "Giggly Nervous mouth design: smile", "blushStyle": "small soft blush", "accentText": "Giggly Nervous accent: sweat", "posture": "Giggly Nervous posture: centered/expressive", "vibe": "Giggly Nervous — cute mixed emotional atmosphere", "differenceRule": "Giggly Nervous has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Giggly Nervous by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Giggly Nervous: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "dreamy-sad", "label": "Dreamy Sad", "family": "soft/sad/tender", "fill": "#C9C4FF", "eye": "sleepy", "mouth": "frown", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Dreamy Sad eye design: sleepy", "browStyle": "Dreamy Sad brow logic: soft or minimal", "mouthStyle": "Dreamy Sad mouth design: frown", "blushStyle": "small soft blush", "accentText": "Dreamy Sad accent: tear", "posture": "Dreamy Sad posture: centered/expressive", "vibe": "Dreamy Sad — soft/sad/tender emotional atmosphere", "differenceRule": "Dreamy Sad has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Dreamy Sad by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Dreamy Sad: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sad-hopeful", "label": "Sad Hopeful", "family": "soft/sad/tender", "fill": "#BCD1FF", "eye": "dot", "mouth": "frown", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Sad Hopeful eye design: dot", "browStyle": "Sad Hopeful brow logic: soft or minimal", "mouthStyle": "Sad Hopeful mouth design: frown", "blushStyle": "small soft blush", "accentText": "Sad Hopeful accent: tear", "posture": "Sad Hopeful posture: centered/expressive", "vibe": "Sad Hopeful — soft/sad/tender emotional atmosphere", "differenceRule": "Sad Hopeful has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sad Hopeful by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sad Hopeful: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "gloomySweet", "label": "Gloomy Sweet", "family": "soft/sad/tender", "fill": "#CBBFE8", "eye": "sleepy", "mouth": "frown", "accent": "cloud", "faceHeight": "middle", "eyeStyle": "Gloomy Sweet eye design: sleepy", "browStyle": "Gloomy Sweet brow logic: soft or minimal", "mouthStyle": "Gloomy Sweet mouth design: frown", "blushStyle": "small soft blush", "accentText": "Gloomy Sweet accent: cloud", "posture": "Gloomy Sweet posture: centered/expressive", "vibe": "Gloomy Sweet — soft/sad/tender emotional atmosphere", "differenceRule": "Gloomy Sweet has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Gloomy Sweet by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Gloomy Sweet: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "worriedHopeful", "label": "Worried Hopeful", "family": "soft/sad/tender", "fill": "#C9E3FF", "eye": "wide", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Worried Hopeful eye design: wide", "browStyle": "Worried Hopeful brow logic: arched/lifted", "mouthStyle": "Worried Hopeful mouth design: smile", "blushStyle": "small soft blush", "accentText": "Worried Hopeful accent: sparkle", "posture": "Worried Hopeful posture: centered/expressive", "vibe": "Worried Hopeful — soft/sad/tender emotional atmosphere", "differenceRule": "Worried Hopeful has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Worried Hopeful by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Worried Hopeful: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "lonelyBrave", "label": "Lonely Brave", "family": "soft/sad/tender", "fill": "#AFC9E8", "eye": "dot", "mouth": "smile", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Lonely Brave eye design: dot", "browStyle": "Lonely Brave brow logic: soft or minimal", "mouthStyle": "Lonely Brave mouth design: smile", "blushStyle": "small soft blush", "accentText": "Lonely Brave accent: tear", "posture": "Lonely Brave posture: centered/expressive", "vibe": "Lonely Brave — soft/sad/tender emotional atmosphere", "differenceRule": "Lonely Brave has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Lonely Brave by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Lonely Brave: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "rainyHopeful", "label": "Rainy Hopeful", "family": "soft/sad/tender", "fill": "#BFD8FF", "eye": "dot", "mouth": "smile", "accent": "cloud", "faceHeight": "middle", "eyeStyle": "Rainy Hopeful eye design: dot", "browStyle": "Rainy Hopeful brow logic: soft or minimal", "mouthStyle": "Rainy Hopeful mouth design: smile", "blushStyle": "small soft blush", "accentText": "Rainy Hopeful accent: cloud", "posture": "Rainy Hopeful posture: centered/expressive", "vibe": "Rainy Hopeful — soft/sad/tender emotional atmosphere", "differenceRule": "Rainy Hopeful has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Rainy Hopeful by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Rainy Hopeful: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "dramatic-soft", "label": "Dramatic Soft", "family": "soft/sad/tender", "fill": "#E8C8F7", "eye": "dot", "mouth": "frown", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Dramatic Soft eye design: dot", "browStyle": "Dramatic Soft brow logic: soft or minimal", "mouthStyle": "Dramatic Soft mouth design: frown", "blushStyle": "small soft blush", "accentText": "Dramatic Soft accent: sparkle", "posture": "Dramatic Soft posture: centered/expressive", "vibe": "Dramatic Soft — soft/sad/tender emotional atmosphere", "differenceRule": "Dramatic Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Dramatic Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Dramatic Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "dramaticSleepy", "label": "Dramatic Sleepy", "family": "soft/sad/tender", "fill": "#CFC4F7", "eye": "sleepy", "mouth": "frown", "accent": "z", "faceHeight": "low", "eyeStyle": "Dramatic Sleepy eye design: sleepy", "browStyle": "Dramatic Sleepy brow logic: soft or minimal", "mouthStyle": "Dramatic Sleepy mouth design: frown", "blushStyle": "small soft blush", "accentText": "Dramatic Sleepy accent: z", "posture": "Dramatic Sleepy posture: tucked/low", "vibe": "Dramatic Sleepy — soft/sad/tender emotional atmosphere", "differenceRule": "Dramatic Sleepy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Dramatic Sleepy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Dramatic Sleepy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "spooky-sweet", "label": "Spooky Sweet", "family": "spooky/eerie/cursed", "fill": "#F2ECFF", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Spooky Sweet eye design: dot", "browStyle": "Spooky Sweet brow logic: soft or minimal", "mouthStyle": "Spooky Sweet mouth design: smile", "blushStyle": "small soft blush", "accentText": "Spooky Sweet accent: sparkle", "posture": "Spooky Sweet posture: centered/expressive", "vibe": "Spooky Sweet — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Spooky Sweet has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Spooky Sweet by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Spooky Sweet: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "hauntedHappy", "label": "Haunted Happy", "family": "spooky/eerie/cursed", "fill": "#EDE8FF", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Haunted Happy eye design: dot", "browStyle": "Haunted Happy brow logic: soft or minimal", "mouthStyle": "Haunted Happy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Haunted Happy accent: sparkle", "posture": "Haunted Happy posture: centered/expressive", "vibe": "Haunted Happy — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Haunted Happy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Haunted Happy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Haunted Happy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "eerieCalm", "label": "Eerie Calm", "family": "spooky/eerie/cursed", "fill": "#CFEDE4", "eye": "sleepy", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Eerie Calm eye design: sleepy", "browStyle": "Eerie Calm brow logic: soft or minimal", "mouthStyle": "Eerie Calm mouth design: smile", "blushStyle": "small soft blush", "accentText": "Eerie Calm accent: sparkle", "posture": "Eerie Calm posture: centered/expressive", "vibe": "Eerie Calm — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Eerie Calm has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Eerie Calm by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Eerie Calm: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "cursedAdorable", "label": "Cursed Adorable", "family": "spooky/eerie/cursed", "fill": "#D8C0FF", "eye": "xeye", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Cursed Adorable eye design: xeye", "browStyle": "Cursed Adorable brow logic: soft or minimal", "mouthStyle": "Cursed Adorable mouth design: smile", "blushStyle": "small soft blush", "accentText": "Cursed Adorable accent: sparkle", "posture": "Cursed Adorable posture: centered/expressive", "vibe": "Cursed Adorable — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Cursed Adorable has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Cursed Adorable by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Cursed Adorable: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sicklyCute", "label": "Sickly Cute", "family": "spooky/eerie/cursed", "fill": "#CDEFC7", "eye": "dot", "mouth": "frown", "accent": "sweat", "faceHeight": "low", "eyeStyle": "Sickly Cute eye design: dot", "browStyle": "Sickly Cute brow logic: soft or minimal", "mouthStyle": "Sickly Cute mouth design: frown", "blushStyle": "small soft blush", "accentText": "Sickly Cute accent: sweat", "posture": "Sickly Cute posture: tucked/low", "vibe": "Sickly Cute — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Sickly Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sickly Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sickly Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "softVillain", "label": "Soft Villain", "family": "spooky/eerie/cursed", "fill": "#D7B8FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Soft Villain eye design: half", "browStyle": "Soft Villain brow logic: soft or minimal", "mouthStyle": "Soft Villain mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Soft Villain accent: sparkle", "posture": "Soft Villain posture: centered/expressive", "vibe": "Soft Villain — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Soft Villain has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Soft Villain by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Soft Villain: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sassy-soft", "label": "Sassy Soft", "family": "chaotic/oddball", "fill": "#E7C7FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Sassy Soft eye design: half", "browStyle": "Sassy Soft brow logic: soft or minimal", "mouthStyle": "Sassy Soft mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Sassy Soft accent: sparkle", "posture": "Sassy Soft posture: centered/expressive", "vibe": "Sassy Soft — chaotic/oddball emotional atmosphere", "differenceRule": "Sassy Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sassy Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sassy Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "mischievous-sweet", "label": "Mischievous Sweet", "family": "chaotic/oddball", "fill": "#FFD5E8", "eye": "wink", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Mischievous Sweet eye design: wink", "browStyle": "Mischievous Sweet brow logic: soft or minimal", "mouthStyle": "Mischievous Sweet mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Mischievous Sweet accent: sparkle", "posture": "Mischievous Sweet posture: centered/expressive", "vibe": "Mischievous Sweet — chaotic/oddball emotional atmosphere", "differenceRule": "Mischievous Sweet has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Mischievous Sweet by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Mischievous Sweet: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "chaoticSoft", "label": "Chaotic Soft", "family": "chaotic/oddball", "fill": "#FFD6F3", "eye": "wink", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Chaotic Soft eye design: wink", "browStyle": "Chaotic Soft brow logic: soft or minimal", "mouthStyle": "Chaotic Soft mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Chaotic Soft accent: sparkle", "posture": "Chaotic Soft posture: centered/expressive", "vibe": "Chaotic Soft — chaotic/oddball emotional atmosphere", "differenceRule": "Chaotic Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Chaotic Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Chaotic Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "bashfulChaotic", "label": "Bashful Chaotic", "family": "chaotic/oddball", "fill": "#FFC7F2", "eye": "dot", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Bashful Chaotic eye design: dot", "browStyle": "Bashful Chaotic brow logic: soft or minimal", "mouthStyle": "Bashful Chaotic mouth design: smirk", "blushStyle": "wide blush", "accentText": "Bashful Chaotic accent: sparkle", "posture": "Bashful Chaotic posture: centered/expressive", "vibe": "Bashful Chaotic — chaotic/oddball emotional atmosphere", "differenceRule": "Bashful Chaotic has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Bashful Chaotic by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Bashful Chaotic: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "overexcitedSoft", "label": "Overexcited Soft", "family": "chaotic/oddball", "fill": "#FFD1F0", "eye": "star", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Overexcited Soft eye design: star", "browStyle": "Overexcited Soft brow logic: arched/lifted", "mouthStyle": "Overexcited Soft mouth design: smile", "blushStyle": "small soft blush", "accentText": "Overexcited Soft accent: sparkle", "posture": "Overexcited Soft posture: lifted/bouncy", "vibe": "Overexcited Soft — chaotic/oddball emotional atmosphere", "differenceRule": "Overexcited Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Overexcited Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Overexcited Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "suspiciousHappy", "label": "Suspicious Happy", "family": "chaotic/oddball", "fill": "#D9F7B8", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Suspicious Happy eye design: half", "browStyle": "Suspicious Happy brow logic: soft or minimal", "mouthStyle": "Suspicious Happy mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Suspicious Happy accent: sparkle", "posture": "Suspicious Happy posture: centered/expressive", "vibe": "Suspicious Happy — chaotic/oddball emotional atmosphere", "differenceRule": "Suspicious Happy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Suspicious Happy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Suspicious Happy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "softSuspicious", "label": "Soft Suspicious", "family": "chaotic/oddball", "fill": "#D8C7FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Soft Suspicious eye design: half", "browStyle": "Soft Suspicious brow logic: soft or minimal", "mouthStyle": "Soft Suspicious mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Soft Suspicious accent: sparkle", "posture": "Soft Suspicious posture: centered/expressive", "vibe": "Soft Suspicious — chaotic/oddball emotional atmosphere", "differenceRule": "Soft Suspicious has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Soft Suspicious by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Soft Suspicious: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "calm-glowy", "label": "Calm Glowy", "family": "magical/glam/strange-pretty", "fill": "#CFF8F2", "eye": "sleepy", "mouth": "smile", "accent": "glow", "faceHeight": "middle", "eyeStyle": "Calm Glowy eye design: sleepy", "browStyle": "Calm Glowy brow logic: soft or minimal", "mouthStyle": "Calm Glowy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Calm Glowy accent: glow", "posture": "Calm Glowy posture: centered/expressive", "vibe": "Calm Glowy — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Calm Glowy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Calm Glowy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Calm Glowy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "timidMagical", "label": "Timid Magical", "family": "magical/glam/strange-pretty", "fill": "#DCCBFF", "eye": "wink", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Timid Magical eye design: wink", "browStyle": "Timid Magical brow logic: soft or minimal", "mouthStyle": "Timid Magical mouth design: smile", "blushStyle": "small soft blush", "accentText": "Timid Magical accent: sparkle", "posture": "Timid Magical posture: tucked/low", "vibe": "Timid Magical — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Timid Magical has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Timid Magical by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Timid Magical: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "gloomyGlam", "label": "Gloomy Glam", "family": "magical/glam/strange-pretty", "fill": "#B8A7D9", "eye": "sleepy", "mouth": "frown", "accent": "cloud", "faceHeight": "middle", "eyeStyle": "Gloomy Glam eye design: sleepy", "browStyle": "Gloomy Glam brow logic: soft or minimal", "mouthStyle": "Gloomy Glam mouth design: frown", "blushStyle": "small soft blush", "accentText": "Gloomy Glam accent: cloud", "posture": "Gloomy Glam posture: centered/expressive", "vibe": "Gloomy Glam — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Gloomy Glam has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Gloomy Glam by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Gloomy Glam: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "woundedSparkly", "label": "Wounded Sparkly", "family": "magical/glam/strange-pretty", "fill": "#F7C7D9", "eye": "dot", "mouth": "frown", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Wounded Sparkly eye design: dot", "browStyle": "Wounded Sparkly brow logic: soft or minimal", "mouthStyle": "Wounded Sparkly mouth design: frown", "blushStyle": "small soft blush", "accentText": "Wounded Sparkly accent: tear", "posture": "Wounded Sparkly posture: centered/expressive", "vibe": "Wounded Sparkly — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Wounded Sparkly has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Wounded Sparkly by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Wounded Sparkly: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "tenderFeral", "label": "Tender Feral", "family": "magical/glam/strange-pretty", "fill": "#FFD1B8", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Tender Feral eye design: dot", "browStyle": "Tender Feral brow logic: soft or minimal", "mouthStyle": "Tender Feral mouth design: smile", "blushStyle": "small soft blush", "accentText": "Tender Feral accent: sparkle", "posture": "Tender Feral posture: centered/expressive", "vibe": "Tender Feral — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Tender Feral has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Tender Feral by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Tender Feral: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "seriousTiny", "label": "Serious Tiny", "family": "magical/glam/strange-pretty", "fill": "#D8D8E8", "eye": "dot", "mouth": "line", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Serious Tiny eye design: dot", "browStyle": "Serious Tiny brow logic: soft or minimal", "mouthStyle": "Serious Tiny mouth design: line", "blushStyle": "small soft blush", "accentText": "Serious Tiny accent: sparkle", "posture": "Serious Tiny posture: centered/expressive", "vibe": "Serious Tiny — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Serious Tiny has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Serious Tiny by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Serious Tiny: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "delightedShy", "label": "Delighted Shy", "family": "magical/glam/strange-pretty", "fill": "#FFD9B8", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Delighted Shy eye design: dot", "browStyle": "Delighted Shy brow logic: soft or minimal", "mouthStyle": "Delighted Shy mouth design: smile", "blushStyle": "wide blush", "accentText": "Delighted Shy accent: sparkle", "posture": "Delighted Shy posture: tucked/low", "vibe": "Delighted Shy — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Delighted Shy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Delighted Shy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Delighted Shy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}];
    const emotionMap = Object.fromEntries(emotionSeedData.map(item => [item.key, {
      label:item.label, family:item.family, svg:emotionSvgFace(item),
      faceHeight:item.faceHeight, eyeStyle:item.eyeStyle, browStyle:item.browStyle, mouthStyle:item.mouthStyle,
      blushStyle:item.blushStyle, accent:item.accentText, posture:item.posture, vibe:item.vibe,
      differenceRule:item.differenceRule, practiceTip:item.practiceTip, examplePrompt:item.examplePrompt
    }]));

    const exactEmotionOverrides = {"happy": {"label": "Happy", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"happy emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFE680\"/>\n  <circle cx=\"32\" cy=\"32\" r=\"22\" fill=\"#FFF1A8\"/>\n  <path d=\"M19 29c2.5-4 7.5-4 10 0\" fill=\"none\" stroke=\"#3E2C18\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M35 29c2.5-4 7.5-4 10 0\" fill=\"none\" stroke=\"#3E2C18\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M22 38c5 7 15 9 22 0\" fill=\"none\" stroke=\"#3E2C18\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <circle cx=\"18\" cy=\"38\" r=\"3\" fill=\"#FFAF6B\" opacity=\".75\"/>\n  <circle cx=\"47\" cy=\"38\" r=\"3\" fill=\"#FFAF6B\" opacity=\".75\"/>\n  <path d=\"M12 17l3-2 3 2-3 2zM48 13l4-2 4 2-4 3z\" fill=\"#FFFFFF\" opacity=\".9\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "two upward curved closed eyes", "browStyle": "barely lifted cheerful brows", "mouthStyle": "large open smiling arc", "blushStyle": "small warm cheek dots", "accent": "tiny gleams", "posture": "open and lifted", "vibe": "bright, simple, cheerful", "differenceRule": "Different from excited because happy is steady and round, not explosive or high‑energy.", "practiceTip": "Begin with a round face; sketch soft curved eyes and a wide beaming smile, adding a slight blush to capture warmth.", "examplePrompt": "Draw a plush mascot lying in a sunny meadow, eyes closed in delight and beaming a contented smile."}, "sleepy": {"label": "Sleepy", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"sleepy emotion\">\n  <circle cx=\"32\" cy=\"34\" r=\"25\" fill=\"#C7D8FF\"/>\n  <path d=\"M20 31c3 2 6 2 9 0\" fill=\"none\" stroke=\"#2C3A57\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M36 31c3 2 6 2 9 0\" fill=\"none\" stroke=\"#2C3A57\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M29 43c2 1 4 1 6 0\" fill=\"none\" stroke=\"#2C3A57\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M47 13h8l-8 8h8\" fill=\"none\" stroke=\"#6B7FC7\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n  <path d=\"M39 7h6l-6 6h6\" fill=\"none\" stroke=\"#6B7FC7\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <ellipse cx=\"32\" cy=\"52\" rx=\"13\" ry=\"3\" fill=\"#8196D9\" opacity=\".22\"/>\n</svg>", "faceHeight": "low", "eyeStyle": "two droopy closed eyes", "browStyle": "absent sleepy brow", "mouthStyle": "tiny flat curve", "blushStyle": "extremely faint", "accent": "Z marks", "posture": "drooping downward", "vibe": "drowsy, quiet, drifting", "differenceRule": "Different from dramaticSleepy because sleepy is plain and calm, not theatrical or exaggerated.", "practiceTip": "Sketch a cozy round face with drooping eyes and a tiny mouth, then add soft ‘Z’ marks to hint at slumber.", "examplePrompt": "Illustrate a small creature curled up in a blanket, its droopy eyes barely open as gentle Z’s float up."}, "excited": {"label": "Excited", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"excited emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFE066\"/>\n  <path d=\"M19 28l4-5 4 5\" fill=\"none\" stroke=\"#3D2A12\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M37 28l4-5 4 5\" fill=\"none\" stroke=\"#3D2A12\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M22 39c5 8 15 9 21 0\" fill=\"none\" stroke=\"#3D2A12\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <circle cx=\"18\" cy=\"38\" r=\"3.5\" fill=\"#FF8A5B\" opacity=\".75\"/>\n  <circle cx=\"47\" cy=\"38\" r=\"3.5\" fill=\"#FF8A5B\" opacity=\".75\"/>\n  <path d=\"M10 18l4-2 2-4 2 4 4 2-4 2-2 4-2-4z\" fill=\"#FFFFFF\"/>\n  <path d=\"M47 12l3-6 3 6 6 3-6 3-3 6-3-6-6-3z\" fill=\"#FF8DE3\"/>\n</svg>", "faceHeight": "high", "eyeStyle": "two starry triangle eyes", "browStyle": "lifted invisible brows", "mouthStyle": "huge upward smile", "blushStyle": "bright round blush", "accent": "bursting sparkles", "posture": "springing upward", "vibe": "electric, bright, eager", "differenceRule": "Different from happy because excited is explosive and bouncy, not steady or simple.", "practiceTip": "Play with star‑shaped eyes and a big open mouth; add little burst symbols around the head to communicate energy.", "examplePrompt": "Draw a playful mascot leaping up with starry eyes and sparkling bursts, radiating infectious excitement."}, "curious": {"label": "Curious", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"curious emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#BFE8FF\"/>\n  <circle cx=\"24\" cy=\"32\" r=\"4\" fill=\"#26394A\"/>\n  <circle cx=\"42\" cy=\"30\" r=\"5\" fill=\"#26394A\"/>\n  <circle cx=\"25.5\" cy=\"30.5\" r=\"1.2\" fill=\"#FFFFFF\"/>\n  <circle cx=\"43.8\" cy=\"28\" r=\"1.4\" fill=\"#FFFFFF\"/>\n  <path d=\"M18 24c3-3 8-3 11-1\" fill=\"none\" stroke=\"#26394A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M36 21c4-4 9-3 12 1\" fill=\"none\" stroke=\"#26394A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M28 43c3 2 6 2 9 0\" fill=\"none\" stroke=\"#26394A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M50 13c3 0 5 2 5 5 0 3-3 4-5 6\" fill=\"none\" stroke=\"#6C63FF\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"50\" cy=\"28\" r=\"1.7\" fill=\"#6C63FF\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "one small eye + one larger searching eye", "browStyle": "one raised inquisitive brow", "mouthStyle": "small neutral curve", "blushStyle": "none", "accent": "question mark", "posture": "leaning forward", "vibe": "alert, wondering, interested", "differenceRule": "Different from confused‑cute because curious is engaged and searching, not stuck or unsure.", "practiceTip": "Experiment with asymmetry: draw one eye larger and higher than the other; add a raised brow and a tiny mouth that hints at inquiry.", "examplePrompt": "Create a whimsical creature peering around a corner with one large curious eye and a floating question mark overhead."}, "surprised": {"label": "Surprised", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"surprised emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFD6A5\"/>\n  <circle cx=\"24\" cy=\"30\" r=\"4.5\" fill=\"#3E2A1C\"/>\n  <circle cx=\"40\" cy=\"30\" r=\"4.5\" fill=\"#3E2A1C\"/>\n  <circle cx=\"25.5\" cy=\"28.4\" r=\"1.2\" fill=\"#FFFFFF\"/>\n  <circle cx=\"41.5\" cy=\"28.4\" r=\"1.2\" fill=\"#FFFFFF\"/>\n  <path d=\"M18 22c4-4 9-4 12-1\" fill=\"none\" stroke=\"#3E2A1C\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M34 21c4-3 9-3 12 1\" fill=\"none\" stroke=\"#3E2A1C\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"32\" cy=\"43\" r=\"4.5\" fill=\"none\" stroke=\"#3E2A1C\" stroke-width=\"3\"/>\n  <path d=\"M11 17l3-2 3 2-3 2zM50 15l4-2 4 2-4 2z\" fill=\"#FFFFFF\" opacity=\".9\"/>\n</svg>", "faceHeight": "high", "eyeStyle": "two wide round eyes", "browStyle": "high lifted brows", "mouthStyle": "small open O mouth", "blushStyle": "faint warm cheeks", "accent": "tiny shock gleams", "posture": "popped upright", "vibe": "startled, open, innocent", "differenceRule": "Different from excited because surprised is frozen and wide‑eyed, not joyful or energetic.", "practiceTip": "Focus on big circles for the eyes and a rounded mouth; keep the brows high and curved to capture that startled look.", "examplePrompt": "Draw a small mascot with huge eyes and a round ‘O’ mouth, as if it’s just found a hidden treasure chest."}, "embarrassed": {"label": "Embarrassed", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"embarrassed emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFC6C7\"/>\n  <path d=\"M19 29c3 2 6 2 9 0\" fill=\"none\" stroke=\"#5A2D35\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M36 29c3 2 6 2 9 0\" fill=\"none\" stroke=\"#5A2D35\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M28 42c3 2 6 2 9 0\" fill=\"none\" stroke=\"#5A2D35\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <ellipse cx=\"18\" cy=\"38\" rx=\"7\" ry=\"4\" fill=\"#FF6F91\" opacity=\".7\"/>\n  <ellipse cx=\"47\" cy=\"38\" rx=\"7\" ry=\"4\" fill=\"#FF6F91\" opacity=\".7\"/>\n  <path d=\"M15 21c3-2 6-2 9 0\" fill=\"none\" stroke=\"#B85B6B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M40 21c3-2 6-2 9 0\" fill=\"none\" stroke=\"#B85B6B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M49 14l1.8 3.5 3.8.5-2.8 2.7.7 3.8-3.5-1.8-3.5 1.8.7-3.8-2.8-2.7 3.8-.5z\" fill=\"#FFF2A8\"/>\n</svg>", "faceHeight": "low", "eyeStyle": "two closed downward curved eyes", "browStyle": "awkwardly lifted brows", "mouthStyle": "small uneasy smile", "blushStyle": "large intense oval blush", "accent": "tiny nervous sparkle", "posture": "shrunk and flushed", "vibe": "flustered, exposed, sweetly awkward", "differenceRule": "Different from shy because embarrassed is hotter and more exposed, while shy is quieter and inward.", "practiceTip": "Use curved lines to close the eyes and slump the brows; overlay big oval blush marks and an uneven smile to show flustered heat.", "examplePrompt": "Draw a bashful creature hiding its face behind its hands, cheeks burning and a tiny smile peeking out."}, "determined": {"label": "Determined", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"determined emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFCF8A\"/>\n  <path d=\"M17 25l13 3\" stroke=\"#3A2416\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <path d=\"M47 25l-13 3\" stroke=\"#3A2416\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <circle cx=\"24\" cy=\"33\" r=\"3.5\" fill=\"#3A2416\"/>\n  <circle cx=\"40\" cy=\"33\" r=\"3.5\" fill=\"#3A2416\"/>\n  <path d=\"M25 44c4 3 10 3 14 0\" fill=\"none\" stroke=\"#3A2416\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M11 18l4-2 2-4 2 4 4 2-4 2-2 4-2-4z\" fill=\"#FFFFFF\"/>\n  <path d=\"M48 43l5 3-5 3-3 5-3-5-5-3 5-3 3-5z\" fill=\"#FFE066\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "two focused dot eyes", "browStyle": "strong inward angled brows", "mouthStyle": "firm confident line‑smile", "blushStyle": "none", "accent": "resolve spark", "posture": "forward and braced", "vibe": "focused, sturdy, ready", "differenceRule": "Different from tiny‑angry because determined has controlled focus, not reactive anger.", "practiceTip": "Practice drawing symmetrical eyes under firm angled brows; add a straight mouth and a tiny shine to suggest inner strength.", "examplePrompt": "Design a small hero creature standing upright with a firm grin and a single sparkle of determination in its eye."}, "cozy": {"label": "Cozy", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"cozy emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFD8A8\"/>\n  <path d=\"M18 36c8 8 20 8 28 0v10c0 5-5 9-14 9s-14-4-14-9z\" fill=\"#B77A50\" opacity=\".85\"/>\n  <path d=\"M21 30c3 2 6 2 9 0\" fill=\"none\" stroke=\"#4A2E1F\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M35 30c3 2 6 2 9 0\" fill=\"none\" stroke=\"#4A2E1F\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M27 41c3 2 7 2 10 0\" fill=\"none\" stroke=\"#4A2E1F\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <ellipse cx=\"18\" cy=\"38\" rx=\"4.5\" ry=\"3\" fill=\"#FF9A85\" opacity=\".55\"/>\n  <ellipse cx=\"46\" cy=\"38\" rx=\"4.5\" ry=\"3\" fill=\"#FF9A85\" opacity=\".55\"/>\n  <path d=\"M14 18c2-3 5-5 9-5\" fill=\"none\" stroke=\"#FFF3D1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M42 14c3 1 6 3 8 6\" fill=\"none\" stroke=\"#FFF3D1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>", "faceHeight": "low", "eyeStyle": "two relaxed closed eyes", "browStyle": "soft relaxed brow", "mouthStyle": "small warm smile", "blushStyle": "warm muted blush", "accent": "blanket wrap", "posture": "wrapped and nestled", "vibe": "warm, safe, nest‑like", "differenceRule": "Different from calm‑glowy because cozy is tactile and warm, not magical or radiant.", "practiceTip": "Draw a round face with eyes closed and mouth smiling, wrapped in a scarf or blanket; use warm, soft shading to convey softness.", "examplePrompt": "Illustrate a snuggly mascot wrapped in a chunky knit scarf, eyes closed with a contented smile."}, "silly": {"label": "Silly", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"silly emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#BFF7D2\"/>\n  <circle cx=\"23\" cy=\"31\" r=\"4\" fill=\"#263A2B\"/>\n  <path d=\"M38 31c2.5-2 5.5-2 8 0\" fill=\"none\" stroke=\"#263A2B\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M24 44c5 5 12 5 17 0\" fill=\"none\" stroke=\"#263A2B\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M35 44c0 6 5 8 8 4\" fill=\"#FF7CA8\" stroke=\"#263A2B\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <circle cx=\"18\" cy=\"38\" r=\"3\" fill=\"#FFB36B\" opacity=\".6\"/>\n  <circle cx=\"47\" cy=\"38\" r=\"3\" fill=\"#FFB36B\" opacity=\".6\"/>\n  <path d=\"M13 17l3-2 3 2-3 2zM49 15l4-2 4 2-4 2z\" fill=\"#FFFFFF\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "one dot eye + one wink", "browStyle": "bouncy mismatched brows", "mouthStyle": "goofy grin with tongue", "blushStyle": "small warm blush", "accent": "playful gleams", "posture": "loose and wobbly", "vibe": "goofy, harmless, playful", "differenceRule": "Different from chaoticSoft because silly is simple and goofy, not unstable or overcharged.", "practiceTip": "Play with asymmetry: sketch one eye winking and the other wide; add a lopsided grin with a tongue sticking out.", "examplePrompt": "Create a quirky mascot sticking out its tongue and winking, hair a bit ruffled, radiating carefree silliness."}};
    Object.assign(emotionMap, exactEmotionOverrides);
    let selectedEmotionKey = "happy";
    function getEmotionEntry(key){ return emotionMap[key] || emotionMap.happy; }
    function emotionKeys(){ return Object.keys(emotionMap); }
    function renderEmotionLab(){
      const gallery=document.getElementById("emotionGallery"); if(!gallery) return;
      const family=document.getElementById("emotionFamilyFilter")?.value || "all";
      const keys=emotionKeys().filter(key => family==="all" || emotionMap[key].family===family);
      gallery.innerHTML=keys.map((key, index) => { const e=emotionMap[key]; return `<button class="emotion-card ${key===selectedEmotionKey?"active":""}" style="--motion-order:${index}" onclick="selectEmotionLab('${key}')" type="button">${e.svg}<strong>${e.label}</strong><span>${e.family}</span></button>`; }).join("");
      renderEmotionDetail(); renderEmotionCompareSelects(); renderEmotionCompare();
    }
    function selectEmotionLab(key){
      selectedEmotionKey=key;
      const lessonEmotion=document.getElementById("emotion");
      if(lessonEmotion && emotionMap[key]) lessonEmotion.value=key;
      renderEmotionLab(); renderEmotionLessonHint();
    }
    function syncLessonEmotionToLab(){
      const key=document.getElementById("emotion")?.value || "happy";
      if(emotionMap[key]) selectedEmotionKey=key;
      renderEmotionLab(); showTab("tab-emotions");
    }
    function renderEmotionDetail(){
      const box=document.getElementById("emotionDetail"); if(!box) return;
      const e=getEmotionEntry(selectedEmotionKey);
      const rows=[["Face",e.faceHeight],["Eyes",e.eyeStyle],["Brows",e.browStyle],["Mouth",e.mouthStyle],["Blush",e.blushStyle],["Accent",e.accent],["Posture",e.posture],["Vibe",e.vibe]].map(([a,b])=>`<div class="emotion-meta-row"><b>${a}</b><span>${b}</span></div>`).join("");
      box.innerHTML=`<div class="emotion-detail-preview">${e.svg}<div><h3>${e.label}</h3><p class="small">${e.family}</p></div></div><div class="emotion-meta-grid">${rows}</div><div class="coach-section"><h4>Difference rule</h4><p>${e.differenceRule}</p></div><div class="coach-section"><h4>Practice tip</h4><p>${e.practiceTip}</p></div><div class="coach-section"><h4>Example prompt</h4><p>${e.examplePrompt}</p></div>`;
    }
    function renderEmotionCompareSelects(){
      const a=document.getElementById("emotionCompareA"), b=document.getElementById("emotionCompareB"); if(!a || !b) return;
      const options=emotionKeys().map(key=>`<option value="${key}">${emotionMap[key].label}</option>`).join("");
      const currentA=a.value || selectedEmotionKey, currentB=b.value || (selectedEmotionKey==="happy" ? "cursedAdorable" : "happy");
      a.innerHTML=options; b.innerHTML=options; a.value=emotionMap[currentA]?currentA:selectedEmotionKey; b.value=emotionMap[currentB]?currentB:"cursedAdorable";
    }
    function renderEmotionCompare(){
      const box=document.getElementById("emotionCompare"); if(!box) return;
      const a=getEmotionEntry(document.getElementById("emotionCompareA")?.value || selectedEmotionKey);
      const b=getEmotionEntry(document.getElementById("emotionCompareB")?.value || "cursedAdorable");
      box.innerHTML=`<div class="emotion-compare-preview">${a.svg}<strong>${a.label}</strong><span>${a.vibe}</span><small>${a.differenceRule}</small></div><div class="emotion-compare-preview">${b.svg}<strong>${b.label}</strong><span>${b.vibe}</span><small>${b.differenceRule}</small></div>`;
    }
    function selectedEmotionSvgDocument(){ return getEmotionEntry(selectedEmotionKey).svg.trim(); }
    function downloadSelectedEmotionSvg(){
      const e=getEmotionEntry(selectedEmotionKey);
      downloadBlob(new Blob([selectedEmotionSvgDocument()],{type:"image/svg+xml;charset=utf-8"}),`mascot-spark-emotion-${selectedEmotionKey}.svg`);
      status(`${e.label} SVG exported.`,"ok");
    }
    function downloadSelectedEmotionPng(){
      const holder=document.createElement("div"); holder.innerHTML=selectedEmotionSvgDocument();
      const svg=holder.querySelector("svg"); if(!svg) return;
      downloadSvgElementAsPng(svg,`mascot-spark-emotion-${selectedEmotionKey}.png`,true);
      status("Emotion PNG exported.","ok");
    }
    function renderEmotionLessonHint(data){
      const box=document.getElementById("emotionLessonHint"); if(!box) return;
      const key=data?.emotionKey || document.getElementById("emotion")?.value || selectedEmotionKey;
      const e=getEmotionEntry(key);
      box.innerHTML=`<strong>Emotion logic: ${e.label}</strong><span>${e.eyeStyle}. ${e.mouthStyle}. ${e.posture}. ${e.practiceTip}</span>`;
    }


    const skillFocuses = {
      auto: "Auto skill match",
      shapeControl: "Shape Control",
      facePlacement: "Face Placement",
      expressionDesign: "Expression Design",
      tinyLimbs: "Tiny Limbs",
      objectCharacter: "Object-to-Character",
      iconReadability: "Icon Readability",
      paletteControl: "Palette Control",
      polishPass: "Polish Pass",
      redrawPractice: "Redraw Practice"
    };

    const skillFocusData = {
      auto: {
        title: "Auto skill match",
        goal: "The app picks the most useful skill focus from your lesson choices.",
        drills: ["Follow the generated step order.", "Keep the subject readable.", "Make one simple Version 2 change."]
      },
      shapeControl: {
        title: "Shape Control",
        goal: "Practice making the main body simple, readable, and friendly.",
        drills: ["Draw the body 3 times.", "Pick the clearest silhouette.", "Do not add details until the body works."]
      },
      facePlacement: {
        title: "Face Placement",
        goal: "Practice placing eyes and mouth low enough to feel cute and readable.",
        drills: ["Move the face lower.", "Try two eye spacings.", "Make the mouth smaller than you think."]
      },
      expressionDesign: {
        title: "Expression Design",
        goal: "Practice making the duo emotion readable with limited marks.",
        drills: ["Use one eye cue.", "Use one mouth cue.", "Use one body or accessory cue only."]
      },
      tinyLimbs: {
        title: "Tiny Limbs",
        goal: "Practice adding limbs without making the mascot cluttered.",
        drills: ["Use C-curves for arms.", "Use oval feet.", "Keep limbs smaller than the face area."]
      },
      objectCharacter: {
        title: "Object-to-Character",
        goal: "Keep the subject recognizable after adding personality.",
        drills: ["Preserve one subject cue.", "Put the face after readability works.", "Remove details that hide the subject."]
      },
      iconReadability: {
        title: "Icon Readability",
        goal: "Make the mascot readable when small.",
        drills: ["Zoom out.", "Remove tiny details.", "Keep the silhouette bold."]
      },
      paletteControl: {
        title: "Palette Control",
        goal: "Use color roles instead of using every color equally.",
        drills: ["One body color.", "One accent color.", "One shadow and one highlight only."]
      },
      polishPass: {
        title: "Polish Pass",
        goal: "Practice cleaning without overworking.",
        drills: ["Lower rough sketch opacity.", "Redraw slow clean lines.", "Stop after one shadow."]
      },
      redrawPractice: {
        title: "Redraw Practice",
        goal: "Improve by changing one thing in Version 2.",
        drills: ["Duplicate the idea.", "Change only face, body, color, or limbs.", "Compare before judging."]
      }
    };

    const fixProblemData = {
      faceWeird: {
        title: "Face looks weird",
        fixFirst: "Move the face lower before changing the body.",
        steps: ["Duplicate the sketch.", "Lower both eyes and mouth slightly.", "Make the mouth smaller.", "Remove one cheek/detail mark."],
        avoid: "Do not redraw the whole mascot until face placement is tested."
      },
      boringBody: {
        title: "Body feels boring",
        fixFirst: "Change the silhouette, not the decoration.",
        steps: ["Redraw the body with one softer bump.", "Flatten the bottom slightly.", "Tilt the top edge a little.", "Keep the face the same while testing."],
        avoid: "Do not add accessories to hide a weak body shape."
      },
      awkwardLimbs: {
        title: "Limbs look awkward",
        fixFirst: "Make limbs smaller and simpler.",
        steps: ["Replace arms with C-curves.", "Replace feet with tiny ovals.", "Move limbs lower on the body.", "Check that limbs do not cover the face."],
        avoid: "Do not make limbs detailed hands or feet yet."
      },
      subjectLost: {
        title: "Subject is not readable",
        fixFirst: "Restore one obvious subject cue.",
        steps: ["Name the subject cue: stem, handle, screen, wrapper, etc.", "Make that cue larger.", "Remove one unrelated accessory.", "Zoom out and check again."],
        avoid: "Do not let optional flavor override the selected subject."
      },
      emotionUnclear: {
        title: "Expression is unclear",
        fixFirst: "Simplify the face into one clear expression formula.",
        steps: ["Choose one eye cue.", "Choose one mouth cue.", "Add one tiny body cue.", "Remove extra emotional symbols."],
        avoid: "Do not use every emotion cue at once."
      },
      muddyColors: {
        title: "Colors feel muddy",
        fixFirst: "Use fewer palette colors.",
        steps: ["Pick one body color.", "Pick one accent color.", "Use one shadow color only.", "Use one tiny highlight."],
        avoid: "Do not use all palette colors equally."
      },
      tooManyDetails: {
        title: "Too many details",
        fixFirst: "Remove before adding.",
        steps: ["Circle the most important detail.", "Delete or ignore two smaller details.", "Keep face, subject cue, and one twist.", "Check silhouette again."],
        avoid: "Do not solve clutter by adding more polish."
      },
      notCute: {
        title: "Not cute enough",
        fixFirst: "Round the body and lower the face.",
        steps: ["Soften sharp corners.", "Lower the eyes.", "Make the mouth smaller.", "Add one blush or shine mark."],
        avoid: "Do not make every feature bigger."
      },
      notIconReadable: {
        title: "Not readable as an icon",
        fixFirst: "Bold silhouette, fewer details.",
        steps: ["Zoom out to thumbnail size.", "Remove tiny accessories.", "Thicken the outer shape.", "Keep only face plus one subject cue."],
        avoid: "Do not keep details that disappear when small."
      }
    };

    function toggleFocusMode() {
      const active = !document.body.classList.contains("focus-mode");
      document.body.classList.toggle("focus-mode", active);
      localStorage.setItem("mascotSparkFocusMode", active ? "on" : "off");
      const btn = document.getElementById("focusModeBtn");
      if (btn) btn.textContent = active ? "Exit focus" : "Focus mode";
      if (active) status("Focus Mode on: current step + blueprint only.", "ok");
    }

    function loadFocusMode() {
      const active = localStorage.getItem("mascotSparkFocusMode") === "on";
      document.body.classList.toggle("focus-mode", active);
      const btn = document.getElementById("focusModeBtn");
      if (btn) btn.textContent = active ? "Exit focus" : "Focus mode";
    }

    function pickAutoSkill(type, emotion, blueprintStyle) {
      if (["icon", "badge", "sticker", "logoMark", "emoji"].includes(type)) return "iconReadability";
      if (["object", "food", "fruit", "robot", "device", "potion", "book", "package", "drink"].includes(type)) return "objectCharacter";
      if (["grumpy", "spooky", "sadHopeful", "hauntedHappy", "chaoticSoft", "gloomySweet", "softSuspicious"].includes(emotion)) return "expressionDesign";
      if (blueprintStyle === "faceMap") return "facePlacement";
      if (blueprintStyle === "limbMap") return "tinyLimbs";
      return "shapeControl";
    }

    function getEffectiveSkillFocus(type, emotion, blueprintStyle) {
      const selected = document.getElementById("skillFocus")?.value || "auto";
      return selected === "auto" ? pickAutoSkill(type, emotion, blueprintStyle) : selected;
    }

    function getSubjectRules(type) {
      const map = {
        fruit: ["Start with a round or heart-like body.", "Readable cue: stem, leaf, shine, or seed.", "Avoid too many seeds."],
        vegetable: ["Start with one simple vegetable silhouette.", "Readable cue: leaf top, root point, or cap.", "Avoid realistic texture overload."],
        robot: ["Start with a rounded rectangle.", "Readable cue: antenna, screen, bolt, or panel.", "Avoid sharp mechanical clutter."],
        device: ["Start with the outer device frame.", "Readable cue: screen area.", "Avoid placing details too close to edges."],
        potion: ["Start with neck, then bottle body.", "Readable cue: cork, liquid line, label.", "Avoid a neck wider than the bottle."],
        cloud: ["Start from overlapping puff circles.", "Readable cue: puffy top edge.", "Avoid flat cloud edges."],
        ghost: ["Start with a dome top.", "Readable cue: wavy draped bottom.", "Avoid too many bottom scallops."],
        gem: ["Start with a diamond body.", "Readable cue: 1–3 facet lines.", "Avoid too many inner lines."],
        shell: ["Start with one curved shell wedge.", "Readable cue: layered ribs.", "Avoid random rib directions."],
        aquatic: ["Start with long body flow.", "Readable cue: tail, fin, bubble, or droplet.", "Avoid fins before body."],
        letter: ["Start with chunky letter strokes.", "Readable cue: letter silhouette.", "Avoid hiding the letter with face/details."],
        number: ["Start with chunky number shape.", "Readable cue: number silhouette.", "Avoid decorating before the number reads."],
        package: ["Start with box/fold logic.", "Readable cue: flap, tape, corner.", "Avoid losing the fold directions."],
        furniture: ["Start with top/seat plane.", "Readable cue: legs or cushion.", "Avoid starting with legs first."],
        garden: ["Start with pot/base.", "Readable cue: sprout, leaf, watering shape.", "Avoid leaves hiding the pot."]
      };
      return map[type] || ["Start with the biggest readable silhouette.", "Keep one clear subject cue.", "Avoid adding details before the subject reads."];
    }

    function renderPracticeIntelligence(data) {
      const skill = skillFocusData[data.skillFocus] || skillFocusData.shapeControl;
      const subjectRules = getSubjectRules(data.type);
      const anatomy = [
        `Base shape: ${data.subjectBase}`,
        `Readability cue: keep one clear ${data.subjectName.toLowerCase()} detail.`,
        `Expression source: ${data.emotionName} face formula.`,
        `Twist: ${data.twistName}`,
        `Danger zone: too many tiny details.`
      ];
      const version2 = getVersion2Challenge(data);

      const skillBox = document.getElementById("skillFocusCard");
      const anatomyBox = document.getElementById("anatomyCard");
      const rulesBox = document.getElementById("subjectRulesCard");
      const versionBox = document.getElementById("version2Card");

      if (skillBox) skillBox.innerHTML = `<b>${skill.title}</b><br>${skill.goal}<ul>${skill.drills.map(x => `<li>${x}</li>`).join("")}</ul>`;
      if (anatomyBox) anatomyBox.innerHTML = `<ul>${anatomy.map(x => `<li>${x}</li>`).join("")}</ul>`;
      if (rulesBox) rulesBox.innerHTML = `<ul>${subjectRules.map(x => `<li>${x}</li>`).join("")}<li>${emotionBlueprintBadge(data.emotion)}</li><li>${twistBlueprintBadge(data.twist)}</li></ul>`;
      if (versionBox) versionBox.innerHTML = `<b>${version2.title}</b><br>${version2.body}`;
    }

    function getVersion2Challenge(data) {
      const skill = data.skillFocus;
      if (skill === "facePlacement") return { title: "Face Fix Version", body: "Draw the same mascot again, but move the face lower and make the mouth smaller." };
      if (skill === "shapeControl") return { title: "Silhouette Version", body: "Keep the face the same, but redraw the body shape three different ways." };
      if (skill === "expressionDesign") return { title: "Expression Version", body: "Keep the same body, but make three different mouth options for the duo emotion." };
      if (skill === "tinyLimbs") return { title: "Limb Version", body: "Keep the same body and face, but make the limbs 30% smaller." };
      if (skill === "objectCharacter") return { title: "Readability Version", body: "Redraw the same mascot with one subject cue larger and one decoration removed." };
      if (skill === "iconReadability") return { title: "Icon Version", body: "Redraw it as a tiny square icon and remove anything that disappears." };
      if (skill === "paletteControl") return { title: "Color Version", body: "Use only body color, one accent, one shadow, and one highlight." };
      return { title: "One-Change Version", body: "Draw the same mascot again, but change only one thing: face, body, color, or twist." };
    }

    function fixMyMascot() {
      const key = document.getElementById("fixProblem")?.value || "faceWeird";
      const fix = fixProblemData[key] || fixProblemData.faceWeird;
      renderCoachOutput({
        title: "Fix My Mascot",
        summary: `${fix.title}: ${fix.fixFirst}`,
        sections: [
          { heading: "Try this", items: fix.steps },
          { heading: "Avoid", items: [fix.avoid] },
          { heading: "Version 2", items: ["Duplicate the sketch or redraw the same mascot. Change only this fix area first."] }
        ],
        note: "Do not solve every problem at once. One fix teaches more than five random changes."
      });
      status("Fix plan created.", "ok");
    }

    function getCurrentCoachContext() {
      const subjectKey = document.getElementById("lessonType")?.value || "blob";
      const emotionKey = document.getElementById("emotion")?.value || "happy";
      const paletteKey = document.getElementById("paletteMood")?.value || "auto";
      const blueprintKey = document.getElementById("blueprintStyle")?.value || "classic";
      const twistKey = document.getElementById("funTwist")?.value || "none";
      const twistAmountKey = document.getElementById("twistAmount")?.value || "one";
      const twistSet = resolveTwistSet(twistKey, twistAmountKey);
      const lessonKey = document.getElementById("level")?.value || "normal";
      const lightingType = document.getElementById("lightingType")?.value || "topLeft";
      const materialFeel = document.getElementById("materialFeel")?.value || "plush";
      const shadowStrength = document.getElementById("shadowStrength")?.value || "soft";
      const shadingGoal = document.getElementById("shadingGoal")?.value || "beginnerSimple";

      return {
        subjectKey,
        emotionKey,
        paletteKey,
        blueprintKey,
        twistKey,
        twistAmountKey,
        twistSet,
        lessonKey,
        lightingType,
        materialFeel,
        shadowStrength,
        shadingGoal,
        subject: subjectData[subjectKey] || subjectData.blob,
        emotion: emotions[emotionKey] || emotions.happy,
        palette: palettes[paletteKey] || palettes.auto,
        blueprint: blueprintOptions[blueprintKey] || blueprintOptions.classic,
        twist: twists[twistKey] || twists.none,
        twistSetName: getTwistSetName(twistSet),
        lesson: lessonSizes[lessonKey] || lessonSizes.normal,
        flavor: document.getElementById("customIdea")?.value.trim() || flavors[document.getElementById("ideaPreset")?.value] || "none"
      };
    }

    function renderCoachContext() {
      const c = getCurrentCoachContext();
      const box = document.getElementById("coachContext");
      if (!box) return;
      box.innerHTML = `
        <span>Subject: ${c.subject[0]}</span>
        <span>Emotion: ${c.emotion[0]}</span>
        <span>Twist: ${c.twistSetName || c.twist[0]}</span>
        <span>Palette: ${c.palette.label || "Auto"}</span>
        <span>Blueprint: ${c.blueprint}</span>
        <span>Lighting: ${lightingTypeMap[c.lightingType]?.label || c.lightingType}</span>
        <span>Material: ${materialRecipeMap[c.materialFeel]?.label || c.materialFeel}</span>
        <span>Lesson: ${c.lesson[0]}</span>
      `;
    }

    function clearAiOutput() {
      const title = document.getElementById("aiOutputTitle");
      const body = document.getElementById("aiOutputBody");
      if (title) title.textContent = "Coach Output";
      if (body) body.innerHTML = '<p class="small">Run one of the Coach tools to see help here.</p>';
    }

    function renderCoachOutput(data) {
      showTab('tab-ai');
      const title = document.getElementById("aiOutputTitle");
      const body = document.getElementById("aiOutputBody");
      if (!title || !body) return;

      title.textContent = data.title || "Coach Output";

      const summary = data.summary ? `<div class="coach-summary">${data.summary}</div>` : "";
      const sections = (data.sections || []).map(section => `
        <section class="coach-section">
          <h4>${section.heading}</h4>
          <ul>${(section.items || []).map(item => `<li>${item}</li>`).join("")}</ul>
        </section>
      `).join("");

      const note = data.note ? `<div class="coach-inline-note">${data.note}</div>` : "";

      body.innerHTML = summary + sections + note;
    }

    function subjectLogicFallback() {
      const c = getCurrentCoachContext();
      return {
        title: "Subject-Specific Drawing Logic",
        summary: `Use the selected subject as the core shape language. The goal is for the mascot to still read clearly as ${c.subject[0].toLowerCase()} even after you add emotion and a tiny twist.`,
        sections: [
          {
            heading: "Start with",
            items: [
              `Begin with ${c.subject[1]}.`,
              `Focus on ${c.subject[2]} before adding personality details.`,
              `Keep the outside silhouette simple first, then add the face.`
            ]
          },
          {
            heading: "What makes it read",
            items: [
              `Preserve one obvious cue that says “${c.subject[0]}.”`,
              `Use only one or two subject-defining details so the shape stays beginner-friendly.`,
              `If the subject is getting lost, remove decorations before changing the main body.`
            ]
          },
          {
            heading: "Avoid",
            items: [
              `Do not let the optional flavor turn it into a different subject.`,
              `Do not add the face before the base shape reads clearly.`,
              `Do not stack multiple accessories if they cover the subject cue.`
            ]
          }
        ],
        note: `Good rule: if you zoom out and it no longer reads as ${c.subject[0].toLowerCase()}, simplify the silhouette before doing anything else.`
      };
    }

    function emotionCoachFallback() {
      const c = getCurrentCoachContext();
      return {
        title: "Emotion Coach",
        summary: `Use one dominant face cue, one body cue, and one optional extra mark. That keeps the selected duo emotion readable without making the mascot too busy.`,
        sections: [
          {
            heading: "Expression formula",
            items: [
              `Face cue: ${c.emotion[1]}.`,
              `Body cue: ${c.emotion[2]}.`,
              `Keep the face low on the body so the emotion reads cuter and more mascot-like.`
            ]
          },
          {
            heading: "How to balance the duo emotion",
            items: [
              `Choose one side of the duo emotion as the main read and let the second side be the accent.`,
              `Use the mouth and eye shape first before adding any extra symbol.`,
              `If the emotion feels muddy, remove one detail and make the mouth clearer.`
            ]
          },
          {
            heading: "Avoid",
            items: [
              c.emotion[3],
              `Do not use too many emotional symbols at once.`,
              `Do not let the twist overpower the face.`
            ]
          }
        ],
        note: "Best practice: keep one emotional cue in the face and one in the pose or accessory, then stop."
      };
    }

    function paletteCoachFallback() {
      const c = getCurrentCoachContext();
      const colors = (c.palette.colors || []);
      const body = colors[0] || "your main color";
      const secondary = colors[1] || colors[0] || "a secondary color";
      const accent = colors[2] || colors[1] || colors[0] || "an accent color";
      const shadow = colors[Math.max(0, colors.length - 2)] || secondary;
      const highlight = colors[Math.max(0, colors.length - 1)] || accent;

      return {
        title: "Palette Coach",
        summary: `Use the selected palette in a simple order: main body color first, one supporting accent second, then one shadow and one highlight. That keeps the mascot colorful without becoming muddy.`,
        sections: [
          {
            heading: "Suggested color jobs",
            items: [
              `Main body: ${body}`,
              `Secondary detail: ${secondary}`,
              `Accent: ${accent}`,
              `Shadow: ${shadow}`,
              `Highlight or shine: ${highlight}`
            ]
          },
          {
            heading: "Keep it clean",
            items: [
              `Do not try to use every palette color equally.`,
              `Pick one main body color and let the others support it.`,
              `Use the lightest or brightest color in smaller doses so it feels special.`
            ]
          },
          {
            heading: "Avoid muddy color",
            items: [
              `Avoid scattering similar colors everywhere in tiny pieces.`,
              `Avoid adding too many shadows in different colors.`,
              `If the drawing looks muddy, reduce the palette use to body + one accent + one shadow.`
            ]
          }
        ],
        note: "If you feel unsure, stop after flat color + one shadow + one shine spot."
      };
    }


    function defaultShadeStyleForCurrentLesson() {
      const type = document.getElementById("lessonType")?.value || "blob";
      const emotion = document.getElementById("emotion")?.value || "happy";
      if (["food", "fruit", "dessert", "breakfast", "candy", "drink", "sauce"].includes(type)) return "gummyGloss";
      if (["icon", "badge", "sticker", "logoMark", "emoji"].includes(type)) return "flatIcon";
      if (["ghost", "tinyMonster"].includes(type) || ["spooky", "hauntedHappy", "eerieCalm", "cursedAdorable"].includes(emotion)) return "spookyGlow";
      if (["shell", "aquatic", "cloud", "weatherIcon"].includes(type)) return "rainyMist";
      return "softPlush";
    }

    function getCurrentShadeContext() {
      const coach = getCurrentCoachContext();
      return {
        ...coach,
        shadeStyleKey: document.getElementById("shadeStyle")?.value || defaultShadeStyleForCurrentLesson(),
        shadeStyle: shadeStyles[document.getElementById("shadeStyle")?.value || defaultShadeStyleForCurrentLesson()] || "Soft Plush",
        lightKey: document.getElementById("lightDirection")?.value || "topLeft",
        lightDirection: lightDirections[document.getElementById("lightDirection")?.value || "topLeft"] || "Top Left",
        intensityKey: document.getElementById("shadeIntensity")?.value || "tinyShade",
        intensity: shadeIntensities[document.getElementById("shadeIntensity")?.value || "tinyShade"] || "Tiny Shade",
        outputKey: document.getElementById("shadeOutputType")?.value || "stepByStep",
        outputType: shadeOutputTypes[document.getElementById("shadeOutputType")?.value || "stepByStep"] || "Step-by-step"
      };
    }

    function getShadeRoleColors(context) {
      const colors = (context.palette.colors && context.palette.colors.length ? context.palette.colors : ["#F27BA6", "#FFB7D0", "#FFF7FB", "#8EDAF7", "#D7C4F4"]).slice();
      const body = colors[0] || "#F27BA6";
      const secondary = colors[1] || body;
      const accent = colors[2] || secondary;
      const shadow = colors[Math.max(0, colors.length - 2)] || secondary;
      const highlight = colors[Math.max(0, colors.length - 1)] || accent;
      const blush = colors[1] || "#FFB7D0";
      const outline = colors.length > 5 ? colors[0] : "#352733";
      return { body, secondary, accent, shadow, highlight, blush, outline };
    }

    function shadeSvgClasses(svg, colors) {
      if (!svg) return "";
      return svg
        .replace(/class="shape"/g, `fill="${colors.body}" stroke="${colors.outline}" stroke-width="4" stroke-linejoin="round"`)
        .replace(/class="solid"/g, `fill="${colors.outline}"`)
        .replace(/class="feature"/g, `fill="none" stroke="${colors.outline}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`)
        .replace(/class="guide"/g, `fill="none" stroke="${colors.highlight}" stroke-width="2.5" stroke-dasharray="8 8" stroke-linecap="round" stroke-linejoin="round"`);
    }

    function getSubjectShadeProfile(type) {
      const softRound = {
        label: "soft rounded mascot",
        mapNotes: [
          "Use one large curved lower-side shadow, not many little patches.",
          "Keep the highlight round and high on the form.",
          "Add a tiny contact shadow under the body so it sits on the page."
        ],
        svg: (colors) => `
          <path d="M178 320 C206 374 300 392 350 332 C334 388 296 424 250 414 C206 404 174 370 178 320 Z" fill="${colors.shadow}" opacity=".18"></path>
          <ellipse cx="215" cy="202" rx="46" ry="24" fill="#FFFFFF" opacity=".22" transform="rotate(-18 215 202)"></ellipse>
        `
      };

      const profiles = {
        ghost: {
          label: "translucent ghost",
          mapNotes: [
            "Shade very lightly under the eyes and along the lower scalloped edge.",
            "Use a pale rim glow instead of heavy body shadows.",
            "Leave the center mostly open so the ghost still feels translucent."
          ],
          svg: (colors) => `
            <path d="M155 370 C190 392 214 392 240 374 C266 392 294 392 320 374 C344 392 372 392 402 370" stroke="${colors.shadow}" stroke-width="14" stroke-linecap="round" fill="none" opacity=".18"></path>
            <ellipse cx="260" cy="214" rx="92" ry="42" fill="#FFFFFF" opacity=".16"></ellipse>
            <path d="M160 178 C198 116 320 98 366 184" stroke="${colors.highlight}" stroke-width="10" fill="none" opacity=".26" stroke-linecap="round"></path>
          `
        },
        fruit: {
          label: "round fruit form",
          mapNotes: [
            "Use one curved crescent shadow on the lower side of the fruit.",
            "Place one glossy highlight high on the opposite side.",
            "Keep blush and highlight separate so the color does not get muddy."
          ],
          svg: (colors) => `
            <path d="M190 338 C230 400 334 390 364 322 C348 388 306 424 252 410 C210 400 184 370 190 338 Z" fill="${colors.shadow}" opacity=".22"></path>
            <ellipse cx="218" cy="188" rx="42" ry="24" fill="#FFFFFF" opacity=".38" transform="rotate(-22 218 188)"></ellipse>
            <ellipse cx="244" cy="214" rx="18" ry="10" fill="#FFFFFF" opacity=".20" transform="rotate(-22 244 214)"></ellipse>
          `
        },
        snack: {
          label: "snack / candy mascot",
          mapNotes: [
            "Add a small side shadow where the form turns away from the light.",
            "Use one candy-like shine on the wrapper or top curve.",
            "Keep the edible surface clean; avoid dirty gray shadows."
          ],
          svg: (colors) => `
            <ellipse cx="320" cy="330" rx="82" ry="118" fill="${colors.shadow}" opacity=".19" transform="rotate(-15 320 330)"></ellipse>
            <ellipse cx="214" cy="200" rx="54" ry="26" fill="#FFFFFF" opacity=".30" transform="rotate(-16 214 200)"></ellipse>
            <path d="M164 382 C210 412 306 418 356 382" stroke="${colors.shadow}" stroke-width="10" fill="none" opacity=".12" stroke-linecap="round"></path>
          `
        },
        object: {
          label: "object mascot",
          mapNotes: [
            "Choose one plane as the shadow side.",
            "Put a narrow highlight on the top or front edge.",
            "Use contact shadows where handles, corners, straps, or lids overlap."
          ],
          svg: (colors) => `
            <path d="M292 166 L376 188 L382 378 L286 396 Z" fill="${colors.shadow}" opacity=".20"></path>
            <path d="M166 176 L276 156" stroke="#FFFFFF" stroke-width="10" opacity=".24" stroke-linecap="round"></path>
            <path d="M188 390 C236 414 304 414 356 390" stroke="${colors.shadow}" stroke-width="9" opacity=".18" fill="none" stroke-linecap="round"></path>
          `
        },
        icon: {
          label: "flat icon / badge",
          mapNotes: [
            "Use a thin lower-right shadow only.",
            "Use a clean top-left shine strip if needed.",
            "Keep shadows graphic and simple so the icon reads small."
          ],
          svg: (colors) => `
            <path d="M166 350 L360 350 L376 390 L150 390 Z" fill="${colors.shadow}" opacity=".18"></path>
            <path d="M164 164 L356 164" stroke="#FFFFFF" stroke-width="9" opacity=".25" stroke-linecap="round"></path>
            <path d="M372 178 L390 360" stroke="${colors.shadow}" stroke-width="8" opacity=".16" stroke-linecap="round"></path>
          `
        },
        shape: {
          label: "specific shape mascot",
          mapNotes: [
            "Shade according to the shape's geometry, not like a generic blob.",
            "Put a contact shadow where the shape visually rests.",
            "Use highlights to clarify the shape type: corner, curve, point, loop, or arch."
          ],
          svg: (colors) => `
            <path d="M178 340 C222 394 308 394 356 338" stroke="${colors.shadow}" stroke-width="18" opacity=".16" fill="none" stroke-linecap="round"></path>
            <path d="M188 178 C228 142 300 138 342 172" stroke="#FFFFFF" stroke-width="10" opacity=".22" fill="none" stroke-linecap="round"></path>
            <circle cx="260" cy="420" r="22" fill="${colors.shadow}" opacity=".11"></circle>
          `
        },
        letter: {
          label: "letter / number mascot",
          mapNotes: [
            "Use inner-edge shadows where the stroke bends.",
            "Keep the face area clear of heavy shading.",
            "Add one clean shine along the upper stroke."
          ],
          svg: (colors) => `
            <path d="M210 358 C238 384 292 384 322 356" stroke="${colors.shadow}" stroke-width="14" opacity=".17" fill="none" stroke-linecap="round"></path>
            <path d="M204 178 C234 154 296 154 326 178" stroke="#FFFFFF" stroke-width="9" opacity=".22" fill="none" stroke-linecap="round"></path>
          `
        },
        mask: {
          label: "mask / face object",
          mapNotes: [
            "Shade under eyes, nose, and lower mask edge.",
            "Use highlight on the forehead or upper cheek plane.",
            "Keep the expression readable; do not cover the eyes with shadow."
          ],
          svg: (colors) => `
            <path d="M186 336 C220 372 302 376 340 334" stroke="${colors.shadow}" stroke-width="16" opacity=".20" fill="none" stroke-linecap="round"></path>
            <ellipse cx="214" cy="202" rx="46" ry="22" fill="#FFFFFF" opacity=".22" transform="rotate(-18 214 202)"></ellipse>
            <path d="M204 286 C238 306 284 306 318 286" stroke="${colors.shadow}" stroke-width="9" opacity=".13" fill="none" stroke-linecap="round"></path>
          `
        },
        tool: {
          label: "tool / device mascot",
          mapNotes: [
            "Shade the side plane and any grip/handle overlap.",
            "Highlight the top edge to show the object is solid.",
            "Use sharper shadow shapes than you would on plush blobs."
          ],
          svg: (colors) => `
            <path d="M304 170 L376 210 L366 384 L288 402 Z" fill="${colors.shadow}" opacity=".20"></path>
            <path d="M164 180 L270 154" stroke="#FFFFFF" stroke-width="8" opacity=".24" stroke-linecap="round"></path>
            <path d="M220 390 L364 380" stroke="${colors.shadow}" stroke-width="9" opacity=".16" stroke-linecap="round"></path>
          `
        }
      };

      const fruitTypes = ["fruit", "veggie", "dessert", "drink", "egg", "mushroom"];
      const snackTypes = ["snack", "candy", "cookie", "cake", "soda"];
      const objectTypes = ["mug", "book", "bag", "shoe", "lamp", "pencil", "key", "jar", "bottle", "chair", "teapot", "camera", "clock"];
      const iconTypes = ["icon", "badge", "sticker", "logoMark", "emoji"];
      const shapeTypes = ["abstractShape", "circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack"];
      const letterTypes = ["letter", "number"];
      const maskTypes = ["mask", "monster", "softMonster", "ghost"];
      const toolTypes = ["brush", "paintTube", "eraser", "procreateBrush", "tabletPen"];

      if (type === "ghost") return profiles.ghost;
      if (fruitTypes.includes(type)) return profiles.fruit;
      if (snackTypes.includes(type)) return profiles.snack;
      if (objectTypes.includes(type)) return profiles.object;
      if (iconTypes.includes(type)) return profiles.icon;
      if (shapeTypes.includes(type)) return profiles.shape;
      if (letterTypes.includes(type)) return profiles.letter;
      if (maskTypes.includes(type)) return profiles.mask;
      if (toolTypes.includes(type)) return profiles.tool;
      return softRound;
    }

    function getShadeMapZones(context, colors) {
      const style = context.shadeStyleKey;
      const light = context.lightKey;
      const intensity = context.intensityKey;
      const type = document.getElementById("lessonType")?.value || "blob";
      const profile = getSubjectShadeProfile(type);

      const zones = {
        topLeft: {
          shadow: '<ellipse cx="318" cy="336" rx="120" ry="140" fill="' + colors.shadow + '" opacity=".26" transform="rotate(-12 318 336)"></ellipse>',
          highlight: '<ellipse cx="212" cy="208" rx="72" ry="50" fill="' + colors.highlight + '" opacity=".55" transform="rotate(-18 212 208)"></ellipse>',
          rim: '<path d="M158 178 C182 140 220 124 244 120" stroke="' + colors.highlight + '" stroke-width="8" stroke-linecap="round" fill="none" opacity=".32"></path>'
        },
        topRight: {
          shadow: '<ellipse cx="202" cy="336" rx="120" ry="140" fill="' + colors.shadow + '" opacity=".26" transform="rotate(12 202 336)"></ellipse>',
          highlight: '<ellipse cx="308" cy="208" rx="72" ry="50" fill="' + colors.highlight + '" opacity=".55" transform="rotate(18 308 208)"></ellipse>',
          rim: '<path d="M362 178 C338 140 300 124 276 120" stroke="' + colors.highlight + '" stroke-width="8" stroke-linecap="round" fill="none" opacity=".32"></path>'
        },
        frontSoft: {
          shadow: '<ellipse cx="260" cy="350" rx="124" ry="108" fill="' + colors.shadow + '" opacity=".22"></ellipse>',
          highlight: '<ellipse cx="260" cy="196" rx="84" ry="42" fill="' + colors.highlight + '" opacity=".48"></ellipse>',
          rim: ''
        },
        underGlow: {
          shadow: '<ellipse cx="260" cy="216" rx="122" ry="88" fill="' + colors.shadow + '" opacity=".22"></ellipse>',
          highlight: '<ellipse cx="260" cy="368" rx="110" ry="74" fill="' + colors.highlight + '" opacity=".58"></ellipse>',
          rim: '<ellipse cx="260" cy="402" rx="102" ry="32" fill="' + colors.highlight + '" opacity=".18"></ellipse>'
        },
        backRim: {
          shadow: '<ellipse cx="260" cy="290" rx="120" ry="146" fill="' + colors.shadow + '" opacity=".28"></ellipse>',
          highlight: '',
          rim: '<path d="M165 205 C175 140 220 118 260 118 C300 118 345 140 355 205 C366 280 338 360 260 388 C182 360 154 280 165 205 Z" stroke="' + colors.highlight + '" stroke-width="12" fill="none" opacity=".55" stroke-linejoin="round"></path>'
        }
      };

      let picked = { ...(zones[light] || zones.topLeft) };

      let blush = '<circle cx="220" cy="308" r="18" fill="' + colors.blush + '" opacity=".22"></circle><circle cx="300" cy="308" r="18" fill="' + colors.blush + '" opacity=".22"></circle>';
      let extra = profile.svg(colors);
      let labels = `
        <text class="shade-zone-label" x="374" y="286">shadow side</text>
        <text class="shade-zone-label" x="166" y="154">highlight</text>
        <text class="shade-zone-label" x="210" y="442">contact shadow</text>
      `;

      if (intensity === "tinyShade") {
        blush = '';
      }
      if (intensity === "iconPolish") {
        blush = '';
        picked.shadow = picked.shadow.replace('opacity=".26"', 'opacity=".16"').replace('opacity=".22"', 'opacity=".16"').replace('opacity=".28"', 'opacity=".18"');
        picked.highlight = picked.highlight.replace('opacity=".55"', 'opacity=".38"').replace('opacity=".48"', 'opacity=".34"').replace('opacity=".58"', 'opacity=".38"');
      }
      if (intensity === "fullCute") {
        extra += '<ellipse cx="205" cy="178" rx="22" ry="12" fill="' + colors.highlight + '" opacity=".65" transform="rotate(-18 205 178)"></ellipse>';
      }
      if (intensity === "atmospheric") {
        extra += '<ellipse cx="260" cy="440" rx="132" ry="26" fill="' + colors.shadow + '" opacity=".18"></ellipse>';
      }

      if (style === "gummyGloss") {
        extra += '<ellipse cx="190" cy="182" rx="26" ry="14" fill="#FFFFFF" opacity=".55" transform="rotate(-22 190 182)"></ellipse><ellipse cx="222" cy="210" rx="16" ry="10" fill="#FFFFFF" opacity=".35" transform="rotate(-22 222 210)"></ellipse>';
      }
      if (style === "stickerShine" || style === "flatIcon") {
        blush = '';
        extra += '<ellipse cx="208" cy="196" rx="30" ry="16" fill="#FFFFFF" opacity=".45" transform="rotate(-18 208 196)"></ellipse>';
      }
      if (style === "spookyGlow") {
        extra += '<circle cx="260" cy="270" r="142" fill="' + colors.highlight + '" opacity=".06"></circle>';
      }
      if (style === "velvetShadow") {
        picked.shadow = picked.shadow.replace('opacity=".26"', 'opacity=".33"').replace('opacity=".22"', 'opacity=".28"').replace('opacity=".18"', 'opacity=".24"');
      }
      if (style === "rainyMist") {
        extra += '<ellipse cx="260" cy="176" rx="118" ry="34" fill="' + colors.highlight + '" opacity=".15"></ellipse><ellipse cx="260" cy="392" rx="138" ry="28" fill="' + colors.highlight + '" opacity=".08"></ellipse>';
      }
      if (style === "painterlySoft") {
        extra += '<path d="M164 322 C194 296 220 302 244 316" stroke="' + colors.shadow + '" stroke-width="10" stroke-linecap="round" fill="none" opacity=".14"></path><path d="M282 182 C308 170 330 182 346 200" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" fill="none" opacity=".16"></path>';
      }

      return { shadow: picked.shadow, highlight: picked.highlight, rim: picked.rim, blush, extra, labels, profile };
    }

    function makeShadeMapSVG(context) {
      const colors = getShadeRoleColors(context);
      const type = document.getElementById("lessonType")?.value || "blob";
      const emotion = document.getElementById("emotion")?.value || "happy";
      const twist = document.getElementById("funTwist")?.value || "none";

      const rawBody = makeBody(type);
      const rawEyes = makeFace(emotion)[0];
      const rawMouth = makeFace(emotion)[1];
      const rawTwist = twists[twist] ? twists[twist][3] : "";

      const clipBody = rawBody.replace(/class="shape"/g, 'fill="#fff"');
      const body = shadeSvgClasses(rawBody, colors);
      const face = shadeSvgClasses(rawEyes + rawMouth, colors);
      const twistSvg = shadeSvgClasses(rawTwist, colors);
      const zones = getShadeMapZones(context, colors);

      return `
        <defs>
          <clipPath id="shadeClip">${clipBody}</clipPath>
        </defs>
        <rect x="0" y="0" width="520" height="560" fill="#173b63"></rect>
        <text x="24" y="38" fill="#DCEEFF" font-size="22" font-weight="800">${context.shadeStyle} · ${context.lightDirection}</text>
        <text x="24" y="62" fill="#A9C6DF" font-size="13">${context.intensity} · ${context.outputType}</text>
        <text x="24" y="84" fill="#A9C6DF" font-size="12">Subject logic: ${zones.profile.label}</text>
        <ellipse cx="260" cy="452" rx="124" ry="24" fill="#0E2B49" opacity=".55"></ellipse>

        ${body}
        <g clip-path="url(#shadeClip)">
          ${zones.shadow}
          ${zones.highlight}
          ${zones.blush}
          ${zones.extra}
        </g>
        ${zones.rim}
        ${twistSvg}
        ${face}
        ${zones.labels}

        <g>
          <rect x="24" y="470" width="156" height="64" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(220,238,255,.18)"></rect>
          <text x="40" y="492" fill="#DCEEFF" font-size="12" font-weight="800">SHADOW</text>
          <text x="40" y="510" fill="#A9C6DF" font-size="11">main form shadow</text>
          <circle cx="148" cy="502" r="10" fill="${colors.shadow}"></circle>

          <rect x="188" y="470" width="156" height="64" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(220,238,255,.18)"></rect>
          <text x="204" y="492" fill="#DCEEFF" font-size="12" font-weight="800">HIGHLIGHT</text>
          <text x="204" y="510" fill="#A9C6DF" font-size="11">shine / glow zone</text>
          <circle cx="312" cy="502" r="10" fill="${colors.highlight}"></circle>

          <rect x="352" y="470" width="144" height="64" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(220,238,255,.18)"></rect>
          <text x="368" y="492" fill="#DCEEFF" font-size="12" font-weight="800">BLUSH</text>
          <text x="368" y="510" fill="#A9C6DF" font-size="11">soft cheek warmth</text>
          <circle cx="470" cy="502" r="10" fill="${colors.blush}"></circle>
        </g>
      `;
    }

    function renderShadeMap() {
      const box = document.getElementById("shadeMapSvg");
      if (!box) return;
      const context = getCurrentShadeContext();
      box.innerHTML = makeShadeMapSVG(context);
    }

    function renderShadeContext() {
      const c = getCurrentShadeContext();
      const box = document.getElementById("shadeContext");
      if (!box) return;
      box.innerHTML = `
        <span>Subject: ${c.subject[0]}</span>
        <span>Emotion: ${c.emotion[0]}</span>
        <span>Palette: ${c.palette.label || "Auto"}</span>
        <span>Shade style: ${c.shadeStyle}</span>
        <span>Light: ${c.lightDirection}</span>
        <span>Intensity: ${c.intensity}</span>
      `;
    }

    function getShadingMapText(context) {
      const type = document.getElementById("lessonType")?.value || "blob";
      const profile = getSubjectShadeProfile(type);
      const base = [];

      if (context.lightKey === "topRight") {
        base.push(
          "Main shadow: lower-left side of the body.",
          "Highlight: upper-right side.",
          "Contact shadow: tiny shadow under the mascot."
        );
      } else if (context.lightKey === "frontSoft") {
        base.push(
          "Main shadow: soft low band across the lower body.",
          "Highlight: top-center soft oval.",
          "Contact shadow: small shadow directly underneath."
        );
      } else if (context.lightKey === "underGlow") {
        base.push(
          "Main shadow: upper half of the body.",
          "Glow highlight: lower body and lower edge.",
          "Contact shadow: keep it light so the glow still reads."
        );
      } else if (context.lightKey === "backRim") {
        base.push(
          "Main shadow: center/front plane of the body.",
          "Rim light: thin bright edge around the outside silhouette.",
          "Do not add many interior highlights with this setup."
        );
      } else {
        base.push(
          "Main shadow: lower-right side of the body.",
          "Highlight: upper-left side.",
          "Contact shadow: tiny shadow under the mascot."
        );
      }

      return [
        `Subject-specific logic: ${profile.label}.`,
        ...profile.mapNotes,
        ...base,
        "Accent shine: one tiny shine on the twist or accessory.",
        "Face-safe rule: do not cover the eyes or mouth with the main shadow."
      ];
    }

    function shadingLabFallback() {
      const c = getCurrentShadeContext();
      const roles = getShadeRoleColors(c);
      const simpleLayerPlan = c.intensityKey === "tinyShade"
        ? [
            "Layer 1: flat base color.",
            "Layer 2: contact shadow under mascot — multiply around 18–24%.",
            "Layer 3: main form shadow clipping mask — multiply around 20–25%.",
            "Layer 4: highlight clipping mask — normal/add around 30–40%."
          ]
        : [
            "Layer 1: blueprint guide at low opacity.",
            "Layer 2: rough sketch.",
            "Layer 3: clean line.",
            "Layer 4: flat body color.",
            "Layer 5: contact shadow under the mascot — multiply around 18–24%.",
            "Layer 6: main form shadow clipping mask — multiply around 20–30%.",
            "Layer 7: highlight / rim glow clipping mask — normal or add around 35–45%.",
            "Layer 8: blush / glow accents.",
            "Layer 9: optional texture polish at very low opacity."
          ];

      const styleNote = {
        softPlush: "Use very round shadow shapes. Think plush toy, not hard cel shading.",
        stickerShine: "Use clean, graphic shine spots that still read small.",
        gummyGloss: "Use one big glossy shine and maybe one tiny secondary shine.",
        painterlySoft: "Use loose soft brush shading, but stop early.",
        flatIcon: "Keep shadow simple so the mascot still reads at icon size.",
        spookyGlow: "Use soft glow instead of many hard shadows.",
        velvetShadow: "Use slightly deeper shadows, but keep the edges soft.",
        rainyMist: "Keep the contrast soft and slightly misty."
      }[c.shadeStyleKey] || "Keep it simple and readable.";

      const subjectProfile = getSubjectShadeProfile(document.getElementById("lessonType")?.value || "blob");
      const summary = `Use ${c.shadeStyle.toLowerCase()} with light from ${c.lightDirection.toLowerCase()}. This is a local smart SVG map, not AI image generation. It now uses ${subjectProfile.label} logic so the shadows fit the mascot type instead of using one generic blob shadow.`;

      const sections = [
        {
          heading: "Suggested color jobs",
          items: [
            `Body: ${roles.body}`,
            `Secondary detail: ${roles.secondary}`,
            `Shadow: ${roles.shadow}`,
            `Highlight or shine: ${roles.highlight}`,
            `Blush or warmth: ${roles.blush}`
          ]
        },
        {
          heading: "Smart local shading map",
          items: getShadingMapText(c)
        },
        {
          heading: "Traceable shadow zones",
          items: [
            "Blue map background stays separate from your drawing.",
            "Main form shadow shows the largest shadow shape to trace.",
            "Highlight zone shows where shine or glow belongs.",
            "Contact shadow shows where the mascot touches the ground.",
            "Labels identify shadow, highlight, and contact-shadow regions."
          ]
        },
        {
          heading: "Procreate layer plan",
          items: simpleLayerPlan
        },
        {
          heading: "Avoid muddy shading",
          items: [
            "Do not shade every edge.",
            "Do not use every palette color as a shadow.",
            "Do not make the shadow darker than the line art unless you want a dramatic style.",
            "Stop after one main shadow + one main shine if the mascot already reads."
          ]
        },
        {
          heading: "Version 2 shading challenge",
          items: [
            "Make one cleaner second version using fewer shading shapes.",
            "Try moving the highlight slightly higher or lower and compare the result.",
            "Export the shading map and trace only the shadow shape once."
          ]
        }
      ];

      if (c.outputKey === "mapOnly") {
        sections.splice(2, 2);
      }
      if (c.outputKey === "layersOnly") {
        sections.splice(0, 2);
      }

      return {
        title: `Tabular Motion + Organized Navigation — ${c.shadeStyle}`,
        summary,
        sections,
        note: styleNote
      };
    }

    function renderShadeOutput(data) {
      const title = document.getElementById("shadeOutputTitle");
      const body = document.getElementById("shadeOutputBody");
      if (!title || !body) return;
      title.textContent = data.title || "Tabular Motion + Organized Navigation";

      const context = getCurrentShadeContext();
      const roles = getShadeRoleColors(context);
      const chips = `
        <div class="shade-chip-row">
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.body}"></span>Body</span>
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.shadow}"></span>Shadow</span>
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.highlight}"></span>Highlight</span>
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.blush}"></span>Blush</span>
        </div>
      `;

      const summary = data.summary ? `<div class="coach-summary">${data.summary}</div>` : "";
      const sections = (data.sections || []).map(section => `
        <section class="coach-section">
          <h4>${section.heading}</h4>
          <ul>${(section.items || []).map(item => `<li>${item}</li>`).join("")}</ul>
        </section>
      `).join("");
      const note = data.note ? `<div class="coach-inline-note">${data.note}</div>` : "";
      body.innerHTML = summary + chips + sections + note;
    }

    async function callShadingModel() {
      const key = document.getElementById("apiKey")?.value.trim();
      const model = document.getElementById("model")?.value.trim() || "openrouter/free";
      const context = getCurrentShadeContext();

      if (!key) return shadingLabFallback();
      saveSettings();

      const system = `You are a beginner shading coach for mascot drawing in Procreate. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Focus on simple mascot shading: assign palette color roles, explain where the shadow goes, where the highlight goes, give a simple Procreate layer plan, and what to avoid so the drawing does not get muddy. Keep it concise, practical, and beginner-safe.`;

      const payload = {
        subject: context.subject[0],
        emotion: context.emotion[0],
        twist: context.twist[0],
        palette: context.palette.label || "Auto",
        paletteColors: context.palette.colors || [],
        shadingStyle: context.shadeStyle,
        lightDirection: context.lightDirection,
        shadingIntensity: context.intensity,
        outputType: context.outputType,
        lessonSize: context.lesson[0]
      };

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${key}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href,
          "X-Title": "Mascot Spark V24"
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: system },
            { role: "user", content: JSON.stringify(payload) }
          ],
          temperature: 0.55,
          max_tokens: 900
        })
      });

      if (!res.ok) throw new Error("OpenRouter error " + res.status + ": " + (await res.text()).slice(0, 220));
      const raw = await res.json();
      const text = raw.choices && raw.choices[0] && raw.choices[0].message ? raw.choices[0].message.content : "";
      const data = extractJson(text);
      if (!data) throw new Error("AI response was not usable JSON.");
      return data;
    }

    async function runShadingLab() {
      showTab("tab-shade");
      renderShadeContext();
      renderEmotionLessonHint(data);
      renderShadeMap();
      status("Building shading plan...", "");
      try {
        const data = await callShadingModel();
        renderShadeOutput(data);
        status("Shading plan ready.", "ok");
      } catch (err) {
        renderShadeOutput(shadingLabFallback());
        status(err.message + " Showing offline shading plan instead.", "bad");
      }
    }

    function setShadePreset(mode) {
      if (mode === "simpler") {
        document.getElementById("shadeIntensity").value = "tinyShade";
        document.getElementById("shadeOutputType").value = "stepByStep";
        if (document.getElementById("shadeStyle").value === "velvetShadow") document.getElementById("shadeStyle").value = "softPlush";
      }
      if (mode === "glossy") {
        document.getElementById("shadeStyle").value = "gummyGloss";
        document.getElementById("shadeIntensity").value = "fullCute";
        document.getElementById("lightDirection").value = "topLeft";
      }
      if (mode === "icon") {
        document.getElementById("shadeStyle").value = "flatIcon";
        document.getElementById("shadeIntensity").value = "iconPolish";
        document.getElementById("shadeOutputType").value = "mapOnly";
      }
      renderShadeContext();
      renderShadeMap();
      renderShadeOutput(shadingLabFallback());
      status("Shade Lab preset applied.", "ok");
    }

    function downloadShadeMapSvg() {
      const svg = document.getElementById("shadeMapSvg");
      if (!svg) return;
      const doc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 560">${svg.innerHTML}</svg>`;
      downloadBlob(new Blob([doc], { type: "image/svg+xml;charset=utf-8" }), "mascot-spark-shading-map.svg");
      status("Shading map SVG exported.", "ok");
    }

    function downloadShadeMapPng() {
      const svg = document.getElementById("shadeMapSvg");
      if (!svg) return;
      downloadSvgElementAsPng(svg, "mascot-spark-shading-map.png");
    }

    
    const TWIST_BLUEPRINT_PASS_1 = [
      "sparkle",
      "hat",
      "patch",
      "charm",
      "freckle",
      "bow",
      "halo",
      "fang",
      "glow",
      "ribbon",
      "stitches",
      "leaf",
      "starCheek",
      "button",
      "teardrop",
      "bandage",
      "crown",
      "cape",
      "wings",
      "antenna",
      "question",
      "moon",
      "heart",
      "glasses",
      "scarf",
      "paint",
      "shine",
      "thread",
      "raindrop",
      "sprout",
      "zipper",
      "safetyPin",
      "bell",
      "flowerPin",
      "brokenHeart",
      "gumdropShine",
      "ghostWisp",
      "threadLoop",
      "tinyBoots",
      "oneMitten",
      "blanket",
      "peelCorner",
      "waxSeal",
      "crescentBrow",
      "mismatchedButtons",
      "tinyBackpack",
      "bowtie",
      "floatingStar",
      "blushStripe",
      "tinySatchel",
      "tinyEarring",
      "jellyDrip",
      "tinyKey",
      "barcodeStripe",
      "tinyEnvelope",
      "constellationDots",
      "tinyLace",
      "candyWrapperEnds",
      "sleepyBubble",
      "tinyUmbrella",
      "stitchedSmilePatch",
      "tinyNameTag",
      "littleHorns",
      "floatingCrownSpark",
      "tinyPocket",
      "pearlChain",
      "littleMask",
      "tinyPawPrint",
      "cometTail",
      "tinyLantern",
      "ribbonTag",
      "tinyBook",
      "softSpikes",
      "tinyMushroomCap",
      "yarnBall",
      "tinyTeacup",
      "magicRune",
      "cloudTuft",
      "tinyFlag",
      "pinwheel",
      "tinyBandana",
      "stickerGloss",
      "tinyCompass",
      "littleBowBack",
      "tinyPatchSet",
      "sparkleTrail",
      "tinyCandle",
      "tinyRibbonPiercing",
      "paintSplatter",
      "littlePlanetRing",
    ];

    function getTwistBlueprintGuide(twist) {
      const guides = {
        sparkle: {
          overlay: '<circle class="guide" cx="380" cy="158" r="34"></circle><path class="guide" d="M380 120 L380 196 M342 158 L418 158"></path>',
          label: "Twist guide: keep the sparkle in a corner zone away from the face."
        },
        hat: {
          overlay: '<rect class="guide" x="210" y="82" width="100" height="58" rx="14"></rect><line class="guide" x1="210" y1="140" x2="310" y2="140"></line>',
          label: "Twist guide: rest the tiny hat above the head, not over the eyes."
        },
        patch: {
          overlay: '<rect class="guide" x="326" y="300" width="58" height="52" rx="14"></rect>',
          label: "Twist guide: place the patch on the outer side wall, not the center face."
        },
        charm: {
          overlay: '<path class="guide" d="M360 322 Q400 352 390 402"></path><circle class="guide" cx="392" cy="416" r="26"></circle>',
          label: "Twist guide: use a side hanging path first, then place the charm shape."
        },
        freckle: {
          overlay: '<circle class="guide" cx="202" cy="308" r="18"></circle><circle class="guide" cx="328" cy="308" r="18"></circle>',
          label: "Twist guide: keep freckles in the cheek zones and make them tiny."
        },
        bow: {
          overlay: '<ellipse class="guide" cx="230" cy="155" rx="42" ry="28"></ellipse><circle class="guide" cx="230" cy="155" r="10"></circle>',
          label: "Twist guide: build a small bow side-cluster, then add the knot in the middle."
        },
        halo: {
          overlay: '<ellipse class="guide" cx="260" cy="92" rx="74" ry="24"></ellipse>',
          label: "Twist guide: float the halo above the mascot with a little breathing room."
        },
        fang: {
          overlay: '<rect class="guide" x="254" y="304" width="28" height="34" rx="8"></rect>',
          label: "Twist guide: the fang should hang from the mouth zone, not become the mouth."
        },
        glow: {
          overlay: '<path class="guide" d="M116 188 Q90 170 72 146"></path><path class="guide" d="M404 188 Q430 170 448 146"></path>',
          label: "Twist guide: keep glow marks on the outside silhouette as side accents."
        },
        ribbon: {
          overlay: '<path class="guide" d="M350 344 L430 380 L382 406 L430 438 L346 404"></path>',
          label: "Twist guide: let the ribbon trail from one side and stay behind the body."
        },
        stitches: {
          overlay: '<rect class="guide" x="142" y="214" width="46" height="118" rx="14"></rect>',
          label: "Twist guide: stack small stitch marks in a side strip, not all over."
        },
        leaf: {
          overlay: '<path class="guide" d="M260 138 C260 98 300 90 322 112 C292 118 274 130 260 138 Z"></path>',
          label: "Twist guide: grow the leaf from the top edge like a sprout."
        },
        starCheek: {
          overlay: '<circle class="guide" cx="202" cy="310" r="24"></circle>',
          label: "Twist guide: keep the star cheek inside one cheek circle only."
        },
        button: {
          overlay: '<circle class="guide" cx="203" cy="305" r="24"></circle>',
          label: "Twist guide: place the button cheek on one side and keep it smaller than the eye."
        },
        teardrop: {
          overlay: '<path class="guide" d="M320 270 C344 296 344 320 320 330 C296 320 296 296 320 270 Z"></path>',
          label: "Twist guide: hang the teardrop under one eye, not at the mouth."
        },
        bandage: {
          overlay: '<rect class="guide" x="326" y="278" width="66" height="38" rx="14"></rect><line class="guide" x1="346" y1="286" x2="370" y2="310"></line><line class="guide" x1="370" y1="286" x2="346" y2="310"></line>',
          label: "Twist guide: place the bandage on one side and keep it smaller than the face."
        },
        crown: {
          overlay: '<path class="guide" d="M214 142 L238 96 L260 136 L284 96 L308 142 Z"></path><line class="guide" x1="212" y1="146" x2="310" y2="146"></line>',
          label: "Twist guide: float the crown just above the top edge with a clear base line."
        },
        cape: {
          overlay: '<path class="guide" d="M166 238 C108 284 124 372 196 398"></path><path class="guide" d="M166 238 Q190 278 196 398"></path>',
          label: "Twist guide: keep the cape behind the body and visible on one side only."
        },
        wings: {
          overlay: '<path class="guide" d="M150 270 C94 226 88 316 146 326"></path><path class="guide" d="M370 270 C426 226 432 316 374 326"></path>',
          label: "Twist guide: mirror the wings lightly, but keep them smaller than the body."
        },
        antenna: {
          overlay: '<path class="guide" d="M230 145 Q210 100 180 95"></path><path class="guide" d="M290 145 Q310 100 340 95"></path><circle class="guide" cx="180" cy="95" r="12"></circle><circle class="guide" cx="340" cy="95" r="12"></circle>',
          label: "Twist guide: attach antennae to the top curve and keep their tips tiny."
        },
        question: {
          overlay: '<path class="guide" d="M365 225 C385 205 420 218 410 248 C405 264 385 267 385 285"></path><circle class="guide" cx="385" cy="310" r="12"></circle>',
          label: "Twist guide: keep the question charm floating to the side, not over the eyes."
        },
        moon: {
          overlay: '<circle class="guide" cx="350" cy="305" r="34"></circle><circle class="guide" cx="362" cy="305" r="28"></circle>',
          label: "Twist guide: place the crescent mark in a side patch zone."
        },
        heart: {
          overlay: '<path class="guide" d="M205 292 C190 275 165 292 180 315 L205 340 L230 315 C245 292 220 275 205 292 Z"></path>',
          label: "Twist guide: place the heart patch on the cheek or side, never covering the mouth."
        },
        glasses: {
          overlay: '<circle class="guide" cx="225" cy="265" r="32"></circle><circle class="guide" cx="295" cy="265" r="32"></circle><line class="guide" x1="257" y1="265" x2="263" y2="265"></line>',
          label: "Twist guide: align glasses to the eye line before drawing rims."
        },
        scarf: {
          overlay: '<line class="guide" x1="192" y1="338" x2="328" y2="338"></line><path class="guide" d="M285 338 L334 386"></path>',
          label: "Twist guide: wrap the scarf below the face and let one tail hang."
        },
        paint: {
          overlay: '<path class="guide" d="M330 160 C348 196 324 214 338 246 C362 218 370 184 350 160"></path>',
          label: "Twist guide: keep the paint drip at the top or side edge as one rounded drip."
        },
        shine: {
          overlay: '<ellipse class="guide" cx="210" cy="190" rx="38" ry="18" transform="rotate(-25 210 190)"></ellipse>',
          label: "Twist guide: put the glossy shine on the light side and keep it oval."
        },
        thread: {
          overlay: '<path class="guide" d="M150 206 L184 334"></path><path class="guide" d="M155 210 L178 226 M150 250 L178 262 M154 292 L180 292 M164 330 L188 314"></path>',
          label: "Twist guide: stitch along one edge strip instead of scattering stitches."
        },
        raindrop: {
          overlay: '<path class="guide" d="M385 220 C410 252 410 278 385 292 C360 278 360 252 385 220 Z"></path>',
          label: "Twist guide: hang the raindrop as a side bead or under-eye droplet."
        },
        sprout: {
          overlay: '<line class="guide" x1="260" y1="145" x2="260" y2="104"></line><path class="guide" d="M260 112 C235 90 210 108 220 130"></path><path class="guide" d="M260 112 C285 90 310 108 300 130"></path>',
          label: "Twist guide: grow the sprout from the top center with two simple leaves."
        }
,
        zipper: {
          overlay: '<line class="guide" x1="362" y1="186" x2="362" y2="356"></line><path class="guide" d="M350 228 L374 228 M350 260 L374 260 M350 292 L374 292 M350 324 L374 324"></path>',
          label: "Twist guide: place the zipper on one outer side strip and keep the teeth evenly spaced."
        },
        safetyPin: {
          overlay: '<path class="guide" d="M346 286 C386 252 416 326 368 336"></path><path class="guide" d="M368 336 L388 350"></path>',
          label: "Twist guide: let the safety pin sit along one side curve like a clipped accent."
        },
        bell: {
          overlay: '<path class="guide" d="M360 260 C334 260 334 300 360 314 C386 300 386 260 360 260 Z"></path><circle class="guide" cx="360" cy="322" r="8"></circle>',
          label: "Twist guide: keep the bell small and hanging near the lower side edge."
        },
        flowerPin: {
          overlay: '<circle class="guide" cx="342" cy="214" r="16"></circle><circle class="guide" cx="342" cy="188" r="16"></circle><circle class="guide" cx="366" cy="202" r="16"></circle><circle class="guide" cx="318" cy="202" r="16"></circle><circle class="guide" cx="342" cy="216" r="8"></circle>',
          label: "Twist guide: make the flower pin a tiny petal cluster on one upper side."
        },
        brokenHeart: {
          overlay: '<path class="guide" d="M210 292 C194 274 168 292 182 314 L208 340 L220 324 L232 340 L258 314 C272 292 246 274 230 292 Z"></path><line class="guide" x1="220" y1="302" x2="220" y2="330"></line>',
          label: "Twist guide: keep the broken heart patch cheek-sized and split by one center crack."
        },
        gumdropShine: {
          overlay: '<ellipse class="guide" cx="206" cy="188" rx="34" ry="20" transform="rotate(-25 206 188)"></ellipse><ellipse class="guide" cx="226" cy="212" rx="16" ry="10" transform="rotate(-25 226 212)"></ellipse>',
          label: "Twist guide: use two shine ovals on the light side like glossy candy."
        },
        ghostWisp: {
          overlay: '<path class="guide" d="M372 210 C410 204 424 242 400 262 C420 276 414 310 382 314"></path>',
          label: "Twist guide: float the wisp near the outside edge and keep it airy, not thick."
        },
        threadLoop: {
          overlay: '<path class="guide" d="M150 204 Q128 240 150 272 Q174 306 150 338"></path>',
          label: "Twist guide: make one looping thread line on an edge instead of tangling the whole mascot."
        },
        tinyBoots: {
          overlay: '<rect class="guide" x="208" y="398" width="38" height="28" rx="8"></rect><rect class="guide" x="274" y="398" width="38" height="28" rx="8"></rect>',
          label: "Twist guide: place the boots under the body and keep them blocky and tiny."
        },
        oneMitten: {
          overlay: '<circle class="guide" cx="374" cy="334" r="22"></circle><path class="guide" d="M352 334 L330 326"></path>',
          label: "Twist guide: put the mitten on one hand side only so it reads as a cute mismatch."
        },
        blanket: {
          overlay: '<path class="guide" d="M156 262 Q260 230 364 262 L338 388 Q260 410 182 388 Z"></path>',
          label: "Twist guide: let the blanket wrap the lower half, leaving the face fully visible."
        },
        peelCorner: {
          overlay: '<path class="guide" d="M334 150 Q374 150 374 190 Q354 182 334 150 Z"></path>',
          label: "Twist guide: curl one top corner only so the peel effect stays readable."
        },
        waxSeal: {
          overlay: '<circle class="guide" cx="350" cy="280" r="30"></circle>',
          label: "Twist guide: place the wax seal as one centered side stamp, not near the eyes."
        },
        crescentBrow: {
          overlay: '<path class="guide" d="M192 224 C214 200 242 218 232 238 C220 230 204 226 192 224 Z"></path>',
          label: "Twist guide: keep the crescent brow just above one eye as a small mood accent."
        },
        mismatchedButtons: {
          overlay: '<circle class="guide" cx="204" cy="304" r="20"></circle><circle class="guide" cx="324" cy="318" r="14"></circle>',
          label: "Twist guide: use two uneven button accents so the mismatch reads clearly."
        },
        tinyBackpack: {
          overlay: '<rect class="guide" x="346" y="286" width="54" height="76" rx="16"></rect><path class="guide" d="M356 286 Q373 266 390 286"></path>',
          label: "Twist guide: place the backpack behind one side of the body like a strapped accessory."
        },
        bowtie: {
          overlay: '<path class="guide" d="M220 338 L250 354 L220 370 Z M300 338 L270 354 L300 370 Z"></path><circle class="guide" cx="260" cy="354" r="8"></circle>',
          label: "Twist guide: center the bowtie below the mouth and keep it smaller than the face."
        },
        floatingStar: {
          overlay: '<path class="guide" d="M374 182 L380 196 L395 200 L380 204 L374 218 L368 204 L353 200 L368 196 Z"></path>',
          label: "Twist guide: let the floating star hover in a corner zone away from the main face."
        },
        blushStripe: {
          overlay: '<rect class="guide" x="178" y="296" width="46" height="12" rx="6"></rect><rect class="guide" x="296" y="296" width="46" height="12" rx="6"></rect>',
          label: "Twist guide: keep blush stripes low on the cheeks and shorter than the eye width."
        },
        tinySatchel: {
          overlay: '<path class="guide" d="M324 286 Q358 250 392 286"></path><rect class="guide" x="346" y="286" width="62" height="54" rx="12"></rect>',
          label: "Twist guide: hang the satchel from a strap arc and keep the bag body small."
        }

      };

      return guides[twist] || {
        overlay: '',
        label: twist === "none"
          ? "Twist guide: no extra twist selected."
          : "Twist guide: custom blueprint guide not added yet."
      };
    }

    function twistBlueprintBadge(twist) {
      if (twist === "none") return "Twist blueprint: none selected";
      return TWIST_BLUEPRINT_PASS_1.includes(twist)
        ? "Twist blueprint: full current set supported"
        : "Twist blueprint: fallback guide";
    }


    const lightingTypeMap = {
      auto: {
        label: "Auto lighting",
        highlightZone: "The app chooses a simple light direction from the emotion, subject, and shading goal.",
        coreShadowZone: "Use one soft shadow opposite the chosen light source.",
        castShadowDirection: "Short shadow under the body unless the chosen lighting says otherwise.",
        faceRule: "Keep the face clear; never put a heavy shadow across the eyes and mouth.",
        beginnerTip: "Let auto pick for you when you only want to draw.",
        bestFor: "Fast lessons, first sketches, and beginner Procreate sessions.",
        avoidFor: "Final polish decisions where you want a specific dramatic look."
      },
      topLeft: {
        label: "Top-left light",
        highlightZone: "Upper-left edge of the body, top of cheeks, and the top-left accessory edge.",
        coreShadowZone: "Lower-right body curve and under the face details.",
        castShadowDirection: "Down and slightly right.",
        faceRule: "Keep shadows below the eyes; use a tiny cheek shadow only.",
        beginnerTip: "This is the safest default: highlight top-left, shadow bottom-right.",
        bestFor: "Simple/core emotions, blobs, plush mascots, food, and beginner lessons.",
        avoidFor: "Spooky underlighting or neon rim looks."
      },
      topRight: {
        label: "Top-right light",
        highlightZone: "Upper-right body edge and right side of glossy details.",
        coreShadowZone: "Lower-left body curve and underside of limbs.",
        castShadowDirection: "Down and slightly left.",
        faceRule: "Do not shade across the mouth; keep the left cheek shadow tiny.",
        beginnerTip: "Mirror the normal top-left plan.",
        bestFor: "Remixes, mirrored stickers, and right-facing poses.",
        avoidFor: "Designs with important details on the lower-left edge."
      },
      straightAbove: {
        label: "Straight-above light",
        highlightZone: "Top ridge of the body, top of accessories, and upper forehead zone.",
        coreShadowZone: "Bottom edge, under arms, under feet, and below any overhang.",
        castShadowDirection: "Small shadow directly below the mascot.",
        faceRule: "Avoid forehead glare that crowds the eyes.",
        beginnerTip: "Think umbrella light: top bright, bottom soft.",
        bestFor: "Icons, badges, stationary poses, and symmetrical mascots.",
        avoidFor: "Dramatic spooky moods."
      },
      softWindow: {
        label: "Soft window light",
        highlightZone: "A broad soft patch on one upper side, not a sharp streak.",
        coreShadowZone: "A wide gentle shadow on the opposite lower side.",
        castShadowDirection: "Soft oval cast shadow leaning away from the window.",
        faceRule: "Use a translucent face shadow only if the expression stays readable.",
        beginnerTip: "Use a large soft brush at low opacity.",
        bestFor: "Soft/sad/tender emotions, plush, paper, chalky, and cozy scenes.",
        avoidFor: "Hard sticker gloss or metallic shine."
      },
      stickerGloss: {
        label: "Sticker gloss",
        highlightZone: "One clean crescent or oval shine on the upper body surface.",
        coreShadowZone: "Thin lower-edge shadow and contact shadow only.",
        castShadowDirection: "Tiny offset shadow behind the sticker.",
        faceRule: "Place gloss away from pupils and mouth.",
        beginnerTip: "One glossy mark is enough. Do not sprinkle shine everywhere.",
        bestFor: "Badges, logos, icons, glossy stickers, and app-icon mascots.",
        avoidFor: "Velvet, chalk, crayon, or ghostly translucent looks."
      },
      moonGlow: {
        label: "Moon glow",
        highlightZone: "Cool rim on the top or side edge, plus tiny glow on accessories.",
        coreShadowZone: "Soft violet/blue shadow under the body and opposite the rim.",
        castShadowDirection: "Faint shadow, usually down and away from the moon side.",
        faceRule: "Let the face stay sweet; avoid horror shadows over the eyes.",
        beginnerTip: "Use blue/lilac shadows instead of muddy gray.",
        bestFor: "Spooky/eerie/cursed, soft sad, magical, ghosts, moons, and nighttime mascots.",
        avoidFor: "Warm food mascots unless the scene is intentionally night-themed."
      },
      candleGlow: {
        label: "Candle glow",
        highlightZone: "Warm orange/yellow glow from below or one lower side.",
        coreShadowZone: "Upper opposite edge and under overhangs.",
        castShadowDirection: "Shadow leans upward/back from the candle direction.",
        faceRule: "Use warm glow under cheeks, but do not make the mouth muddy.",
        beginnerTip: "Warm light, cooler shadow. Keep the glow small.",
        bestFor: "Cozy spooky, tiny candles, potions, plush scenes, and warm ghost mascots.",
        avoidFor: "Clean corporate logo marks."
      },
      neonSide: {
        label: "Neon side light",
        highlightZone: "Bright colored rim on one side edge and tiny sparkle accents.",
        coreShadowZone: "Opposite inner body side with a saturated dark shadow.",
        castShadowDirection: "Short shadow away from the neon side.",
        faceRule: "Keep neon rim outside the face zone.",
        beginnerTip: "Use color, not white, for the rim highlight.",
        bestFor: "Magical/glam emotions, holographic material, cyber stickers, and dramatic icons.",
        avoidFor: "Quiet beginner-simple lessons."
      },
      spookyUnderlight: {
        label: "Spooky underlight",
        highlightZone: "Lower edge of the face/body, under cheeks, and bottom of accessories.",
        coreShadowZone: "Upper eye sockets, top body edge, and behind brow shapes.",
        castShadowDirection: "Shadow rises behind or above the mascot.",
        faceRule: "Keep it cute: do not black out the eyes.",
        beginnerTip: "Use a tiny under-glow first; stop before it becomes muddy.",
        bestFor: "Spooky/eerie/cursed emotions, ghosts, masks, monsters, and Halloween stickers.",
        avoidFor: "Happy simple/core mascots unless intentionally funny."
      },
      backlightRim: {
        label: "Backlight rim",
        highlightZone: "Thin rim around the outer silhouette, strongest on one back edge.",
        coreShadowZone: "Front body form stays darker and simple.",
        castShadowDirection: "Soft forward shadow under the body.",
        faceRule: "Do not rim-light inside the face; keep expression simple.",
        beginnerTip: "Draw the rim last on a separate layer.",
        bestFor: "Magical/glam, dramatic plush, icons, and silhouettes that need pop.",
        avoidFor: "Busy tiny accessories."
      },
      tinyButtonGloss: {
        label: "Tiny button gloss",
        highlightZone: "Small dot or oval highlights on button-like forms and eyes.",
        coreShadowZone: "Thin lower crescent under each button form.",
        castShadowDirection: "Almost none; use a small contact dot below the mascot.",
        faceRule: "Eye highlights must be tiny and consistent.",
        beginnerTip: "One dot highlight per shiny form.",
        bestFor: "Badge, logo, icon, button, charm, and sticker mascots.",
        avoidFor: "Soft matte plush or paper-cutout styles."
      }
    };

    const shapeShadowRules = {
      blob: {
        label: "Blob / rounded body",
        shadowMap: "Soft crescent along the lower opposite side; small contact oval underneath.",
        highlightMap: "One soft oval or rim on the upper light side.",
        avoid: "Do not outline the whole blob with shadow.",
        iconWarning: "At icon size, keep one body shadow and one highlight only."
      },
      food: {
        label: "Food mascot",
        shadowMap: "Put form shadow under toppings, lower curves, and bite-like overhangs.",
        highlightMap: "Use juicy or soft highlights on the freshest-looking edge.",
        avoid: "Avoid gray shadows that make food look dirty.",
        iconWarning: "Tiny sprinkles and texture vanish quickly; enlarge one food cue."
      },
      object: {
        label: "Object character",
        shadowMap: "Shadow the underside, seams, handles, and base contact.",
        highlightMap: "Highlight the edge that explains the object form.",
        avoid: "Do not shade every mechanical detail.",
        iconWarning: "One object cue must stay bigger than the face."
      },
      shape: {
        label: "Specific shape",
        shadowMap: "Use the shadow to reinforce the selected geometry, not to turn it into a blob.",
        highlightMap: "Place highlight along the clearest top plane or curve.",
        avoid: "Avoid over-rounding corners if the shape must read clearly.",
        iconWarning: "The silhouette must read before shadows or accessories."
      },
      badge: {
        label: "Badge / emblem",
        shadowMap: "Use a clean drop shadow behind the badge and a thin lower inner shadow.",
        highlightMap: "Sticker gloss or top rim highlight works best.",
        avoid: "Do not add noisy texture inside the emblem.",
        iconWarning: "Badge details must be bold and centered."
      },
      mask: {
        label: "Mask",
        shadowMap: "Shadow under eye holes, lower mask edge, and side curve.",
        highlightMap: "Highlight forehead or cheek planes lightly.",
        avoid: "Do not darken the expression so much it becomes unreadable.",
        iconWarning: "Eye shape must remain clear at tiny size."
      },
      logo: {
        label: "Logo mark",
        shadowMap: "Use one offset shadow or one inner lower edge shadow.",
        highlightMap: "Use a restrained gloss or rim if it supports the mark.",
        avoid: "Avoid painterly shading that weakens brand-readability.",
        iconWarning: "Remove any detail that does not read as a logo silhouette."
      },
      ghost: {
        label: "Ghost",
        shadowMap: "Use translucent underside shadow at the wavy drape and faint inner folds.",
        highlightMap: "Use moon rim or soft glow along the head curve.",
        avoid: "Do not fill the ghost with heavy gray.",
        iconWarning: "Bottom waves must be simple and large."
      },
      cloud: {
        label: "Cloud",
        shadowMap: "Shadow under puff overlaps and bottom puffs only.",
        highlightMap: "Place soft highlights on top puffs.",
        avoid: "Avoid too many puff shadows; it becomes lumpy.",
        iconWarning: "Use three to five clear puffs maximum."
      },
      gem: {
        label: "Gem",
        shadowMap: "Use one or two faceted shadow planes.",
        highlightMap: "Use crisp triangular or streak highlights.",
        avoid: "Do not draw every facet line.",
        iconWarning: "A gem needs one big facet cue, not many tiny cuts."
      },
      bottle: {
        label: "Bottle / potion",
        shadowMap: "Shadow one side wall, under the neck, and at the base.",
        highlightMap: "Vertical highlight on glass or glossy material.",
        avoid: "Do not hide the label or face behind shine.",
        iconWarning: "Bottle neck and body ratio must stay readable."
      },
      box: {
        label: "Box / package",
        shadowMap: "Shadow the side plane and under the top flap.",
        highlightMap: "Highlight the top plane or front edge.",
        avoid: "Do not shade all planes equally.",
        iconWarning: "Top flap must stay clear at icon size."
      },
      plant: {
        label: "Plant",
        shadowMap: "Shadow under leaves, inside pot lip, and where stem meets body.",
        highlightMap: "Highlight leaf tips and the pot's top edge.",
        avoid: "Avoid muddy greens; use darker saturated green instead.",
        iconWarning: "Leaves should be larger than tiny texture marks."
      },
      letter: {
        label: "Letter mascot",
        shadowMap: "Use inner stroke shadows where letter strokes overlap or curve.",
        highlightMap: "Highlight the top-left stroke edge.",
        avoid: "Do not cover the letterform with face or texture.",
        iconWarning: "The letter must read before the mascot details."
      },
      number: {
        label: "Number mascot",
        shadowMap: "Shadow the lower inside curve or base of the number.",
        highlightMap: "Highlight the top stroke or outer curve.",
        avoid: "Avoid shadows that make the number look like another digit.",
        iconWarning: "Number recognition beats decoration."
      },
      softMonster: {
        label: "Soft monster",
        shadowMap: "Shadow under horns, belly, limbs, and lower body.",
        highlightMap: "Highlight forehead, cheek, and outer plush curve.",
        avoid: "Do not make spikes or horns too dark and scary unless intended.",
        iconWarning: "Monster silhouette should read as cute first."
      }
    };

    const materialRecipeMap = {
      auto: {
        label: "Auto material",
        shadowStyle: "Chosen from subject and shading goal.",
        highlightStyle: "Simple highlight that matches the automatic material.",
        texturePass: "One optional texture pass only.",
        procreateBrushHint: "Use a soft brush until a material is selected.",
        layerMode: "Normal or Multiply at low opacity.",
        avoid: "Do not mix every material at once.",
        beginnerTip: "Auto is safe when you want to focus on drawing."
      },
      plush: {
        label: "Plush",
        shadowStyle: "Soft fuzzy shadows around lower curves and seams.",
        highlightStyle: "Wide, soft, low-contrast highlight.",
        texturePass: "Tiny fabric fuzz on a separate low-opacity layer.",
        procreateBrushHint: "Soft airbrush plus light noise or pencil texture.",
        layerMode: "Multiply shadow, Add or Screen highlight very lightly.",
        avoid: "Avoid hard glossy streaks.",
        beginnerTip: "Think stuffed toy: soft edges, no sharp shine."
      },
      gummy: {
        label: "Gummy",
        shadowStyle: "Saturated inner shadows near the lower edge.",
        highlightStyle: "Small bright jelly shine plus soft body glow.",
        texturePass: "Very little texture; gummy is smooth.",
        procreateBrushHint: "Soft brush for color, hard round for shine.",
        layerMode: "Multiply shadow, Add highlight.",
        avoid: "Avoid gray shadows; use darker candy color.",
        beginnerTip: "Use one white shine and one colored shadow."
      },
      clay: {
        label: "Clay",
        shadowStyle: "Matte rounded form shadow.",
        highlightStyle: "Subtle broad highlight with no sharp sparkle.",
        texturePass: "Optional gentle grain or fingerprint hint.",
        procreateBrushHint: "Gouache, clay, or soft chalk brush.",
        layerMode: "Multiply at low opacity.",
        avoid: "Avoid glassy highlights.",
        beginnerTip: "Clay is matte: keep shine quiet."
      },
      paperCutout: {
        label: "Paper cutout",
        shadowStyle: "Small offset cast shadow behind paper layers.",
        highlightStyle: "Minimal; maybe a tiny top-edge lift.",
        texturePass: "Paper grain only if large enough to see.",
        procreateBrushHint: "Flat brush, paper texture, or dry ink.",
        layerMode: "Multiply drop shadow.",
        avoid: "Avoid rounded 3D shading that fights the flat cutout.",
        beginnerTip: "Use shadows between layers, not across the whole face."
      },
      glossySticker: {
        label: "Glossy sticker",
        shadowStyle: "Thin sticker drop shadow and lower edge shadow.",
        highlightStyle: "Clean crescent, oval, or corner gloss.",
        texturePass: "No texture unless it is a printed sticker effect.",
        procreateBrushHint: "Hard round/monoline for gloss; soft shadow below.",
        layerMode: "Multiply shadow, Add/Screen gloss.",
        avoid: "Avoid many shine marks.",
        beginnerTip: "One glossy mark sells the whole sticker."
      },
      glass: {
        label: "Glass",
        shadowStyle: "Translucent colored edge shadow and base shadow.",
        highlightStyle: "Sharp white edge streaks plus faint inner glow.",
        texturePass: "No rough texture.",
        procreateBrushHint: "Hard brush for highlights, soft brush for inner tint.",
        layerMode: "Add highlights, Multiply or Linear Burn tint carefully.",
        avoid: "Avoid filling the whole body opaque gray.",
        beginnerTip: "Glass needs edges more than filled-in shading."
      },
      metallic: {
        label: "Metallic",
        shadowStyle: "Hard banded shadows with strong value contrast.",
        highlightStyle: "Sharp bright bands or edge streaks.",
        texturePass: "Optional tiny scratches, but only after form reads.",
        procreateBrushHint: "Hard round, flat brush, or monoline.",
        layerMode: "Multiply shadows, Add highlights.",
        avoid: "Avoid soft plush shading.",
        beginnerTip: "Metal is contrast: dark band, light band, clean edge."
      },
      velvet: {
        label: "Velvet",
        shadowStyle: "Deep soft shadows with rich color.",
        highlightStyle: "Low, plush directional sheen.",
        texturePass: "Fine nap texture in the light direction.",
        procreateBrushHint: "Soft brush plus subtle noise.",
        layerMode: "Multiply shadow, Overlay/Soft Light sheen.",
        avoid: "Avoid white glossy shine.",
        beginnerTip: "Velvet highlight is colored and soft, not white."
      },
      frosting: {
        label: "Frosting",
        shadowStyle: "Soft creamy shadows in folds and lower swirls.",
        highlightStyle: "Rounded creamy highlights on peaks.",
        texturePass: "Tiny sprinkle texture only if readable.",
        procreateBrushHint: "Soft round, gouache, or creamy paint brush.",
        layerMode: "Multiply shadow, Screen highlight.",
        avoid: "Avoid muddy gray; use warm cream shadows.",
        beginnerTip: "Shade frosting like soft clouds with tasty color."
      },
      jelly: {
        label: "Jelly",
        shadowStyle: "Transparent inner shadow near the bottom.",
        highlightStyle: "Bright wobble shine and rim glow.",
        texturePass: "Smooth surface, no grain.",
        procreateBrushHint: "Soft airbrush for inner color, hard round shine.",
        layerMode: "Add highlights, Multiply saturated shadow.",
        avoid: "Avoid opaque heavy shadows.",
        beginnerTip: "Let color glow through the body."
      },
      chalky: {
        label: "Chalky",
        shadowStyle: "Powdery soft shadow with textured edge.",
        highlightStyle: "Dry pastel highlight, broad and uneven.",
        texturePass: "Chalk dust on a clipped layer.",
        procreateBrushHint: "Chalk, pastel, or dry brush.",
        layerMode: "Multiply or Normal low opacity.",
        avoid: "Avoid slick sticker gloss.",
        beginnerTip: "Texture is the material; keep it gentle."
      },
      crayon: {
        label: "Crayon",
        shadowStyle: "Layered scribbly shadow strokes.",
        highlightStyle: "Lighter crayon strokes following the form.",
        texturePass: "Visible waxy grain.",
        procreateBrushHint: "Crayon or 6B pencil-like brush.",
        layerMode: "Normal low opacity; avoid too many blend modes.",
        avoid: "Avoid over-blending; crayon should stay tactile.",
        beginnerTip: "Use fewer strokes, larger shapes."
      },
      holographic: {
        label: "Holographic",
        shadowStyle: "Cool shadow with shifting color bands.",
        highlightStyle: "Pink/blue/yellow rim or stripe highlights.",
        texturePass: "Optional tiny prism streaks.",
        procreateBrushHint: "Soft brush plus hard color streaks.",
        layerMode: "Add, Screen, Overlay, or Color Dodge lightly.",
        avoid: "Avoid rainbow noise everywhere.",
        beginnerTip: "Use three color bands maximum."
      },
      pearl: {
        label: "Pearl",
        shadowStyle: "Soft lavender/blue lower shadow.",
        highlightStyle: "Rounded creamy highlight with subtle rim color.",
        texturePass: "Very smooth; no scratchy texture.",
        procreateBrushHint: "Soft airbrush and small hard highlight.",
        layerMode: "Screen highlight, Multiply cool shadow.",
        avoid: "Avoid high-contrast metal bands.",
        beginnerTip: "Pearl is soft glow plus tiny bright spot."
      },
      rubberToy: {
        label: "Rubber toy",
        shadowStyle: "Soft but slightly firmer lower shadow.",
        highlightStyle: "Small soft plastic shine, not glassy.",
        texturePass: "Smooth surface with optional tiny scuffs.",
        procreateBrushHint: "Soft round plus gentle monoline highlight.",
        layerMode: "Multiply shadow, Screen highlight.",
        avoid: "Avoid fabric fuzz.",
        beginnerTip: "Rubber is rounded, simple, and toy-like."
      }
    };

    const shadowStrengthMap = {
      barelyThere: {
        label: "Barely there",
        opacity: "8–14%",
        edge: "Very soft edge",
        useCase: "Cute, pale, dreamy, or beginner-safe mascots.",
        instruction: "Use the smallest shadow that still separates the body from the background."
      },
      soft: {
        label: "Soft",
        opacity: "15–25%",
        edge: "Soft airbrush edge",
        useCase: "Default Procreate mascot shading.",
        instruction: "Use one body shadow, one contact shadow, and stop."
      },
      medium: {
        label: "Medium",
        opacity: "26–40%",
        edge: "Soft edge with clearer shape",
        useCase: "Readable stickers, objects, and plush icons.",
        instruction: "Make the shadow readable but keep it away from the face."
      },
      boldIcon: {
        label: "Bold icon",
        opacity: "40–60%",
        edge: "Clean graphic edge",
        useCase: "Badges, logos, app icons, and small sticker thumbnails.",
        instruction: "Use a simple bold lower shadow and strong silhouette separation."
      },
      dramatic: {
        label: "Dramatic",
        opacity: "60–80%",
        edge: "Hard or theatrical edge",
        useCase: "Spooky, neon, underlight, and poster-like mascots.",
        instruction: "Use only when the emotion needs drama; protect the eyes and mouth."
      }
    };

    const limbShadowRules = {
      none: { contactShadow: "Single oval below the body.", limbShadow: "No limb shadow needed.", warning: "Do not invent limb shadows if no limbs are selected." },
      shadowOnly: { contactShadow: "Use a body-only oval shadow.", limbShadow: "Suggest limb presence with tiny dark anchors only.", warning: "Avoid adding visible limbs by accident." },
      beanFeet: { contactShadow: "Two small ovals under the bean feet plus one body oval.", limbShadow: "Lower crescent on each bean foot.", warning: "Feet shadows should be smaller than the feet." },
      dotFeet: { contactShadow: "Two dot shadows directly under the dot feet.", limbShadow: "One tiny lower dot shade.", warning: "Large dot shadows look like extra feet." },
      nubArms: { contactShadow: "Body shadow only unless arms touch the ground.", limbShadow: "Tiny underside stroke on each nub arm.", warning: "Do not darken arms more than the face." },
      nubFeet: { contactShadow: "Small contact ovals under each nub foot.", limbShadow: "Soft lower edge under each nub.", warning: "Keep foot shadows low and simple." },
      tinyMittens: { contactShadow: "Body shadow plus a tiny mitten contact if hands touch the body.", limbShadow: "Shadow under mitten cuffs.", warning: "Mitten shadows can look like stains if too dark." },
      littlePaws: { contactShadow: "Small paw contact dots beneath feet or hands.", limbShadow: "Shade underside of paw pads lightly.", warning: "Do not draw every toe at icon size." },
      floatingHands: { contactShadow: "No ground contact; use a faint hover shadow below hands if needed.", limbShadow: "Small inner shadow where hands face the body.", warning: "Floating hands need spacing so they do not read as blobs." },
      ghostWisps: { contactShadow: "Very faint mist shadow under wisps.", limbShadow: "Transparent inner curl shadow.", warning: "Avoid hard black wisp shadows." },
      cloudPuffs: { contactShadow: "Soft puffy shadow under lower puffs.", limbShadow: "Shade puff overlaps only.", warning: "Too many puffs become noisy." },
      ribbonArms: { contactShadow: "Only use contact shadow if ribbons touch the ground.", limbShadow: "Thin shadow along ribbon underside.", warning: "Ribbon shadows must follow the ribbon curve." },
      drippyNubs: { contactShadow: "Small droplet contacts under drips.", limbShadow: "Darker color at drip base.", warning: "Do not make drips look like mud." },
      petalFeet: { contactShadow: "Soft oval under each petal foot.", limbShadow: "Shade where petal tucks under body.", warning: "Keep petal veins optional and large." },
      leafHands: { contactShadow: "Usually body-only shadow; leaf hands may float.", limbShadow: "Shadow along leaf base and underside.", warning: "Use saturated green shadows, not gray." },
      bubbleFeet: { contactShadow: "Tiny transparent oval under each bubble foot.", limbShadow: "Inner lower crescent and tiny highlight.", warning: "Bubble feet need highlights more than heavy shadows." },
      candleDripArms: { contactShadow: "Drip contact only if arms hang low.", limbShadow: "Warm lower drip shadow.", warning: "Avoid making wax arms look dirty." },
      rollerFeet: { contactShadow: "Two short horizontal shadows under rollers.", limbShadow: "Lower wheel crescent.", warning: "Roller shadows should not become extra wheels." },
      cubeCornerFeet: { contactShadow: "Angular small shadow under each corner foot.", limbShadow: "One side plane shadow per cube foot.", warning: "Do not round cube shadows too much." },
      finHands: { contactShadow: "Mostly body-only contact.", limbShadow: "Shade base where fin attaches to body.", warning: "Fin shadows should follow water-flow direction." },
      tasselFeet: { contactShadow: "Fuzzy small contact strokes under tassels.", limbShadow: "Shade tassel bundle base.", warning: "Do not draw every thread at icon size." },
      pomPomFeet: { contactShadow: "Soft fuzzy oval under each pom-pom.", limbShadow: "Lower half of each pom-pom.", warning: "Pom-pom texture should be suggested, not counted." },
      scarfArms: { contactShadow: "Only cast shadow if scarf hangs near ground.", limbShadow: "Underside of scarf fold.", warning: "Do not hide the body silhouette with scarf shadow." },
      crescentHands: { contactShadow: "Usually no contact; use faint body cast shadow.", limbShadow: "Inner curve shadow on each crescent.", warning: "Crescents must read as hands, not extra mouths." },
      cometTrailLegs: { contactShadow: "Soft trailing shadow behind the motion direction.", limbShadow: "Tiny shadow at trail base.", warning: "Motion trails vanish if too thin at icon size." },
      puzzleTabArms: { contactShadow: "Body contact shadow plus small tab underside.", limbShadow: "Shadow under the puzzle tab connection.", warning: "Puzzle tabs should stay big and readable." },
      heartStubArms: { contactShadow: "Body shadow only unless heart stubs touch ground.", limbShadow: "Lower curve of each heart stub.", warning: "Heart arms can crowd cheeks; leave face space." }
    };

    const procreateLayerStackMap = {
      beginnerSimple: [
        "Guide layer at low opacity.",
        "Rough body sketch.",
        "Clean line layer.",
        "Flat color layer.",
        "One clipped shadow layer.",
        "One small highlight layer."
      ],
      stickerPolish: [
        "Guide layer.",
        "Clean sticker silhouette.",
        "Flat color.",
        "Lower-edge shadow clipped to body.",
        "Gloss highlight clipped to body.",
        "Drop shadow behind sticker."
      ],
      softPlush: [
        "Guide layer.",
        "Soft rough sketch.",
        "Clean plush outline.",
        "Flat fabric color.",
        "Soft Multiply shadows.",
        "Fuzz/highlight texture pass."
      ],
      glossyIcon: [
        "Guide layer.",
        "Icon silhouette check.",
        "Flat color.",
        "Bold lower shadow.",
        "Gloss highlight.",
        "Tiny icon-size cleanup layer."
      ],
      strangeGlam: [
        "Guide layer.",
        "Clean silhouette.",
        "Flat color.",
        "Colored shadow layer.",
        "Neon/rim light layer.",
        "Sparkle or holographic accent layer."
      ],
      spookyCute: [
        "Guide layer.",
        "Cute silhouette sketch.",
        "Flat color.",
        "Moon/candle shadow layer.",
        "Small underglow or rim layer.",
        "Face readability correction layer."
      ]
    };

    function isSpookyEmotionKey(emotion) {
      return /spooky|haunted|eerie|cursed|villain|sickly/i.test(String(emotion || ""));
    }

    function isSoftSadEmotionKey(emotion) {
      return /sad|gloomy|worried|lonely|rainy|tender|dreamy|sleepy/i.test(String(emotion || ""));
    }

    function isMagicalEmotionKey(emotion) {
      return /magical|glam|sparkly|glowy|feral|delighted/i.test(String(emotion || ""));
    }

    function normalizeSubjectType(subjectType) {
      const key = String(subjectType || "blob");
      if (/badge|logo|icon|sticker/i.test(key)) return key.includes("logo") ? "logo" : key.includes("badge") ? "badge" : "badge";
      if (/ghost/i.test(key)) return "ghost";
      if (/cloud|weather/i.test(key)) return "cloud";
      if (/gem|crystal/i.test(key)) return "gem";
      if (/potion|bottle|drink|sauce/i.test(key)) return "bottle";
      if (/box|package/i.test(key)) return "box";
      if (/plant|flower|garden|leaf/i.test(key)) return "plant";
      if (/letter/i.test(key)) return "letter";
      if (/number/i.test(key)) return "number";
      if (/monster|creature|plush/i.test(key)) return "softMonster";
      if (/food|fruit|vegetable|dessert|breakfast|snack|candy/i.test(key)) return "food";
      if (/object|tool|device|household|stationery|book/i.test(key)) return "object";
      if (/mask/i.test(key)) return "mask";
      if (/shape|circle|squircle|triangle|diamond|heart|crescent|clover|pill|starburst|arch|ribbon|pebble/i.test(key)) return "shape";
      return shapeShadowRules[key] ? key : "blob";
    }

    function normalizeLimbShadowKey(limbStyle) {
      const key = String(limbStyle || "none");
      if (limbShadowRules[key]) return key;
      if (/bean/i.test(key)) return "beanFeet";
      if (/dot/i.test(key)) return "dotFeet";
      if (/nub.*arm/i.test(key)) return "nubArms";
      if (/nub.*feet|nub.*foot/i.test(key)) return "nubFeet";
      if (/mitten/i.test(key)) return "tinyMittens";
      if (/paw/i.test(key)) return "littlePaws";
      if (/float|hand/i.test(key)) return "floatingHands";
      if (/ghost|wisp/i.test(key)) return "ghostWisps";
      if (/cloud|puff/i.test(key)) return "cloudPuffs";
      if (/ribbon/i.test(key)) return "ribbonArms";
      if (/drip/i.test(key)) return "drippyNubs";
      if (/petal/i.test(key)) return "petalFeet";
      if (/leaf/i.test(key)) return "leafHands";
      if (/bubble/i.test(key)) return "bubbleFeet";
      if (/candle|wax/i.test(key)) return "candleDripArms";
      if (/roller|wheel/i.test(key)) return "rollerFeet";
      if (/cube|corner/i.test(key)) return "cubeCornerFeet";
      if (/fin/i.test(key)) return "finHands";
      if (/tassel/i.test(key)) return "tasselFeet";
      if (/pom/i.test(key)) return "pomPomFeet";
      if (/scarf/i.test(key)) return "scarfArms";
      if (/crescent/i.test(key)) return "crescentHands";
      if (/comet|trail/i.test(key)) return "cometTrailLegs";
      if (/puzzle/i.test(key)) return "puzzleTabArms";
      if (/heart/i.test(key)) return "heartStubArms";
      return "none";
    }

    function pickAutoLighting({ emotion, subjectType, shadingGoal } = {}) {
      const subject = normalizeSubjectType(subjectType);
      if (["badge", "logo"].includes(subject) || /icon/i.test(String(subjectType || ""))) {
        return Math.random() > 0.5 ? "stickerGloss" : "tinyButtonGloss";
      }
      if (isSpookyEmotionKey(emotion) || shadingGoal === "spookyCute") {
        return ["moonGlow", "spookyUnderlight", "candleGlow"][Math.floor(Math.random() * 3)];
      }
      if (isSoftSadEmotionKey(emotion)) {
        return Math.random() > 0.5 ? "softWindow" : "moonGlow";
      }
      if (isMagicalEmotionKey(emotion) || shadingGoal === "strangeGlam") {
        return ["neonSide", "backlightRim", "moonGlow"][Math.floor(Math.random() * 3)];
      }
      return "topLeft";
    }

    function pickAutoMaterial({ subjectType, shadingGoal } = {}) {
      const subject = normalizeSubjectType(subjectType);
      const source = String(subjectType || "");
      if (subject === "food") return ["gummy", "frosting", "jelly", "clay"][Math.floor(Math.random() * 4)];
      if (["badge", "logo"].includes(subject) || /icon/i.test(source)) return "glossySticker";
      if (subject === "ghost" || shadingGoal === "spookyCute") return ["glass", "jelly", "pearl"][Math.floor(Math.random() * 3)];
      if (["blob", "softMonster"].includes(subject)) return Math.random() > 0.5 ? "plush" : "rubberToy";
      if (shadingGoal === "strangeGlam") return ["holographic", "pearl", "velvet"][Math.floor(Math.random() * 3)];
      if (["letter", "number"].includes(subject)) return ["paperCutout", "chalky", "crayon"][Math.floor(Math.random() * 3)];
      return "plush";
    }

    function generateLightingShadowPlan({
      subjectType = "blob",
      bodyShape = "blob",
      limbStyle = "none",
      emotion = "happy",
      lightingType = "topLeft",
      materialFeel = "plush",
      shadowStrength = "soft",
      shadingGoal = "beginnerSimple"
    } = {}) {
      const resolvedLightingKey = lightingType === "auto"
        ? pickAutoLighting({ emotion, subjectType, shadingGoal })
        : (lightingType || "topLeft");
      const resolvedMaterialKey = materialFeel === "auto"
        ? pickAutoMaterial({ subjectType, shadingGoal })
        : (materialFeel || "plush");
      const shapeKey = normalizeSubjectType(subjectType || bodyShape);
      const limbKey = normalizeLimbShadowKey(limbStyle);

      return {
        subjectType,
        bodyShape,
        limbStyle,
        emotion,
        shadingGoal,
        lightingType: resolvedLightingKey,
        materialFeel: resolvedMaterialKey,
        shadowStrength,
        lighting: lightingTypeMap[resolvedLightingKey] || lightingTypeMap.topLeft,
        shape: shapeShadowRules[shapeKey] || shapeShadowRules.blob,
        material: materialRecipeMap[resolvedMaterialKey] || materialRecipeMap.plush,
        strength: shadowStrengthMap[shadowStrength] || shadowStrengthMap.soft,
        limb: limbShadowRules[limbKey] || limbShadowRules.none,
        layerStack: procreateLayerStackMap[shadingGoal] || procreateLayerStackMap.beginnerSimple
      };
    }

    function renderLightingPlanCard(plan) {
      const box = document.getElementById("lightingPlanCard");
      if (!box || !plan) return;
      box.innerHTML = `
        <h3>Lighting Plan</h3>
        <p><strong>${plan.lighting.label}</strong></p>
        <ul>
          <li>Highlight: ${plan.lighting.highlightZone}</li>
          <li>Core shadow: ${plan.lighting.coreShadowZone}</li>
          <li>Cast shadow: ${plan.lighting.castShadowDirection}</li>
          <li>Face rule: ${plan.lighting.faceRule}</li>
          <li>Tip: ${plan.lighting.beginnerTip}</li>
        </ul>
      `;
    }

    function renderShadowMapCard(plan) {
      const box = document.getElementById("shadowMapCard");
      if (!box || !plan) return;
      box.innerHTML = `
        <h3>Shadow Map</h3>
        <p><strong>${plan.shape.label}</strong> · ${plan.strength.label}</p>
        <ul>
          <li>Body shadow: ${plan.shape.shadowMap}</li>
          <li>Body highlight: ${plan.shape.highlightMap}</li>
          <li>Limb contact: ${plan.limb.contactShadow}</li>
          <li>Limb shadow: ${plan.limb.limbShadow}</li>
          <li>Strength: ${plan.strength.opacity}, ${plan.strength.edge}</li>
        </ul>
      `;
    }

    function renderMaterialRecipeCard(plan) {
      const box = document.getElementById("materialRecipeCard");
      if (!box || !plan) return;
      box.innerHTML = `
        <h3>Material Recipe</h3>
        <p><strong>${plan.material.label}</strong></p>
        <ul>
          <li>Shadow style: ${plan.material.shadowStyle}</li>
          <li>Highlight style: ${plan.material.highlightStyle}</li>
          <li>Texture: ${plan.material.texturePass}</li>
          <li>Brush hint: ${plan.material.procreateBrushHint}</li>
          <li>Layer mode: ${plan.material.layerMode}</li>
        </ul>
      `;
    }

    function renderLayerStackCard(plan) {
      const box = document.getElementById("layerStackCard");
      if (!box || !plan) return;
      box.innerHTML = `
        <h3>Procreate Layer Stack</h3>
        <ol>${plan.layerStack.map(step => `<li>${step}</li>`).join("")}</ol>
      `;
    }

    function renderSmallIconWarningCard(plan) {
      const box = document.getElementById("smallIconWarningCard");
      if (!box || !plan) return;
      box.innerHTML = `
        <h3>Small Icon Warning</h3>
        <ul>
          <li>${plan.shape.iconWarning}</li>
          <li>${plan.shape.avoid}</li>
          <li>${plan.material.avoid}</li>
          <li>${plan.limb.warning}</li>
          <li>Do not over-shade, use muddy gray shadows, cover the face, or add tiny details that vanish at icon size.</li>
        </ul>
      `;
    }

function generalLessonFallback() {
      const c = getCurrentCoachContext();
      return {
        title: "General Lesson Help",
        summary: `Work from big to small: first the ${c.subject[0].toLowerCase()} shape, then the ${c.emotion[0].toLowerCase()} expression, then the twist set, then color. The app already has a guided step mode, so let the steps carry you instead of trying to solve everything at once.`,
        sections: [
          {
            heading: "What to focus on first",
            items: [
              `Start with the main body shape and ignore tiny details.`,
              `Get the face placement right before adding limbs.`,
              `Use the selected blueprint as a guide, not as something to over-copy.`
            ]
          },
          {
            heading: "When to simplify",
            items: [
              `If the drawing feels awkward, fix the face height before changing the body.`,
              `If the subject stops reading, remove a detail rather than adding one.`,
              `If the palette feels muddy, use fewer colors.`
            ]
          },
          {
            heading: "Procreate rhythm",
            items: [
              `Guide layer at low opacity.`,
              `Sketch layer for body and face tests.`,
              `Clean line layer after the form works.`,
              `Flat color, one shadow, one highlight.`
            ]
          }
        ],
        note: "You do not have to finish every step perfectly. A cleaner second version often teaches more than a perfect first version."
      };
    }

    async function callCoachModel(mode) {
      const key = document.getElementById("apiKey").value.trim();
      const model = document.getElementById("model").value.trim() || "openrouter/free";
      const context = getCurrentCoachContext();

      if (!key) {
        if (mode === "subject") return subjectLogicFallback();
        if (mode === "emotion") return emotionCoachFallback();
        if (mode === "palette") return paletteCoachFallback();
        return generalLessonFallback();
      }

      saveSettings();

      let system = "";
      if (mode === "subject") {
        system = `You are a beginner mascot drawing coach. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Focus on subject-specific drawing logic: how to draw the selected subject so it reads clearly, what shape to start with, what detail makes it recognizable, and what to avoid. Keep advice concise and practical.`;
      } else if (mode === "emotion") {
        system = `You are a beginner mascot expression coach. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Explain the selected duo emotion as an expression formula: face cue, body cue, optional extra mark, balance advice, and what to avoid. Keep it concise and practical.`;
      } else if (mode === "palette") {
        system = `You are a beginner color coach for mascot drawing. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Explain how to use the selected palette without muddying the drawing. Assign likely jobs to the palette colors, explain a clean usage order, and what to avoid. Keep it concise and practical.`;
      } else {
        system = `You are a beginner mascot drawing coach. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Give concise support for the current lesson: what to focus on first, how to simplify, and a Procreate workflow.`;
      }

      const payload = {
        subject: context.subject[0],
        subjectShape: context.subject[1],
        subjectFocus: context.subject[2],
        emotion: context.emotion[0],
        emotionFormula: context.emotion[1],
        emotionBodyCue: context.emotion[2],
        emotionAvoid: context.emotion[3],
        twist: context.twist[0],
        palette: context.palette.label || "Auto",
        paletteColors: context.palette.colors || [],
        blueprint: context.blueprint,
        lessonSize: context.lesson[0],
        optionalFlavor: context.flavor,
        aiHelpCategory: aiModes[document.getElementById("aiStyle").value] || "General help"
      };

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${key}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href,
          "X-Title": "Mascot Spark V13"
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: system },
            { role: "user", content: JSON.stringify(payload) }
          ],
          temperature: 0.55,
          max_tokens: 900
        })
      });

      if (!res.ok) throw new Error("OpenRouter error " + res.status + ": " + (await res.text()).slice(0, 220));
      const raw = await res.json();
      const text = raw.choices && raw.choices[0] && raw.choices[0].message ? raw.choices[0].message.content : "";
      const data = extractJson(text);
      if (!data) throw new Error("AI response was not usable JSON.");
      return data;
    }

    async function runCoach(mode) {
      showTab('tab-ai');
      renderCoachContext();

      const titleMap = {
        general: "General Lesson Help",
        subject: "Subject-Specific Drawing Logic",
        emotion: "Emotion Coach",
        palette: "Palette Coach"
      };

      status(`Running ${titleMap[mode] || "Coach"}...`, "");
      try {
        const data = await callCoachModel(mode);
        renderCoachOutput(data);
        status(`${titleMap[mode] || "Coach"} ready.`, "ok");
      } catch (err) {
        const fallback = mode === "subject"
          ? subjectLogicFallback()
          : mode === "emotion"
            ? emotionCoachFallback()
            : mode === "palette"
              ? paletteCoachFallback()
              : generalLessonFallback();
        renderCoachOutput(fallback);
        status(err.message + " Showing offline coach output instead.", "bad");
      }
    }

    function aiSubjectLogic() {
      runCoach("subject");
    }

    function aiEmotionCoach() {
      runCoach("emotion");
    }

    function aiPaletteCoach() {
      runCoach("palette");
    }

    let currentLessonData = null;
    let guidedStepIndex = 0;
    let showAllPhases = false;

    function updateGuidedStep() {
      if (!currentLessonData || !currentLessonData.phases || currentLessonData.phases.length === 0) return;

      const phases = currentLessonData.phases;
      guidedStepIndex = Math.max(0, Math.min(guidedStepIndex, phases.length - 1));
      const step = phases[guidedStepIndex];

      document.getElementById("guidedProgress").textContent = `Step ${guidedStepIndex + 1} of ${phases.length}`;
      document.getElementById("guidedLayer").textContent = `Layer: ${phaseLayerName(guidedStepIndex)}`;
      document.getElementById("guidedTitle").textContent = step[0];
      document.getElementById("guidedDraw").textContent = step[1];
      document.getElementById("guidedAvoid").textContent = step[2];
      document.getElementById("guidedCheck").textContent = phaseCanvasLook(guidedStepIndex);
    }

    function nextGuidedStep() {
      if (!currentLessonData) return;
      if (guidedStepIndex < currentLessonData.phases.length - 1) {
        guidedStepIndex += 1;
        updateGuidedStep();
      } else {
        status("You reached the final step. Redraw it once or generate a new lesson.", "ok");
      }
    }

    function previousGuidedStep() {
      if (!currentLessonData) return;
      guidedStepIndex = Math.max(0, guidedStepIndex - 1);
      updateGuidedStep();
    }

    function toggleAllSteps() {
      showAllPhases = !showAllPhases;
      const phases = document.getElementById("phases");
      phases.classList.toggle("show-all", showAllPhases);
      status(showAllPhases ? "All phases shown." : "Guided mode active. Full phase list hidden.", "ok");
    }

    function renderLessonPalette(key) {
      const palette = palettes[key];
      const swatchBox = document.getElementById("lessonPaletteSwatches");
      const nameBox = document.getElementById("lessonPaletteName");
      if (!swatchBox || !nameBox) return;

      if (!palette || !palette.colors || palette.colors.length === 0) {
        swatchBox.innerHTML = "";
        nameBox.textContent = "Auto palette";
        renderPaletteRoleGuide("auto");
        return;
      }

      swatchBox.innerHTML = palette.colors.map(color =>
        `<span class="lesson-palette-swatch" style="background-color:${color};" aria-label="${palette.label} color"></span>`
      ).join("");
      nameBox.textContent = `${palette.label} · ${palette.colors.length} colors`;
      const currentKey = document.getElementById("paletteMood")?.value || "auto";
      renderPaletteRoleGuide(currentKey);
    }

    function renderLesson(data) {
      currentLessonData = data;
      guidedStepIndex = 0;
      showAllPhases = false;
      document.getElementById("phases")?.classList.remove("show-all");
      document.getElementById("title").textContent = data.title;
      document.getElementById("meta").textContent = data.meta;
      document.getElementById("goal").textContent = data.goal;
      document.getElementById("shapeSpell").textContent = data.shapeSpell;
      document.getElementById("styleRecipe").textContent = data.styleRecipe;
      renderLessonPalette(data.paletteKey || "auto");
      document.getElementById("meterFill").style.width = data.complexity + "%";
      document.getElementById("meterText").textContent = data.meterText;
      document.getElementById("drawFirstPanels").innerHTML = data.drawOrder.map((item, i) => `
        <div class="draw-card" data-step="${i + 1}">
          <strong>${item[0]}</strong>
          <span class="do-line">${item[1]}</span>
          <span class="dont-line">Avoid: ${item[2] || "adding too much too soon."}</span>
          <span class="layer-line">Procreate: ${item[3] || "new sketch layer"}</span>
        </div>
      `).join("");

      renderTraceStepPanels(data);
      renderLightingPlanCard(data.lightingShadowPlan);
      renderShadowMapCard(data.lightingShadowPlan);
      renderMaterialRecipeCard(data.lightingShadowPlan);
      renderLayerStackCard(data.lightingShadowPlan);
      renderSmallIconWarningCard(data.lightingShadowPlan);

      document.getElementById("phases").innerHTML = data.phases.map((p, i) => `
        <div class="phase">
          <div class="phase-title"><span class="num">${i + 1}</span>${p[0]}</div>
          <div class="phase-parts">
            <div class="phase-part"><b>Draw:</b> ${p[1]}</div>
            <div class="phase-part"><b>Procreate layer:</b> ${phaseLayerName(i)}</div>
            <div class="phase-part"><b>Canvas should look like:</b> ${phaseCanvasLook(i)}</div>
          </div>
          <div class="mistake">${p[2]}</div>
          <div class="phase-check">Before moving on: zoom out and check that this step still reads clearly.</div>
        </div>
      `).join("");
      document.getElementById("checks").innerHTML = data.checks.map(c => `<label class="check"><input type="checkbox"><span>${c}</span></label>`).join("");
      document.getElementById("avoid").textContent = data.avoid;
      document.getElementById("quest").textContent = data.quest;
      document.getElementById("praise").textContent = data.praise;
      document.getElementById("remixOne").textContent = data.remixOne;
      document.getElementById("remixTwo").textContent = data.remixTwo;
      document.getElementById("traceNote").innerHTML = data.traceNote;
      renderPalettePreview();
      document.getElementById("blueprintSvg").innerHTML = makeBlueprint(data.type, data.emotion, data.twist, data.blueprintStyle, data.twistSet);
      applyBlueprintLayerClasses();
      if (document.getElementById("shadeStyle") && !document.getElementById("shadeStyle").dataset.touched) {
        document.getElementById("shadeStyle").value = defaultShadeStyleForCurrentLesson();
      }
      renderCoachContext();
      renderShadeContext();
      renderShadeMap();
      renderShadeOutput(shadingLabFallback());
      renderBeginnerFlow(data);
      renderVisualStepCards(data);
      updateGuidedStep();
    }

    function newLesson(openBlueprint = false) {
      const type = document.getElementById("lessonType").value;
      const emotion = document.getElementById("emotion").value;
      const level = document.getElementById("level").value;
      const mode = document.getElementById("creativeMode").value;
      const twist = document.getElementById("funTwist").value;
      const twistAmount = getSelectedTwistAmount();
      const twistSet = resolveTwistSet(twist, twistAmount);
      const limbStyleKey = document.getElementById("limbStyle")?.value || "nubs";
      const limbStyle = getLimbStyle(limbStyleKey);
      const flavor = document.getElementById("customIdea").value.trim() || flavors[document.getElementById("ideaPreset").value] || ""; // flavor-only: never replaces subject
      const palette = palettes[document.getElementById("paletteMood").value] || { label: "Auto", colors: [] };
      const blueprintStyle = document.getElementById("blueprintStyle").value;
      const drawOrderMode = document.getElementById("drawOrderMode").value;
      const skillFocus = getEffectiveSkillFocus(type, emotion, blueprintStyle);
      const lightingType = document.getElementById("lightingType")?.value || "topLeft";
      const materialFeel = document.getElementById("materialFeel")?.value || "plush";
      const shadowStrength = document.getElementById("shadowStrength")?.value || "soft";
      const shadingGoal = document.getElementById("shadingGoal")?.value || "beginnerSimple";

      const subject = subjectData[type];
      const specificShapeTypes = ["circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack"];
      const isSpecificShapeSubject = specificShapeTypes.includes(type);
      const emo = emotions[emotion];
      const lesson = lessonSizes[level];
      const tw = twists[twist] || twists.none;
      const twistSetName = getTwistSetName(twistSet);
      const twistSetPhrase = getTwistSetPhrase(twistSet);
      const limb = limbStyle;
      const lightingShadowPlan = generateLightingShadowPlan({
        subjectType: type || "blob",
        bodyShape: subject?.[1] || "blob",
        limbStyle: limbStyleKey || "none",
        emotion: emotion || "happy",
        lightingType,
        materialFeel,
        shadowStrength,
        shadingGoal
      });
      let phases = lesson[1].map(x => [...x]);

      if (isSpecificShapeSubject) {
        phases.unshift(
          ["Lock the shape first", `Draw the ${subject[1]} before adding any face. The shape itself should read clearly even with no character details.`, "If the silhouette looks generic, redraw the shape once before moving on."],
          ["Respect the shape logic", `Keep the mascot specific to its shape family: ${subject[2]}.`, "Do not turn this back into a plain blob by over-rounding everything."]
        );
      }

      if (mode === "cozyPlus") {
        phases.splice(Math.min(3, phases.length), 0,
          ["Push the silhouette", "Adjust one edge: flatten bottom, tilt top, or add one soft bump.", "One silhouette change is enough."],
          ["Add a focal detail", "Choose one thing viewers notice first.", "If everything is special, nothing is special."]
        );
      }

      if (mode === "remix") {
        phases.splice(Math.min(3, phases.length), 0,
          ["Make one playful swap", "Change exactly one thing: eyes, mouth, pose tilt, or accessory.", "Remix gets messy if everything changes."]
        );
      }

      if (drawOrderMode === "extraGuided") {
        phases.unshift(
          ["Before anything: body only", "Draw only the outside shape for one minute. No eyes, mouth, limbs, color, or accessory yet.", "Do not decorate before the body works."],
          ["Redraw the body once", "Make a second version of the same body beside the first. Pick the clearer silhouette.", "Do not keep polishing the weaker first shape."]
        );
      }

      if (blueprintStyle === "autoSubject") {
        phases.unshift(["Use the subject guide", "Let the blueprint show the key construction logic for the selected mascot family before you add the face.", "Do not treat every subject like the same generic blob."]);
      }

      if (blueprintStyle === "faceMap") {
        phases.splice(2, 0,
          ["Use the face map", "Place eyes on the lower face line, then put the mouth close underneath.", "A mascot often looks wrong because of face placement."],
          ["Test face height", "Move the same face slightly lower on a duplicate sketch and compare which version feels cuter.", "Do not redraw the whole mascot when only the face is off."]
        );
      }

      if (blueprintStyle === "bodyFirst") {
        phases.unshift(["Trace body only first", "Use the blueprint as a body-only tracing guide. Hide all detail thinking until the outer shape works.", "Do not start with the eyes."]);
      }

      if (blueprintStyle === "limbMap") {
        phases.splice(Math.min(4, phases.length), 0, ["Place limbs in zones", "Use the limb map circles to add tiny arms and feet. Keep every limb smaller than the face area.", "Large limbs make beginner mascots feel clumsy."]);
      }

      if (blueprintStyle === "shadowMap") {
        phases.push(["Use the shadow map", "Add one soft shadow under the lower body or under the accessory. Keep the light direction simple.", "Do not shade every edge. One shadow is enough."]);
      }

      if (blueprintStyle === "fourPanel" || blueprintStyle === "worksheet") {
        phases.push(["Redraw as a worksheet", "Make four boxes: body only, guide + face, limbs + twist, clean final.", "Do not skip the redraw box. The redraw is where learning happens."]);
      }

      if (blueprintStyle === "plushBody") {
        phases.splice(1, 0, ["Use plush bumps", "Build the head/body from soft rounded bumps. Keep every edge soft.", "Do not sharpen the silhouette."]);
      }

      if (blueprintStyle === "fruitSlice") {
        phases.splice(2, 0, ["Keep it juicy and simple", "Use one round fruit body and only a few inner slice lines if needed.", "Do not overdraw fruit texture."]);
      }

      if (blueprintStyle === "potionBottle") {
        phases.splice(1, 0, ["Neck then bottle", "Draw the bottle neck first, then the larger rounded body underneath.", "Do not make the neck wider than the bottle."]);
      }

      if (blueprintStyle === "cloudPuff") {
        phases.splice(1, 0, ["Build from puffs", "Use overlapping circles or puff bumps to form the cloud.", "Do not flatten the cloud too early."]);
      }

      if (blueprintStyle === "robotGrid") {
        phases.splice(1, 0, ["Use the robot grid", "Keep the face and body aligned to the grid, but keep corners rounded.", "Do not make it too stiff or sharp."]);
      }

      if (blueprintStyle === "ghostDrape") {
        phases.push(["Shape the drape", "Use a soft top and a wavy bottom edge for the ghost sheet.", "Do not overcomplicate the bottom scallops."]);
      }

      if (blueprintStyle === "gemFacet") {
        phases.push(["Add only a few facets", "One to three inner facet lines are enough.", "Too many lines make the gem feel noisy."]);
      }

      if (blueprintStyle === "letterBuild" || blueprintStyle === "numberBuild") {
        phases.unshift(["Keep the symbol readable", "Before adding any face or limbs, make sure the base letter/number still reads clearly.", "Do not decorate a symbol that is not readable yet."]);
      }

      if (blueprintStyle === "badgeEmblem") {
        phases.unshift(["Center the emblem", "Build a strong centered badge silhouette first.", "Do not let side details unbalance the shape."]);
      }

      if (blueprintStyle === "weatherSymbol") {
        phases.push(["Use one forecast accent", "Add one rain, bolt, or sun accent only after the base symbol works.", "Do not stack too many weather icons together."]);
      }

      if (blueprintStyle === "shellSpiral") {
        phases.splice(1, 0, ["Use shell ribs", "Draw two or three shell arcs that follow the outer curve.", "Do not add too many rib lines."]);
      }

      if (blueprintStyle === "aquaticFin") {
        phases.splice(1, 0, ["Use body flow first", "Draw the long body flow before placing fins and tail cues.", "Do not build the fins before the body."]);
      }

      if (blueprintStyle === "deviceScreen") {
        phases.splice(1, 0, ["Frame then screen", "Keep the outer device frame readable and place the screen area inside it.", "Do not make the inner screen too close to the edge."]);
      }

      if (blueprintStyle === "clothingFold") {
        phases.splice(1, 0, ["Neckline then fall", "Use the neckline or top seam first, then let the body drop down softly.", "Do not clutter the clothing with too many folds."]);
      }

      if (blueprintStyle === "musicStem") {
        phases.splice(1, 0, ["Stem first", "Start with the note stem or musical axis, then add the note body.", "Do not decorate before the note reads clearly."]);
      }

      if (blueprintStyle === "wandArc") {
        phases.splice(1, 0, ["Use the relic axis", "Build a clear wand or charm direction line before adding the magical tip.", "Do not add random sparkles too early."]);
      }

      if (blueprintStyle === "orbitRing") {
        phases.splice(1, 0, ["Build the sphere first", "Draw the large celestial body before adding the orbit ring.", "Do not let the orbit ring overpower the body."]);
      }

      if (blueprintStyle === "packageFold") {
        phases.splice(1, 0, ["Top flap first", "Use the top fold to anchor the box form, then build the body folds.", "Do not lose the fold logic."]);
      }

      if (blueprintStyle === "furnitureBuild") {
        phases.splice(1, 0, ["Top plane first", "Draw the seat, cushion, or top plane before adding support legs.", "Do not start with the legs."]);
      }

      if (blueprintStyle === "gardenPot") {
        phases.splice(1, 0, ["Container first", "Start with the pot or base shape, then add the leaves or sprout cues.", "Do not let the leaves hide the container read."]);
      }

      if (blueprintStyle === "creatureHorn") {
        phases.splice(1, 0, ["Round body first", "Keep the main body plush and let the horn or tuft be only a small accent.", "Do not make the horns dominate the silhouette."]);
      }

      if (blueprintStyle === "logoAxis") {
        phases.splice(1, 0, ["Use the axis", "Balance the symbol on a clear vertical and horizontal axis before adding expression.", "Do not tilt everything off-axis too early."]);
      }

      phases.splice(Math.min(4, phases.length), 0, [
        `Limb style: ${limb.label}`,
        `${limb.guide} Build the limbs as ${limb.phrase}.`,
        "Do not use the old default arms/feet unless this limb style asks for them."
      ]);

      phases.splice(Math.min(5, phases.length), 0, [
        `Twist set: ${twistSetName}`,
        twistSet.length > 1
          ? `Add these small accents in separate areas: ${twistSetPhrase}. Keep the face readable first.`
          : `Add ${twistSetPhrase}. Keep it small and away from the main expression.`,
        "Do not stack every accessory in the same corner. Tiny details need breathing room."
      ]);

      phases.push([
        `Lighting: ${lightingShadowPlan.lighting.label}`,
        `Place highlights at: ${lightingShadowPlan.lighting.highlightZone} Use core shadow at: ${lightingShadowPlan.lighting.coreShadowZone}`,
        "Do not cover the face with shadow or use muddy gray."
      ]);

      phases.push([
        `Material: ${lightingShadowPlan.material.label}`,
        `${lightingShadowPlan.material.beginnerTip} Texture pass: ${lightingShadowPlan.material.texturePass}`,
        lightingShadowPlan.material.avoid
      ]);

      const skillInfo = skillFocusData[skillFocus] || skillFocusData.shapeControl;
      phases.splice(Math.min(2, phases.length), 0, [
        `Skill focus: ${skillInfo.title}`,
        `${skillInfo.goal} Practice drill: ${skillInfo.drills[0]}`,
        "Do not treat this as just a prompt. Use the skill focus as the reason for the drawing."
      ]);

      const flavorText = flavor ? ` Flavor: ${flavor}.` : "";
      const paletteText = palette && palette.label !== "Auto" ? ` Palette: ${palette.label}.` : "";
      const title = pick(subject[3]);

      renderLesson({
        title,
        type,
        emotion,
        twist,
        twistAmount,
        twistSet,
        twistSetName,
        twistSetPhrase,
        limbStyle: limbStyleKey,
        limbName: limb.label,
        lightingType,
        materialFeel,
        shadowStrength,
        shadingGoal,
        lightingShadowPlan,
        blueprintStyle,
        skillFocus,
        subjectName: subject[0],
        subjectBase: subject[1],
        emotionName: emo[0],
        twistName: twistSetName,
        limbName: limb.label,
        meta: `${subject[0]} · ${emo[0]} · ${lesson[0]}`,
        goal: `Draw a ${emo[0].toLowerCase()} ${subject[0].toLowerCase()} using ${subject[1]}, ${emo[1]}, and ${emo[2]}. Add ${twistSetPhrase} and ${limb.phrase}.${flavorText}${paletteText} Subject lock: stay with ${subject[0].toLowerCase()}; flavor only changes the vibe.`,
        shapeSpell: mode === "cozyPlus" ? "Use big-medium-small: one big body, one medium detail, two tiny expression marks." : mode === "remix" ? "Change one thing only. Keep the body shape stable." : "Big shape first. Face second. Decoration last.",
        styleRecipe: palette && palette.label !== "Auto" ? `${palette.label} · ${palette.colors.length} colors` : pick(styleRecipes),
        paletteKey: document.getElementById("paletteMood").value,
        complexity: mode === "cozyPlus" ? 68 : mode === "remix" ? 56 : 42,
        meterText: mode === "cozyPlus" ? "Cozy+ difficulty: more design thinking, still beginner-safe." : mode === "remix" ? "Remix difficulty: playful, one change at a time." : "Cozy difficulty: easy and drawable.",
        drawOrder: drawOrders[drawOrderMode][1],
        phases,
        checks: [
          "The selected subject category is still recognizable.",
          "The face is slightly below center.",
          twistSet.length > 1 ? "The mascot uses multiple small twists without crowding the face." : "The mascot uses one main tiny twist only.",
          "The silhouette reads when zoomed out.",
          "The optional flavor changed mood/style only; the selected subject stayed recognizable.",
          "Highlights, core shadows, cast shadows, limb shadows, and texture are placed on separate Procreate layers.",
          "The face is not covered by shadow or shine."
        ],
        avoid: emo[3],
        quest: pick(quests),
        praise: pick(praises),
        remixOne: pick(remixIdeas),
        remixTwo: mode === "cozyPlus" ? "Make a sticker version with a thicker outline and fewer details." : "Draw the same mascot again with a different mouth, not a different body.",
        traceNote: `<strong>Beginner use:</strong><br>Trace the big body shape first. Hide the guide when done. If the mascot still reads, the drawing worked. Emotion blueprint pass: ${emotionBlueprintBadge(emotion)}. Twist blueprint pass: ${getTwistSetBadge(twistSet)}. Limb blueprint: ${limb.label}.`
      });

      if (openBlueprint) {
        showTab("tab-blueprint");
        status("Mascot lesson + blueprint ready.", "ok");
      }
    }

    function resetChecks() {
      document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    }

    function saveSettings() {
      localStorage.setItem("mascotSparkApiKey", document.getElementById("apiKey").value.trim());
      localStorage.setItem("mascotSparkModel", document.getElementById("model").value.trim() || "openrouter/free");
      status("AI settings saved in this browser.", "ok");
    }

    function loadSettings() {
      document.getElementById("apiKey").value = localStorage.getItem("mascotSparkApiKey") || "";
      document.getElementById("model").value = localStorage.getItem("mascotSparkModel") || "openrouter/free";
    }

    function extractJson(text) {
      try { return JSON.parse(text); } catch(e) {}
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        try { return JSON.parse(match[0]); } catch(e) {}
      }
      return null;
    }

    async function aiLesson() {
      runCoach("general");
    }

    let deferredInstallPrompt = null;

    window.addEventListener("beforeinstallprompt", event => {
      event.preventDefault();
      deferredInstallPrompt = event;
      document.getElementById("installBtn").style.display = "inline-flex";
    });

    async function installApp() {
      if (!deferredInstallPrompt) {
        status("Use your browser menu to add this app to your home screen.", "");
        return;
      }
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      document.getElementById("installBtn").style.display = "none";
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js").catch(error => console.warn("Service worker registration failed:", error));
      });
    }


    function closeOpenModalsOnEscape(event) {
      if (event.key !== "Escape") return;
      closeBlueprintStudio?.();
      closeVersionTools?.();
    }

    function updateFinalBuildBadge() {
      const badge = document.getElementById("finalBuildBadge");
      if (badge) badge.textContent = `Mascot Spark ${APP_VERSION || "V53"} · Lighting + Shadow Logic Studio · Cache ${APP_CACHE_NAME || "mascot-spark-v53"}`;
    }

    document.addEventListener("keydown", closeOpenModalsOnEscape);
    window.addEventListener("resize", () => requestAnimationFrame(updateTabIndicator));

    document.addEventListener("DOMContentLoaded", () => {
      loadMotionStyle();
      bootSelects();
      document.getElementById("paletteMood").addEventListener("change", () => { renderPalettePreview(); renderCoachContext(); renderShadeContext(); renderShadeMap(); renderShadeOutput(shadingLabFallback()); });
      ["shadeStyle","lightDirection","shadeIntensity","shadeOutputType"].forEach(id => {
        document.getElementById(id)?.addEventListener("change", () => {
          document.getElementById("shadeStyle").dataset.touched = "true";
          renderShadeContext();
          renderShadeMap();
          renderShadeOutput(shadingLabFallback());
        });
      });
      document.getElementById("subjectPack")?.addEventListener("change", (event) => filterSubjectsByPack(event.target.value));
      document.getElementById("blueprintVariant")?.addEventListener("change", () => {
        if (currentLessonData) renderLesson(currentLessonData);
      });
      document.getElementById("sessionTimer")?.addEventListener("change", setupTimerFromSelect);
      setupTimerFromSelect();
      renderCoachContext();
      loadViewMode();
      loadFocusMode();
      loadTheme();
      loadSettings();
      renderStash();
      updateFinalBuildBadge();
      newLesson();
    });
  
