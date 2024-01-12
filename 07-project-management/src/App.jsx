import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProject((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProject((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProject((prevProject) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: [...prevProject.projects, newProject],
      };
    });
  };

  const handleSelectProject = (id) => {
    setProject((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProject((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: prevProject.projects.filter(
          (project) => project.id !== prevProject.selectedProjectId
        ),
      };
    });
  };

  const handleAddTask = (text) => {
    setProject((prevProject) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProject.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevProject,
        tasks: [...prevProject.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProject((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  const selectedProject = project.projects.find(
    (projct) => projct.id === project.selectedProjectId
  );
  let content = (
    <SelectedProject
      projects={selectedProject}
      tasks={project.tasks}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );
  if (project.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (project.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={project.projects}
        onAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={project.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
