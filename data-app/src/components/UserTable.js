"use client";

export default function UserTable({ users, editUser, deleteUser, page }) {
  if (users.length === 0) {
    return <p className="empty">No Users Found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{(page - 1) * 5 + index + 1}</td>

            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>{user.city}</td>

            <td>
              <div className="actions">
                <button className="edit-btn" onClick={() => editUser(user)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}   