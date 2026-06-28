import { useState } from 'react'
import { Link } from 'react-router-dom'

const allProducts = [
  { id: 1, name: 'Fresh Tomatoes', price: 2.50, image: '🍅', category: 'Vegetables' },
  { id: 2, name: 'Cooking Oil 2L', price: 8.99, image: '🫙', category: 'Groceries' },
  { id: 3, name: 'Bread Loaf', price: 1.50, image: '🍞', category: 'Bakery' },
  { id: 4, name: 'Chicken Braai Pack', price: 12.99, image: '🍗', category: 'Meat' },
  { id: 5, name: 'Onions 1kg', price: 1.20, image: '🧅', category: 'Vegetables' },
  { id: 6, name: 'Rice 2kg', price: 4.50, image: '🍚', category: 'Groceries' },
  { id: 7, name: 'Eggs x6', price: 2.00, image: '🥚', category: 'Dairy' },
  { id: 8, name: 'Milk 1L', price: 1.80, image: '🥛', category: 'Dairy' },
  { id: 9, name: 'Beef Steak', price: 15.99, image: '🥩', category: 'Meat' },
  { id: 10, name: 'Spinach Bunch', price: 0.80, image: '🥬', category: 'Vegetables' },
  { id: 11, name: 'Maize Meal 5kg', price: 6.50, image: '🌽', category: 'Groceries' },
  { id: 12, name: 'Butter 250g', price: 3.20, image: '🧈', category: 'Dairy' },
]

const categories = ['All', 'Vegetables', 'Groceries', 'Bakery', 'Meat', 'Dairy']

function Shop() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory]