# JSON Viewer Project

This project is a dynamic JSON Viewer application designed to help users visualize and interact with JSON data in a clear, tree-like format. The viewer makes it easy to explore complex JSON structures, allowing users to expand and collapse nodes, and view the paths of specific elements.

## Project Overview

The application is built using modern web technologies and provides a clean, intuitive user interface for inspecting JSON data. The viewer supports various data types such as strings, numbers, booleans, arrays, objects, and null values, and ensures smooth navigation through deeply nested structures.

### Key Features:
- **Tree View of JSON Data**: Displays JSON objects and arrays in an expandable tree structure.
- **Copying Paths**: Easily copy the JSON path for any node in the tree.
- **Array & Object Representation**: Visualizes arrays and objects with the number of items they contain.
- **Handling of Various Data Types**: Supports all basic JSON data types, including null, strings, numbers, and booleans.

## Project Structure

The project is organized as follows:

- **.storybook/**: Contains configuration files for Storybook, enabling easy testing and visualization of components in isolation.
- **dist/**: The folder where the production build is generated.
- **public/**: Static assets and the main HTML file for the app.
- **src/**: The source code of the project, divided into key subdirectories:
  - **components/**: Houses all the reusable React components, including the core components of the JSON viewer.
  - **stories/**: Includes Storybook documentation and component examples for development and testing.
  - **style/**: Global styles and theme definitions.

## Technologies Used

- **React**: The core framework used to build the UI components.
- **TypeScript**: Ensures type safety and improves development efficiency.
- **Material UI**: Provides pre-built components and styling for the interface.
- **Storybook**: A tool for developing UI components in isolation and documenting them interactively.
- **Vite**: A fast build tool used for development and production builds.

## How to Run the Project

1. **Install Dependencies**:
```bash
  npm install
```
2. **Run the Development Server**:
  ```bash
   npm run dev
  ```

3. **Build for Production:**:
  ```bash
   npm run build
  ```

4. **Run Storybook:**:
  ```bash
   npm run storybook
  ```

  
## Project Demo Link

- **Project Demo**: Click by here .
- **Storybook**: Click by here .