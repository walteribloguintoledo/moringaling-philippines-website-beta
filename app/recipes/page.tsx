
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Clock, Users, ChefHat, Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const recipes = [
  {
    id: 1,
    title: "Chicken Tinola with Malunggay",
    description: "A classic Filipino comfort soup featuring tender chicken, green papaya, and fresh moringa leaves in a flavorful ginger broth",
    image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6817ba9f-d900-45f7-9a78-208da358971d_1920x1080.jpeg",
    cookTime: "45 minutes",
    servings: "4-6 people",
    difficulty: "Easy",
    category: "Main Dish",
    ingredients: [
      "1 whole chicken (1.5-2 kg), cut into pieces",
      "2 tbsp cooking oil",
      "1 medium onion, sliced",
      "3-4 cloves garlic, minced", 
      "2-inch piece ginger, sliced thin",
      "6-8 cups water",
      "2 tbsp fish sauce (patis)",
      "1 medium green papaya, peeled and sliced",
      "2 cups fresh malunggay (moringa) leaves",
      "2 pieces chili pepper (optional)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat oil in a large pot over medium heat. Sauté onion, garlic, and ginger until fragrant (about 3 minutes).",
      "Add chicken pieces and cook until lightly browned on all sides (5-7 minutes).",
      "Pour in water and fish sauce. Bring to a boil, then reduce heat and simmer covered for 20 minutes.",
      "Add sliced green papaya and continue simmering for 10 more minutes until papaya is tender.",
      "Season with salt and pepper to taste. Add chili pepper if desired.",
      "Turn off heat and add fresh malunggay leaves. Let stand for 2-3 minutes until leaves are wilted.",
      "Serve hot with steamed rice. Traditionally served with fish sauce and calamansi on the side."
    ],
    tips: [
      "Use young, tender malunggay leaves for the best texture",
      "Don't overcook the moringa leaves to preserve their nutritional value",
      "Green papaya can be substituted with chayote or radish",
      "For richer flavor, use chicken with bones rather than boneless cuts"
    ],
    nutrition: "Rich in protein, vitamin C, calcium, and iron from the malunggay. This dish addresses common Filipino dietary deficiencies while providing comfort and warmth.",
    cultural: "Tinola is considered the ultimate Filipino comfort food, often prepared for family gatherings and when someone is feeling unwell. The addition of malunggay makes it both nourishing and healing."
  },
  {
    id: 2,
    title: "Malunggay Pandesal",
    description: "Traditional Filipino bread rolls enhanced with nutritious moringa powder, creating a healthy twist on the beloved morning staple",
    image: "https://i.ytimg.com/vi/WYz2iqjkuc4/maxresdefault.jpg",
    cookTime: "3 hours (including rising time)",
    servings: "16-20 pieces",
    difficulty: "Medium",
    category: "Bread",
    ingredients: [
      "4 cups bread flour",
      "2 tbsp malunggay (moringa) powder",
      "1 packet (7g) active dry yeast",
      "1 cup warm water",
      "1/3 cup sugar",
      "1 tsp salt",
      "1/4 cup vegetable oil",
      "1 egg, beaten",
      "1/2 cup bread crumbs for coating"
    ],
    instructions: [
      "Dissolve yeast in warm water with 1 tablespoon sugar. Let stand for 5-10 minutes until foamy.",
      "In a large bowl, combine flour, malunggay powder, remaining sugar, and salt. Mix well.",
      "Make a well in the center and add the yeast mixture, oil, and beaten egg. Mix until a soft dough forms.",
      "Knead on a floured surface for 8-10 minutes until smooth and elastic. The dough should be slightly sticky.",
      "Place in an oiled bowl, cover with damp cloth, and let rise in a warm place for 1-1.5 hours until doubled.",
      "Punch down dough and divide into 16-20 equal pieces. Shape each into an oval roll.",
      "Roll each piece in bread crumbs and place on greased baking sheets, leaving space between rolls.",
      "Cover and let rise for 30-45 minutes until puffy.",
      "Preheat oven to 375°F (190°C). Bake for 15-18 minutes until golden brown.",
      "Cool on wire racks. Serve warm or store in airtight container."
    ],
    tips: [
      "Ensure water temperature is just warm (not hot) to avoid killing the yeast",
      "Knead thoroughly for the best texture - the dough should be smooth and elastic",
      "For softer pandesal, brush tops with butter while still warm",
      "Store in airtight container for up to 3 days, or freeze for longer storage"
    ],
    nutrition: "Enhanced with moringa powder, these pandesal provide additional vitamins A and C, calcium, and iron compared to regular bread. A nutritious start to any Filipino morning.",
    cultural: "Pandesal is the quintessential Filipino breakfast bread, often enjoyed with coffee or hot chocolate. This healthy version maintains the beloved taste while adding the nutritional benefits of malunggay."
  }
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-orange-800 mb-6">
              Filipino Moringa Recipes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover authentic Filipino dishes featuring malunggay (moringa) that have nourished 
              families for generations while providing exceptional health benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {recipes.map((recipe, index) => (
              <Card key={recipe.id} className="overflow-hidden shadow-xl border-0">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {recipe.category}
                        </Badge>
                        <Badge variant="outline">{recipe.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-800 mb-3">
                        {recipe.title}
                      </CardTitle>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {recipe.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Recipe Meta */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2 text-orange-600" />
                          <span className="font-medium">Cook Time:</span>
                          <span className="ml-2">{recipe.cookTime}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-2 text-orange-600" />
                          <span className="font-medium">Serves:</span>
                          <span className="ml-2">{recipe.servings}</span>
                        </div>
                      </div>

                      {/* Ingredients */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                          <ChefHat className="h-5 w-5 mr-2 text-orange-600" />
                          Ingredients
                        </h3>
                        <ul className="space-y-2">
                          {recipe.ingredients.map((ingredient, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Instructions */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                          <Utensils className="h-5 w-5 mr-2 text-orange-600" />
                          Instructions
                        </h3>
                        <ol className="space-y-3">
                          {recipe.instructions.map((step, idx) => (
                            <li key={idx} className="text-gray-700 flex items-start">
                              <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                                {idx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Tips & Notes */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-yellow-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Cooking Tips</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {recipe.tips.map((tip, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-yellow-600 mr-2">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Nutritional Benefits</h4>
                            <p className="text-sm text-gray-700">{recipe.nutrition}</p>
                          </div>
                          
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Cultural Significance</h4>
                            <p className="text-sm text-gray-700">{recipe.cultural}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
