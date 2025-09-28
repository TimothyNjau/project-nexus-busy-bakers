# PROJECT-NEXUS-BUSY-BAKERS

This is a modern, full-featured e-commerce web application for a bakery, built as part of the ALX Pro-FrontEnd track. The app demonstrates advanced React, Redux, and TypeScript skills, and is designed for a professional, mobile-first user experience.

## Project Overview

Busy Bakers allows customers to browse a dynamic catalog of bakery products, filter and sort them by category and price, and add items to a shopping cart for checkout. The project emphasizes clean architecture, maintainable code, and best practices in TypeScript and state management.

## Key Features

- **Category Filtering:**

  - Users can filter products by selecting from categories such as Classic, Seasonal, Celebration, and Exotic.
  - The filter UI uses interactive pill components, and the selected filter is managed globally via Redux for consistent state across the app.

- **Price Sorting:**

  - Products can be sorted by price in ascending or descending order, with a clear button to reset to the default (unsorted) view.
  - Sorting is managed in Redux, and the UI updates instantly as users toggle sort options.

- **Multi-Criteria Filters:**

  - Filtering and sorting can be combined, allowing users to view, for example, only "Seasonal" products sorted by lowest price.
  - The Redux store ensures that all filter and sort criteria are applied together for precise product discovery.

- **API Data Integration:**

  - Product data is loaded dynamically from a JSON API (simulated with a local JSON file), making it easy to update or expand the catalog.
  - The app fetches and stores product data in Redux, enabling efficient state management and reactivity.

- **Shopping Cart & Checkout:**

  - Users can add products to a cart directly from the catalog or product detail pages.
  - The cart state is managed in Redux, and the cart icon in the header displays a live count of items.
  - The checkout page summarizes cart contents and total price, ready for order processing.

- **Mobile-First & Responsive Design:**
  - Built with Tailwind CSS, the UI adapts seamlessly to all device sizes, ensuring a great experience on mobile, tablet, and desktop.

## TypeScript Best Practices

- **Strong Typing:**

  - All components, Redux slices, and state are strictly typed using TypeScript interfaces and types.
  - Product, cart, and filter structures are defined in a central `interfaces` file for consistency.

- **Type-Safe Redux:**

  - Redux store, actions, and selectors use explicit types, reducing bugs and improving code completion in editors.
  - The `RootState` and `AppDispatch` types are exported for use throughout the app.

- **Component Props:**

  - All React component props are typed, making components reusable and self-documenting.

- **Error Prevention:**
  - TypeScript's strictness helps catch errors at compile time, leading to more robust and maintainable code.

## Project Structure

- `components/` — Reusable UI components (e.g., ProductCard, FilterSection, Header, Footer)
- `pages/` — Next.js pages for routing (e.g., Home, Shop, Product, Checkout, Login)
- `store/` — Redux slices for products, cart, filter, and sort state
- `public/assets/data/products.json` — Product data source
- `interfaces/` — TypeScript interfaces for app data

## Process

1. Created the GitHub repository: **project-nexus-busy-bakers**
2. Bootstrapped the project with `npx create-next-app@latest`, using _TailwindCSS_ and _TypeScript_ for a robust, scalable foundation.
3. Designed and implemented the product catalog, filtering, sorting, and cart features using Redux Toolkit and TypeScript.
4. Focused on clean, maintainable code and a professional, responsive UI.
