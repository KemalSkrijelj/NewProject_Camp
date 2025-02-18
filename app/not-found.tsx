export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mt-2">We cant find this page</p>
      <a href="/" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Back to Dashboard
      </a>
    </div>
  );
}
