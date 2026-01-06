import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Contact Manager</h1>
          <p className="text-xl text-gray-600">Manage your contacts easily and efficiently</p>
        </div>
        <div className="flex justify-center">
          <Image 
            src="/contact.jpg" 
            alt="Contact manager" 
            width={500} 
            height={400} 
            className="rounded-lg shadow-2xl"
          />
        </div>
        <p className="text-xl text-gray-600 text-center py-8">Start managing today 😊 </p>
      </div>
    </div>
  );
}