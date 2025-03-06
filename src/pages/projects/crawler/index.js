import React, { useState, useCallback } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Chip, Stack, IconButton, Slider, List, ListItem, ListItemText, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Import the mock recipes from a separate file to keep this component clean
import { mockRecipes } from './mockData';

const GlutenFreeRecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [expandedRecipes, setExpandedRecipes] = useState({});
  const [servings, setServings] = useState({});

  const toggleRecipeExpansion = (recipeId) => {
    setExpandedRecipes(prev => ({
      ...prev,
      [recipeId]: !prev[recipeId]
    }));
  };

  const adjustServings = (recipeId, delta) => {
    setServings(prev => {
      const currentServings = prev[recipeId] || recipes.find(r => r.id === recipeId).defaultServings;
      const newServings = Math.max(1, currentServings + delta);
      return {
        ...prev,
        [recipeId]: newServings
      };
    });
  };

  const calculateAdjustedAmount = useCallback((amount, originalServings, targetServings) => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return amount;
    
    const ratio = targetServings / originalServings;
    const adjusted = (numericAmount * ratio).toFixed(2);
    // Remove trailing zeros after decimal point
    return adjusted.replace(/\.?0+$/, '');
  }, []);

  const searchRecipes = () => {
    setLoading(true);
    // Simulate API call with mock data
    setTimeout(() => {
      const filteredRecipes = mockRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.item.toLowerCase().includes(searchTerm.toLowerCase())) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setRecipes(filteredRecipes);
      // Initialize servings state for new recipes
      const newServings = {};
      filteredRecipes.forEach(recipe => {
        newServings[recipe.id] = recipe.defaultServings;
      });
      setServings(newServings);
      setLoading(false);
      setSearched(true);
    }, 500);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setLoading(true);
    setTimeout(() => {
      const filteredRecipes = mockRecipes.filter(recipe =>
        recipe.tags.includes(suggestion.toLowerCase()) ||
        recipe.title.toLowerCase().includes(suggestion.toLowerCase())
      );
      setRecipes(filteredRecipes);
      const newServings = {};
      filteredRecipes.forEach(recipe => {
        newServings[recipe.id] = recipe.defaultServings;
      });
      setServings(newServings);
      setLoading(false);
      setSearched(true);
    }, 500);
  };

  const Recipe = ({ recipe }) => {
    const [localServings, setLocalServings] = useState(recipe.defaultServings);
    
    const handleServingChange = (e) => {
      const value = parseInt(e.target.value);
      if (!isNaN(value) && value > 0) {
        setLocalServings(value);
      }
    };

    const adjustedIngredients = recipe.ingredients.map(ing => ({
      ...ing,
      amount: ((parseFloat(ing.amount) * localServings) / recipe.defaultServings).toFixed(2)
    }));

    const nutrition = recipe.nutrition;

    return (
      <Card 
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          mb: 3, 
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <CardContent>
          {recipe.image && (
            <Box 
              component="img"
              src={recipe.image}
              alt={recipe.title}
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 1,
                mb: 2
              }}
            />
          )}
          
          <Typography variant="h5" gutterBottom color="primary">
            {recipe.title}
          </Typography>
          
          <Typography variant="body1" color="text.secondary" paragraph>
            {recipe.description}
          </Typography>

          <Box sx={{ mb: 2 }}>
            {recipe.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{ 
                  mr: 1, 
                  mb: 1,
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <IconButton 
              onClick={() => setLocalServings(Math.max(1, localServings - 1))}
              color="primary"
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              value={localServings}
              onChange={handleServingChange}
              type="number"
              size="small"
              sx={{ width: 80, mx: 1 }}
              inputProps={{ min: 1 }}
            />
            <IconButton 
              onClick={() => setLocalServings(localServings + 1)}
              color="primary"
            >
              <AddIcon />
            </IconButton>
            <Typography variant="body1" sx={{ ml: 1 }}>
              servings
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom color="primary">
                Ingredients
              </Typography>
              <List>
                {adjustedIngredients.map((ing, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText>
                      {ing.amount} {ing.unit} {ing.item}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              {nutrition && (
                <>
                  <Typography variant="h6" gutterBottom color="primary">
                    Nutrition Facts (per serving)
                  </Typography>
                  <TableContainer component={Paper} sx={{ mb: 3 }}>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell>Serving Size</TableCell>
                          <TableCell>{nutrition.servingSize}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Calories</TableCell>
                          <TableCell>{nutrition.calories}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Protein</TableCell>
                          <TableCell>{nutrition.protein}g</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Carbohydrates</TableCell>
                          <TableCell>{nutrition.carbohydrates}g</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Fat</TableCell>
                          <TableCell>{nutrition.fat}g</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Fiber</TableCell>
                          <TableCell>{nutrition.fiber}g</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sugar</TableCell>
                          <TableCell>{nutrition.sugar}g</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sodium</TableCell>
                          <TableCell>{nutrition.sodium}mg</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )}
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 2 }}>
            Instructions
          </Typography>
          <List>
            {recipe.instructions.map((step, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText>
                    <Typography variant="body1" color="text.primary">
                      {index + 1}. {step}
                    </Typography>
                  </ListItemText>
                </ListItem>
                {index < recipe.instructions.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>

          {recipe.glutenSubstitutes && (
            <>
              <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 3 }}>
                Gluten-Free Substitutions
              </Typography>
              <List>
                {recipe.glutenSubstitutes.map((sub, index) => (
                  <ListItem key={index}>
                    <ListItemText>
                      Replace {sub.original} with {sub.substitute}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </CardContent>
      </Card>
    );
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
            Search through our collection of over 200 gluten-free recipes. Adjust serving sizes and discover ingredient substitutions.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by recipe name, ingredient, or category (e.g., 'pasta', 'bread', 'dessert')"
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
              Search Recipes
            </Button>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#00bcd4', mb: 1 }}>
                Popular categories:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                {['Breakfast', 'Main Course', 'Dessert', 'Snacks', 'Bread', 'Pasta', 'Pizza'].map((suggestion, index) => (
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
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: '3px solid rgba(0, 188, 212, 0.2)',
                      borderTop: '3px solid #00bcd4'
                    }}
                  />
                </motion.div>
              </Box>
            ) : searched && recipes.length === 0 ? (
              <Typography sx={{ color: '#fff', textAlign: 'center', mt: 4 }}>
                No recipes found. Try a different search term!
              </Typography>
            ) : (
              recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))
            )}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default GlutenFreeRecipeFinder;
