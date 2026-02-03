import React, { useState } from 'react';

const CTASection = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.target);
    // Add your Web3Forms Access Key here
    formData.append("access_key", "999325af-5d33-4216-9b7e-4a4ee857fa4a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-blue-800 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Center?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Join the vendors at UiTM and UPSI who have already transformed their operations.
        </p>

        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input type="hidden" name="subject" value="New Qylex Demo Request" />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Organization Name</label>
              <input name="organization" type="text" required className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-600" placeholder="e.g. UiTM Segamat" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
              <input name="contact" type="tel" required className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-600" placeholder="+60 12-345 6789" />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'sent'}
              className={`w-full font-bold py-3 rounded-lg text-white transition-all
                ${status === 'sent' ? 'bg-green-600' : 'bg-slate-900 hover:bg-slate-800'}
                ${status === 'submitting' ? 'opacity-50' : ''}`}
            >
              {status === 'idle' && 'Request Demo & Proposal'}
              {status === 'submitting' && 'Sending...'}
              {status === 'sent' && 'Sent ✓'}
              {status === 'error' && 'Error ❌'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;