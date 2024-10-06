import { useQuery } from "react-query";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users1"
  );
  return response.data;
};

const UserList: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery(["users"], fetchUsers, {
    useErrorBoundary: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show error message
  if (isError) {
    return (
      <div>
        Error:{" "}
        {error instanceof Error ? error.message : "An unknown error occurred"}
      </div>
    );
  }

  return (
    <div>
      <ul>
        {data.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id}>
            {user.name}-{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
