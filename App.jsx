// App.jsx
import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', role: '', interests: '' });
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  const generateBio = async () => {
    setLoading(true);
    // Fake AI Output – replace with API later
    const { name, role, interests } = form;
    const output = `Hi, I'm ${name}, a passionate ${role} who loves ${interests}. Always eager to learn and contribute.`;
    await new Promise((r) => setTimeout(r, 1000)); // simulate delay
    setBio(output);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">✨ AI Bio Generator</h1>

        <input
          type="text"
          placeholder="Name"
          className="input"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role (e.g. Developer, Designer)"
          className="input"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Interests (e.g. startups, AI)"
          className="input"
          value={form.interests}
          onChange={(e) => setForm({ ...form, interests: e.target.value })}
        />

        <button
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
          onClick={generateBio}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Bio'}
        </button>

        {bio && (
          <div className="mt-6 bg-gray-50 p-4 rounded-xl border">
            <p className="text-gray-700">{bio}</p>
            <button
              onClick={() => navigator.clipboard.writeText(bio)}
              className="mt-2 text-sm text-indigo-500 hover:underline"
            >
              📋 Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
