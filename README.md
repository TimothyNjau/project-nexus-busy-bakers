# PROJECT-NEXUS-BUSY-BAKERS

This project is a modern, full-featured e-commerce website for a bakery, built as part of the ALX Pro-FrontEnd track. It demonstrates advanced React, Redux, and TypeScript skills, and is designed for a professional, mobile-first user experience. Customers can browse, filter, and order bakery products online.

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

1. **Repository Creation:**

- Set up the GitHub repository (**project-nexus-busy-bakers**) to enable version control and collaboration.

2. **Project Bootstrapping:**

- Used `npx create-next-app@latest` to scaffold a Next.js project, ensuring a solid React foundation.
- Integrated _TailwindCSS_ for rapid, utility-first styling and _TypeScript_ for type safety and maintainability.

3. **Product Catalog & Data Integration:**

- Created a structured JSON file to simulate a product API, making it easy to update and expand the bakery's offerings.
- Fetched product data on the client side and loaded it into the Redux store for global state management.

4. **Filtering & Sorting Implementation:**

- Built category filtering using interactive pill components, with filter state managed in Redux for consistency across the app.
- Implemented price sorting (ascending/descending) and a clear sort option, all managed via Redux Toolkit.
- Enabled multi-criteria filtering by combining category and price sort states, allowing users to refine product results.

5. **Shopping Cart & Checkout:**

- Developed a Redux-powered cart system, allowing users to add products from the catalog or product detail pages.
- Displayed a live cart item count in the header and provided a checkout page summarizing the order.

6. **TypeScript Best Practices:**

- Defined interfaces for all major data structures (products, cart items, Redux state) to ensure type safety.
- Typed all component props and Redux actions/selectors, reducing runtime errors and improving code clarity.

7. **UI/UX & Responsiveness:**

- Used Tailwind CSS to create a clean, modern, and fully responsive design that works seamlessly on all devices.
- Focused on accessibility and usability, ensuring intuitive navigation and clear feedback for all user actions.
