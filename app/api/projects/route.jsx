import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = [
      {
        id: 1,
        name: "Project A",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tasks: [
          { id: 1, name: "Task 1", status: "To Do", assignee: "John Doe" },
          { id: 2, name: "Task 2", status: "In Progress", assignee: "Jane Smith" },
          // Add more tasks as needed
        ],
        teamMembers: ["John Doe", "Jane Smith", "Alice Johnson"],
      },
      {
        id: 2,
        name: "Project B",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tasks: [
          { id: 3, name: "Task 3", status: "Done", assignee: "Alice Johnson" },
          { id: 4, name: "Task 4", status: "To Do", assignee: "John Doe" },
        ],
        teamMembers: ["Alice Johnson", "John Doe", "Bob Brown"],
      },
      {
        id: 3,
        name: "Project C",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tasks: [
          { id: 5, name: "Task 5", status: "In Progress", assignee: "Bob Brown" },
          { id: 6, name: "Task 6", status: "To Do", assignee: "Jane Smith" },
          // Add more tasks as needed
        ],
        teamMembers: ["Bob Brown", "Jane Smith", "Alice Johnson"],
      },
      {
        id: 4,
        name: "Project D",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tasks: [
          { id: 7, name: "Task 7", status: "Done", assignee: "John Doe" },
          { id: 8, name: "Task 8", status: "In Progress", assignee: "Alice Johnson" },
          // Add more tasks as needed
        ],
        teamMembers: ["John Doe", "Alice Johnson", "Bob Brown"],
      },
      // Add more projects as needed
    ];

    // Simulate a delay to mimic network latency
    return NextResponse.json(projects, { delay: 1000, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}