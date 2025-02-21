import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-red-500 bg-primary-gradient p-1 w-full h-full rounded-xl">
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md ">
          There is not task pending
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
