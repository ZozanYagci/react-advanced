import { Outlet } from "react-router";

export default function CourseLayout() {
  return (
    <div id="course-layout">
      <h1>Course List</h1>
      <p>
       Lorem ipsum dolor sit amet, ....
      </p>
      <Outlet/>
    </div>
  );
}
