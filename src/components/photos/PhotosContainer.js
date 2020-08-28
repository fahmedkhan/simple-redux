import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../../redux";

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
          <div className="row">
            <div className="col-md-12 pt-3 pb-3">
              <div className="btn btn-sm btn-primary">Add Photo</div>
            </div>
          </div>
          <table className="table">
            <tbody>
              {photoData &&
                photoData.photos &&
                photoData.photos.map((photo) => (
                  <tr key={photo.id}>
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
                      <button className="btn btn-sm btn-primary">Detail</button>{" "}
                      <button className="btn btn-sm btn-primary">Edit</button>{" "}
                      <button className="btn btn-sm btn-primary">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
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
