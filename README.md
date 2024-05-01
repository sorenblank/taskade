# Taskade ( Under Development A lot )

Taskade is a simple project and task manager. Perfect for remote teams. Unleash your team productivity with projects task list and collaboration tools. I am trying to make it using NextJs, TailwindCSS, Ant Design and other stuff.

![Taskade](https://github.com/sorenblank/taskade/blob/main/public/og-image.png "This site looks cool doesn't it?")

## Overview

Taskade is a simple project and task manager. Perfect for remote teams. Unleash your team productivity with projects task list and collaboration tools. It should be nice for collaboration

### Login Credentials

Use the credentials below to login to the app:

```
Email: admin@gmail.com
Password: admin
```


### Project Structure

The project follows a standard Next.js application structure with a few custom additions:

```
.
├── app                     # Application core files
│   ├── api                 # Api routes
│   │   └── ... 
│   ├── app                 # Original Application
│   │   └── ... 
│   ├── components          # Reusable UI components
│   │   └── ... 
│   ├── lib                 # Utility functions and constants
│   │   └── ... 
│   ├── pages               # Page components for routing
│   │   └── ... 
│   ├── favicon.ico
│   ├── globals.css
│   ├── page.jsx
│   └── layout.jsx          # Landing Page layouts and routing
│
├── public                  # Static assets
├── LICENSE
└── README.md
```
### Dependencies ( So far I mean )

Taskade's functionality is powered by:

- **@ant-design/nextjs-registry**: Ant Design's Next.js registry.
- **@tanstack/react-query**: Fetch, cache and update data in your React and React Native applications.
- **antd**: A UI library that contains a set of high-quality components and demos for building rich, interactive user interfaces.
- **next**: The React framework for production.
- **react** & **react-dom**: Libraries for building user interfaces.
- **scroll-lock**: Prevent scrolling on the body element.
- **zustand**: A small, fast and scaleable bearbones state-management solution.

For development, we use:

- **eslint**: The pluggable linting utility for JavaScript and JSX.
- **eslint-config-next**: ESLint configuration used by Next.js.
- **postcss**: A tool for transforming CSS with JavaScript.
- **tailwindcss**: A utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository.
2. Install project dependencies with `npm install`.
3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application in action.


## Editing

To make changes to the application:

- Edit page layouts in `app/layout.jsx`.
- Modify or create new components within the `app/components/` directory.
- Add or update styles in `app/globals.css`.
- Check `app/app/` for the application.
- All the mock API is in `app/api/` directory.
- States are in `app/lib/store`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [TailwindCSS Documentation](https://tailwindcss.com/docs) - Learn how to style your app efficiently.
- [Ant Design Documentation](https://ant.design/docs/react/introduce) - Learn Ant Design.

## Deployment

Deploying your Next.js app is straightforward with the Vercel Platform, optimized for Next.js projects.

- [Vercel Deployment](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - Deploy with zero configuration.

## Contributing

We welcome contributions from the community. Here's how you can contribute:

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/sorenblank/taskade/blob/main/LICENSE) for more information.