import React from 'react'
import CodeSnippet from '../components/CodeSnippet'

export default function page() {
  return (
    <div className='py-8'>
        <h1 className='text-3xl font-bold'>Documentation:</h1>
<h2 className='text-xl my-6'>
Getting Started
</h2>
<p>
API Documentation: Dive into our comprehensive documentation to understand the endpoints, parameters, and authentication methods.
</p>
<p>
Sample Applications: Explore our sample applications to see the API in action and jumpstart your development process.
</p>
<div className='my-6'>
<h3 className='font-semibold mb-3'>API Endpoints</h3>
<p className="mb-2">/menus: Retrieve restaurant menus and food items.</p>
<CodeSnippet language="javascript" code={`
          fetch('https://api.dishdart.com/menus')
            .then(response => response.json())
            .then(data => console.log(data));
        `}/>
        <p className="my-4">Output:</p>
        <CodeSnippet language="javascript" code={`
       [
        {
          id: 1,
          name: 'Margherita Pizza',
          image: 'https://placekitten.com/200/300',
          description: 'Classic pizza with tomato, mozzarella, and basil.',
          price: 12.99,
          category: 'Pizza',
          ratings: 4.5,
        },
        {
          id: 2,
          name: 'Chicken Pad Thai',
          image: 'https://placekitten.com/201/300',
          description: 'Stir-fried rice noodles with chicken, peanuts, and vegetables.',
          price: 9.99,
          category: 'Asian',
          ratings: 4.2,
        },
        {
          id: 3,
          name: 'Grilled Salmon',
          image: 'https://placekitten.com/202/300',
          description: 'Freshly grilled salmon fillet with lemon and herbs.',
          price: 16.99,
          category: 'Seafood',
          ratings: 4.8,
        },
        {
          id: 4,
          name: 'Caesar Salad',
          image: 'https://placekitten.com/203/300',
          description: 'Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
          price: 7.99,
          category: 'Salad',
          ratings: 4.0,
        },
        {
          id: 5,
          name: 'Chocolate Brownie Sundae',
          image: 'https://placekitten.com/204/300',
          description: 'Warm chocolate brownie topped with vanilla ice cream and chocolate sauce.',
          price: 6.99,
          category: 'Dessert',
          ratings: 4.7,
        },
      ]      
        `}/>
<hr className='my-4'/>
<p>/categories: Retrieve lists of all available dish categories.</p>
<CodeSnippet language="javascript" code={`
          fetch('https://api.dishdart.com/categories')
            .then(response => response.json())
            .then(data => console.log(data));
        `}/>
        <p className="my-4">Output:</p>
        <CodeSnippet language="javascript" code={`
       [
        {
          id: 1,
          name: 'Pizza',
          image: 'https://placekitten.com/300/200',
          dishes_count: 2,
        },
        {
          id: 2,
          name: 'Asian',
          image: 'https://placekitten.com/301/200',
          dishes_count: 2,
        },
        {
          id: 3,
          name: 'Seafood',
          image: 'https://placekitten.com/302/200',
          dishes_count: 2,
        }
      ];
           
        `}/>
<p>/menus/id: Retrieves the dish with the provided id</p>
<CodeSnippet language="javascript" code={`
          fetch('https://api.dishdart.com/menus/1')
            .then(response => response.json())
            .then(data => console.log(data));
        `}/>
        <p className="my-4">Output:</p>
        <CodeSnippet language="javascript" code={`
        {
          id: 1,
          name: 'Margherita Pizza',
          image: 'https://placekitten.com/200/300',
          description: 'Classic pizza with tomato, mozzarella, and basil.',
          price: 12.99,
          category: 'Pizza',
          ratings: 4.5,
        }
        `}/>
        <p>/menus/search?q=Rice: Searches for a food item</p>
<CodeSnippet language="javascript" code={`
          fetch('https://api.dishdart.com/menus/search?q=Rice')
            .then(response => response.json())
            .then(data => console.log(data));
        `}/>
        <p className="my-4">Output:</p>
        <CodeSnippet language="javascript" code={`
        [
          {
            id: 24,
            name: 'Chicken Fried Rice',
            description: 'Delicious fried rice with chicken, vegetables, and soy sauce.',
            price: 10.99,
            ratings: 4.7,
          },
          {
            id: 12,
            name: 'Vegetable Biryani',
            description: 'Aromatic rice dish with mixed vegetables and biryani spices.',
            price: 12.99,
            ratings: 4.5,
          },
          {
            id: 32,
            name: 'Shrimp Fried Rice',
            description: 'Savory fried rice with shrimp, peas, and a touch of sesame oil.',
            price: 14.99,
            ratings: 4.8,
          },
        ];
        `}/>
</div>


    </div>
  )
}
