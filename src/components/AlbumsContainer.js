import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "../redux";

function AlbumsContainer({ albumData, fetchAlbums }) {
  useEffect(() => {
    fetchAlbums();
  }, []);
  return albumData.loading ? (
    <h3>Loading</h3>
  ) : albumData.error ? (
    <h3>{albumData.error}</h3>
  ) : (
    <div>
      <main className="container">
        <h3>Albums List</h3>
        <div>
          <table className="table">
            {albumData &&
              albumData.albums &&
              albumData.albums.map((album) => (
                <tr>
                  <td>{album.id}</td>
                  <td>{album.userId}</td>
                  <td>{album.title}</td>
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
    albumData: state.album,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer);
