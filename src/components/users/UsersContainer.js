import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";
import AddUser from "./AddUser";

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h3>Loading</h3>
  ) : userData.error ? (
    <h3>{userData.error}</h3>
  ) : (
    <div>
      <main className="container">
        <h3>Users List</h3>
        <div>
          <div className="row">
            <div className="col-md-12 pt-3 pb-3">
              <div className="btn btn-sm btn-primary">Add User</div>
            </div>
          </div>
          <table className="table">
            <tbody>
              {userData &&
                userData.users &&
                userData.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
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
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
