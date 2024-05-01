import { create } from 'zustand';

export const useStore = create((set) => ({
  loggedIn: false,
  login: () => {
    set({ loggedIn: true });
    localStorage.setItem('loggedIn', 'true');
  },
}));


export const useProjectsStore = create((set) => ({
    projects: [],
    setProjects: (projects) => set({ projects }),
    addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
    editProject: (editedProject) => set((state) => ({
      projects: state.projects.map((project) =>
        project.id === editedProject.id ? editedProject : project
      ),
    })),
  }));