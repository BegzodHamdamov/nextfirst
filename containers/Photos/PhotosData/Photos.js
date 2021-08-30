import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../../../redux/actions";
import PhotosWrapper from "./PhotosWrapper";
import { Fade } from "react-awesome-reveal";

const data = [
  { img: "" },
  { albumId: "" },
  { title: "" },
  { thumbnailUrl: "" },
];
const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setPhotos(dispatch);
  }, []);

  const data = useSelector((state) => state.photos);

  return (
    <PhotosWrapper>
      <Fade>
        <h1 className="mb-4">Photos</h1>

        {data.map((v) => (
          <div className="row">
            <div className="col-sm-6">
              <div className="p-4 rounded shadow">
                <div>
                  <img src={v.url} alt="" className="img" />
                </div>
                {v.albumId}
                {v.title}
                {v.thumbnailUrl}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-4 rounded shadow">
                <div>
                  <img src={v.url} alt="" />
                </div>
                {v.albumId}
                {v.title}
                {v.thumbnailUrl}
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </PhotosWrapper>
  );
};

export default Photos;
