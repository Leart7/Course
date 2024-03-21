function CourseLesson({ title, children, length }) {
  return (
    <div className="flex items-center justify-between duration-0 hover:cursor-pointer hover:text-blue-600">
      <p>
        <span className="me-3">{children}</span>
        {title}
      </p>
      <p className="rounded-md bg-stone-100 p-1 text-xs  font-medium text-stone-500">
        {length}
      </p>
    </div>
  );
}

export default CourseLesson;
