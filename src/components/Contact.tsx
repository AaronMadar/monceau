import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, X } from 'lucide-react';
import emailjs from '@emailjs/browser'; // 1. Import de la bibliothèque

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    domaine: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ open: false, message: '', type: 'success' });

  useEffect(() => {
    if (snackbar.open) {
      const timer = setTimeout(() => {
        setSnackbar({ ...snackbar, open: false });
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 2. Nouvelle fonction de soumission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    const SERVICE_ID = 'service_766ihni'; 
    const TEMPLATE_ID = 'template_das329o';
    const PUBLIC_KEY = 'Gvh9T7yfBHg8oGSOc';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(() => {
        setSnackbar({
          open: true,
          message: 'Merci pour votre message. Nous vous contacterons dans les plus brefs délais.',
          type: 'success'
        });
        setFormData({
          civilite: '', nom: '', prenom: '', email: '',
          telephone: '', entreprise: '', domaine: '', message: ''
        });
      })
      .catch((error) => {
        console.error('Erreur EmailJS:', error);
        setSnackbar({
          open: true,
          message: 'Une erreur est survenue. Veuillez réessayer plus tard.',
          type: 'error'
        });
      });
  };

  const contactInfo = [
    { icon: Phone, title: 'Téléphone', details: ['+33 6 51 08 68 71'], subtext: 'Du lundi au vendredi' },
    { icon: Mail, title: 'Email', details: ['contact@monceaudavidconseil.com'], subtext: 'Réponse sous 24h ouvrées' },
    { icon: MapPin, title: 'Adresse', details: ['75008 Paris', '47 Boulevard de Courcelles'], subtext: 'Sur rendez-vous uniquement' },
    { icon: Clock, title: 'Horaires', details: [], subtext: (
        <>
          Lundi : 9:30 - 19:30<br /> Mardi : 9:30 - 19:30<br /> Mercredi : 9:30 - 19:30<br />
          Jeudi : 9:30 - 19:30<br /> Vendredi : 9:30 - 15:00<br /> Samedi : Fermé<br /> Dimanche : Fermé
        </>
      )
    }
  ];

  return (
    <>
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">Contactez-Nous</h2>
            <p className="text-xl text-anthracite-600 font-sans max-w-3xl mx-auto leading-relaxed">
              Prenons rendez-vous pour étudier ensemble vos projets et définir les solutions les plus adaptées à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-6">Demande de Contact</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Suppression des champs Netlify inutiles */}
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="civilite" className="block text-sm font-medium text-anthracite-700 mb-2">Civilité *</label>
                    <select id="civilite" name="civilite" value={formData.civilite} onChange={handleChange} required
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans">
                      <option value="">Sélectionner</option>
                      <option value="M.">M.</option>
                      <option value="Mme">Mme</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-anthracite-700 mb-2">Nom *</label>
                    <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans" />
                  </div>

                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-anthracite-700 mb-2">Prénom *</label>
                    <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-anthracite-700 mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans" />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-anthracite-700 mb-2">Téléphone</label>
                    <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans" />
                  </div>
                </div>

                <div>
                  <label htmlFor="entreprise" className="block text-sm font-medium text-anthracite-700 mb-2">Entreprise</label>
                  <input type="text" id="entreprise" name="entreprise" value={formData.entreprise} onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans" />
                </div>

                <div>
                  <label htmlFor="domaine" className="block text-sm font-medium text-anthracite-700 mb-2">Domaine d'intérêt</label>
                  <select id="domaine" name="domaine" value={formData.domaine} onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans">
                    <option value="">Sélectionner un domaine</option>
                    <option value="assurance">Assurance & Prévoyance</option>
                    <option value="gestion-actifs">Gestion d'Actifs</option>
                    <option value="developpement-durable">Développement Durable</option>
                    <option value="conseil-global">Conseil Global</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-anthracite-700 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                    placeholder="Décrivez brièvement votre projet ou vos besoins..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans resize-vertical"></textarea>
                </div>

                <div className="text-center">
                  <button type="submit"
                    className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 transform hover:scale-105">
                    Envoyer la demande
                  </button>
                  <p className="text-sm text-anthracite-500 mt-3">* Champs obligatoires</p>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-6">Informations de Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg mb-4">
                      <info.icon className="w-5 h-5 text-primary-900" />
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-primary-900 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-anthracite-600 font-sans font-medium">{detail}</p>
                      ))}
                      <p className="text-anthracite-500 font-sans text-sm whitespace-pre-line">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {snackbar.open && (
        <div className="fixed inset-x-0 bottom-4 z-50 px-4">
          <div className="max-w-md mx-auto animate-fade-in-up">
            <div className={`shadow-2xl rounded-lg flex items-center justify-between p-4 text-white ${snackbar.type === 'success' ? 'bg-primary-900' : 'bg-red-600'}`}>
              <p className="text-sm font-medium">{snackbar.message}</p>
              <button onClick={() => setSnackbar({ ...snackbar, open: false })} className="ml-4 text-white hover:opacity-80 transition">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.4s ease-out forwards; }
      `}</style>
    </>
  );
};

export default Contact;