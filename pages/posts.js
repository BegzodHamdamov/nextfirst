import Dashboard from "../containers/Dashboard";
import PostsData from "../containers/Posts/PostsData";
import React from "react";
import { getPosts } from "../api";
const Posts = (props) => {
  console.log(props);
  const { data } = props;

  return (
    <div>
      <Dashboard menu={"posts"}>
        <PostsData />
      </Dashboard>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await getPosts();

  return {
    props: { data: res },
  };
};

export default Posts;
