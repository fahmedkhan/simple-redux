import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../redux";

function PhotosContainer({ photoData, fetchPhotos }) {
  useEffect(() => {
    fetchPhotos();
  }, []);
  return photoData.loading ? (
    <h3>Loading</h3>
  ) : photoData.error ? (
    <h3>{photoData.error}</h3>
  ) : (
    <div>
      <main className="container">
        <h3>Photos List</h3>
        <div>
          <table className="table">
            {photoData &&
              photoData.photos &&
              photoData.photos.map((photo) => (
                <tr>
                  <td>{photo.id}</td>
                  <td>{photo.albumId}</td>
                  <td>
                    <img src={photo.url} className="img-thumbnail" alt="" />
                  </td>
                  <td>
                    <img
                      src={photo.thumbnailUrl}
                      className="img-thumbnail"
                      alt=""
                    />
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">Edit</button>{" "}
                    <button className="btn btn-sm btn-primary">Delete</button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    photoData: state.photo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
