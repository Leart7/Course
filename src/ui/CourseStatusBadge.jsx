function CourseStatusBadge({ status }) {
  let backgroundColorClass;

  switch (status) {
    case "Free":
      backgroundColorClass = "bg-green-400";
      break;
    case "Paid":
      backgroundColorClass = "bg-blue-400";
      break;
    case "Subscription":
      backgroundColorClass = "bg-purple-400";
      break;
    case "Locked":
      backgroundColorClass = "bg-red-400";
      break;
    default:
      backgroundColorClass = "bg-gray-200";
  }

  return (
    <div
      className={`absolute -right-2 -top-3 z-10 rounded-md ${backgroundColorClass} p-1`}
    >
      <div className="px-5 py-1 text-sm font-bold text-white">{status}</div>
    </div>
  );
}

export default CourseStatusBadge;
