// Mock data for gluten-free recipes
export const mockRecipes = [
  {
    id: 1,
    title: "Quinoa Breakfast Bowl",
    description: "A warm, protein-rich breakfast bowl with quinoa, berries, and nuts.",
    defaultServings: 2,
    image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=500",
    nutrition: {
      servingSize: "1 bowl (350g)",
      calories: 385,
      protein: 12,
      carbohydrates: 52,
      fat: 15,
      fiber: 8,
      sugar: 14,
      sodium: 45
    },
    tags: ["breakfast", "healthy", "high-protein", "vegetarian"],
    ingredients: [
      { amount: "1", unit: "cup", item: "quinoa" },
      { amount: "2", unit: "cups", item: "almond milk" },
      { amount: "1", unit: "cup", item: "mixed berries" },
      { amount: "0.25", unit: "cup", item: "sliced almonds" },
      { amount: "2", unit: "tbsp", item: "honey" },
      { amount: "0.25", unit: "tsp", item: "cinnamon" },
      { amount: "0.25", unit: "tsp", item: "vanilla extract" }
    ],
    instructions: [
      "Rinse quinoa thoroughly under cold water using a fine-mesh strainer.",
      "In a medium saucepan, combine quinoa and almond milk. Bring to a boil over high heat.",
      "Reduce heat to low, cover, and simmer for 15-20 minutes until quinoa is tender and milk is absorbed.",
      "Remove from heat and let stand, covered, for 5 minutes.",
      "Stir in vanilla extract and cinnamon.",
      "Divide the warm quinoa between two bowls.",
      "Top each bowl with mixed berries and sliced almonds.",
      "Drizzle with honey and serve immediately.",
      "For meal prep, store cooked quinoa separately from toppings for up to 4 days.",
      "Reheat quinoa with a splash of almond milk before adding toppings."
    ]
  },

  {
    id: 2,
    title: "Thai Green Papaya Salad",
    description: "Fresh and spicy Thai salad with shredded green papaya, tomatoes, and a zesty lime dressing.",
    defaultServings: 4,
    image: "https://images.unsplash.com/photo-1637196326903-c2e12b38eb67?w=500",
    nutrition: {
      servingSize: "1.5 cups (200g)",
      calories: 120,
      protein: 3,
      carbohydrates: 22,
      fat: 4,
      fiber: 3,
      sugar: 18,
      sodium: 680
    },
    tags: ["thai", "salad", "spicy", "healthy"],
    ingredients: [
      { amount: "1", unit: "large", item: "green papaya, shredded" },
      { amount: "2", unit: "", item: "tomatoes, sliced" },
      { amount: "2", unit: "tbsp", item: "fish sauce" },
      { amount: "2", unit: "", item: "limes, juiced" },
      { amount: "2", unit: "", item: "bird's eye chilies, finely chopped" },
      { amount: "2", unit: "cloves", item: "garlic, minced" },
      { amount: "1", unit: "tbsp", item: "palm sugar or brown sugar" },
      { amount: "0.25", unit: "cup", item: "roasted peanuts, crushed" },
      { amount: "10", unit: "", item: "green beans, cut into 2-inch lengths" }
    ],
    instructions: [
      "Peel and shred the green papaya using a mandoline or grater. Soak in cold water for 10 minutes.",
      "Meanwhile, in a mortar and pestle, pound garlic and chilies into a rough paste.",
      "Add palm sugar, fish sauce, and lime juice. Pound lightly to combine.",
      "Drain the papaya well and pat dry with paper towels.",
      "In a large bowl, combine shredded papaya, sliced tomatoes, and green beans.",
      "Pour the dressing over the vegetables and toss well to combine.",
      "Gently pound the salad using a wooden spoon to bruise the ingredients and help them absorb the dressing.",
      "Taste and adjust seasoning with additional fish sauce, lime juice, or sugar if needed.",
      "Top with crushed peanuts and serve immediately.",
      "For best results, consume within 2 hours of preparation."
    ]
  },

  {
    id: 3,
    title: "Chicken Marsala",
    description: "Classic Italian chicken dish made gluten-free with rice flour.",
    defaultServings: 4,
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=500",
    nutrition: {
      servingSize: "1 chicken breast with sauce (250g)",
      calories: 420,
      protein: 35,
      carbohydrates: 18,
      fat: 24,
      fiber: 2,
      sugar: 5,
      sodium: 580
    },
    tags: ["dinner", "italian", "chicken", "main course"],
    ingredients: [
      { amount: "4", unit: "6-oz", item: "chicken breasts, pounded to 1/4-inch thickness" },
      { amount: "0.5", unit: "cup", item: "rice flour" },
      { amount: "0.5", unit: "tsp", item: "salt" },
      { amount: "0.25", unit: "tsp", item: "black pepper" },
      { amount: "8", unit: "oz", item: "cremini mushrooms, sliced" },
      { amount: "3", unit: "tbsp", item: "olive oil" },
      { amount: "2", unit: "tbsp", item: "butter" },
      { amount: "2", unit: "cloves", item: "garlic, minced" },
      { amount: "0.75", unit: "cup", item: "Marsala wine" },
      { amount: "0.75", unit: "cup", item: "chicken broth" },
      { amount: "2", unit: "tbsp", item: "fresh parsley, chopped" }
    ],
    instructions: [
      "In a shallow dish, mix rice flour with salt and pepper.",
      "Pat chicken breasts dry with paper towels. Dredge each breast in the seasoned rice flour mixture, shaking off excess.",
      "Heat 2 tablespoons olive oil in a large skillet over medium-high heat until shimmering.",
      "Add chicken breasts and cook for 5-6 minutes per side until golden brown and internal temperature reaches 165°F (74°C). Transfer to a plate and tent with foil.",
      "In the same skillet, add remaining oil and butter. Once butter melts, add mushrooms and cook for 5-6 minutes until golden.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "Pour in Marsala wine and chicken broth, scraping up any browned bits from the bottom of the pan.",
      "Simmer sauce for 8-10 minutes until reduced by half and slightly thickened.",
      "Return chicken to the skillet and spoon sauce over top. Simmer for 2-3 minutes to reheat chicken.",
      "Garnish with fresh parsley and serve immediately.",
      "For meal prep, store chicken and sauce separately for up to 3 days."
    ],
    glutenSubstitutes: [
      { original: "all-purpose flour", substitute: "rice flour" }
    ]
  },

  {
    id: 4,
    title: "Mediterranean Chickpea Salad",
    description: "Light and refreshing chickpea salad with Mediterranean flavors.",
    defaultServings: 6,
    image: "https://images.unsplash.com/photo-1606497389772-3f0acd7f9aae?w=500",
    nutrition: {
      servingSize: "1.5 cups (225g)",
      calories: 280,
      protein: 10,
      carbohydrates: 35,
      fat: 12,
      fiber: 8,
      sugar: 6,
      sodium: 420
    },
    tags: ["lunch", "mediterranean", "healthy", "vegetarian"],
    ingredients: [
      { amount: "2", unit: "15-oz cans", item: "chickpeas, drained and rinsed" },
      { amount: "2", unit: "cups", item: "cherry tomatoes, halved" },
      { amount: "1", unit: "large", item: "cucumber, diced" },
      { amount: "1", unit: "medium", item: "red onion, finely diced" },
      { amount: "0.75", unit: "cup", item: "kalamata olives, pitted and halved" },
      { amount: "0.5", unit: "cup", item: "fresh parsley, chopped" },
      { amount: "0.25", unit: "cup", item: "fresh mint, chopped" },
      { amount: "0.5", unit: "cup", item: "feta cheese, crumbled" },
      { amount: "0.25", unit: "cup", item: "extra virgin olive oil" },
      { amount: "3", unit: "tbsp", item: "fresh lemon juice" },
      { amount: "2", unit: "cloves", item: "garlic, minced" },
      { amount: "1", unit: "tsp", item: "dried oregano" },
      { amount: "0.5", unit: "tsp", item: "salt" },
      { amount: "0.25", unit: "tsp", item: "black pepper" }
    ],
    instructions: [
      "Drain and rinse chickpeas thoroughly. Pat dry with paper towels to remove excess moisture.",
      "In a large bowl, combine chickpeas, halved tomatoes, diced cucumber, red onion, and olives.",
      "In a small bowl, whisk together olive oil, lemon juice, minced garlic, oregano, salt, and pepper until well combined.",
      "Pour the dressing over the vegetable mixture and toss gently to coat evenly.",
      "Add chopped parsley and mint, tossing again to distribute herbs.",
      "Fold in crumbled feta cheese, being careful not to break it up too much.",
      "Cover and refrigerate for at least 30 minutes to allow flavors to meld.",
      "Before serving, taste and adjust seasoning with additional salt, pepper, or lemon juice if needed.",
      "Can be stored in an airtight container in the refrigerator for up to 4 days. The vegetables may release some liquid; drain before serving if desired.",
      "For best results, if making ahead, add feta cheese just before serving."
    ]
  },

  {
    id: 5,
    title: "Pad Thai",
    description: "Classic Thai noodle dish made with rice noodles.",
    defaultServings: 4,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500",
    nutrition: {
      servingSize: "2 cups (350g)",
      calories: 460,
      protein: 18,
      carbohydrates: 65,
      fat: 16,
      fiber: 3,
      sugar: 8,
      sodium: 890
    },
    tags: ["dinner", "thai", "asian", "main course"],
    ingredients: [
      { amount: "8", unit: "oz", item: "rice noodles" },
      { amount: "2", unit: "tbsp", item: "vegetable oil" },
      { amount: "2", unit: "cloves", item: "garlic, minced" },
      { amount: "8", unit: "oz", item: "firm tofu, cubed" },
      { amount: "2", unit: "cups", item: "bean sprouts" },
      { amount: "2", unit: "", item: "eggs, beaten" },
      { amount: "4", unit: "", item: "green onions, chopped" },
      { amount: "0.25", unit: "cup", item: "crushed peanuts" },
      { amount: "0.25", unit: "cup", item: "gluten-free tamari" },
      { amount: "3", unit: "tbsp", item: "fish sauce" },
      { amount: "2", unit: "tbsp", item: "tamarind paste" },
      { amount: "2", unit: "tbsp", item: "palm sugar or brown sugar" },
      { amount: "1", unit: "", item: "lime, cut into wedges" }
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes until pliable but still firm. Drain well.",
      "In a small bowl, whisk together tamari, fish sauce, tamarind paste, and palm sugar until sugar dissolves.",
      "Heat oil in a large wok or skillet over medium-high heat.",
      "Add minced garlic and stir-fry for 30 seconds until fragrant.",
      "Add tofu cubes and cook for 3-4 minutes until lightly golden.",
      "Push ingredients to one side of the wok and add beaten eggs to the empty space.",
      "Scramble eggs until just set, then mix with the tofu.",
      "Add drained noodles and sauce mixture. Toss well to combine.",
      "Cook for 2-3 minutes, stirring frequently, until noodles are tender but still chewy.",
      "Add bean sprouts and green onions. Toss for another minute.",
      "Remove from heat and stir in crushed peanuts.",
      "Serve hot with lime wedges and additional peanuts, bean sprouts, and chili flakes if desired."
    ],
    glutenSubstitutes: [
      { original: "soy sauce", substitute: "gluten-free tamari" }
    ]
  },

  {
    id: 6,
    title: "Shakshuka",
    description: "Middle Eastern eggs poached in spiced tomato sauce.",
    defaultServings: 4,
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=500",
    nutrition: {
      servingSize: "2 eggs with sauce (300g)",
      calories: 340,
      protein: 18,
      carbohydrates: 24,
      fat: 20,
      fiber: 6,
      sugar: 12,
      sodium: 620
    },
    tags: ["breakfast", "middle eastern", "vegetarian"],
    ingredients: [
      { amount: "6", unit: "", item: "large eggs" },
      { amount: "2", unit: "14-oz cans", item: "diced tomatoes" },
      { amount: "2", unit: "large", item: "red bell peppers, diced" },
      { amount: "1", unit: "large", item: "onion, diced" },
      { amount: "4", unit: "cloves", item: "garlic, minced" },
      { amount: "2", unit: "tbsp", item: "olive oil" },
      { amount: "1", unit: "tbsp", item: "ground cumin" },
      { amount: "1", unit: "tbsp", item: "paprika" },
      { amount: "0.5", unit: "tsp", item: "cayenne pepper (optional)" },
      { amount: "1", unit: "tsp", item: "salt" },
      { amount: "0.5", unit: "tsp", item: "black pepper" },
      { amount: "0.25", unit: "cup", item: "fresh parsley, chopped" },
      { amount: "0.25", unit: "cup", item: "fresh cilantro, chopped" }
    ],
    instructions: [
      "Heat olive oil in a large, deep skillet or cast-iron pan over medium heat.",
      "Add diced onions and bell peppers. Cook for 8-10 minutes until softened and onions are translucent.",
      "Add minced garlic, cumin, paprika, cayenne (if using), salt, and pepper. Cook for 1 minute until fragrant.",
      "Pour in diced tomatoes with their juices. Simmer for 15-20 minutes until sauce thickens slightly.",
      "Using the back of a spoon, make 6 wells in the sauce for the eggs.",
      "Carefully crack an egg into each well. Season eggs with a pinch of salt and pepper.",
      "Cover the pan and cook for 5-8 minutes, or until egg whites are set but yolks are still runny.",
      "Garnish with chopped parsley and cilantro.",
      "Serve immediately with gluten-free bread or pita for dipping.",
      "For best results, use room temperature eggs to ensure even cooking."
    ]
  },

  {
    id: 7,
    title: "Chocolate Almond Torte",
    description: "Rich, flourless chocolate cake with ground almonds.",
    defaultServings: 12,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    nutrition: {
      servingSize: "1 slice (100g)",
      calories: 380,
      protein: 8,
      carbohydrates: 28,
      fat: 26,
      fiber: 4,
      sugar: 22,
      sodium: 95
    },
    tags: ["dessert", "chocolate", "special occasion"],
    ingredients: [
      { amount: "200", unit: "g", item: "dark chocolate (70% cocoa), chopped" },
      { amount: "200", unit: "g", item: "unsalted butter, cubed" },
      { amount: "200", unit: "g", item: "ground almonds" },
      { amount: "6", unit: "large", item: "eggs, separated" },
      { amount: "200", unit: "g", item: "granulated sugar" },
      { amount: "1", unit: "tsp", item: "vanilla extract" },
      { amount: "0.25", unit: "tsp", item: "salt" },
      { amount: "2", unit: "tbsp", item: "cocoa powder for dusting" }
    ],
    instructions: [
      "Preheat oven to 325°F (165°C). Grease a 9-inch springform pan and line the bottom with parchment paper.",
      "Set up a double boiler: Place chocolate and butter in a heatproof bowl over a pan of simmering water (don't let bowl touch water).",
      "Stir occasionally until chocolate and butter are completely melted and smooth. Remove from heat and let cool slightly.",
      "In a large bowl, whisk egg yolks with half the sugar until pale and creamy, about 3-4 minutes.",
      "Stir the melted chocolate mixture into the egg yolk mixture. Add vanilla extract.",
      "Fold in ground almonds until well combined.",
      "In a clean bowl, beat egg whites and salt until soft peaks form. Gradually add remaining sugar, beating until stiff, glossy peaks form.",
      "Gently fold one-third of egg whites into chocolate mixture to lighten it.",
      "Fold in remaining egg whites in two additions, being careful not to deflate the batter.",
      "Pour batter into prepared pan and smooth the top.",
      "Bake for 45-50 minutes until cake is set but still slightly wobbly in center.",
      "Cool completely in pan on a wire rack. Cake will sink slightly as it cools.",
      "Run a knife around edge of pan before releasing springform.",
      "Dust with cocoa powder before serving. Store covered at room temperature for up to 3 days."
    ]
  },

  {
    id: 8,
    title: "Vietnamese Summer Rolls",
    description: "Fresh rice paper rolls with shrimp and vegetables.",
    defaultServings: 4,
    image: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=500",
    nutrition: {
      servingSize: "3 rolls (240g)",
      calories: 280,
      protein: 14,
      carbohydrates: 42,
      fat: 8,
      fiber: 3,
      sugar: 4,
      sodium: 520
    },
    tags: ["appetizer", "vietnamese", "asian", "lunch"],
    ingredients: [
      { amount: "12", unit: "", item: "rice paper wrappers" },
      { amount: "4", unit: "oz", item: "rice vermicelli noodles" },
      { amount: "12", unit: "large", item: "shrimp, cooked and halved lengthwise" },
      { amount: "1", unit: "cup", item: "carrots, julienned" },
      { amount: "1", unit: "cup", item: "cucumber, julienned" },
      { amount: "2", unit: "cups", item: "lettuce leaves" },
      { amount: "1", unit: "cup", item: "fresh mint leaves" },
      { amount: "1", unit: "cup", item: "fresh cilantro" },
      { amount: "1", unit: "cup", item: "fresh basil leaves" },
      { amount: "0.25", unit: "cup", item: "peanuts, chopped" }
    ],
    instructions: [
      "Cook rice vermicelli according to package instructions. Drain and rinse with cold water.",
      "Fill a large bowl with warm water. Working with one rice paper at a time, dip into water for 5 seconds.",
      "Place wrapper on a clean, damp kitchen towel. Wait 30 seconds for it to soften completely.",
      "On the bottom third of the wrapper, place 2-3 shrimp halves in a row, pink side down.",
      "Layer with a small portion of noodles, vegetables, herbs, and peanuts.",
      "Fold the bottom edge up over the filling, then fold in the sides.",
      "Roll tightly from bottom to top, like a burrito, keeping filling compact.",
      "Place finished rolls on a plate lined with damp paper towels. Cover with plastic wrap if not serving immediately.",
      "Serve within 2 hours with peanut or hoisin dipping sauce.",
      "For best results, don't stack rolls and keep them at room temperature.",
      "Pro tip: Keep ingredients separated and organized for efficient assembly."
    ]
  },

  {
    id: 9,
    title: "Quinoa Stuffed Bell Peppers",
    description: "Colorful bell peppers stuffed with quinoa and vegetables.",
    defaultServings: 6,
    image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=500",
    nutrition: {
      servingSize: "1 stuffed pepper (250g)",
      calories: 320,
      protein: 12,
      carbohydrates: 42,
      fat: 14,
      fiber: 7,
      sugar: 8,
      sodium: 450
    },
    tags: ["dinner", "vegetarian", "main course", "healthy"],
    ingredients: [
      { amount: "6", unit: "large", item: "bell peppers, any color" },
      { amount: "1.5", unit: "cups", item: "quinoa, rinsed" },
      { amount: "3", unit: "cups", item: "vegetable broth" },
      { amount: "1", unit: "medium", item: "onion, diced" },
      { amount: "2", unit: "cloves", item: "garlic, minced" },
      { amount: "1", unit: "can", item: "black beans, drained and rinsed" },
      { amount: "1", unit: "cup", item: "corn kernels" },
      { amount: "1", unit: "cup", item: "cherry tomatoes, halved" },
      { amount: "2", unit: "tbsp", item: "olive oil" },
      { amount: "1", unit: "tsp", item: "ground cumin" },
      { amount: "1", unit: "tsp", item: "chili powder" },
      { amount: "0.5", unit: "cup", item: "fresh cilantro, chopped" },
      { amount: "1", unit: "cup", item: "shredded cheese (optional)" },
      { amount: "1", unit: "lime", item: "juiced" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Line a large baking dish with parchment paper.",
      "Cook quinoa in vegetable broth according to package instructions. Fluff with a fork when done.",
      "Cut bell peppers in half lengthwise, remove seeds and membranes. Place cut-side up in prepared baking dish.",
      "Heat olive oil in a large skillet over medium heat. Add onion and cook until translucent, about 5 minutes.",
      "Add garlic, cumin, and chili powder. Cook for 1 minute until fragrant.",
      "In a large bowl, combine cooked quinoa, sautéed onion mixture, black beans, corn, and tomatoes.",
      "Add lime juice, cilantro, and salt and pepper to taste. Mix well.",
      "Fill each pepper half with quinoa mixture. If using cheese, sprinkle on top.",
      "Cover dish with foil and bake for 30-35 minutes.",
      "Remove foil and bake for additional 5-10 minutes until peppers are tender and cheese is melted.",
      "Let rest for 5 minutes before serving.",
      "Can be stored in an airtight container for up to 4 days. Reheat in microwave or oven."
    ]
  },

  {
    id: 10,
    title: "Berry Chia Pudding",
    description: "Overnight chia seed pudding with fresh berries.",
    defaultServings: 4,
    image: "https://images.unsplash.com/photo-1583499871880-de841d1ace2a?w=500",
    nutrition: {
      servingSize: "1 cup (240g)",
      calories: 240,
      protein: 8,
      carbohydrates: 32,
      fat: 12,
      fiber: 10,
      sugar: 14,
      sodium: 95
    },
    tags: ["breakfast", "dessert", "make ahead", "healthy"],
    ingredients: [
      { amount: "0.5", unit: "cup", item: "chia seeds" },
      { amount: "2", unit: "cups", item: "almond milk" },
      { amount: "2", unit: "tbsp", item: "maple syrup" },
      { amount: "1", unit: "tsp", item: "vanilla extract" },
      { amount: "0.25", unit: "tsp", item: "cinnamon" },
      { amount: "2", unit: "cups", item: "mixed berries" },
      { amount: "0.25", unit: "cup", item: "sliced almonds" },
      { amount: "2", unit: "tbsp", item: "honey (optional)" }
    ],
    instructions: [
      "In a medium bowl, whisk together almond milk, maple syrup, vanilla extract, and cinnamon.",
      "Add chia seeds and whisk well to combine. Make sure no seeds are clumping together.",
      "Let sit for 5 minutes, then whisk again to prevent seeds from settling at the bottom.",
      "Cover bowl with plastic wrap or divide mixture into individual serving containers.",
      "Refrigerate for at least 4 hours or overnight until mixture has thickened to a pudding-like consistency.",
      "Before serving, stir pudding well. If too thick, thin with a little additional almond milk.",
      "Top with fresh berries, sliced almonds, and a drizzle of honey if desired.",
      "Store covered in refrigerator for up to 5 days.",
      "For meal prep, portion into individual jars and add toppings just before serving.",
      "Pro tip: For a smoother texture, blend the soaked chia pudding until creamy."
    ]
  },

  {
    id: 11,
    title: "Vietnamese Rice Paper Rolls",
    description: "Fresh and healthy spring rolls with rice noodles and herbs.",
    defaultServings: 4,
    image: "https://images.unsplash.com/photo-1553607558-455f4310f6ec?w=500",
    nutrition: {
      servingSize: "3 rolls (240g)",
      calories: 280,
      protein: 14,
      carbohydrates: 42,
      fat: 8,
      fiber: 3,
      sugar: 4,
      sodium: 520
    },
    tags: ["vietnamese", "appetizer", "lunch", "healthy"],
    ingredients: [
      { amount: "12", unit: "", item: "rice paper wrappers" },
      { amount: "4", unit: "oz", item: "rice vermicelli noodles" },
      { amount: "12", unit: "large", item: "shrimp, cooked and halved lengthwise" },
      { amount: "1", unit: "cup", item: "carrots, julienned" },
      { amount: "1", unit: "cup", item: "cucumber, julienned" },
      { amount: "2", unit: "cups", item: "lettuce leaves" },
      { amount: "1", unit: "cup", item: "fresh mint leaves" },
      { amount: "1", unit: "cup", item: "fresh cilantro" },
      { amount: "1", unit: "cup", item: "fresh basil leaves" },
      { amount: "0.25", unit: "cup", item: "peanuts, chopped" }
    ],
    instructions: [
      "Cook rice vermicelli according to package instructions. Drain and rinse with cold water.",
      "Fill a large bowl with warm water. Working with one rice paper at a time, dip into water for 5 seconds.",
      "Place wrapper on a clean, damp kitchen towel. Wait 30 seconds for it to soften completely.",
      "On the bottom third of the wrapper, place 2-3 shrimp halves in a row, pink side down.",
      "Layer with a small portion of noodles, vegetables, herbs, and peanuts.",
      "Fold the bottom edge up over the filling, then fold in the sides.",
      "Roll tightly from bottom to top, like a burrito, keeping filling compact.",
      "Place finished rolls on a plate lined with damp paper towels. Cover with plastic wrap if not serving immediately.",
      "Serve within 2 hours with peanut or hoisin dipping sauce.",
      "For best results, don't stack rolls and keep them at room temperature.",
      "Pro tip: Keep ingredients separated and organized for efficient assembly."
    ]
  }
];

// Updated categories without bread category and with meal-time categories
export const categories = [
  "breakfast",
  "lunch",
  "dinner",
  "appetizer",
  "main course",
  "dessert",
  "salad",
  "snack",
  "healthy",
  "high-protein",
  "vegetarian",
  "vegan",
  "thai",
  "italian",
  "asian",
  "middle eastern",
  "mediterranean",
  "spicy",
  "chocolate",
  "special occasion"
];

// Updated cuisine types
export const cuisineTypes = [
  "italian",
  "mediterranean",
  "asian",
  "mexican",
  "indian",
  "thai",
  "vietnamese",
  "middle eastern",
  "american"
];

// Diet types
export const dietTypes = [
  "vegetarian",
  "vegan",
  "dairy-free",
  "high-protein",
  "low-carb",
  "keto-friendly"
];
