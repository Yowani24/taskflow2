import { useState, useEffect } from "react";
// import axios from "axios";

const tasks = [
  {
    id: 1,
    name: "Multi Cliente",
    activities: [
      {
        id: 1,
        name: "Implementação de gráficos de demonstrações financeiras",
        percentage: 68,
        user_name: "João da Costa",
        start: "10/04/2023",
        end: "20/04/2023",
        status: "initialized",
        sub_activities: [
          { id: 1, name: "Implementar o HTML", status: "done" },
          {
            id: 2,
            name: "Fazer integração com o backend",
            status: "initialized",
          },
          {
            id: 3,
            name: "Fazer testes funcionas e de usablidade",
            status: "uninitialized",
          },
          { id: 4, name: "Fazer homologação", status: "uninitialized" },
          { id: 5, name: "Implementar o HTML", status: "done" },
          {
            id: 6,
            name: "Fazer integração com o backend",
            status: "initialized",
          },
          {
            id: 7,
            name: "Fazer testes funcionas e de usablidade",
            status: "uninitialized",
          },
          { id: 8, name: "Fazer homologação", status: "uninitialized" },
        ],
      },
      {
        id: 2,
        name: "Implementação de gráficos de demonstrações financeiras. Implementação de gráficos de demonstrações financeiras.",
        percentage: 100,
        user_name: "João da Costa",
        start: "10/04/2023",
        end: "20/04/2023",
        status: "done",
        sub_activities: [
          { id: 1, name: "Implementar o HTML", status: "done" },
          {
            id: 2,
            name: "Fazer integração com o backend",
            status: "initialized",
          },
          {
            id: 3,
            name: "Fazer testes funcionas e de usablidade",
            status: "uninitialized",
          },
          { id: 4, name: "Fazer homologação", status: "uninitialized" },
        ],
      },
      {
        id: 3,
        name: "Implementação de gráficos de demonstrações financeiras. Implementação de gráficos de demonstrações financeiras.",
        percentage: 35,
        user_name: "João da Costa",
        start: "10/04/2023",
        end: "20/04/2023",
        status: "standby",
        sub_activities: [
          { id: 1, name: "Implementar o HTML", status: "done" },
          {
            id: 2,
            name: "Fazer integração com o backend",
            status: "initialized",
          },
          {
            id: 3,
            name: "Fazer testes funcionas e de usablidade",
            status: "uninitialized",
          },
          { id: 4, name: "Fazer homologação", status: "uninitialized" },
        ],
      },
      {
        id: 4,
        name: "Implementação de gráficos de demonstrações financeiras. Implementação de gráficos de demonstrações financeiras.",
        percentage: 92,
        user_name: "João da Costa",
        start: "10/04/2023",
        end: "20/04/2023",
        status: "initialized",
        sub_activities: [
          { id: 1, name: "Implementar o HTML", status: "done" },
          {
            id: 2,
            name: "Fazer integração com o backend",
            status: "initialized",
          },
          {
            id: 3,
            name: "Fazer testes funcionas e de usablidade",
            status: "uninitialized",
          },
          { id: 4, name: "Fazer homologação", status: "uninitialized" },
        ],
      },
      {
        id: 5,
        name: "Implementação de gráficos de demonstrações financeiras. Implementação de gráficos de demonstrações financeiras.",
        percentage: 68,
        user_name: "João da Costa",
        start: "10/04/2023",
        end: "20/04/2023",
        status: "initialized",
        sub_activities: [
          { id: 1, name: "Implementar o HTML", status: "done" },
          {
            id: 2,
            name: "Fazer integração com o backend",
            status: "initialized",
          },
          {
            id: 3,
            name: "Fazer testes funcionas e de usablidade",
            status: "uninitialized",
          },
          { id: 4, name: "Fazer homologação", status: "uninitialized" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Itaú",
    activities: [
      {
        id: 1,
        name: "Implementação de gráficos de demonstrações financeiras. Implementação de gráficos de demonstrações financeiras.",
        percentage: 68,
        user_name: "João da Costa",
        start: "10/04/2023",
        end: "20/04/2023",
        status: "initialized",
        sub_activities: [],
      },
    ],
  },
  {
    id: 3,
    name: "Santamder",
    activities: [],
  },
];

const api_url = "https://taskflowapi2.onrender.com";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [subActivityData, setSubActivityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let [color, setColor] = useState("#ffffff");

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get("api_url/project");
  //     setData(response.data);
  //   } catch (error) {
  //     setError(error);
  //     console.error(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const refetch = () => {
  //   fetchData();
  // };

  const fetchData = async () => {
    setLoading(true);

    try {
      const [projectResponse, subactivityResponse] = await Promise.all([
        axios.get(`${api_url}/project`),
        axios.get(`${api_url}/subactivity`),
      ]);

      setData(projectResponse.data);
      setSubActivityData(subactivityResponse.data);
    } catch (error) {
      setError(error);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  const handleProcessUpdate = async (data, id) => {
    try {
      await axios.patch(`${api_url}/dadoshistorico/${id}`, data[0]);
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCreateProject = async (
    name,
    activity,
    start,
    end,
    user_name,
    handleClose
  ) => {
    try {
      await axios.post(`${api_url}/project`, {
        name,
        activity,
        start,
        end,
        user_name,
      });
      handleClose();
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`${api_url}/project/${projectId}`);
      refetch();
    } catch (error) {
      console.error("Erro ao deletar projeto");
    }
  };

  // const handleDeleteProject = async (projectId) => {
  //   try {
  //     await axios.delete(`api_url/subactivity/${projectId}`);
  //     await axios.delete(`api_url/project/${projectId}`);
  //     refetch();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleCreateSubActivity = async (name, projectId) => {
    try {
      await axios.post(`${api_url}/subactivity`, {
        name,
        projectId,
      });
      refetch();
    } catch (error) {
      console.error("Erro ao criar SubActividade", error);
    }
  };

  const handleDeleteSubActivity = async (subactivityId) => {
    try {
      await axios.delete(`${api_url}/subactivity/${subactivityId}`);
      refetch();
    } catch (error) {
      console.error("Erro ao deletar SubActividade");
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const refetch = () => {
  //   fetchData();
  // };

  return {
    data,
    subActivityData,
    loading,
    error,
    handleCreateProject,
    handleDeleteProject,
    handleCreateSubActivity,
    handleProcessUpdate,
    handleDeleteSubActivity,
    refetch,
    tasks,
  };
};

export default useFetch;
