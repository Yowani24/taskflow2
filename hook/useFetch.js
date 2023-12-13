import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

// const api_url = "http://localhost:3000";

const api_url = "https://taskflowapi2.onrender.com";

const useFetch = () => {
  const { data, isLoading, refetch } = useQuery("project", async () => {
    return await axios
      .get(`${api_url}/project`)
      .then((response) => response.data);
  });

  const handleCreateProject = useMutation({
    mutationFn: async (values) => {
      return await axios
        .post(`${api_url}/project`, values)
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      refetch();
      // console.log({ data });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleDeleteProject = useMutation({
    mutationFn: async (projectId) => {
      return await axios.delete(`${api_url}/project/${projectId}`);
    },
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  //=================================ACTIVITY===============================================

  const handleCreateActivity = useMutation({
    mutationFn: async ({ start, end, ...values }) => {
      return await axios.post(`${api_url}/activity`, { ...values, start, end });
    },
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleUpdateActivity = useMutation({
    mutationFn: async ({ activityId, percentage, status }) => {
      // console.log(activityId, "-", percentage);
      return await axios
        .patch(`${api_url}/activity/${activityId}`, {
          percentage,
          status,
        })
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      refetch();
      // console.log({ data });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleDeleteActivity = useMutation({
    mutationFn: async (activityId) => {
      return await axios.delete(`${api_url}/activity/${activityId}`);
    },
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  //=================================SUBACTIVITY===============================================

  const handleCreateSubActivity = useMutation({
    mutationFn: async (values) => {
      return await axios.post(`${api_url}/subactivity`, values);
    },
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleUpdateSubActivity = useMutation({
    mutationFn: async ({ subActivityId, status }) => {
      return await axios
        .patch(`${api_url}/subactivity/${subActivityId}`, {
          status,
        })
        .then((response) => response.data);
    },
    onSuccess: (data) => {
      refetch();
      console.log({ data });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleDeleteSubActivity = useMutation({
    mutationFn: async (subActivityId) => {
      return await axios.delete(`${api_url}/subactivity/${subActivityId}`);
    },
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    data,
    isLoading,
    handleCreateProject,
    handleDeleteProject,
    handleCreateActivity,
    handleDeleteActivity,
    handleCreateSubActivity,
    handleDeleteSubActivity,
    handleUpdateSubActivity,
    handleUpdateActivity,
    refetch,
  };
};

export default useFetch;
