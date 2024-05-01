import { NextResponse } from "next/server";

export async function GET() {
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
          // Add more tasks as needed
        ],
        teamMembers: ["John Doe", "Alice Johnson", "Bob Brown"],
      },
      // Add more projects as needed
    ];
  
    // Simulate a delay to mimic network latency
    return NextResponse.json(projects, { delay: 1000 });
  }