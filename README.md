# Dashboard Application

A sleek and responsive dashboard built with **Next.js** and styled using **Tailwind CSS**. The dashboard features key metrics, data visualizations, and a user-friendly interface across four sections: **Home**, **Analytics**, **Profile**, and **Settings**.

## Features
- **Home**: Displays key metrics like Total Users, Revenue, and Active Sessions.
- **Analytics**: Interactive data visualizations with Bar, Pie, and Line charts.
- **Profile**: Displays user details and role information.
- **Settings**: Allows users to adjust preferences like theme and notifications.

## Technologies Used
- **Next.js**: Framework for building the application.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Recharts**: Data visualization library for creating charts.

## Design Approach:
The dashboard was designed to offer a clean, modern, and intuitive user interface (UI) while maintaining a responsive layout for a seamless experience across devices. I prioritized simplicity and clarity, using a cohesive color scheme with shades of blue, green, purple, and gray to highlight important metrics and visual elements. The left sidebar navigation ensures easy access to the main sections of the dashboard: Home, Analytics, Profile, and Settings.

Each section was designed with user-friendliness in mind, with the content organized clearly and concisely. The Home page focuses on key business metrics, the Analytics page displays interactive charts, the Profile page provides personalized user details, and the Settings page allows users to customize their preferences. The layout adapts fluidly to different screen sizes, providing an optimal experience on both desktop and mobile.

## Implementation Approach:
Using Next.js as the framework, I built a single-page application with a responsive design that automatically adjusts to various screen sizes. Tailwind CSS was used for styling, allowing for quick customization and maintaining a consistent look throughout the app.

### Key Features:

#### Home Page:
- Displays key metrics like Total Users, Revenue, and Active Sessions.
- Each metric is presented in an easily readable card format with hover effects for interaction.
- The layout is grid-based for a clean presentation of information.

#### Analytics Page:
- Features three types of charts using Recharts:
  - **Bar Chart**: Shows monthly users and revenue, providing insight into business performance.
  - **Pie Chart**: Visualizes revenue distribution by category (e.g., Electronics, Fashion, Home).
  - **Line Chart**: Tracks active sessions throughout the week, helping users monitor user activity.
- The page uses `ResponsiveContainer` to ensure the charts resize correctly across devices.

#### Profile Page:
- Displays the user’s details in a neat, organized grid layout.
- Sections for email and role are clearly labeled, with a clean background to emphasize the information.

#### Settings Page:
- Provides customization options such as theme and notification settings.
- The layout is simple yet effective, with toggle-able settings clearly represented.

## Challenges:
- Ensuring responsive design was one of the main challenges, particularly making sure the layout and charts resized smoothly on both mobile and desktop.
- Integrating the charts (Bar, Pie, and Line) from Recharts and ensuring they displayed correctly on various screen sizes, while maintaining legibility, took additional effort.
- Styling the left sidebar for the mobile layout was challenging but crucial, and I utilized Tailwind’s utility-first approach to ensure the transition from a desktop sidebar to a mobile-friendly bottom navigation bar was smooth and functional.

Despite these challenges, I was able to create a visually appealing, functional, and responsive dashboard with clear data visualizations, making it both user-friendly and informative.