import React from 'react';
import { pulses, beverages, oil, spices, tea, peronalcare, snackes, household, sugar } from './images';
import './css/Category.css';
import { Link } from 'react-router-dom';
const CategoriesSection = () => {
  return (

        <div className="categories mx-auto mt-8 pt-16 pb-16">
        <h1 class="heading" data-aos="fade-up"> Categories <span> product</span></h1>
            <div className="box-container">
            <div className="box">
              <Link to="/pulsesbean">
                <img src={pulses} alt="" className="fixed-size-img" />
              </Link>
              <div className="content">
                <Link to="/pulsesbean">
                  <h3 className="text-lg font-semibold">Pulses and Beans</h3>
                </Link>
              </div>
            </div>

              <div className="box">
                <a href="#">
                  <img src={snackes} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Snacks</h3></a>
                </div>
              </div>

              <div className="box">
                <a href="#">
                  <img src={household} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Households</h3></a>
                </div>
              </div>

              <div className="box">
                <a href="#">
                  <img src={peronalcare} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Personal Care</h3></a>
                </div>
              </div>

              <div className="box">
                <a href="#">
                  <img src={beverages} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Beverages</h3></a>
                </div>
              </div>

              <div className="box">
                <a href="#">
                  <img src={spices} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Spices</h3></a>
                </div>
              </div>

              <div className="box">
                <a href="#">
                  <img src={sugar} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Sugar</h3></a>
                </div>
              </div>

              <div className="box">
                <a href="#">
                  <img src={oil} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Oil & Ghee</h3></a>
                </div>
              </div>

              <div className="box">
                <a href="#">
                  <img src={tea} alt="" className="" />
                </a>
                <div className="content">
                  <a href="#"><h3 className="text-lg font-semibold">Tea</h3></a>
                </div>
              </div>

            </div>
          </div> 
  );
};

export default CategoriesSection;






// // import React, { useEffect, useState } from 'react';
// // import { pulses, beverages, oil, spices, tea, peronalcare, snackes, household, sugar } from './images';
// // const shuffleArray = (array) => {
// //   let currentIndex = array.length,
// //     randomIndex;

// //   while (currentIndex !== 0) {
// //     randomIndex = Math.floor(Math.random() * currentIndex);
// //     currentIndex--;

// //     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
// //   }

// //   return array;
// // };

// // const CategoriesSection = () => {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     const initialPosts = [
// //       {
// //         image: pulses,
// //         title: "Pulses and Beans",
// //         description: "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
// //       },
// //       {
// //         image: snackes,
// //         title: "Coffee Roasting Basics: Developing Flavour by Roasting",
// //         description: "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
// //       },
// //       {
// //         image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
// //         title: "Latte vs. Flat White - What is the Difference?",
// //         description: "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
// //       },
// //       {
// //         image: "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
// //         title: "Creating the Perfect Espresso Recipe",
// //         description: "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
// //       },
// //     ];

// //     const shuffledPosts = shuffleArray([...initialPosts, ...initialPosts, ...initialPosts, ...initialPosts, ...initialPosts]);

// //     setPosts(shuffledPosts);
// //   }, []);

// //   return (
// //     <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
// //       {/* Card Grid */}
// //       <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// //         {posts.map((post, index) => (
// //           /* Card Item */
// //           <div key={index} className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
// //             {/* Clickable Area */}
// //             <a href="link" className="cursor-pointer">
// //               <figure>
// //                 {/* Image */}
// //                 <img
// //                   src={`${post.image}?auto=format&fit=crop&w=400&q=50`}
// //                   className="rounded-t h-72 w-full object-cover"
// //                   alt="Post Image"
// //                 />

// //                 <figcaption className="p-4">
// //                   {/* Title */}
// //                   <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">{post.title}</p>

// //                   {/* Description */}
// //                   <small className="leading-5 text-gray-500 dark:text-gray-400">{post.description}</small>
// //                 </figcaption>
// //               </figure>
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default CategoriesSection;





// import React, { useEffect, useState } from 'react';
// import { pulses, snackes } from './images';
// import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

// const shuffleArray = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//   }

//   return array;
// };

// const CategoriesSection = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const initialPosts = [
//       {
//         image: pulses,
//         title: "Pulses and Beans",
//         description: "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
//       },
//       {
//         image: snackes,
//         title: "Coffee Roasting Basics: Developing Flavour by Roasting",
//         description: "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
//       },
//       // Add more posts as needed
//     ];

//     const shuffledPosts = shuffleArray([...initialPosts, ...initialPosts, ...initialPosts, ...initialPosts, ...initialPosts]);

//     setPosts(shuffledPosts);
//   }, []);

//   return (
//     <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
//       {/* Card Grid */}
//       <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {posts.map((post, index) => (
//           /* Card Item */
//           <CardDefault key={index} post={post} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const CardDefault = ({ post }) => {
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img
//           src={post.image}
//           alt="card-image"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           {post.title}
//         </Typography>
//         <Typography>
//           {post.description}
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>Read More</Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default CategoriesSection;

