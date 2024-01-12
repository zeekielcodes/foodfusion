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
          fetch('https://api.foodfusion.com/menus')
            .then(response => response.json())
            .then(data => console.log(data));
        `}/>
        <p className="my-4">Output:</p>
        <CodeSnippet language="javascript" code={`
       [
        {
          id: 1,
          name: 'Margherita Pizza',
          image: 'margherita_pizza.jpg',
          description: 'Classic pizza with tomato, mozzarella, and basil.',
          price: 12.99,
          category: 'Pizza',
        },
        {
          id: 2,
          name: 'Chicken Pad Thai',
          image: 'chicken_pad_thai.jpg',
          description: 'Stir-fried rice noodles with chicken, peanuts, and vegetables.',
          price: 9.99,
          category: 'Asian',
        },
        {
          id: 3,
          name: 'Grilled Salmon',
          image: 'grilled_salmon.jpg',
          description: 'Freshly grilled salmon fillet with lemon and herbs.',
          price: 16.99,
          category: 'Seafood',
        },
        {
          id: 4,
          name: 'Caesar Salad',
          image: 'caesar_salad.jpg',
          description: 'Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
          price: 7.99,
          category: 'Salad',
        },
        {
          id: 5,
          name: 'Chocolate Brownie Sundae',
          image: 'chocolate_brownie_sundae.jpg',
          description: 'Warm chocolate brownie topped with vanilla ice cream and chocolate sauce.',
          price: 6.99,
          category: 'Dessert',
        },
      ]
        `}/>
<hr />
<p>/orders: Faciptate easy and secure order placement.</p>
<p>/cuisines: Explore supported global cuisines.</p>
</div>


    </div>
  )
}
