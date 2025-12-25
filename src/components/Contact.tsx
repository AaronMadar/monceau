import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://monceaudavidconseil.com/api/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        alert('Merci pour votre message. Nous vous contacterons dans les plus brefs délais.');
        setFormData({
          civilite: '',
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          entreprise: '',
          domaine: '',
          message: ''
        });
      } else {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };
  

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 (0)1 XX XX XX XX'],
      subtext: 'Lundi - Vendredi : 9h00 - 18h00'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@monceaudavid.fr'],
      subtext: 'Réponse sous 24h ouvrées'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['75008 Paris', '47 Bd de Courcelles'],
      subtext: 'Sur rendez-vous uniquement'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven : 9h00 - 18h00', 'Sam : 9h00 - 13h00'],
      subtext: 'Fermé le dimanche'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
            Contactez-Nous
          </h2>
          <p className="text-xl text-anthracite-600 font-sans max-w-3xl mx-auto leading-relaxed">
            Prenons rendez-vous pour étudier ensemble vos projets et définir les solutions 
            les plus adaptées à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-6">
              Demande de Contact
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="civilite" className="block text-sm font-medium text-anthracite-700 mb-2">
                    Civilité *
                  </label>
                  <select
                    id="civilite"
                    name="civilite"
                    value={formData.civilite}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                  >
                    <option value="">Sélectionner</option>
                    <option value="M.">M.</option>
                    <option value="Mme">Mme</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-anthracite-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-anthracite-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-anthracite-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                  />
                </div>
                
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-anthracite-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="entreprise" className="block text-sm font-medium text-anthracite-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                />
              </div>

              <div>
                <label htmlFor="domaine" className="block text-sm font-medium text-anthracite-700 mb-2">
                  Domaine d'intérêt
                </label>
                <select
                  id="domaine"
                  name="domaine"
                  value={formData.domaine}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
                >
                  <option value="">Sélectionner un domaine</option>
                  <option value="assurance">Assurance & Prévoyance</option>
                  <option value="gestion-actifs">Gestion d'Actifs</option>
                  <option value="developpement-durable">Développement Durable</option>
                  <option value="conseil-global">Conseil Global</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-anthracite-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans resize-vertical"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 transform hover:scale-105"
                >
                  Envoyer la demande
                </button>
                <p className="text-sm text-anthracite-500 mt-3">
                  * Champs obligatoires
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-6">
                Informations de Contact
              </h3>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Notre équipe est à votre disposition pour répondre à vos questions 
                et vous accompagner dans vos projets. N'hésitez pas à nous contacter.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg mb-4">
                    <info.icon className="w-5 h-5 text-primary-900" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-primary-900 mb-2">
                    {info.title}
                  </h4>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-anthracite-600 font-sans font-medium">
                        {detail}
                      </p>
                    ))}
                    <p className="text-anthracite-500 font-sans text-sm">
                      {info.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;