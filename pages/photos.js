import Dashboard from "../containers/Dashboard";
import PhotosData from "../containers/Photos/PhotosData";
import React from "react";
import { getPhotos } from "../api";
const Photos = (props) => {
  console.log(props);
  const { data } = props;

  return (
    <div>
      <Dashboard menu={"photos"}>
        <PhotosData />
      </Dashboard>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await getPhotos();

  return {
    props: { data: res },
  };
};

export default Photos;
