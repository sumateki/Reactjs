# React 😎

# git
--- create a new repository on the command line
     - echo "# FoodOrderingApp" >> README.md
     - git init
     - git add README.md
     - git commit -m "first commit"
     - git branch -M main
     - git remote add origin https://github.com/sumateki/FoodOrderingApp.git
     - git push -u origin main
--- or push an existing repository from the command line
     - git remote add origin https://github.com/sumateki/FoodOrderingApp.git
     - git branch -M main
     - git push -u origin main

# parcel
- parcel.org --> visit this site for complete documentation of parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds 
- Image Optimization
- Minification
- Bundling files
- Compress files
- Consistency Hashing algorithm
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Https
- Tree Shaking algorithm -will remove unused code
- Different dev and production bundles




# Food Ordering App
/**
 * Header
 *  - Logo
 *  - Nav items (Home, About, ...)
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Image
 *          - Name of Res, Star rating, cuisine,delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


# Export/Import
- Two types of Export/Import

- 1. Deafut Export/Import
     - export default Component;
     - import Component fro "path";
    
- 2. Named Export/Import
     - export const Component;
     - import {Component} from "path";



# React Hooks
- Normal JS utility functions - written by FB developers
- 2 most important hooks
     - useState() 80% used
          - Used to generate Superpowerful "State Variables" in react
     - useEffect() 20% used


# useEffect
  - if no dependency array -> useEffect is called o every render
  - if dependency array is empty = [] -> useEffect called on initial render(only once)
  - if dependency array is [btnNameReact] -> useEffectc called everytime btnNameReact is updted
     -- useEffect(()=>{
          console.log('useEffect called')
        }, [])



# 2 types of Routing in web apps
     - Client Side Routing
     - Server Side Routing



# Redux Toolkit
     - Install @reduxjs/toolkit and react-redux
     - Build our store
     - Connect our store to our app
     - Create Slice (cardSlice)
     - dispatch(action)
     - Read the data using Selector


# Types of Testing (developer)
  - Unit Testing --> test the components in  isolation (writing the testcases for specific part)
  - Integration Testing --> testing the multiple components at a time(menu page & cart page are connected to each other)
  - End to End Testing - e2e testing  --> from user login to logout 


# setting up the libraries for testing
     - Install react Testing library
          - npm i --save-dev @testing-library/react
     - Install jest
          - npm i --save-dev jest
     - Install Babel dependencies
          - npm i -D @babel/core @babel/cli @babel/preset-env
     - Configure Babel
          - create babel.config.js file in root
     - Configure parcel config file to disable babel transpilation
          - create .parcelrc file and copypaste code
     
     - Run testcases
          - npm run test --> calls jest --> will give no testcase found
          - npx jest --init  -->executing jest package
     - Install jsdom library [for jest28 or later versions only]
          - npm i -D jest-environment-jsdom

     - Install @babel/preset-react =>to make JSX work in test cases

     - Include @babel/preset-react inside my babel config

     - Install @testing-library/jest-dom  =>to use DOM functions




