'use client';

import { useState } from 'react';

export default function AnalyzePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    assetType: '',
    assetDescription: '',
    exchangeDescription: '',
    contactEmail: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    setStep(3);
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Запрос на анализ отправлен</h1>
          <p className="text-gray-600 mb-8">
            Спасибо! Мы получили вашу заявку. Наш ИИ анализирует детали обмена и скоро пришлет результаты на {formData.contactEmail}.
          </p>
          <button
            onClick={() => setStep(1)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between mb-8">
            {[1, 2].map((i) => (
              <div key={i} className="flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${step >= i ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {i}
                </div>
                <div className={`text-sm text-center ${step >= i ? 'text-primary font-medium' : 'text-gray-500'}`}>
                  {i === 1 ? 'Детали обмена' : 'Контактная информация'}
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-6 text-center">
            {step === 1 ? 'Детали обмена' : 'Контактная информация'}
          </h1>

          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label htmlFor="assetType" className="block text-sm font-medium text-gray-700 mb-1">
                    Тип цифрового актива
                  </label>
                  <select
                    id="assetType"
                    name="assetType"
                    value={formData.assetType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Выберите тип актива</option>
                    <option value="code">Исходный код</option>
                    <option value="design">Дизайн</option>
                    <option value="3d">3D-модели</option>
                    <option value="music">Музыка</option>
                    <option value="text">Тексты</option>
                    <option value="template">Шаблоны</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="assetDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Опишите актив, который вы обмениваете
                  </label>
                  <textarea
                    id="assetDescription"
                    name="assetDescription"
                    value={formData.assetDescription}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Подробно опишите, что вы отдаёте в обмен"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="exchangeDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Что вы получаете взамен?
                  </label>
                  <textarea
                    id="exchangeDescription"
                    name="exchangeDescription"
                    value={formData.exchangeDescription}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Подробно опишите, что вы получаете в обмен"
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваш email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@email.com"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    На этот адрес мы отправим результаты анализа
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Назад
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 2 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="ml-auto px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                  disabled={!formData.assetType || !formData.assetDescription || !formData.exchangeDescription}
                >
                  Продолжить
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                  disabled={!formData.contactEmail}
                >
                  Отправить на анализ
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
