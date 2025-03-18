'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    roles: '',
    applyLink: ''
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/jobs');
      }
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Post New Job</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Job Title</label>
          <input
            type="text"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Job Description</label>
          <textarea
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Job Roles</label>
          <input
            type="text"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={formData.roles}
            onChange={(e) => setFormData({ ...formData, roles: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Apply Link</label>
          <input
            type="url"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={formData.applyLink}
            onChange={(e) => setFormData({ ...formData, applyLink: e.target.value })}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
