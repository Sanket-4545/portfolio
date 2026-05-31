'use client';

import { useState, useEffect } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [replies, setReplies] = useState({});
  const [replyText, setReplyText] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch messages
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        fetchMessages();
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReplyChange = (messageId, text) => {
    setReplyText(prev => ({
      ...prev,
      [messageId]: text
    }));
  };

  const handleReplySubmit = async (messageId) => {
    if (!replyText[messageId]?.trim()) return;

    try {
      const res = await fetch('/api/messages/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messageId,
          reply: replyText[messageId]
        })
      });

      if (res.ok) {
        setReplyText(prev => ({
          ...prev,
          [messageId]: ''
        }));
        fetchMessages();
      }
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };

  return (
    <section id="messages" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="text-5xl font-bold mb-4 text-white">Messages</h2>
          <p className="text-slate-400 text-lg">Anyone can send me a message! Feel free to share your thoughts or collaborate with me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Message Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:glow-purple transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="mb-6">
                <label className="block text-slate-300 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-300 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {loading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Messages Display */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Recent Messages</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  No messages yet. Be the first to send one!
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg._id} className="bg-slate-900/50 border border-purple-500/20 rounded-lg p-4 hover:glow-purple transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-white">{msg.name}</p>
                        <p className="text-xs text-slate-400">{msg.email}</p>
                      </div>
                      <span className="text-xs text-slate-500">{new Date(msg.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm">{msg.message}</p>

                    {/* Reply section */}
                    {msg.reply && (
                      <div className="bg-slate-800/50 border-l-2 border-cyan-500 pl-3 py-2 mb-3 rounded">
                        <p className="text-xs text-cyan-400 font-semibold mb-1">My Reply:</p>
                        <p className="text-slate-300 text-sm">{msg.reply}</p>
                      </div>
                    )}

                    {!msg.reply && (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={replyText[msg._id] || ''}
                          onChange={(e) => handleReplyChange(msg._id, e.target.value)}
                          placeholder="Reply to this message..."
                          className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                        />
                        <button
                          onClick={() => handleReplySubmit(msg._id)}
                          disabled={!replyText[msg._id]?.trim()}
                          className="px-3 py-2 bg-cyan-500 text-black font-semibold rounded text-sm hover:bg-cyan-400 transition-all disabled:opacity-50"
                        >
                          Reply
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
