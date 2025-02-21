import { useAppSelector } from "@/redux/hook";
import AddTodoModal, { Priority } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { useState } from "react";
// import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState<Priority>("high");
  // const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  console.log(priority);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-red-500 bg-primary-gradient p-1 w-full h-full rounded-xl">
        {todos?.length ? (
          <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
            {todos?.map((item) => (
              <TodoCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md ">
            There is not task pending
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
