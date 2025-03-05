import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Chip, Stack, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

// Mock data for gluten-free substitutions
const mockRecipes = [
  {
    title: "Classic Chocolate Chip Cookies (Gluten-Free)",
    description: "Soft, chewy chocolate chip cookies that are completely gluten-free. These cookies have the perfect texture and taste just like traditional cookies!",
    glutenSubstitutes: [
      { original: "all-purpose flour", substitute: "almond flour + rice flour blend" },
      { original: "wheat flour", substitute: "gluten-free all-purpose flour" }
    ],
    source: "Celiac-Friendly Desserts",
    url: "https://example.com/gf-chocolate-chip-cookies"
  },
  {
    title: "Homemade Pizza Crust",
    description: "A crispy, delicious pizza crust that's perfect for your favorite toppings. This recipe creates a crust that holds together well and has great texture.",
    glutenSubstitutes: [
      { original: "bread flour", substitute: "cauliflower" },
      { original: "wheat flour", substitute: "chickpea flour + tapioca starch" }
    ],
    source: "Gluten-Free Kitchen",
    url: "https://example.com/gf-pizza-crust"
  },
  {
    title: "Hearty Sandwich Bread",
    description: "Finally, a gluten-free bread that's soft, doesn't crumble, and tastes amazing! Perfect for sandwiches or toast.",
    glutenSubstitutes: [
      { original: "bread flour", substitute: "brown rice flour + potato starch" },
      { original: "vital wheat gluten", substitute: "xanthan gum" }
    ],
    source: "Celiac Baking Guide",
    url: "https://example.com/gf-sandwich-bread"
  }
];

const searchSuggestions = [
  "bread",
  "pasta",
  "cookies",
  "cake",
  "pizza",
  "muffins",
  "pancakes"
];

const GlutenFreeRecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const searchRecipes = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filteredRecipes = mockRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRecipes(filteredRecipes);
      setLoading(false);
      setSearched(true);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setLoading(true);
    setTimeout(() => {
      setRecipes(mockRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(suggestion.toLowerCase())
      ));
      setLoading(false);
      setSearched(true);
    }, 1000);
  };

  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              color: '#00bcd4',
              fontWeight: 600,
              mb: 2
            }}
          >
            Gluten-Free Recipe Finder
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{ 
              color: '#fff',
              mb: 4,
              opacity: 0.9
            }}
          >
            Search for your favorite recipes and discover gluten-free alternatives. Perfect for people with Celiac Disease or gluten sensitivities.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for a recipe (e.g., 'chocolate cake', 'bread', 'pasta')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  searchRecipes();
                }
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(0, 188, 212, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(0, 188, 212, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00bcd4',
                  },
                },
              }}
            />
            <Button
              variant="contained"
              onClick={searchRecipes}
              disabled={loading}
              sx={{
                mt: 2,
                bgcolor: '#00bcd4',
                '&:hover': {
                  bgcolor: 'rgba(0, 188, 212, 0.8)',
                },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Search Recipes'}
            </Button>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#00bcd4', mb: 1 }}>
                Popular searches:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                {searchSuggestions.map((suggestion, index) => (
                  <Chip
                    key={index}
                    label={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    sx={{
                      bgcolor: 'rgba(0, 188, 212, 0.1)',
                      color: '#00bcd4',
                      border: '1px solid rgba(0, 188, 212, 0.2)',
                      '&:hover': {
                        bgcolor: 'rgba(0, 188, 212, 0.15)',
                        cursor: 'pointer'
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress sx={{ color: '#00bcd4' }} />
              </Box>
            ) : searched && recipes.length === 0 ? (
              <Typography sx={{ color: '#fff', textAlign: 'center', mt: 4 }}>
                No recipes found. Try a different search term!
              </Typography>
            ) : (
              recipes.map((recipe, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      mb: 2,
                      bgcolor: 'rgba(0, 188, 212, 0.05)',
                      border: '1px solid rgba(0, 188, 212, 0.1)',
                      '&:hover': {
                        bgcolor: 'rgba(0, 188, 212, 0.08)',
                        border: '1px solid rgba(0, 188, 212, 0.2)'
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" sx={{ color: '#00bcd4', mb: 2 }}>
                        {recipe.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2, color: '#fff' }}>
                        {recipe.description}
                      </Typography>
                      
                      {recipe.glutenSubstitutes && (
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" sx={{ color: '#00bcd4', mb: 1 }}>
                            Gluten-Free Substitutions:
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                            {recipe.glutenSubstitutes.map((sub, i) => (
                              <Chip
                                key={i}
                                label={`${sub.original} → ${sub.substitute}`}
                                size="small"
                                sx={{
                                  bgcolor: 'rgba(0, 188, 212, 0.1)',
                                  color: '#00bcd4',
                                  border: '1px solid rgba(0, 188, 212, 0.2)',
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      )}
                      
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#00bcd4', mb: 1 }}>
                          Source:
                        </Typography>
                        <Typography 
                          variant="body2" 
                          component="a" 
                          href={recipe.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          sx={{ 
                            color: '#00bcd4',
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          {recipe.source}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default GlutenFreeRecipeFinder;
