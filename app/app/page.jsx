"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { header } from '../lib/constants';
import Image from 'next/image';

import { useProjectsStore } from '../lib/store';

const Page = () => {
  const router = useRouter();
  const loggedIn = typeof window !== 'undefined' ? localStorage.getItem('loggedIn') : null;

  useEffect(() => {
    if (!loggedIn) {
      router.push('/login');
    }
  }, [loggedIn]);

  const projects = useProjectsStore((state) => state.projects);
  const addProject = useProjectsStore((state) => state.addProject);
  // const editProject = useProjectsStore((state) => state.editProject);
  const setProjects = useProjectsStore((state) => state.setProjects);

  const [newProjectName, setNewProjectName] = useState('');
  const [addingProject, setAddingProject] = useState(false);

  const handleAddProject = () => {
    setAddingProject(true);
  };

  const handleSubmitProject = () => {
    addProject({ name: newProjectName });
    localStorage.setItem('projects', JSON.stringify([...projects, { name: newProjectName }]));
    setNewProjectName('');
    setAddingProject(false);
  };

  useEffect(() => {
    if (projects.length === 0 && typeof window !== 'undefined') {
      const storedProjects = JSON.parse(localStorage.getItem('projects'));
      if (storedProjects) {
        setProjects(storedProjects);
      } else {
        fetch('/api/projects')
          .then((response) => response.json())
          .then((data) => setProjects(data))
          .catch((error) => console.error('Error:', error));
      }
    }
  }, [projects]);

  return (
    <>
    <div className="mx-[24px] flex justify-between">
    <a href="/" className="flex flex-row items-center gap-[10px] py-6">
      <Image
        src={header.icon}
        width={40}
        height={40}
        alt={header.title}
        className="aspect-square object-contain" />
      <h1 className="font-roboto text-[0.7em] font-bold text-[#6f79fa]">{header.title}<span className="text-[485c7e]"></span></h1>
    </a>
  </div>

  <div className='flex flex-col max-w-[600px] mx-5 md:mx-auto'>

    <div>
      <p className='font-graphik text-text text-2xl mb-5'>All Projects</p>
    </div>

    <div className=' bg-slate-100 rounded-md text-xl p-4'>

      {projects.map((project, index) => (
        <div key={index} className='bg-white rounded-md p-3 mb-2 cursor-pointer'>
          <p>{project.name}</p>
        </div>
      ))}

      {addingProject && (
        <form onSubmit={handleSubmitProject} className='bg-white rounded-md p-3 mb-2 w-full flex flex-row'>
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="New project name"
            className='w-full outline-none'
          />
          <button type='submit' className='bg-secondary text-white rounded-md text-lg p-2'>Add</button>
        </form>
      )}

      <div>
        <button onClick={handleAddProject} className='bg-secondary text-white rounded-md text-lg p-2 mt-4'>Create New Project</button>
      </div>
    </div>

  </div>
  </>
  );
};

export default Page;